import { useSimpleLanguage } from "@/hooks/useSimpleLanguage";

const getGlobalStats = (t: (key: string) => string) => [
  { number: "35 000+", label: t('facts.globalPeople'), region: "global" },
  { number: "122", label: t('facts.globalCountries'), region: "global" },
  { number: "1:10", label: t('facts.globalRatio'), region: "global" },
];

const getRegionalStats = (t: (key: string) => string) => [
  { number: "206", label: t('facts.offices'), region: t('facts.northAmerica') },
  { number: "1372", label: t('facts.partners'), region: t('facts.northAmerica') },
  { number: "361", label: t('facts.offices'), region: t('facts.emeaRegion') },
  { number: "1252", label: t('facts.partners'), region: t('facts.emeaRegion') },
  { number: "106", label: t('facts.offices'), region: t('facts.asiaPacific') },
  { number: "708", label: t('facts.partners'), region: t('facts.asiaPacific') },
  { number: "54", label: t('facts.offices'), region: t('facts.latinAmerica') },
  { number: "110", label: t('facts.partners'), region: t('facts.latinAmerica') },
  { number: "50", label: t('facts.businessGroups'), region: t('facts.center') },
];

const getServices = (t: (key: string) => string) => [
  { name: t('facts.serviceConsulting'), color: "bg-purple-600" },
  { name: t('facts.serviceAudit'), color: "bg-purple-500" },
  { name: t('facts.serviceTax'), color: "bg-orange-500" },
];

export default function FactsSection() {
  const { t } = useSimpleLanguage();
  const globalStats = getGlobalStats(t);
  const regionalStats = getRegionalStats(t);
  const services = getServices(t);
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-nexia-primary mb-6">{t('facts.title')}</h2>
          <p className="text-lg text-gray-700 max-w-5xl leading-relaxed">
            {t('facts.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Statistics Section */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              {/* Global Stats */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-nexia-primary mb-6">{t('facts.globalStats')}</h3>
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
                <h3 className="text-2xl font-bold text-nexia-primary mb-6">{t('facts.regionalStats')}</h3>
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
              <h3 className="text-lg font-semibold text-gray-800 mb-4">{t('facts.services')}</h3>
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
              <h3 className="text-lg font-semibold text-gray-800 mb-4">{t('facts.achievements')}</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold text-xs">9th</span>
                  </div>
                  <div className="flex-1 text-sm text-gray-600">
                    <div className="font-medium">International Accounting Bulletin Survey 2019</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                    <span className="text-pink-600 font-bold text-sm">★</span>
                  </div>
                  <div className="flex-1 text-sm text-gray-600">
                    <div className="font-medium">Prix du Réseau Étoile Montante - IAB Awards 2019</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 font-bold text-xs">$</span>
                  </div>
                  <div className="flex-1 text-sm text-gray-600">
                    <div className="font-medium">{t('facts.revenue')}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                    <span className="text-teal-600 font-bold text-xs">727</span>
                  </div>
                  <div className="flex-1 text-sm text-gray-600">
                    <div className="font-medium">{t('facts.worldwideOffices')}</div>
                    <div className="text-xs text-gray-500">{t('facts.globalNetwork')}</div>
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