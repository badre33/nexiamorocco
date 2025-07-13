import aboutVideoThumbnail from "@/assets/about-video-thumbnail.jpg";

export default function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* About Us Text */}
        <div className="text-center mb-16">
          <p className="text-nexia-primary font-semibold text-sm uppercase tracking-wide mb-4">
            About Us
          </p>
          <p className="text-nexia-primary text-lg max-w-3xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Video Placeholder */}
        <div className="relative rounded-lg overflow-hidden shadow-professional hover:shadow-hover transition-shadow duration-300">
          <img
            src={aboutVideoThumbnail}
            alt="About video thumbnail"
            className="w-full h-[400px] lg:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors duration-200 cursor-pointer">
              <div className="w-0 h-0 border-l-8 border-l-nexia-primary border-t-6 border-t-transparent border-b-6 border-b-transparent ml-1"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}