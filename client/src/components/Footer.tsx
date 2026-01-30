import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/images/logo.png" 
                alt="海飞智能" 
                className="w-10 h-10 rounded-lg" 
              />
              <span className="text-lg font-bold">海飞智能</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              {t('footer.tagline')}
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-lg font-bold mb-6">{t('footer.solutions')}</h4>
            <ul className="space-y-3">
              {Array.isArray(t('footer.solutions_items')) && (t('footer.solutions_items') as unknown as string[]).map((item: string, index: number) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-bold mb-6">{t('footer.products')}</h4>
            <ul className="space-y-3">
              {Array.isArray(t('footer.products_items')) && (t('footer.products_items') as unknown as string[]).map((item: string, index: number) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* News */}
          <div>
            <h4 className="text-lg font-bold mb-6">{t('footer.news')}</h4>
            <ul className="space-y-3">
              {Array.isArray(t('footer.news_items')) && (t('footer.news_items') as unknown as string[]).map((item: string, index: number) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">{t('footer.contact_info.title')}</h4>
            <ul className="space-y-4">
              <li>
                <p className="text-gray-400 text-sm">{t('footer.contact_info.phone')}</p>
                <a href="tel:+86-18550585900" className="text-white hover:text-primary transition-colors">
                  +86-18550585900
                </a>
              </li>
              <li>
                <p className="text-gray-400 text-sm">{t('footer.contact_info.email')}</p>
                <a href="mailto:haifei.feng@hf-tssl.com" className="text-white hover:text-primary transition-colors">
                  haifei.feng@hf-tssl.com
                </a>
              </li>
              <li>
                <p className="text-gray-400 text-sm">{t('footer.contact_info.address')}</p>
                <p className="text-white">苏州市吴中区胥口镇子胥路333号1栋</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>
              {t('footer.copyright')}
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">{t('footer.links.privacy')}</a>
              <a href="#" className="hover:text-primary transition-colors">{t('footer.links.terms')}</a>
              <a href="#" className="hover:text-primary transition-colors">{t('footer.links.sitemap')}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
