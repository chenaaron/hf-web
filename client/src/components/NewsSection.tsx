import { Calendar, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function NewsSection() {
  const { t } = useLanguage();
  const newsItems = t('news.items') as any;

  return (
    <section id="news" className="py-20 bg-gradient-to-br from-white via-primary-light to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('news.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('news.subtitle')}
          </p>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {newsItems && newsItems.map((news: any) => (
            <article
              key={news.date}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src="/images/ai-technology.png"
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-white rounded-full text-xs font-semibold">
                    {news.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {news.date}
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {news.title}
                </h3>

                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {news.description}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center text-primary hover:text-primary-dark font-semibold group/link"
                >
                  {t('news.readMore')}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300 font-semibold">
            {t('news.viewAll')}
          </button>
        </div>
      </div>
    </section>
  );
}
