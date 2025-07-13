import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
// import service1 from "@/assets/service-1.jpg";
// import service2 from "@/assets/service-2.jpg";
// import service3 from "@/assets/service-3.jpg";

const insights = [
  {
    image: "/lovable-uploads/39143591-1dc1-4223-a2f1-480dd592d440.png",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "17 January"
  },
  {
    image: "/lovable-uploads/683558d0-ea3d-4016-81a3-c31382efa76b.png",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "17 January"
  },
  {
    image: "/lovable-uploads/36d7db3b-24d7-4f04-aaed-d9f2509146f0.png",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "17 January"
  }
];

export default function LatestInsights() {
  return (
    <section className="nexia-section-padding bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Column - Content */}
        <div className="lg:col-span-1 space-y-6 relative min-h-[300px] lg:min-h-0">
          <h3 className="text-[42px] font-bold text-nexia-primary font-poppins">
            Latest Insights
          </h3>
          <p className="text-nexia-primary font-poppins leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          </p>
          <Button asChild className="nexia-button-outline font-poppins font-medium px-10">
            <Link to="/about">Explore more Insights</Link>
          </Button>
          
          {/* Navigation Controls */}
          <div className="flex gap-2 absolute bottom-0 left-0 lg:relative lg:bottom-auto lg:left-auto pt-4 cursor-pointer">
            <Button variant="ghost" size="icon" className="text-nexia-primary hover:text-nexia-secondary p-0 h-auto w-auto hover:bg-transparent">
              <ChevronLeft className="h-11 w-11" />
            </Button>
            <Button variant="ghost" size="icon" className="text-nexia-primary hover:text-nexia-secondary p-0 h-auto w-auto hover:bg-transparent">
              <ChevronRight className="h-11 w-11" />
            </Button>
          </div>
        </div>

        {/* Right Columns - Insights */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 lg:pt-0">
          {insights.map((insight, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="overflow-hidden mb-5">
                <img
                  src={insight.image}
                  alt={`Insight ${index + 1}`}
                  className="nexia-card-rounded w-full h-[350px] object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="bolder text-nexia-primary font-poppins mb-2 leading-tight group-hover:text-nexia-secondary transition-colors duration-200">
                {insight.title}
              </h4>
              <p className="text-nexia-primary font-poppins text-lg">
                {insight.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}