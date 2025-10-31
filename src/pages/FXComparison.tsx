import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import FXComparisonTable from "@/components/features/FXComparisonTable";

const FXComparison = () => {
  const selectionPoints = [
    {
      title: "スプレッドの安さ",
      description: "スプレッドが安ければ、取引コストを抑えて利益を最大化できます。",
    },
    {
      title: "取扱通貨ペアの豊富さ",
      description: "主要な通貨ペアだけでなく、マイナー通貨ペアも充実している業者がおすすめです。",
    },
    {
      title: "スワップポイント",
      description: "スワップポイントが高い業者を選ぶことで、長期保有時の利益を増やすことができます。",
    },
    {
      title: "使いやすさ",
      description: "直感的な取引ツール、安定したサーバー環境、充実したサポート体制も重要な選定ポイントです。",
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
                FX業者徹底比較
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 animate-fade-in-up">
                スプレッド、取扱通貨ペア、スワップポイントを一覧で比較。
                <br />
                あなたに最適なFX業者を見つけましょう。
              </p>
              <div className="flex flex-wrap gap-6 justify-center text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                  <span>主要業者を完全比較</span>
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
              FX業者選びの4つのポイント
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              最適なFX業者を選ぶために、必ずチェックすべき重要なポイントをご紹介します
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
            <FXComparisonTable />
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
                  FX業者選びのコツ
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 relative z-10">
                <div className="p-6 bg-background/80 backdrop-blur-sm rounded-xl border border-primary/10">
                  <p className="font-semibold text-primary mb-2 flex items-center gap-2">
                    <span className="inline-block w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm">1</span>
                    初心者の方へ
                  </p>
                  <p className="text-muted-foreground pl-10">
                    まずはGMOクリック証券やみんなのFXなど、信頼性の高い大手業者から始めることをおすすめします。
                    使いやすさと充実したサポート体制が魅力です。
                  </p>
                </div>
                <div className="p-6 bg-background/80 backdrop-blur-sm rounded-xl border border-secondary/10">
                  <p className="font-semibold text-secondary mb-2 flex items-center gap-2">
                    <span className="inline-block w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center text-sm">2</span>
                    スキャルピングをしたい方へ
                  </p>
                  <p className="text-muted-foreground pl-10">
                    外為どっとコムやヒロセ通商はスキャルピング公認で、取引ツールも充実しています。
                    ただし、取引ルールには注意が必要です。
                  </p>
                </div>
                <div className="p-6 bg-background/80 backdrop-blur-sm rounded-xl border border-accent/10">
                  <p className="font-semibold text-accent mb-2 flex items-center gap-2">
                    <span className="inline-block w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center text-sm">3</span>
                    高水準のスワップポイントを求める方へ
                  </p>
                  <p className="text-muted-foreground pl-10">
                    LIGHT FXは高水準のスワップポイントが特徴で、長期保有におすすめです。
                    ただし、スプレッドはやや広い傾向があります。
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

export default FXComparison;