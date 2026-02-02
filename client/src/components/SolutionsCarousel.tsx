import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function SolutionsCarousel() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const solutions = t('solutions.items') as any;

  useEffect(() => {
    if (!autoPlay || !solutions) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % solutions.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [autoPlay, solutions]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + solutions.length) % solutions.length);
    setAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % solutions.length);
    setAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setAutoPlay(false);
  };

  if (!solutions) return null;

  return (
    <section id="solutions" className="py-20 bg-gradient-to-br from-primary-light via-white to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('solutions.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('solutions.subtitle')}
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <div className="relative h-96 md:h-[500px]">
              {solutions.map((solution: any, index: number) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {/* Background Image */}
                  <img
                    src={solution.image || '/images/ai-technology.png'}
                    alt={solution.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>

                  {/* Content */}
                  <div className="absolute inset-0 flex items-center">
                    <div className="container mx-auto px-4 md:px-8">
                      <div className="max-w-lg">
                        <div className="text-5xl mb-4">{solution.icon}</div>
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                          {solution.title}
                        </h3>
                        <p className="text-lg text-gray-200 mb-8">
                          {solution.description}
                        </p>
                        <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors duration-300 font-semibold">
                          {t('solutions.learnMore')}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-lg"
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-lg"
            >
              <ChevronRight className="w-6 h-6 text-foreground" />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {solutions.map((_: any, index: number) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-8 h-3 bg-primary'
                    : 'w-3 h-3 bg-border hover:bg-muted'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Solution Cards */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution: any, index: number) => (
            <div
              key={index}
              onClick={() => goToSlide(index)}
              className={`p-6 rounded-lg cursor-pointer transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white border border-border hover:shadow-md'
              }`}
            >
              <div className="text-3xl mb-3">{solution.icon}</div>
              <h4 className={`font-bold text-lg mb-2 ${index === currentIndex ? 'text-white' : 'text-foreground'}`}>
                {solution.title}
              </h4>
              <p className={`text-sm ${index === currentIndex ? 'text-white/90' : 'text-muted-foreground'}`}>
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
