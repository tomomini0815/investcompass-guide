import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/features/HeroSection";
import InvestmentDiagnostic from "@/components/features/InvestmentDiagnostic";
import CategoryCard from "@/components/features/CategoryCard";
import RankingCard from "@/components/features/RankingCard";
import ArticleCard from "@/components/features/ArticleCard";
import { TrendingUp, BookOpen, Calculator, PieChart, LineChart, Coins } from "lucide-react";

const Index = () => {
  const categories = [
    {
      icon: BookOpen,
      title: "投資の基礎知識",
      description: "投資を始める前に知っておくべき基本を解説",
      href: "/guide/basics",
      color: "primary" as const,
    },
    {
      icon: TrendingUp,
      title: "株式投資",
      description: "個別株の選び方から取引方法まで",
      href: "/guide/stocks",
      color: "secondary" as const,
    },
    {
      icon: PieChart,
      title: "NISA・つみたてNISA",
      description: "非課税制度を活用した投資術",
      href: "/guide/nisa-beginner",
      color: "accent" as const,
    },
    {
      icon: LineChart,
      title: "投資信託",
      description: "プロに運用を任せる投資方法",
      href: "/guide/investment-trust",
      color: "primary" as const,
    },
    {
      icon: Coins,
      title: "仮想通貨",
      description: "暗号資産の基礎から取引まで",
      href: "/guide/crypto",
      color: "secondary" as const,
    },
    {
      icon: Calculator,
      title: "投資計算ツール",
      description: "複利計算やシミュレーション",
      href: "/tools",
      color: "accent" as const,
    },
  ];

  const rankings = [
    {
      rank: 1,
      name: "SBI証券",
      features: [
        "国内株式売買手数料が業界最安水準",
        "取扱商品が豊富で初心者にも最適",
        "Tポイントで投資が可能",
      ],
      commission: "0円〜",
      minInvestment: "100円〜",
      nisaSupport: true,
      highlight: "総合1位",
    },
    {
      rank: 2,
      name: "楽天証券",
      features: [
        "楽天ポイントが貯まる・使える",
        "取引ツールが使いやすい",
        "楽天銀行との連携でお得",
      ],
      commission: "0円〜",
      minInvestment: "100円〜",
      nisaSupport: true,
      highlight: "ポイント還元No.1",
    },
    {
      rank: 3,
      name: "マネックス証券",
      features: [
        "米国株の取扱銘柄数が豊富",
        "投資情報・レポートが充実",
        "クレカ積立で1.1%ポイント還元",
      ],
      commission: "0円〜",
      minInvestment: "100円〜",
      nisaSupport: true,
      highlight: "米国株取引におすすめ",
    },
  ];

  const articles = [
    {
      id: "nisa-beginner",
      title: "【2024年最新版】NISA完全ガイド：初心者が知るべき全て",
      excerpt: "新NISAが始まり、より使いやすくなった非課税制度。制度の概要から活用方法まで徹底解説します。",
      category: "NISA",
      readTime: "8分",
      date: "2024年1月15日",
    },
    {
      id: "stocks-beginner",
      title: "株式投資の始め方：証券口座開設から銘柄選びまで",
      excerpt: "株式投資を始めたい方へ。口座開設の手順から最初の銘柄選びまで、わかりやすく解説します。",
      category: "株式投資",
      readTime: "10分",
      date: "2024年1月12日",
    },
    {
      id: "investment-trust",
      title: "投資信託とは？メリット・デメリットと選び方のポイント",
      excerpt: "投資信託の基本から、自分に合った商品の選び方まで詳しく説明します。",
      category: "投資信託",
      readTime: "7分",
      date: "2024年1月10日",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Investment Diagnostic */}
        <InvestmentDiagnostic />

        {/* Categories */}
        <section className="py-16 container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">投資カテゴリーから探す</h2>
            <p className="text-muted-foreground">
              あなたの興味のある投資商品を選んで、詳しく学びましょう
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div key={category.title} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CategoryCard {...category} />
              </div>
            ))}
          </div>
        </section>

        {/* Securities Ranking */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">証券会社おすすめランキング</h2>
              <p className="text-muted-foreground">
                人気の証券会社を徹底比較。あなたに最適な証券会社を見つけましょう
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {rankings.map((ranking) => (
                <RankingCard key={ranking.rank} {...ranking} />
              ))}
            </div>
          </div>
        </section>

        {/* Popular Articles */}
        <section className="py-16 container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">人気の投資ガイド記事</h2>
            <p className="text-muted-foreground">
              投資の基礎から実践まで、役立つ情報をお届けします
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
