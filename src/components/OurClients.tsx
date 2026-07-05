import { useSimpleLanguage } from "@/hooks/useSimpleLanguage";

/**
 * "Ils nous font confiance" — grille de logos clients.
 *
 * Pour remplacer un placeholder par un vrai logo client :
 *   1. Déposer le PNG/SVG du logo dans /public/clients/
 *      (recommandé : fond transparent, ratio paysage, monochrome ou couleur d'origine)
 *   2. Ajouter une entrée dans CLIENTS ci-dessous : { name, src: "/clients/xxx.png" }
 *
 * Tant que `src` est null, on affiche un placeholder neutre (charte Nexia respectée).
 */

interface ClientLogo {
  name: string;
  src?: string | null;
  url?: string;
}

/**
 * 30 logos clients extraits de la slide 28 ("Ils nous font confiance") de la
 * Présentation Nexia Morocco 2026.pptx. Ordre identique à celui de la slide.
 *
 * Noms identifiés visuellement en juin 2026. Les attributs `name` servent
 * d'alt SEO (important pour l'accessibilité et le référencement local).
 */
const CLIENTS: ClientLogo[] = [
  { name: "John Cockerill",             src: "/clients/client-01.png" },
  { name: "Zurich Insurance",           src: "/clients/client-02.png" },
  { name: "Wafa Assurance",             src: "/clients/client-03.png" },
  { name: "Teltonika",                  src: "/clients/client-04.png" },
  { name: "Schindler",                  src: "/clients/client-05.png" },
  { name: "MATU Assurance",             src: "/clients/client-06.png" },
  { name: "OCP",                        src: "/clients/client-07.png" },
  { name: "CCI France Maroc",           src: "/clients/client-08.png" },
  { name: "Lydec",                      src: "/clients/client-09.png" },
  { name: "Safran Engineering Services", src: "/clients/client-10.png" },
  { name: "IPSEN Industrial Packing",   src: "/clients/client-11.png" },
  { name: "TRIA",                       src: "/clients/client-12.png" },
  { name: "IQVIA",                      src: "/clients/client-13.png" },
  { name: "Esnapharm Laboratoire",      src: "/clients/client-14.png" },
  { name: "Volvo",                      src: "/clients/client-15.png" },
  { name: "Snetor Maroc",               src: "/clients/client-16.png" },
  { name: "Glen Invest",                src: "/clients/client-17.png" },
  { name: "TLS Groupe",                 src: "/clients/client-18.png" },
  { name: "Steinmüller Engineering",    src: "/clients/client-19.png" },
  { name: "Continental ContiTech",      src: "/clients/client-20.png" },
  { name: "COLIN'S",                    src: "/clients/client-21.png" },
  { name: "AXA",                        src: "/clients/client-22.png" },
  { name: "Arrow Electronics",          src: "/clients/client-23.png" },
  { name: "Arab Bank",                  src: "/clients/client-24.png" },
  { name: "DuPont",                     src: "/clients/client-25.png" },
  { name: "ifm electronic",             src: "/clients/client-26.png" },
  { name: "DAF Trucks",                 src: "/clients/client-27.png" },
  { name: "FISA Maroc",                 src: "/clients/client-28.png" },
  { name: "Orange",                     src: "/clients/client-29.png" },
  { name: "Allianz",                    src: "/clients/client-30.png" },
];

export default function OurClients() {
  const { t } = useSimpleLanguage();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-nexia-primary mb-4 font-poppins">
            {t('clients.title')}
          </h2>
          <p className="text-lg text-nexia-primary/80 font-poppins">
            {t('clients.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {CLIENTS.map((client, index) => (
            <ClientCard key={`${client.name}-${index}`} client={client} />
          ))}
        </div>

        <p className="text-center text-xs text-nexia-primary/50 mt-8 font-poppins italic">
          {(t('clients.disclaimer') as unknown as string) || '+ 400 entreprises nous font confiance.'}
        </p>
      </div>
    </section>
  );
}

function ClientCard({ client }: { client: ClientLogo }) {
  const inner = client.src ? (
    <img
      src={client.src}
      alt={client.name}
      className="max-h-12 md:max-h-16 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
      loading="lazy"
    />
  ) : (
    /* Placeholder — affiché tant que le vrai logo n'est pas fourni */
    <span className="text-sm md:text-base font-semibold text-nexia-primary/40 font-poppins text-center px-2">
      {client.name}
    </span>
  );

  const card = (
    <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 md:p-6 h-24 md:h-32 flex items-center justify-center transition-all duration-300 hover:border-nexia-secondary hover:shadow-md">
      {inner}
    </div>
  );

  return client.url ? (
    <a href={client.url} target="_blank" rel="noopener noreferrer">
      {card}
    </a>
  ) : (
    card
  );
}
