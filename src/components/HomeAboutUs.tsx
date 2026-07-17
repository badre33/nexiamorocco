import { Link } from "react-router-dom";
import { useSimpleLanguage } from "@/hooks/useSimpleLanguage";

export default function HomeAboutUs() {
  const { t } = useSimpleLanguage();
  
  return (
    <section className="nexia-section-padding bg-white relative overflow-hidden rounded-2xl">
      {/* Background Image pour toute la section */}
      <div className="absolute inset-0">
        <img 
          src="/uploads/c6eaa709-a9e2-42bc-8d20-36f8616c4e6e.png" 
          alt="Chefchaouen, Morocco" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content avec z-index pour être au-dessus de l'image */}
      <div className="relative z-10 max-w-[1050px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* About Us Text - Left Column */}
        <div className="flex flex-col justify-center pr-0 lg:pr-[15%] pt-10 pb-10">
          <p className="bolder text-nexia-primary font-poppins text-lg mb-6 bg-white/90 p-2 rounded-lg w-fit">
            {t('about.title')}
          </p>
          <p className="text-nexia-primary font-poppins text-[28px] leading-relaxed mb-8 bg-white/90 p-4 rounded-lg">
            {t('about.description')}
          </p>
          <Link
            to="/a-propos"
            className="inline-flex items-center text-nexia-primary font-poppins font-medium text-lg hover:text-nexia-secondary transition-colors duration-300 group bg-white/90 p-3 rounded-lg w-fit"
          >
            {t('about.link')}
            <svg 
              className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Services List - Right Column */}
        <div className="space-y-4 p-8">
          <h2 className="text-[70px] lg:text-[70px] font-bold text-nexia-primary font-poppins leading-tight bg-white/90 p-4 rounded-lg w-fit">
            {t('about.service1')}
          </h2>
          <h2 className="text-[70px] lg:text-[70px] font-bold text-nexia-primary font-poppins leading-tight bg-white/90 p-4 rounded-lg w-fit">
            {t('about.service2')}
          </h2>
          <h2 className="text-[70px] lg:text-[70px] font-bold text-nexia-primary font-poppins leading-tight bg-white/90 p-4 rounded-lg w-fit">
            {t('about.service3')}
          </h2>
        </div>
      </div>
    </section>
  );
}