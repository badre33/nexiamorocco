import { ChevronLeft, ChevronRight } from "lucide-react";
import testimonialAvatar from "@/assets/testimonial-avatar.jpg";

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-nexia-primary font-bold text-lg mb-6">
          What they say
        </p>
        
        <blockquote className="text-2xl lg:text-3xl font-bold text-nexia-primary mb-12 leading-relaxed">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        </blockquote>

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <img
              src={testimonialAvatar}
              alt="Testimonial author"
              className="w-24 h-24 rounded-full object-cover"
            />
            <div>
              <p className="font-bold text-nexia-primary text-lg">
                Name, Job Title
              </p>
              <p className="text-nexia-primary">
                Firm Name, Country
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-3 hover:bg-gray-100 rounded-full transition-colors">
              <ChevronLeft className="w-6 h-6 text-nexia-primary" />
            </button>
            <button className="p-3 hover:bg-gray-100 rounded-full transition-colors">
              <ChevronRight className="w-6 h-6 text-nexia-primary" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}