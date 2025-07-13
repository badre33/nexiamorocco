import { useState } from "react";

export default function OurServicesMenu() {
  const [activeService, setActiveService] = useState("audit");

  const services = {
    audit: {
      title: "Audit",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      items: ["IFRS", "Integrated Reporting"]
    },
    tax: {
      title: "Tax",
      description: "Comprehensive tax advisory and compliance services for businesses of all sizes.",
      items: ["Corporate Tax", "International Tax", "Tax Planning"]
    },
    advisory: {
      title: "Advisory", 
      description: "Strategic business advisory services to help your organization grow and succeed.",
      items: ["Business Consulting", "Risk Management", "Financial Advisory"]
    }
  };

  return (
    <section className="py-16 bg-nexia-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-nexia-secondary mb-4">Our Services</p>
        <h2 className="text-white font-bold text-3xl lg:text-4xl xl:text-5xl mb-12 leading-tight">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {Object.entries(services).map(([key, service]) => (
            <div 
              key={key}
              className={`cursor-pointer transition-all duration-300 ${
                activeService === key ? 'opacity-100' : 'opacity-70 hover:opacity-90'
              }`}
              onClick={() => setActiveService(key)}
            >
              <h3 className={`text-center text-xl font-bold mb-4 ${
                activeService === key 
                  ? 'text-nexia-secondary border-b-2 border-nexia-secondary pb-2' 
                  : 'text-white'
              }`}>
                {service.title}
              </h3>
              
              {activeService === key && (
                <div className="animate-fade-in">
                  <p className="text-white mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.items.map((item, index) => (
                      <p key={index} className="text-white/90">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}