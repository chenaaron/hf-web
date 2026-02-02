import { Zap, Cpu, Users, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const icons = [Zap, Cpu, Users, Award];

export default function CoreAdvantages() {
  const { t } = useLanguage();

  const advantages = t('advantages.items') as any;

  return (
    <section id="advantages" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('advantages.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('advantages.subtitle')}
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages && advantages.map((advantage: any, index: number) => {
            const Icon = icons[index];
            return (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-white to-primary-light rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-dark transition-colors">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {advantage.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {advantage.description}
                </p>

                {/* Accent Line */}
                <div className="mt-6 h-1 w-0 bg-gradient-to-r from-primary to-primary-dark group-hover:w-full transition-all duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
