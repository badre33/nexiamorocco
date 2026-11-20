import { createHmac, timingSafeEqual } from "node:crypto";

// Back-office mono-utilisateur : mot de passe ADMIN_PASSWORD, session signée en cookie HttpOnly.
const COOKIE = "nm_admin";
const MAX_AGE = 60 * 60 * 24 * 14; // 14 jours

function secret() {
  return process.env.ADMIN_SESSION_SECRET || `nm:${process.env.ADMIN_PASSWORD || ""}`;
}

function sign(value: string) {
  return createHmac("sha256", secret()).update(value).digest("base64url");
}

function safeEqual(a: string, b: string) {
  const ba = Buffer.from(a);
  const bb = Buffer.from(b);
  return ba.length === bb.length && timingSafeEqual(ba, bb);
}

export function checkPassword(candidate: string) {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return false;
  return safeEqual(sign(candidate), sign(expected));
}

export function sessionCookie() {
  const exp = String(Math.floor(Date.now() / 1000) + MAX_AGE);
  return `${COOKIE}=${exp}.${sign(exp)}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=${MAX_AGE}`;
}

export function clearCookie() {
  return `${COOKIE}=; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=0`;
}

export function isAuthenticated(request: Request) {
  if (!process.env.ADMIN_PASSWORD) return false;
  const raw = request.headers.get("cookie") || "";
  const match = raw.split(/;\s*/).find((c) => c.startsWith(`${COOKIE}=`));
  if (!match) return false;
  const [exp, sig] = match.slice(COOKIE.length + 1).split(".");
  if (!exp || !sig || !safeEqual(sig, sign(exp))) return false;
  return Number(exp) * 1000 > Date.now();
}
