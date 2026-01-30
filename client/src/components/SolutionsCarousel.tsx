import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function SolutionsCarousel() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const solutions = t('solutions.items');

  useEffect(() => {
    if (!autoPlay || !Array.isArray(solutions)) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % solutions.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [autoPlay, solutions]);

  if (!Array.isArray(solutions)) {
    return null;
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + solutions.length) % solutions.length);
    setAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % solutions.length);
    setAutoPlay(false);
  };

  const currentSolution = solutions[currentIndex];

  return (
    <section id="solutions" className="py-20 bg-gradient-to-b from-white to-primary-light/20">
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

        {/* Solutions Grid - Desktop */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group p-6 bg-white rounded-xl border border-border hover:shadow-lg hover:border-primary transition-all duration-300 cursor-pointer hover:-translate-y-1"
              onClick={() => {
                setCurrentIndex(index);
                setAutoPlay(false);
              }}
            >
              <div className="text-4xl mb-4">{solution.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {solution.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {solution.description}
              </p>
            </div>
          ))}
        </div>

        {/* Solutions Carousel - Mobile */}
        <div className="md:hidden">
          <div className="relative bg-white rounded-xl border border-border overflow-hidden">
            {/* Image */}
            <div className="relative h-64 bg-gradient-to-br from-primary-light to-primary-light/50">
              <img
                src={currentSolution.image}
                alt={currentSolution.title}
                className="w-full h-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="text-4xl mb-4">{currentSolution.icon}</div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {currentSolution.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {currentSolution.description}
              </p>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <button
                  onClick={goToPrevious}
                  className="p-2 bg-primary-light text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="flex gap-2">
                  {solutions.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentIndex(index);
                        setAutoPlay(false);
                      }}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentIndex ? 'bg-primary w-8' : 'bg-border'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={goToNext}
                  className="p-2 bg-primary-light text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Carousel */}
        <div className="hidden md:block relative">
          <div className="relative bg-white rounded-xl border border-border overflow-hidden">
            {/* Image */}
            <div className="relative h-96 bg-gradient-to-br from-primary-light to-primary-light/50">
              <img
                src={currentSolution.image}
                alt={currentSolution.title}
                className="w-full h-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent"></div>
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center">
              <div className="w-1/2 p-12 text-white">
                <div className="text-6xl mb-6">{currentSolution.icon}</div>
                <h3 className="text-4xl font-bold mb-4">
                  {currentSolution.title}
                </h3>
                <p className="text-lg opacity-90">
                  {currentSolution.description}
                </p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-white/20 hover:bg-white/40 text-white rounded-full transition-all backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-white/20 hover:bg-white/40 text-white rounded-full transition-all backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
              {solutions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setAutoPlay(false);
                  }}
                  className={`transition-all ${
                    index === currentIndex
                      ? 'w-8 h-2 bg-white rounded-full'
                      : 'w-2 h-2 bg-white/50 rounded-full hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Learn More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-all duration-300 font-semibold">
            {t('solutions.learnMore')}
          </button>
        </div>
      </div>
    </section>
  );
}
