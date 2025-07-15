import Header from "@/components/Header";
import ContactHero from "@/components/ContactHero";
import ContactMap from "@/components/ContactMap";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ContactHero />
        <ContactMap />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;