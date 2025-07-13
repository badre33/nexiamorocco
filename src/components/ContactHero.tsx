// import heroBackground from "@/assets/hero-background.jpg";

export default function ContactHero() {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/cd1d5d63-1fdb-4d40-9016-a19aaeb69709.png"
          alt="Contact us hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-nexia-primary/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-professional">
          <h1 className="text-4xl lg:text-5xl font-bold text-nexia-primary mb-8">
            Contact Us
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Address Column */}
            <div className="space-y-2">
              <p className="text-nexia-primary">Address 1</p>
              <p className="text-nexia-primary">Address 2</p>
              <p className="text-nexia-primary">City, State ZIP</p>
              <p className="text-nexia-primary">Country</p>
            </div>

            {/* Contact Details Column */}
            <div className="space-y-2">
              <p className="text-nexia-primary">Tel: +00 (0)55 5555 5555</p>
              <p className="text-nexia-primary mb-4">Fax: +00 (0)55 5555 5555</p>
              <p className="text-nexia-primary">
                Email: <a href="mailto:info@nexiamemberfirm.com" className="text-nexia-secondary hover:underline">info@nexiamemberfirm.com</a>
              </p>
              <p className="text-nexia-primary">
                Web: <a href="https://www.nexiamemberfirm.com" className="text-nexia-secondary hover:underline">www.nexiamemberfirm.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}