import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import insight1 from "@/assets/insight-1.jpg";
import insight2 from "@/assets/insight-2.jpg";
import insight3 from "@/assets/insight-3.jpg";

export default function RelatedInsights() {
  const insights = [
    {
      image: insight1,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "17 January"
    },
    {
      image: insight2,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "17 January"
    },
    {
      image: insight3,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "17 January"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Column - Title and Controls */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-nexia-primary">
              Related Insights
            </h3>
            <p className="text-nexia-primary leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            </p>
            <Button asChild variant="professional" size="lg">
              <Link to="/insights">Explore more Insights</Link>
            </Button>
            
            <div className="flex items-center gap-4 pt-4">
              <button className="p-3 hover:bg-gray-100 rounded-full transition-colors">
                <ChevronLeft className="w-6 h-6 text-nexia-primary" />
              </button>
              <button className="p-3 hover:bg-gray-100 rounded-full transition-colors">
                <ChevronRight className="w-6 h-6 text-nexia-primary" />
              </button>
            </div>
          </div>

          {/* Right Columns - Insight Cards */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {insights.map((insight, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="mb-4 overflow-hidden rounded-lg">
                    <img
                      src={insight.image}
                      alt={insight.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <p className="font-bold text-nexia-primary mb-2 leading-tight group-hover:text-nexia-secondary transition-colors">
                    {insight.title}
                  </p>
                  <p className="text-nexia-primary text-sm">
                    {insight.date}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}