import { Button } from "@/components/ui/button";

export default function GovernanceSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Section Title */}
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-bold text-nexia-primary">Governance</h3>
          </div>

          {/* Content */}
          <div className="lg:col-span-2 space-y-6">
            <p className="text-nexia-primary leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <p className="text-nexia-primary leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="pt-4">
              <p className="font-semibold text-nexia-primary mb-3">
                Lorem ipsum dolor sit amet:
              </p>
              <ul className="space-y-2 text-nexia-primary">
                <li>– Lorem ipsum dolor sit amet</li>
                <li>– Lorem ipsum dolor sit amet</li>
                <li>– Lorem ipsum dolor sit amet</li>
                <li>– Lorem ipsum dolor sit amet</li>
              </ul>
            </div>

            <div className="pt-6">
              <Button variant="professional" size="lg">
                Discover more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}