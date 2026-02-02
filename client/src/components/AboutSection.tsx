import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-light rounded-2xl transform -rotate-3"></div>
            <img
              src="/images/team-collaboration.png"
              alt="About Haifei AI"
              className="relative rounded-2xl shadow-xl w-full h-auto"
              loading="lazy"
            />
          </div>

          {/* Right - Content */}
          <div>
            <div className="mb-6">
              <span className="px-4 py-2 bg-primary-light text-primary rounded-full text-sm font-semibold inline-block">
                {t('nav.about')}
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
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

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="p-4 bg-primary-light rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <p className="text-sm text-foreground font-semibold">{t('about.stats.experience')}</p>
              </div>
              <div className="p-4 bg-primary-light rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <p className="text-sm text-foreground font-semibold">{t('about.stats.cases')}</p>
              </div>
              <div className="p-4 bg-primary-light rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <p className="text-sm text-foreground font-semibold">{t('about.stats.team')}</p>
              </div>
            </div>

            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors duration-300 font-semibold">
              {t('about.learnMore')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
