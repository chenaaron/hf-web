export default function AboutSection() {
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
            />
          </div>

          {/* Right - Content */}
          <div>
            <div className="mb-6">
              <span className="px-4 py-2 bg-primary-light text-primary rounded-full text-sm font-semibold inline-block">
                关于我们
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              引领智能制造
              <br />
              <span className="text-primary">创新未来</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              海飞智能成立于 2025 年，是一家专注于智能制造的高新技术企业。团队经过十多年的不断创新和发展，我们已成为业界领先的智能制造解决方案提供商。
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              我们致力于为全球制造企业提供先进的自动化设备、高精密检测系统、工业视觉系统和人机交互系统等全方位的智能制造解决方案。从消费电子、汽车产业、到智能工厂，我们的解决方案已成功应用于多个行业领域。
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="p-4 bg-primary-light rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <p className="text-sm text-foreground font-semibold">年行业经验</p>
              </div>
              <div className="p-4 bg-primary-light rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <p className="text-sm text-foreground font-semibold">成功案例</p>
              </div>
              <div className="p-4 bg-primary-light rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <p className="text-sm text-foreground font-semibold">专业团队</p>
              </div>
            </div>

            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors duration-300 font-semibold">
              了解更多
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
