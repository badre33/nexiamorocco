import clientsLogos from "@/assets/clients-logos.png";
import { useSimpleLanguage } from "@/hooks/useSimpleLanguage";

export default function OurClients() {
  const { t } = useSimpleLanguage();
  
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-nexia-primary mb-4">
            {t('clients.title')}
          </h2>
          <p className="text-lg text-nexia-primary/80">
            {t('clients.subtitle')}
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-professional">
          <img 
            src={clientsLogos} 
            alt="Logos de nos clients de confiance"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
