import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FXComparisonTable from "@/components/features/FXComparisonTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const FXComparison = () => {
  const selectionPoints = [
    {
      title: "スプレッドの狭さ",
      description: "取引コストを抑えることで、長期的なリターンを最大化できます。",
    },
    {
      title: "通貨ペアの豊富さ",
      description: "主要通貨からマイナー通貨まで、多様な通貨ペアから選べることが重要です。",
    },
    {
      title: "スワップポイント",
      description: "長期保有する際にもらえるスワップポイントも重要な選定ポイントです。",
    },
    {
      title: "使いやすさ",
      description: "取引ツールやアプリの操作性も重要な選定ポイントです。",
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
                FX業者徹底比較
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 animate-fade-in-up">
                スプレッド、通貨ペア、スワップポイントを一覧で比較。
                <br />
                あなたに最適なFX業者を見つけましょう。
              </p>
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
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {selectionPoints.map((point, index) => (
              <Card 
                key={index} 
                className="text-center group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 hover:border-primary/50"
              >
                <CardHeader className="p-4">
                  <div className="mx-auto w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  </div>
                  <CardTitle className="text-sm font-bold md:text-base">{point.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-xs text-muted-foreground leading-relaxed">{point.description}</p>
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
                    まずはGMOクリック証券や外為どっとコムなど、国内で運営されている信頼性の高い業者から始めることをおすすめします。
                    使いやすさと充実したサポート体制が魅力です。
                  </p>
                </div>
                <div className="p-6 bg-background/80 backdrop-blur-sm rounded-xl border border-secondary/10">
                  <p className="font-semibold text-secondary mb-2 flex items-center gap-2">
                    <span className="inline-block w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center text-sm">2</span>
                    海外業者を利用したい方へ
                  </p>
                  <p className="text-muted-foreground pl-10">
                    Interactive BrokersやXMなど、海外の大手業者は通貨ペアが豊富で、手数料も競争力があります。
                  </p>
                </div>
                <div className="p-6 bg-background/80 backdrop-blur-sm rounded-xl border border-accent/10">
                  <p className="font-semibold text-accent mb-2 flex items-center gap-2">
                    <span className="inline-block w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center text-sm">3</span>
                    スキャルピングをしたい方へ
                  </p>
                  <p className="text-muted-foreground pl-10">
                    スキャルピング（短期取引）に対応している業者を選ぶことで、短期的な利益を狙う取引が可能です。
                  </p>
                </div>
                <div className="p-6 bg-background/80 backdrop-blur-sm rounded-xl border border-green-500/10">
                  <p className="font-semibold text-green-600 mb-2 flex items-center gap-2">
                    <span className="inline-block w-8 h-8 bg-green-500/10 rounded-full flex items-center justify-center text-sm">4</span>
                    目的別の選び方
                  </p>
                  <div className="text-muted-foreground pl-10 space-y-2">
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li><span className="font-semibold">初心者:</span> 松井証券、SBI FXトレード、外為どっとコム（少額・情報充実）</li>
                      <li><span className="font-semibold">中上級者:</span> GMOクリック証券、DMM FX（高機能・大量取引）</li>
                      <li><span className="font-semibold">スキャルピング:</span> ヒロセ通商（公認）</li>
                      <li><span className="font-semibold">スワップ狙い:</span> みんなのFX（高スワップ）</li>
                      <li><span className="font-semibold">多様な通貨:</span> IG証券、ヒロセ通商</li>
                      <li><span className="font-semibold">ポイント活用:</span> 楽天FX、GMO外貨</li>
                    </ul>
                  </div>
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