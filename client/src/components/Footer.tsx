import { Facebook, Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/images/logo.png" 
                alt="海飞智能" 
                className="w-8 h-8 rounded-lg" 
              />
              <span className="text-lg font-bold">海飞智能</span>
            </div>
            <p className="text-gray-300 mb-6">
              致力于为全球制造企业提供先进的人工智能和自动化解决方案。
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">快速链接</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-primary transition-colors">首页</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-primary transition-colors">关于我们</a></li>
              <li><a href="#solutions" className="text-gray-300 hover:text-primary transition-colors">解决方案</a></li>
              <li><a href="#news" className="text-gray-300 hover:text-primary transition-colors">新闻资讯</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-primary transition-colors">联系我们</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-lg font-bold mb-6">解决方案</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">消费电子</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">汽车产业</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">智能工厂</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">数据分析</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">联系信息</h4>
            <ul className="space-y-4">
              <li>
                <p className="text-gray-400 text-sm">电话</p>
                <a href="tel:+86-18550585900" className="text-white hover:text-primary transition-colors">
                  +86-18550585900
                </a>
              </li>
              <li>
                <p className="text-gray-400 text-sm">邮箱</p>
                <a href="mailto:haifei.feng@hf-tssl.com" className="text-white hover:text-primary transition-colors">
                  haifei.feng@hf-tssl.com
                </a>
              </li>
              <li>
                <p className="text-gray-400 text-sm">地址</p>
                <p className="text-white">苏州市吴中区胥口镇子胥路333号1栋</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>
              &copy; 2026 海飞智能. 保留所有权利。
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">隐私政策</a>
              <a href="#" className="hover:text-primary transition-colors">服务条款</a>
              <a href="#" className="hover:text-primary transition-colors">网站地图</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}