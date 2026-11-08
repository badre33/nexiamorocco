import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { useSimpleLanguage } from "@/hooks/useSimpleLanguage";
import { articleData, ArticleSection } from "@/data/articleData";

function renderSection(section: ArticleSection, idx: number, lang: "fr" | "en") {
  switch (section.type) {
    case "intro":
      return (
        <p key={idx} className="text-xl text-gray-600 mb-8 font-medium">
          {section.text}
        </p>
      );
    case "paragraph":
      return (
        <p key={idx} className="mb-6 leading-relaxed">
          {section.text}
        </p>
      );
    case "h2":
      return (
        <h2 key={idx} className="text-3xl font-bold text-nexia-primary mt-12 mb-6">
          {section.text}
        </h2>
      );
    case "h3":
      return (
        <h3 key={idx} className="text-xl font-semibold text-gray-800 mt-8 mb-4">
          {section.text}
        </h3>
      );
    case "bullets":
      return (
        <div key={idx} className="bg-gray-50 p-6 rounded-lg mb-8">
          <ul className="space-y-3">
            {section.items.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-nexia-primary font-bold mt-1 flex-shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    case "table":
      return (
        <div key={idx} className="overflow-x-auto mb-8">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-nexia-primary text-white">
                {section.headers.map((h, i) => (
                  <th key={i} className="px-4 py-3 text-left font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.rows.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  {row.map((cell, j) => (
                    <td key={j} className="px-4 py-3 border-b border-gray-200">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "callout":
      return (
        <div key={idx} className="bg-nexia-primary/5 border-l-4 border-nexia-primary p-6 my-8 rounded-r-lg">
          <p className="text-gray-700 italic">{section.text}</p>
        </div>
      );
    case "cta":
      return (
        <div key={idx} className="mt-16 bg-nexia-primary text-white p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">{section.title}</h3>
          <p className="mb-6 text-white/90">{section.description}</p>
          <Button asChild variant="secondary" size="lg">
            <Link to="/contact">{section.button}</Link>
          </Button>
        </div>
      );
    default:
      return null;
  }
}

export default function InsightArticle() {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useSimpleLanguage();
  const lang = (language as "fr" | "en") || "fr";

  if (!slug || !articleData[slug]) {
    return <Navigate to="/perspectives-mondiales" replace />;
  }

  const article = articleData[slug];

  useEffect(() => {
    const id = "article-schema";
    document.getElementById(id)?.remove();
    const script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title[lang],
      description: article.description[lang],
      image: article.image,
      datePublished: article.isoDate ?? article.date.fr,
      author: {
        "@type": "Person",
        name: article.author,
      },
      publisher: {
        "@type": "Organization",
        name: "Nexia Morocco",
        url: "https://nexiamorocco.com",
        logo: {
          "@type": "ImageObject",
          url: "https://nexiamorocco.com/nexia-logo.png",
        },
      },
      inLanguage: lang === "fr" ? "fr-MA" : "en",
      url: `https://nexiamorocco.com/perspectives-mondiales/${slug}/`,
    });
    document.head.appendChild(script);
    return () => { document.getElementById(id)?.remove(); };
  }, [slug, lang, article]);

  const t = {
    backLink: lang === "fr" ? "Retour aux Perspectives Mondiales" : "Back to Global Perspectives",
    readTime: lang === "fr" ? "de lecture" : "read",
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Article Header */}
      <section className="py-16 bg-nexia-primary">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Link
            to="/perspectives-mondiales"
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t.backLink}
          </Link>
          <div className="mb-4">
            <span className="inline-block bg-white/20 text-white text-sm px-3 py-1 rounded-full">
              {article.category[lang]}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {article.title[lang]}
          </h1>
          <div className="flex flex-wrap items-center gap-4 md:gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{article.date[lang]}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>
                {article.readTime[lang]} {t.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          {/* Featured Image */}
          <div className="mb-12">
            <img
              src={article.image}
              alt={article.title[lang]}
              className="w-full h-72 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            {article.sections[lang].map((section, idx) =>
              renderSection(section, idx, lang)
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
