import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import CryptoComparisonTable from "@/components/features/CryptoComparisonTable";

const CryptoComparison = () => {
  const selectionPoints = [
    {
      title: "手数料の安さ",
      description: "取引手数料や出金手数料が安ければ、コストを抑えて取引できます。",
    },
    {
      title: "取扱暗号資産の豊富さ",
      description: "BTC、ETH、ADAなど主要な暗号資産だけでなく、新興暗号資産も充実している取引所がおすすめです。",
    },
    {
      title: "セキュリティ体制",
      description: "資産の安全性を確保するため、信頼性の高いセキュリティ対策が施されているか確認しましょう。",
    },
    {
      title: "使いやすさ",
      description: "直感的なUI/UX、安定した取引環境、充実したサポート体制も重要な選定ポイントです。",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative gradient-hero py-20 md:py-28 text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-sm font-semibold">🏆 2024年最新版</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
                暗号資産取引所徹底比較
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 animate-fade-in-up">
                手数料、取扱暗号資産、セキュリティを一覧で比較。
                <br />
                あなたに最適な暗号資産取引所を見つけましょう。
              </p>
              <div className="flex flex-wrap gap-6 justify-center text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                  <span>主要5社を完全比較</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  <span>リアルタイム情報</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Selection Points */}
        <section className="py-20 container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              暗号資産取引所選びの4つのポイント
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              最適な暗号資産取引所を選ぶために、必ずチェックすべき重要なポイントをご紹介します
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {selectionPoints.map((point, index) => (
              <Card 
                key={index} 
                className="text-center group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 hover:border-primary/50"
              >
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-bold">{point.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <CryptoComparisonTable />
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-20 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/5 border-2 border-primary/20 shadow-xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-secondary/20 to-transparent rounded-full blur-3xl"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  暗号資産取引所選びのコツ
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 relative z-10">
                <div className="p-6 bg-background/80 backdrop-blur-sm rounded-xl border border-primary/10">
                  <p className="font-semibold text-primary mb-2 flex items-center gap-2">
                    <span className="inline-block w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm">1</span>
                    初心者の方へ
                  </p>
                  <p className="text-muted-foreground pl-10">
                    まずはbitFlyerやGMOコインなど、日本で運営実績のある大手取引所から始めることをおすすめします。
                    信頼性と安全性が高く、日本語対応のサポートも充実しています。
                  </p>
                </div>
                <div className="p-6 bg-background/80 backdrop-blur-sm rounded-xl border border-secondary/10">
                  <p className="font-semibold text-secondary mb-2 flex items-center gap-2">
                    <span className="inline-block w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center text-sm">2</span>
                    海外取引所を利用する方へ
                  </p>
                  <p className="text-muted-foreground pl-10">
                    BinanceやCoinbaseなど海外の大手取引所は、取扱暗号資産数が多く、手数料も安めです。
                    ただし、日本語対応やサポート体制には注意が必要です。
                  </p>
                </div>
                <div className="p-6 bg-background/80 backdrop-blur-sm rounded-xl border border-accent/10">
                  <p className="font-semibold text-accent mb-2 flex items-center gap-2">
                    <span className="inline-block w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center text-sm">3</span>
                    セキュリティ重視の方へ
                  </p>
                  <p className="text-muted-foreground pl-10">
                    冷蔵庫（コールドウォレット）での資産保管に対応している取引所を選びましょう。
                    また、二段階認証や生体認証などのセキュリティ対策が充実していることも重要です。
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CryptoComparison;