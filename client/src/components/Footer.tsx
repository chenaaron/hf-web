import { Facebook, Twitter, Linkedin, Github } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

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
              {t('footer.company.description')}
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
            <h4 className="text-lg font-bold mb-6">{t('footer.quickLinks.title')}</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-primary transition-colors">{t('nav.home')}</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-primary transition-colors">{t('nav.about')}</a></li>
              <li><a href="#solutions" className="text-gray-300 hover:text-primary transition-colors">{t('nav.solutions')}</a></li>
              <li><a href="#news" className="text-gray-300 hover:text-primary transition-colors">{t('nav.news')}</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-primary transition-colors">{t('nav.contact')}</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-lg font-bold mb-6">{t('footer.solutions.title')}</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">{t('solutions.items.0.title')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">{t('solutions.items.1.title')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">{t('solutions.items.2.title')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">{t('solutions.items.3.title')}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">{t('footer.contact.title')}</h4>
            <ul className="space-y-4">
              <li>
                <p className="text-gray-400 text-sm">{t('contact.phone')}</p>
                <a href="tel:+86-18550585900" className="text-white hover:text-primary transition-colors">
                  +86-18550585900
                </a>
              </li>
              <li>
                <p className="text-gray-400 text-sm">{t('contact.email')}</p>
                <a href="mailto:haifei.feng@hf-tssl.com" className="text-white hover:text-primary transition-colors">
                  haifei.feng@hf-tssl.com
                </a>
              </li>
              <li>
                <p className="text-gray-400 text-sm">{t('contact.address')}</p>
                <p className="text-white">苏州市吴中区胥口镇子胥路333号1栋</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>
              &copy; 2026 海飞智能. {t('footer.copyright')}
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">{t('footer.privacy')}</a>
              <a href="#" className="hover:text-primary transition-colors">{t('footer.terms')}</a>
              <a href="#" className="hover:text-primary transition-colors">{t('footer.sitemap')}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
