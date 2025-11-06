import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/features/HeroSection";
import InvestmentDiagnostic from "@/components/features/InvestmentDiagnostic";
import CategoryCard from "@/components/features/CategoryCard";
import RankingCard from "@/components/features/RankingCard";
import ArticleCard from "@/components/features/ArticleCard";
import { TrendingUp, BookOpen, Calculator, PieChart, LineChart, Coins } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();
  const hasScrolledRef = useRef(false);
  const categories = [
    {
      icon: BookOpen,
      title: "投資の基礎知識",
      description: "投資を始める前に知っておくべき基本を解説",
      href: "/basics",
      color: "primary" as const,
    },
    {
      icon: TrendingUp,
      title: "株式投資",
      description: "個別株の選び方から取引方法まで",
      href: "/stocks",
      color: "secondary" as const,
    },
    {
      icon: PieChart,
      title: "NISA・つみたてNISA",
      description: "非課税制度を活用した投資術",
      href: "/nisa",
      color: "accent" as const,
    },
    {
      icon: LineChart,
      title: "投資信託",
      description: "プロに運用を任せる投資方法",
      href: "/investment-trust",
      color: "primary" as const,
    },
    {
      icon: Coins,
      title: "暗号資産",
      description: "暗号資産の基礎から取引まで",
      href: "/crypto",
      color: "secondary" as const,
    },
    {
      icon: Calculator,
      title: "投資計算ツール",
      description: "複利計算やシミュレーション",
      href: "/tools-detail",
      color: "accent" as const,
    },
  ];

  const rankings = [
    {
      rank: 1,
      name: "SBI証券",
      features: [
        "国内株式・米国株式手数料が業界最安水準（0円）",
        "取扱商品が豊富で初心者にも最適",
        "Tポイント・Vポイントで投資が可能",
      ],
      commission: "国内株式:0円/米国株式:0円",
      minInvestment: "投資信託:100円〜",
      nisaSupport: true,
      highlight: "総合1位",
      affiliateUrl: "https://www.sbisec.co.jp/",
    },
    {
      rank: 2,
      name: "楽天証券",
      features: [
        "楽天ポイントが貯まる・使える",
        "取引ツールが使いやすい",
        "楽天銀行との連携でお得",
      ],
      commission: "国内株式:0円/米国株式:0.495%",
      minInvestment: "投資信託:100円〜",
      nisaSupport: true,
      highlight: "ポイント還元No.1",
      affiliateUrl: "https://www.rakuten-sec.co.jp/",
    },
    {
      rank: 3,
      name: "マネックス証券",
      features: [
        "米国株の取扱銘柄数が豊富",
        "投資情報・レポートが充実",
        "dポイントで1.1%ポイント還元",
      ],
      commission: "国内株式:55円〜/米国株式:無料キャッシュバック",
      minInvestment: "投資信託:100円〜",
      nisaSupport: true,
      highlight: "米国株取引におすすめ",
      affiliateUrl: "https://www.monex.co.jp/",
    },
  ];

  // 国内暗号資産取引所ランキング
  const domesticCryptoExchanges = [
    {
      rank: 1,
      name: "GMOコイン",
      features: [
        "入金・出金・送金手数料が無料",
        "国内最多の暗号資産取り扱い",
        "初心者から上級者まで利用可能",
      ],
      commission: "取引手数料:無料〜0.15%",
      minInvestment: "1円〜",
      nisaSupport: false,
      highlight: "手数料最安",
      affiliateUrl: "https://coin.z.com/jp/",
    },
    {
      rank: 2,
      name: "Coincheck",
      features: [
        "ビットコイン取引所手数料が無料",
        "500円から始められる",
        "日本円入出金に対応",
      ],
      commission: "入金:770円〜/出金:407円",
      minInvestment: "500円〜",
      nisaSupport: false,
      highlight: "初心者向け",
      affiliateUrl: "https://coincheck.com/ja/",
    },
    {
      rank: 3,
      name: "bitFlyer",
      features: [
        "国内ビットコイン取引量9年連続No.1",
        "すべての銘柄が1円から購入可能",
        "住信SBIネット銀行との連携",
      ],
      commission: "取引手数料:0.01〜0.15%",
      minInvestment: "1円〜",
      nisaSupport: false,
      highlight: "実績No.1",
      affiliateUrl: "https://bitflyer.com/ja-jp/",
    },
  ];

  // 国内FX業者ランキング
  const domesticFxBrokers = [
    {
      rank: 1,
      name: "外為どっとコム",
      features: [
        "業界最狭水準のスプレッド（米ドル/円:0.2銭）",
        "豊富なマーケット情報と分析ツール",
        "初心者向けコンテンツが充実",
      ],
      commission: "取引手数料:無料",
      minInvestment: "1,000通貨〜",
      nisaSupport: false,
      highlight: "総合1位",
      affiliateUrl: "https://www.gaitameonline.com/",
    },
    {
      rank: 2,
      name: "DMMfx",
      features: [
        "DMMグループ傘下のFX業者",
        "スプレッドが適度に狭く、スキャルピングも可能",
        "独自の取引ツール「DMM FX Viewer」が特徴",
      ],
      commission: "取引手数料:無料",
      minInvestment: "1,000通貨〜",
      nisaSupport: false,
      highlight: "ツール使いやすさNo.1",
      affiliateUrl: "https://fx.dmm.com/",
    },
    {
      rank: 3,
      name: "GMOクリック証券",
      features: [
        "スワップポイントが業界最高水準",
        "株式やCFDなど他の商品との連携が可能",
        "少額取引から大口取引まで対応",
      ],
      commission: "取引手数料:無料",
      minInvestment: "1,000通貨〜",
      nisaSupport: false,
      highlight: "スワップポイントNo.1",
      affiliateUrl: "https://www.click-sec.com/corp/guide/fxneo/",
    },
  ];

  // 国外FX業者ランキング
  const internationalFxBrokers = [
    {
      rank: 1,
      name: "Interactive Brokers",
      features: [
        "世界中の市場にアクセス可能で、手数料が非常に安い",
        "プロ向けの高度な取引ツールを提供",
        "スキャルピングも可能",
      ],
      commission: "取引手数料:$0.5/100株",
      minInvestment: "$0",
      nisaSupport: false,
      highlight: "世界最大",
      affiliateUrl: "https://www.interactivebrokers.com/",
    },
    {
      rank: 2,
      name: "IG証券",
      features: [
        "日本語対応が充実し、初心者にも使いやすい",
        "通貨ペア数が多く、スキャルピングも可能",
        "教育コンテンツも豊富",
      ],
      commission: "取引手数料:取引画面で確認",
      minInvestment: "1万通貨",
      nisaSupport: false,
      highlight: "使いやすい",
      affiliateUrl: "https://www.ig.com/jp",
    },
    {
      rank: 3,
      name: "XM",
      features: [
        "ゼロスプレッドプランが人気",
        "最低取引単位が小さく、初心者にも使いやすい",
        "スキャルピングも可能",
      ],
      commission: "取引手数料:0.0 pips",
      minInvestment: "$5",
      nisaSupport: false,
      highlight: "初心者向け",
      affiliateUrl: "https://www.xm.com/",
    },
  ];

  // 国外暗号資産取引所ランキング
  const internationalCryptoExchanges = [
    {
      rank: 1,
      name: "Binance",
      features: [
        "世界最大級の暗号資産取引所",
        "300種類以上の取引銘柄",
        "レバレッジ取引に対応",
      ],
      commission: "取引手数料:0.1%",
      minInvestment: "1ドル〜",
      nisaSupport: false,
      highlight: "世界最大",
      affiliateUrl: "https://www.binance.com/ja",
    },
    {
      rank: 2,
      name: "Bybit",
      features: [
        "使いやすいアプリとリーズナブルな手数料",
        "35種類の取扱仮想通貨",
        "入金手数料無料",
      ],
      commission: "取引手数料:0.1%",
      minInvestment: "500円相当額〜",
      nisaSupport: false,
      highlight: "使いやすい",
      affiliateUrl: "https://www.bybit.com/ja-JP/",
    },
    {
      rank: 3,
      name: "Coinbase",
      features: [
        "アメリカ最大の仮想通貨取引所",
        "初心者にも使いやすいインターフェース",
        "セキュリティ対策が充実",
      ],
      commission: "取引手数料:約1.99%",
      minInvestment: "1ドル〜",
      nisaSupport: false,
      highlight: "信頼性高",
      affiliateUrl: "https://www.coinbase.com/ja",
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

  const [activeTab, setActiveTab] = useState<"domestic" | "international">("domestic");
  const [activeFxTab, setActiveFxTab] = useState<"domestic" | "international">("domestic");

  // ページ遷移後に投資診断セクションにスクロールする
  useEffect(() => {
    // 既にスクロール済みの場合は処理をスキップ
    if (hasScrolledRef.current) return;
    
    if (location.state && location.state.scrollToDiagnostic) {
      // 少し遅延させてからスクロール（ページが完全にロードされるのを待つため）
      const timer = setTimeout(() => {
        const element = document.getElementById("診断");
        if (element) {
          // セクションタイトルがトップに来るようにスクロール位置を調整
          const headerHeight = document.querySelector('header')?.offsetHeight || 0;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          // タイトルが完全にトップに来るように、余白をヘッダーの高さのみにする
          const offsetPosition = elementPosition - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
          
          // スクロール済みフラグを立てる
          hasScrolledRef.current = true;
        }
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [location.state]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Investment Diagnostic */}
        <InvestmentDiagnostic />

        {/* Categories */}
        <section className="py-8 sm:py-12 md:py-16 container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">投資カテゴリーから探す</h2>
            <p className="text-sm sm:text-base text-muted-foreground px-4">
              あなたの興味のある投資商品を選んで、詳しく学びましょう
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {categories.map((category, index) => (
              <div key={category.title} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CategoryCard {...category} />
              </div>
            ))}
          </div>
        </section>

        {/* Securities Ranking */}
        <section className="py-8 sm:py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">証券会社おすすめランキング</h2>
              <p className="text-sm sm:text-base text-muted-foreground px-4">
                人気の証券会社を徹底比較。あなたに最適な証券会社を見つけましょう
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
              {rankings.map((ranking) => (
                <RankingCard key={ranking.rank} {...ranking} />
              ))}
            </div>
          </div>
        </section>

        {/* FX Broker Ranking */}
        <section className="py-8 sm:py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">FX業者ランキング</h2>
              <p className="text-sm sm:text-base text-muted-foreground px-4">
                人気のFX業者を徹底比較。あなたに最適なFX業者を見つけましょう
              </p>
            </div>
            
            {/* Tabs for Domestic and International */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex p-1 bg-muted rounded-lg">
                <button
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeFxTab === "domestic"
                      ? "bg-background text-foreground shadow"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setActiveFxTab("domestic")}
                >
                  国内FX業者
                </button>
                <button
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeFxTab === "international"
                      ? "bg-background text-foreground shadow"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setActiveFxTab("international")}
                >
                  国外FX業者
                </button>
              </div>
            </div>
            
            {/* Ranking Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
              {activeFxTab === "domestic"
                ? domesticFxBrokers.map((broker) => (
                    <RankingCard key={broker.rank} {...broker} />
                  ))
                : internationalFxBrokers.map((broker) => (
                    <RankingCard key={broker.rank} {...broker} />
                  ))}
            </div>
          </div>
        </section>

        {/* Cryptocurrency Exchange Ranking */}
        <section className="py-8 sm:py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">暗号資産取引所ランキング</h2>
              <p className="text-sm sm:text-base text-muted-foreground px-4">
                国内外の人気暗号資産取引所を比較。あなたに最適な取引所を見つけましょう
              </p>
            </div>
            
            {/* Tabs for Domestic and International */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex p-1 bg-muted rounded-lg">
                <button
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeTab === "domestic"
                      ? "bg-background text-foreground shadow"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setActiveTab("domestic")}
                >
                  国内取引所
                </button>
                <button
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeTab === "international"
                      ? "bg-background text-foreground shadow"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setActiveTab("international")}
                >
                  国外取引所
                </button>
              </div>
            </div>
            
            {/* Ranking Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
              {activeTab === "domestic"
                ? domesticCryptoExchanges.map((exchange) => (
                    <RankingCard key={exchange.rank} {...exchange} />
                  ))
                : internationalCryptoExchanges.map((exchange) => (
                    <RankingCard key={exchange.rank} {...exchange} />
                  ))}
            </div>
          </div>
        </section>

        {/* Popular Articles */}
        <section className="py-8 sm:py-12 md:py-16 container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">人気の投資ガイド記事</h2>
            <p className="text-sm sm:text-base text-muted-foreground px-4">
              投資の基礎から実践まで、役立つ情報をお届けします
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {articles.map((article) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
        </section>

        {/* 更新日 */}
        <div className="container mx-auto px-4 py-4">
          <p className="text-xs text-muted-foreground text-right">
            最終更新日：2025年10月30日
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;