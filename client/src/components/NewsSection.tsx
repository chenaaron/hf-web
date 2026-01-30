import { Calendar, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function NewsSection() {
  const { t } = useLanguage();
  const newsItems = t('news.items');

  return (
    <section id="news" className="py-20 bg-gradient-to-b from-white to-primary-light/10">
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
        {Array.isArray(newsItems) && (
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {newsItems.map((item, index) => (
              <article
                key={index}
                className="group bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary-light to-primary-light/50 overflow-hidden">
                  <img
                    src={item.image || '/images/ai-technology.png'}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category and Date */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-primary-light text-primary rounded-full text-xs font-semibold">
                      {item.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {item.date}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Read More Link */}
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold text-sm group/link"
                  >
                    {t('news.readMore')}
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* View All Button */}
        <div className="text-center">
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-all duration-300 font-semibold">
            {t('news.viewAll')}
          </button>
        </div>
      </div>
    </section>
  );
}
