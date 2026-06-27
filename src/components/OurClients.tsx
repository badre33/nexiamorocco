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
 * Les noms sont génériques (Client 01 ... 30) car la présentation ne contient
 * pas le nom textuel des marques. Badre pourra renommer manuellement chaque
 * `name` quand il identifiera les clients (utile pour l'attribut alt SEO).
 */
const CLIENTS: ClientLogo[] = Array.from({ length: 30 }, (_, i) => {
  const num = String(i + 1).padStart(2, "0");
  return { name: `Client ${num}`, src: `/clients/client-${num}.png` };
});

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
