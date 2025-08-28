import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useSimpleLanguage } from "@/hooks/useSimpleLanguage";

const articleContent = {
  fr: {
    backLink: "Retour aux Perspectives Mondiales",
    title: "Le coût des médicaments au Maroc : un enjeu économique et stratégique qui persiste",
    author: "Nexia Fiducia Maroc",
    date: "28 août 2025",
    readTime: "12 min de lecture",
    content: {
      intro: "Casablanca, 28 août 2025 – Plus de deux ans après l'annonce de mesures visant à réduire les prix des médicaments, la question reste d'une brûlante actualité. Malgré certains ajustements réglementaires et l'introduction progressive de génériques, les prix de nombreux traitements demeurent élevés, parfois trois à quatre fois supérieurs à ceux pratiqués dans des pays comparables.",
      paragraph1: "Ce décalage n'est pas uniquement une problématique budgétaire pour les ménages. Il s'agit d'un enjeu systémique qui concerne la souveraineté sanitaire du Maroc, la compétitivité de son industrie pharmaceutique et la soutenabilité des politiques publiques de santé.",
      subtitle1: "Un constat partagé, des causes multiples",
      paragraph2: "Les avancées récentes, notamment la mise en place d'un cadre incitatif pour les génériques et quelques initiatives de production locale, n'ont pas suffi à modifier en profondeur la structure des coûts. Plusieurs facteurs continuent de peser sur le marché :",
      bullet1: "Une forte dépendance aux importations : près de 80 % des matières premières pharmaceutiques utilisées sont importées. Les fluctuations du change et les tensions sur les chaînes logistiques internationales se répercutent directement sur les prix.",
      bullet2: "Des capacités industrielles encore limitées : bien que des investissements aient été réalisés, la production nationale ne couvre pas l'ensemble des besoins, en particulier sur les segments stratégiques comme l'oncologie ou les biotechnologies.",
      bullet3: "Un cadre fiscal et réglementaire contraignant : la structure des marges et la fiscalité appliquée aux produits pharmaceutiques continuent d'alourdir le coût pour le consommateur final.",
      bullet4: "Une pénétration insuffisante des génériques : malgré des campagnes de sensibilisation, la confiance du grand public et des prescripteurs reste faible, limitant leur part de marché.",
      subtitle2: "Des réformes nécessaires pour une industrie compétitive",
      paragraph3: "La question du prix des médicaments dépasse la seule équation économique. Elle interroge la capacité du Maroc à se doter d'une véritable stratégie industrielle et sanitaire, capable de garantir un accès équitable aux soins tout en renforçant l'attractivité du pays pour les investisseurs.",
      paragraph4: "Plusieurs pistes se dessinent :",
      reform1: "consolider les investissements dans la production locale, notamment à travers des partenariats public-privé,",
      reform2: "favoriser la montée en gamme vers les biotechnologies et la recherche clinique,",
      reform3: "réviser la structure fiscale et les marges de distribution afin de rendre le marché plus compétitif,",
      reform4: "renforcer la pédagogie et la confiance autour des génériques.",
      subtitle3: "L'accompagnement de Nexia Fiducia Maroc",
      paragraph5: "Face à ces défis, Nexia Fiducia Maroc accompagne les acteurs du secteur – industriels, investisseurs, décideurs publics – dans la conception et la mise en œuvre de solutions adaptées. Notre expertise couvre l'optimisation de la chaîne d'approvisionnement, la structuration de projets d'investissement, la mise en place de stratégies fiscales et réglementaires, ainsi que le développement de modèles de financement innovants.",
      paragraph6: "Notre rôle est d'apporter une vision claire et opérationnelle, en alliant analyse stratégique et accompagnement concret, afin de contribuer à l'émergence d'un secteur pharmaceutique marocain plus compétitif, durable et accessible.",
      subtitle4: "Une opportunité à saisir",
      paragraph7: "Le Maroc dispose d'atouts considérables : une position géographique stratégique, un marché en croissance et une volonté politique affirmée de renforcer la souveraineté sanitaire. Mais pour transformer ce potentiel en résultats tangibles, il est indispensable d'adopter une approche cohérente et intégrée, où l'ensemble des parties prenantes travaillent de concert.",
      paragraph8: "Le coût des médicaments est à la fois un symptôme et un révélateur. Derrière lui se joue une question essentielle : celle de la place du Maroc dans la nouvelle cartographie mondiale de l'industrie pharmaceutique. C'est à ce défi que nous contribuons chaque jour, en plaçant l'expertise et l'innovation au service d'un objectif commun : rendre les soins plus accessibles et renforcer la compétitivité du pays.",
      ctaTitle: "Besoin d'accompagnement dans le secteur pharmaceutique ?",
      ctaDescription: "Contactez nos experts pour une consultation personnalisée sur vos projets d'investissement, vos stratégies d'implantation ou vos besoins en optimisation fiscale et réglementaire.",
      ctaButton: "Nous contacter"
    }
  },
  en: {
    backLink: "Back to Global Perspectives",
    title: "The cost of medicines in Morocco: a persistent economic and strategic challenge",
    author: "Nexia Fiducia Morocco",
    date: "August 28, 2025",
    readTime: "12 min read",
    content: {
      intro: "Casablanca, August 28, 2025 – More than two years after the announcement of measures aimed at reducing drug prices, the issue remains of burning relevance. Despite some regulatory adjustments and the gradual introduction of generics, the prices of many treatments remain high, sometimes three to four times higher than those practiced in comparable countries.",
      paragraph1: "This gap is not only a budgetary problem for households. It is a systemic issue that concerns Morocco's health sovereignty, the competitiveness of its pharmaceutical industry and the sustainability of public health policies.",
      subtitle1: "A shared observation, multiple causes",
      paragraph2: "Recent advances, notably the establishment of an incentive framework for generics and some local production initiatives, have not been sufficient to fundamentally change the cost structure. Several factors continue to weigh on the market:",
      bullet1: "A strong dependence on imports: nearly 80% of the pharmaceutical raw materials used are imported. Exchange rate fluctuations and tensions on international logistics chains directly impact prices.",
      bullet2: "Still limited industrial capacities: although investments have been made, national production does not cover all needs, particularly in strategic segments such as oncology or biotechnology.",
      bullet3: "A constraining fiscal and regulatory framework: the margin structure and taxation applied to pharmaceutical products continue to increase the cost for the final consumer.",
      bullet4: "Insufficient penetration of generics: despite awareness campaigns, confidence among the general public and prescribers remains low, limiting their market share.",
      subtitle2: "Necessary reforms for a competitive industry",
      paragraph3: "The question of drug prices goes beyond the simple economic equation. It questions Morocco's ability to develop a true industrial and health strategy, capable of guaranteeing equitable access to care while strengthening the country's attractiveness for investors.",
      paragraph4: "Several avenues are emerging:",
      reform1: "consolidate investments in local production, particularly through public-private partnerships,",
      reform2: "promote upgrading to biotechnology and clinical research,",
      reform3: "revise the tax structure and distribution margins to make the market more competitive,",
      reform4: "strengthen education and confidence around generics.",
      subtitle3: "Nexia Fiducia Morocco's support",
      paragraph5: "Faced with these challenges, Nexia Fiducia Morocco supports sector players – industrialists, investors, public decision-makers – in the design and implementation of adapted solutions. Our expertise covers supply chain optimization, investment project structuring, the implementation of fiscal and regulatory strategies, as well as the development of innovative financing models.",
      paragraph6: "Our role is to provide a clear and operational vision, combining strategic analysis and concrete support, in order to contribute to the emergence of a more competitive, sustainable and accessible Moroccan pharmaceutical sector.",
      subtitle4: "An opportunity to seize",
      paragraph7: "Morocco has considerable assets: a strategic geographical position, a growing market and a stated political will to strengthen health sovereignty. But to transform this potential into tangible results, it is essential to adopt a coherent and integrated approach, where all stakeholders work together.",
      paragraph8: "The cost of medicines is both a symptom and a revealer. Behind it lies an essential question: that of Morocco's place in the new global map of the pharmaceutical industry. This is the challenge we contribute to every day, by placing expertise and innovation at the service of a common objective: making care more accessible and strengthening the country's competitiveness.",
      ctaTitle: "Need support in the pharmaceutical sector?",
      ctaDescription: "Contact our experts for personalized consultation on your investment projects, implementation strategies or your fiscal and regulatory optimization needs.",
      ctaButton: "Contact us"
    }
  }
};

export default function MedicamentArticle() {
  const { language } = useSimpleLanguage();
  const content = articleContent[language] || articleContent.fr;
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Article Header */}
      <section className="py-16 bg-nexia-primary">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Link to="/perspectives-mondiales" className="inline-flex items-center text-white/80 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {content.backLink}
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {content.title}
          </h1>
          <div className="flex items-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{content.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{content.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{content.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          {/* Featured Image */}
          <div className="mb-12">
            <img
              src="/lovable-uploads/cef4902e-b1e7-4925-9e79-9a625447ce65.png"
              alt="Le coût des médicaments au Maroc"
              className="w-full h-96 object-cover object-center rounded-lg shadow-lg"
            />
          </div>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8 font-medium">
              {content.content.intro}
            </p>

            <p className="mb-6">
              {content.content.paragraph1}
            </p>

            <h2 className="text-3xl font-bold text-nexia-primary mt-12 mb-6">
              {content.content.subtitle1}
            </h2>

            <p className="mb-6">
              {content.content.paragraph2}
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <ul className="space-y-4">
                <li>
                  <strong>{content.content.bullet1.split(':')[0]}:</strong>{content.content.bullet1.split(':')[1]}
                </li>
                <li>
                  <strong>{content.content.bullet2.split(':')[0]}:</strong>{content.content.bullet2.split(':')[1]}
                </li>
                <li>
                  <strong>{content.content.bullet3.split(':')[0]}:</strong>{content.content.bullet3.split(':')[1]}
                </li>
                <li>
                  <strong>{content.content.bullet4.split(':')[0]}:</strong>{content.content.bullet4.split(':')[1]}
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-nexia-primary mt-12 mb-6">
              {content.content.subtitle2}
            </h2>

            <p className="mb-6">
              {content.content.paragraph3}
            </p>

            <p className="mb-4">{content.content.paragraph4}</p>
            
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>{content.content.reform1}</li>
              <li>{content.content.reform2}</li>
              <li>{content.content.reform3}</li>
              <li>{content.content.reform4}</li>
            </ul>

            <div className="bg-nexia-primary/5 border-l-4 border-nexia-primary p-6 my-8">
              <h3 className="text-2xl font-bold text-nexia-primary mb-4">
                {content.content.subtitle3}
              </h3>
              <p className="mb-4">
                {content.content.paragraph5}
              </p>
              <p>
                {content.content.paragraph6}
              </p>
            </div>

            <h2 className="text-3xl font-bold text-nexia-primary mt-12 mb-6">
              {content.content.subtitle4}
            </h2>

            <p className="mb-6">
              {content.content.paragraph7}
            </p>

            <p className="mb-6">
              {content.content.paragraph8}
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-nexia-primary text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">
              {content.content.ctaTitle}
            </h3>
            <p className="mb-6">
              {content.content.ctaDescription}
            </p>
            <Button asChild variant="secondary" size="lg">
              <Link to="/contact">{content.content.ctaButton}</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}