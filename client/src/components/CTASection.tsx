import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary-dark to-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              准备好开始您的数字化转型之旅了吗？
            </h2>
            <p className="text-xl text-white/90 mb-8">
              联系我们的专业团队，获取定制化的智能制造解决方案
            </p>
            <button className="px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors duration-300 font-bold text-lg inline-flex items-center gap-2 group">
              立即咨询
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              联系我们
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              我们随时准备为您服务，欢迎通过以下方式与我们联系
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <div className="p-8 bg-gradient-to-br from-primary-light to-white rounded-xl border border-border hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">电话</h3>
              <p className="text-muted-foreground mb-4">
                +86-18118166255
              </p>
              <a href="tel:+86-18118166255" className="text-primary hover:text-primary-dark font-semibold">
                立即拨打 →
              </a>
            </div>

            {/* Email */}
            <div className="p-8 bg-gradient-to-br from-primary-light to-white rounded-xl border border-border hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">邮箱</h3>
              <p className="text-muted-foreground mb-4">
                contact@haifei-ai.com
              </p>
              <a href="mailto:contact@haifei-ai.com" className="text-primary hover:text-primary-dark font-semibold">
                发送邮件 →
              </a>
            </div>

            {/* Address */}
            <div className="p-8 bg-gradient-to-br from-primary-light to-white rounded-xl border border-border hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">地址</h3>
              <p className="text-muted-foreground">
                苏州市吴中区胥口镇子胥路333号1栋
              </p>
              <a href="#" className="text-primary hover:text-primary-dark font-semibold">
                查看地图 →
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-primary-light to-white rounded-xl border border-border p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">发送消息</h3>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="您的名字"
                  className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                />
                <input
                  type="email"
                  placeholder="您的邮箱"
                  className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                />
              </div>
              <input
                type="text"
                placeholder="主题"
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
              />
              <textarea
                placeholder="您的消息"
                rows={5}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-300 font-semibold"
              >
                发送消息
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
