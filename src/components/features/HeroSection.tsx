import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, BookOpen, Calculator } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-investment.jpg";

const HeroSection = () => {
  // ご指定の内容に変更
  const features = [
    { icon: Calculator, label: "（ラベル）計算ツールでサポート", value: "（値）各投資業界計算ツール" },
    { icon: TrendingUp, label: "（ラベル）30社〜40社比較", value: "（値）投資3業界を徹底比較" },
    { icon: BookOpen, label: "（ラベル）初心者〜中級者向け", value: "（値）学習リソースを掲載" },
  ];

  // 投資診断セクションにスムーズスクロールする関数
  const scrollToDiagnostic = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // 少し遅延させてからスクロール（ページが完全にロードされるのを待つため）
    setTimeout(() => {
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
      }
    }, 100);
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="投資イメージ" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-secondary/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20 lg:py-32">
        <div className="max-w-3xl animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
            あなたの投資を<br />
            成功に導く完全ガイド
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 md:mb-8 leading-relaxed">
            投資初心者から中級者まで。株式投資、NISA、iDeCo、仮想通貨など、
            あらゆる投資商品を徹底解説。信頼できる情報で、あなたの資産形成をサポートします。
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-12">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent-hover text-white text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 shadow-xl w-full sm:w-auto" 
              onClick={scrollToDiagnostic}
            >
              投資診断を始める
              <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto" 
              asChild
            >
              <Link to="/comparison">証券会社を比較する</Link>
            </Button>
          </div>

          {/* Features - ご指定の内容に変更 */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-8">
            {features.map((feature) => (
              <div key={feature.label} className="text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-sm mb-2">
                  <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="text-lg sm:text-2xl md:text-3xl font-bold text-white mb-1">
                  {feature.value}
                </div>
                <div className="text-xs sm:text-sm text-white/80">{feature.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-16 text-background" viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 74L60 65.3C120 56.7 240 39.3 360 32.7C480 26 600 30 720 36.7C840 43.3 960 52.7 1080 52.7C1200 52.7 1320 43.3 1380 38.7L1440 34V74H1380C1320 74 1200 74 1080 74C960 74 840 74 720 74C600 74 480 74 360 74C240 74 120 74 60 74H0Z" fill="currentColor"/>
        </svg>
      </div>

      {/* 更新日 */}
      <div className="absolute bottom-4 right-4">
        <p className="text-xs text-white/70">
          最終更新日：2025年10月30日
        </p>
      </div>
    </section>
  );
};

export default HeroSection;