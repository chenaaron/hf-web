import { Calendar, ArrowRight } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    title: '海飞智能荣获 2024 年度最佳创新企业奖',
    excerpt: '在第十五届中国制造业大会上，海飞智能因其在智能制造领域的创新成就荣获最佳创新企业奖。',
    date: '2024-12-15',
    category: '公司动态',
    image: '/images/ai-technology.png',
  },
  {
    id: 2,
    title: '工业 4.0 时代，AI 如何赋能制造业',
    excerpt: '在快速变化的制造业中，人工智能正在成为企业提升竞争力的关键因素。本文探讨了 AI 在制造业的应用。',
    date: '2024-12-10',
    category: '行业资讯',
    image: '/images/smart-manufacturing.png',
  },
  {
    id: 3,
    title: '海飞智能亮相 2024 年亚洲制造技术展',
    excerpt: '海飞智能在展会上展示了最新的智能制造解决方案，吸引了众多行业专家和客户的关注。',
    date: '2024-12-05',
    category: '展会信息',
    image: '/images/data-analytics.png',
  },
];

export default function NewsSection() {
  return (
    <section id="news" className="py-20 bg-gradient-to-br from-white via-primary-light to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            新闻资讯
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            了解海飞智能的最新动态和行业资讯
          </p>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {newsItems.map((news) => (
            <article
              key={news.id}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-white rounded-full text-xs font-semibold">
                    {news.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(news.date).toLocaleDateString('zh-CN')}
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {news.title}
                </h3>

                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {news.excerpt}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center text-primary hover:text-primary-dark font-semibold group/link"
                >
                  阅读更多
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300 font-semibold">
            查看全部新闻
          </button>
        </div>
      </div>
    </section>
  );
}
