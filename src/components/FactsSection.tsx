const facts = [
  { number: "608", label: "Lorem Ipsum" },
  { number: "250", label: "Lorem Ipsum" },
  { number: "2,178", label: "Lorem Ipsum" },
  { number: "122", label: "Lorem Ipsum" },
  { number: "25,941", label: "Lorem Ipsum" },
];

export default function FactsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-nexia-primary">Facts about Nexia</h3>
        </div>

        {/* Facts Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {facts.map((fact, index) => (
            <div
              key={index}
              className="bg-nexia-blue text-white p-8 rounded-lg text-center shadow-professional hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
            >
              <p className="text-3xl lg:text-4xl font-bold mb-2">{fact.number}</p>
              <p className="text-white/90 font-medium">{fact.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}