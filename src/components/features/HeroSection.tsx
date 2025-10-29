import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-investment.jpg";

const HeroSection = () => {
  const stats = [
    { icon: Users, label: "利用者数", value: "100万人+" },
    { icon: BookOpen, label: "記事数", value: "500本+" },
    { icon: TrendingUp, label: "証券会社", value: "20社比較" },
  ];

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
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            あなたの投資を<br />
            成功に導く完全ガイド
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            投資初心者から中級者まで。株式投資、NISA、iDeCo、仮想通貨など、
            あらゆる投資商品を徹底解説。信頼できる情報で、あなたの資産形成をサポートします。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent-hover text-white text-lg px-8 py-6 shadow-xl" 
              asChild
            >
              <Link to="/#診断">
                投資診断を始める
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm text-lg px-8 py-6" 
              asChild
            >
              <Link to="/comparison">証券会社を比較する</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm mb-2">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-white/80">{stat.label}</div>
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
    </section>
  );
};

export default HeroSection;
