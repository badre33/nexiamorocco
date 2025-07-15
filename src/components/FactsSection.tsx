const globalStats = [
  { number: "35 000+", label: "personnes", region: "global" },
  { number: "122", label: "pays", region: "global" },
  { number: "1:10", label: "Ratio associé/employé", region: "global" },
];

const regionalStats = [
  { number: "206", label: "Bureaux", region: "Amérique du Nord", position: "top-[20%] left-[15%]" },
  { number: "1372", label: "Associés", region: "Amérique du Nord", position: "top-[35%] left-[12%]" },
  { number: "361", label: "Bureaux", region: "Europe, Moyen-Orient et Afrique", position: "top-[25%] left-[45%]" },
  { number: "1252", label: "Associés", region: "Europe, Moyen-Orient Afrique", position: "top-[40%] left-[42%]" },
  { number: "106", label: "Bureaux", region: "Asie-Pacifique", position: "top-[30%] right-[15%]" },
  { number: "708", label: "Associés", region: "Asie-Pacifique", position: "top-[45%] right-[12%]" },
  { number: "54", label: "Bureaux", region: "Amérique Latine", position: "top-[60%] left-[20%]" },
  { number: "110", label: "Associés", region: "Amérique Latine", position: "top-[70%] left-[22%]" },
  { number: "50", label: "Comités et Groupes d'Affaires", region: "Centre", position: "bottom-[25%] left-[50%]" },
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
          {/* World Map Section */}
          <div className="lg:col-span-3">
            <div className="relative h-[500px] bg-gradient-to-br from-teal-100 to-teal-200 rounded-2xl p-8 overflow-hidden">
              {/* Background world map silhouette */}
              <div className="absolute inset-0 opacity-30">
                <svg viewBox="0 0 1000 500" className="w-full h-full">
                  <g fill="currentColor" className="text-teal-600">
                    {/* Simplified world map paths */}
                    <path d="M100,200 L200,180 L300,190 L350,200 L300,250 L200,240 L100,250 Z" />
                    <path d="M400,180 L500,170 L600,180 L650,200 L600,230 L500,220 L400,210 Z" />
                    <path d="M700,190 L800,180 L850,200 L800,220 L700,210 Z" />
                    <path d="M150,300 L250,290 L300,310 L250,330 L150,320 Z" />
                    <path d="M500,280 L600,270 L650,290 L600,310 L500,300 Z" />
                  </g>
                </svg>
              </div>

              {/* Global Stats - Prominent Display */}
              <div className="absolute top-6 left-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-1">Plus de 35 000</div>
                  <div className="text-sm text-gray-600">personnes</div>
                </div>
              </div>

              <div className="absolute top-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg text-center">
                  <div className="text-lg font-semibold text-gray-700 mb-2">Présent dans plus de</div>
                  <div className="text-3xl font-bold text-purple-600 mb-1">122</div>
                  <div className="text-sm text-gray-600">pays</div>
                </div>
              </div>

              {/* Regional Statistics */}
              {regionalStats.map((stat, index) => (
                <div
                  key={index}
                  className={`absolute ${stat.position} transform -translate-x-1/2 -translate-y-1/2`}
                >
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-md text-center min-w-[120px]">
                    <div className="text-2xl font-bold text-purple-600 mb-1">{stat.number}</div>
                    <div className="text-xs text-gray-600 font-medium">{stat.label}</div>
                    <div className="text-xs text-gray-500 mt-1">({stat.region})</div>
                  </div>
                </div>
              ))}

              {/* Bottom Stats */}
              <div className="absolute bottom-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-1">1:10</div>
                  <div className="text-sm text-gray-600">Ratio associé/employé</div>
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
                    <div className="text-xs">927 bureaux dans le monde au vous avec nous que nous soyons</div>
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