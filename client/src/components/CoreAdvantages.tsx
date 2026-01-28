import { Zap, Cpu, Users, Award } from 'lucide-react';

const advantages = [
  {
    icon: Zap,
    title: '智能制造的核心',
    description: '自动化行业支持许多不同行业。海飞智能始终致力于高端自动化设备和智能制造解决方案。',
  },
  {
    icon: Cpu,
    title: '先进的技术',
    description: '我们将 AI 和制造云系统从单个机器集中到特定功能再到完整的生产线中，提供全方位解决方案。',
  },
  {
    icon: Users,
    title: '国际化的团队',
    description: '国际研发团队和服务团队是海飞智能的强大后备力量，为全球客户提供专业支持。',
  },
  {
    icon: Award,
    title: '优质的服务',
    description: '我们拥有不同国家的服务团队，及时为客户提供全面的技术支持和解决方案。',
  },
];

export default function CoreAdvantages() {
  return (
    <section id="advantages" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            为什么选择海飞智能
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            我们提供业界领先的智能制造解决方案，帮助企业实现数字化转型和效率提升
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
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
