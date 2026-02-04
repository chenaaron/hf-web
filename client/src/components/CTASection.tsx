import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';

export default function CTASection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitMessage('');

    try {
      const response = await fetch('http://117.50.46.168:83/api/v1/clues', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          title: formData.title,
          message: formData.message
        })
      });

      if (response.ok) {
        setSubmitMessage(t('Send message success!') || 'Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          title: '',
          message: ''
        });
        setTimeout(() => {
          setSubmitMessage('');
        }, 1500);
      } else {
        setSubmitMessage(t('contact.form.error') || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitMessage(t('contact.form.error') || 'Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary-dark to-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-xl text-white/90 mb-8">
              {t('cta.subtitle')}
            </p>
            <button className="px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors duration-300 font-bold text-lg inline-flex items-center gap-2 group">
              {t('cta.button')}
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
              {t('contact.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <div className="p-8 bg-gradient-to-br from-primary-light to-white rounded-xl border border-border hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{t('contact.phone')}</h3>
              <p className="text-muted-foreground mb-4">
                +86-18550585900
              </p>
              <a href="tel:+86-18550585900" className="text-primary hover:text-primary-dark font-semibold">
                {t('contact.callNow')} →
              </a>
            </div>

            {/* Email */}
            <div className="p-8 bg-gradient-to-br from-primary-light to-white rounded-xl border border-border hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{t('contact.email')}</h3>
              <p className="text-muted-foreground mb-4">
                haifei.feng@hf-tssl.com
              </p>
              <a href="mailto:haifei.feng@hf-tssl.com" className="text-primary hover:text-primary-dark font-semibold">
                {t('contact.sendEmail')} →
              </a>
            </div>

            {/* Address */}
            <div className="p-8 bg-gradient-to-br from-primary-light to-white rounded-xl border border-border hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{t('contact.address')}</h3>
              <p className="text-muted-foreground">
                苏州市吴中区胥口镇子胥路333号1栋
              </p>
              <a href="#" className="text-primary hover:text-primary-dark font-semibold">
                {t('contact.viewMap')} →
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-primary-light to-white rounded-xl border border-border p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">{t('contact.form.title')}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={t('contact.form.name')}
                  className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={t('contact.form.email')}
                  className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                  required
                />
              </div>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder={t('contact.form.subject')}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder={t('contact.form.message')}
                rows={5}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white resize-none"
                required
              ></textarea>
              {submitMessage && (
                <div className={`px-4 py-3 rounded-lg text-center font-semibold ${
                  submitMessage.includes('successfully') 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {submitMessage}
                </div>
              )}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (t('contact.form.sending') || 'Sending...') : t('contact.form.submit')}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
