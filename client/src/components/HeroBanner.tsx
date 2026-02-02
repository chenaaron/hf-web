import { ArrowRight } from 'lucide-react';

export default function HeroBanner() {
  return (
    <section id="home" className="relative w-full h-screen min-h-[600px] overflow-hidden bg-gradient-to-br from-primary-light via-white to-blue-50">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-banner.png"
          alt="Hero Banner"
          className="w-full h-full object-cover opacity-70"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <div className="mb-6 inline-block">
            <span className="px-4 py-2 bg-primary-light text-primary rounded-full text-sm font-semibold">
              🚀 智能制造解决方案
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            驱动未来的
            <br />
            <span className="text-primary">AI 智能制造</span>
          </h1>

          <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
            海飞智能致力于为全球制造企业提供先进的人工智能和自动化解决方案，赋能产业升级，驱动数字化转型。
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-all duration-300 font-semibold flex items-center justify-center gap-2 group">
              立即咨询
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary-light transition-all duration-300 font-semibold">
              了解更多
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 pt-8 border-t border-border">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <p className="text-sm text-muted-foreground">成功案例</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <p className="text-sm text-muted-foreground">年行业经验</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <p className="text-sm text-muted-foreground">专业团队</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-2 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}