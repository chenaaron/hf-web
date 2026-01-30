import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t('about.title')}
              <br />
              <span className="text-primary">{t('about.titleHighlight')}</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {t('about.description1')}
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t('about.description2')}
            </p>

            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-all duration-300 font-semibold inline-flex items-center gap-2 group">
              {t('about.learnMore')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Stats */}
          <div className="space-y-8">
            <div className="p-8 bg-gradient-to-br from-primary-light to-white rounded-xl border border-border hover:shadow-lg transition-all duration-300">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <p className="text-lg text-muted-foreground">{t('about.stats.experience')}</p>
            </div>

            <div className="p-8 bg-gradient-to-br from-primary-light to-white rounded-xl border border-border hover:shadow-lg transition-all duration-300">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-lg text-muted-foreground">{t('about.stats.cases')}</p>
            </div>

            <div className="p-8 bg-gradient-to-br from-primary-light to-white rounded-xl border border-border hover:shadow-lg transition-all duration-300">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <p className="text-lg text-muted-foreground">{t('about.stats.team')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
