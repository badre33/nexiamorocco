type LeadPayload = {
  firstName: string;
  lastName: string;
  email?: string;
  company?: string;
  countryCode?: string;
  phone?: string;
  service?: string;
  message: string;
};

const text = (value: unknown, max: number) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

const escapeHtml = (value: string) => value
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

function isAllowedOrigin(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return false;
  try {
    const hostname = new URL(origin).hostname;
    return hostname === "nexiamorocco.com" ||
      hostname === "www.nexiamorocco.com" ||
      hostname === "nexiamorocco.ma" ||
      hostname === "www.nexiamorocco.ma" ||
      hostname === "localhost" ||
      hostname.endsWith(".netlify.app");
  } catch {
    return false;
  }
}

async function sendEmail(apiKey: string, payload: Record<string, unknown>) {
  return fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
}

export default async (request: Request) => {
  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405, headers: { Allow: "POST" } });
  }
  if (!isAllowedOrigin(request)) {
    return Response.json({ error: "Forbidden" }, { status: 403 });
  }

  let input: Record<string, unknown>;
  try {
    input = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const lead: LeadPayload = {
    firstName: text(input.firstName, 80),
    lastName: text(input.lastName, 80),
    email: text(input.email, 160),
    company: text(input.company, 160),
    countryCode: text(input.countryCode, 8),
    phone: text(input.phone, 40),
    service: text(input.service, 80),
    message: text(input.message, 4000),
  };

  if (!lead.firstName || !lead.lastName || !lead.message || (!lead.email && !lead.phone)) {
    return Response.json({ error: "Missing required fields" }, { status: 422 });
  }

  const apiKey = Netlify.env.get("RESEND_API_KEY");
  const recipient = Netlify.env.get("LEAD_NOTIFICATION_EMAIL");
  const from = Netlify.env.get("LEAD_FROM_EMAIL");
  if (!apiKey || !recipient || !from) {
    return Response.json({ error: "Email notifications are not configured" }, { status: 503 });
  }

  const fullName = `${lead.firstName} ${lead.lastName}`;
  const internal = await sendEmail(apiKey, {
    from,
    to: [recipient],
    subject: `Nouveau lead Nexia Morocco — ${lead.service || "Besoin à qualifier"}`,
    reply_to: lead.email || undefined,
    html: `
      <h1>Nouveau lead depuis nexiamorocco.com</h1>
      <p><strong>Nom :</strong> ${escapeHtml(fullName)}</p>
      <p><strong>Entreprise :</strong> ${escapeHtml(lead.company || "Non renseignée")}</p>
      <p><strong>Email :</strong> ${escapeHtml(lead.email || "Non renseigné")}</p>
      <p><strong>Téléphone :</strong> ${escapeHtml(`${lead.countryCode || ""} ${lead.phone || "Non renseigné"}`.trim())}</p>
      <p><strong>Service :</strong> ${escapeHtml(lead.service || "À qualifier")}</p>
      <p><strong>Message :</strong></p>
      <p>${escapeHtml(lead.message).replaceAll("\n", "<br>")}</p>
      <p><a href="https://nexiamorocco.com/admin/contacts/">Ouvrir le back-office</a></p>
    `,
  });

  if (!internal.ok) {
    return Response.json({ error: "Notification provider rejected the request" }, { status: 502 });
  }

  let autoReplySent = false;
  if (lead.email && Netlify.env.get("LEAD_AUTOREPLY_ENABLED") === "true") {
    const reply = await sendEmail(apiKey, {
      from,
      to: [lead.email],
      subject: "Nous avons bien reçu votre demande — Nexia Morocco",
      html: `
        <p>Bonjour ${escapeHtml(lead.firstName)},</p>
        <p>Nous avons bien reçu votre demande. Un membre de l’équipe Nexia Morocco reviendra vers vous dans les meilleurs délais ouvrés.</p>
        <p>Cordialement,<br>L’équipe Nexia Morocco</p>
      `,
    });
    autoReplySent = reply.ok;
  }

  return Response.json({ notified: true, autoReplySent });
};

export const config = {
  path: "/api/notify-lead",
  method: "POST",
};
