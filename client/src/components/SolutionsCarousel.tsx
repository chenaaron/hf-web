import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const solutions = [
  {
    id: 1,
    title: '消费电子',
    description: '为消费电子制造企业提供精密自动化和质量检测解决方案',
    image: '/images/ai-technology.png',
    icon: '📱',
  },
  {
    id: 2,
    title: '汽车产业',
    description: '汽车零部件精密加工和装配自动化系统',
    image: '/images/smart-manufacturing.png',
    icon: '🚗',
  },
  {
    id: 3,
    title: '智能工厂',
    description: '完整的工业 4.0 智能工厂解决方案',
    image: '/images/team-collaboration.png',
    icon: '🏭',
  },
  {
    id: 4,
    title: '数据分析',
    description: '生产数据实时监测和智能分析平台',
    image: '/images/data-analytics.png',
    icon: '📊',
  },
];

export default function SolutionsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % solutions.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [autoPlay, solutions.length]);

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

  return (
    <section id="solutions" className="py-20 bg-gradient-to-br from-primary-light via-white to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            核心解决方案
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            涵盖多个行业领域的专业智能制造解决方案
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <div className="relative h-96 md:h-[500px]">
              {solutions.map((solution, index) => (
                <div
                  key={solution.id}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {/* Background Image */}
                  <img
                    src={solution.image}
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
                          了解详情
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
            {solutions.map((_, index) => (
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
          {solutions.map((solution, index) => (
            <div
              key={solution.id}
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