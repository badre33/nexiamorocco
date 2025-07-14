export default function HomeAboutUs() {
  return (
    <section className="nexia-section-padding bg-white max-w-[1050px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* About Us Text - Left Column */}
        <div className="flex flex-col justify-center pr-0 lg:pr-[15%] pt-10 pb-10">
          <p className="bolder text-nexia-primary font-poppins text-lg mb-6">
            À propos de nous
          </p>
          <p className="text-nexia-primary font-poppins text-[28px] leading-relaxed">
            Chez Nexia Fiducia Maroc, notre mission est d'accompagner les entreprises marocaines et internationales dans toutes les étapes de leur croissance, de leur structuration et de leur mise en conformité. Grâce à notre ancrage local fort, allié à la puissance du réseau Nexia International, nous offrons des expertises pluridisciplinaires, rigoureuses et adaptées à vos enjeux réels.
          </p>
        </div>

        {/* Services List - Right Column */}
        <div className="space-y-2">
          <h2 className="text-[70px] lg:text-[70px] font-bold text-nexia-primary font-poppins leading-tight mb-2">
            Audit.
          </h2>
          <h2 className="text-[70px] lg:text-[70px] font-bold text-nexia-primary font-poppins leading-tight mb-2">
            Fiscalité.
          </h2>
          <h2 className="text-[70px] lg:text-[70px] font-bold text-nexia-primary font-poppins leading-tight mb-2">
            Conseil.
          </h2>
        </div>
      </div>
    </section>
  );
}