const globalStats = [
  { number: "35 000+", label: "personnes", region: "global" },
  { number: "122", label: "pays", region: "global" },
  { number: "1:10", label: "Ratio associé/employé", region: "global" },
];

const regionalStats = [
  { number: "206", label: "Bureaux", region: "Amérique du Nord" },
  { number: "1372", label: "Associés", region: "Amérique du Nord" },
  { number: "361", label: "Bureaux", region: "Europe, Moyen-Orient et Afrique" },
  { number: "1252", label: "Associés", region: "Europe, Moyen-Orient Afrique" },
  { number: "106", label: "Bureaux", region: "Asie-Pacifique" },
  { number: "708", label: "Associés", region: "Asie-Pacifique" },
  { number: "54", label: "Bureaux", region: "Amérique Latine" },
  { number: "110", label: "Associés", region: "Amérique Latine" },
  { number: "50", label: "Comités et Groupes d'Affaires", region: "Centre" },
];

const services = [
  { name: "Conseil", color: "bg-purple-600" },
  { name: "Audit", color: "bg-purple-500" },
  { name: "Fiscalité", color: "bg-orange-500" },
];

export default function FactsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-nexia-primary mb-6">Notre Monde en Chiffres</h2>
          <p className="text-lg text-gray-700 max-w-5xl leading-relaxed">
            Nexia International est un réseau mondial de premier plan regroupant des cabinets indépendants d'expertise comptable 
            et de conseil. Lorsque vous choisissez un cabinet Nexia, vous bénéficiez d'un service plus réactif, plus personnalisé 
            et dirigé par des associés, partout dans le monde.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Statistics Section */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              {/* Global Stats */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-nexia-primary mb-6">Statistiques Globales</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {globalStats.map((stat, index) => (
                    <div key={index} className="text-center p-6 bg-purple-50 rounded-lg">
                      <div className="text-3xl font-bold text-purple-600 mb-2">{stat.number}</div>
                      <div className="text-gray-700 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Regional Stats */}
              <div>
                <h3 className="text-2xl font-bold text-nexia-primary mb-6">Répartition par Région</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {regionalStats.map((stat, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-purple-600 mb-1">{stat.number}</div>
                      <div className="text-sm text-gray-700 font-medium">{stat.label}</div>
                      <div className="text-xs text-gray-500 mt-1">({stat.region})</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Services and Achievements */}
          <div className="space-y-6">
            {/* Services */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Lignes de services</h3>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className={`${service.color} text-white px-4 py-2 rounded-full text-sm font-medium flex-1 text-center`}>
                      {service.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Récompenses et Accréditations</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold text-sm">9th</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <div className="font-medium">International Accounting Bulletin Survey 2019</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                    <span className="text-pink-600 font-bold text-xs">★</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <div className="font-medium">Prix du Réseau Étoile Montante - IAB Awards 2019</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 font-bold text-xs">$</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <div className="font-medium">US$ 4.3 billion</div>
                    <div className="text-xs">4.3 milliards USD de revenus pour 2019</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                    <span className="text-teal-600 font-bold text-xs">727</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <div className="font-medium">727 bureaux dans le monde</div>
                    <div className="text-xs">Réseau mondial étendu</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}