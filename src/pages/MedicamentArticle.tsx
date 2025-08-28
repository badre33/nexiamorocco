import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function MedicamentArticle() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Article Header */}
      <section className="py-16 bg-nexia-primary">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Link to="/perspectives-mondiales" className="inline-flex items-center text-white/80 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux Perspectives Mondiales
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Le coût des médicaments au Maroc : un enjeu économique et stratégique qui persiste
          </h1>
          <div className="flex items-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Nexia Fiducia Maroc</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>28 août 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>12 min de lecture</span>
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
              Casablanca, 28 août 2025 – Plus de deux ans après l'annonce de mesures visant à réduire les prix des médicaments, 
              la question reste d'une brûlante actualité. Malgré certains ajustements réglementaires et l'introduction progressive 
              de génériques, les prix de nombreux traitements demeurent élevés, parfois trois à quatre fois supérieurs à ceux 
              pratiqués dans des pays comparables.
            </p>

            <p className="mb-6">
              Ce décalage n'est pas uniquement une problématique budgétaire pour les ménages. Il s'agit d'un enjeu systémique 
              qui concerne la souveraineté sanitaire du Maroc, la compétitivité de son industrie pharmaceutique et la 
              soutenabilité des politiques publiques de santé.
            </p>

            <h2 className="text-3xl font-bold text-nexia-primary mt-12 mb-6">
              Un constat partagé, des causes multiples
            </h2>

            <p className="mb-6">
              Les avancées récentes, notamment la mise en place d'un cadre incitatif pour les génériques et quelques 
              initiatives de production locale, n'ont pas suffi à modifier en profondeur la structure des coûts. 
              Plusieurs facteurs continuent de peser sur le marché :
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <ul className="space-y-4">
                <li>
                  <strong>Une forte dépendance aux importations :</strong> près de 80 % des matières premières 
                  pharmaceutiques utilisées sont importées. Les fluctuations du change et les tensions sur les 
                  chaînes logistiques internationales se répercutent directement sur les prix.
                </li>
                <li>
                  <strong>Des capacités industrielles encore limitées :</strong> bien que des investissements aient 
                  été réalisés, la production nationale ne couvre pas l'ensemble des besoins, en particulier sur les 
                  segments stratégiques comme l'oncologie ou les biotechnologies.
                </li>
                <li>
                  <strong>Un cadre fiscal et réglementaire contraignant :</strong> la structure des marges et la 
                  fiscalité appliquée aux produits pharmaceutiques continuent d'alourdir le coût pour le consommateur final.
                </li>
                <li>
                  <strong>Une pénétration insuffisante des génériques :</strong> malgré des campagnes de sensibilisation, 
                  la confiance du grand public et des prescripteurs reste faible, limitant leur part de marché.
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-nexia-primary mt-12 mb-6">
              Des réformes nécessaires pour une industrie compétitive
            </h2>

            <p className="mb-6">
              La question du prix des médicaments dépasse la seule équation économique. Elle interroge la capacité 
              du Maroc à se doter d'une véritable stratégie industrielle et sanitaire, capable de garantir un accès 
              équitable aux soins tout en renforçant l'attractivité du pays pour les investisseurs.
            </p>

            <p className="mb-4">Plusieurs pistes se dessinent :</p>
            
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>consolider les investissements dans la production locale, notamment à travers des partenariats public-privé,</li>
              <li>favoriser la montée en gamme vers les biotechnologies et la recherche clinique,</li>
              <li>réviser la structure fiscale et les marges de distribution afin de rendre le marché plus compétitif,</li>
              <li>renforcer la pédagogie et la confiance autour des génériques.</li>
            </ul>

            <div className="bg-nexia-primary/5 border-l-4 border-nexia-primary p-6 my-8">
              <h3 className="text-2xl font-bold text-nexia-primary mb-4">
                L'accompagnement de Nexia Fiducia Maroc
              </h3>
              <p className="mb-4">
                Face à ces défis, Nexia Fiducia Maroc accompagne les acteurs du secteur – industriels, investisseurs, 
                décideurs publics – dans la conception et la mise en œuvre de solutions adaptées. Notre expertise couvre 
                l'optimisation de la chaîne d'approvisionnement, la structuration de projets d'investissement, la mise 
                en place de stratégies fiscales et réglementaires, ainsi que le développement de modèles de financement innovants.
              </p>
              <p>
                Notre rôle est d'apporter une vision claire et opérationnelle, en alliant analyse stratégique et 
                accompagnement concret, afin de contribuer à l'émergence d'un secteur pharmaceutique marocain plus 
                compétitif, durable et accessible.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-nexia-primary mt-12 mb-6">
              Une opportunité à saisir
            </h2>

            <p className="mb-6">
              Le Maroc dispose d'atouts considérables : une position géographique stratégique, un marché en croissance 
              et une volonté politique affirmée de renforcer la souveraineté sanitaire. Mais pour transformer ce potentiel 
              en résultats tangibles, il est indispensable d'adopter une approche cohérente et intégrée, où l'ensemble 
              des parties prenantes travaillent de concert.
            </p>

            <p className="mb-6">
              Le coût des médicaments est à la fois un symptôme et un révélateur. Derrière lui se joue une question 
              essentielle : celle de la place du Maroc dans la nouvelle cartographie mondiale de l'industrie pharmaceutique. 
              C'est à ce défi que nous contribuons chaque jour, en plaçant l'expertise et l'innovation au service d'un 
              objectif commun : rendre les soins plus accessibles et renforcer la compétitivité du pays.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-nexia-primary text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">
              Besoin d'accompagnement dans le secteur pharmaceutique ?
            </h3>
            <p className="mb-6">
              Contactez nos experts pour une consultation personnalisée sur vos projets d'investissement, 
              vos stratégies d'implantation ou vos besoins en optimisation fiscale et réglementaire.
            </p>
            <Button asChild variant="secondary" size="lg">
              <Link to="/contact">Nous contacter</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}