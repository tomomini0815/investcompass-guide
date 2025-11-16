import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CryptoComparisonTable from "@/components/features/CryptoComparisonTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const CryptoComparison = () => {
  const selectionPoints = [
    {
      title: "手数料の安さ",
      description: "取引コストを抑えることで、長期的なリターンを最大化できます。",
    },
    {
      title: "取扱銘柄の豊富さ",
      description: "主要な暗号資産からマイナーな暗号資産まで、多様な銘柄から選べることが重要です。",
    },
    {
      title: "セキュリティ",
      description: "資産の保護のため、セキュリティレベルの高い取引所を選ぶことが重要です。",
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
                暗号資産取引所徹底比較
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 animate-fade-in-up">
                手数料、取扱銘柄、セキュリティを一覧で比較。
                <br />
                あなたに最適な暗号資産取引所を見つけましょう。
              </p>
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
                    まずはGMOコインやDMM Bitcoinなど、国内で運営されている信頼性の高い取引所から始めることをおすすめします。
                    使いやすさと充実したサポート体制が魅力です。
                  </p>
                </div>
                <div className="p-6 bg-background/80 backdrop-blur-sm rounded-xl border border-secondary/10">
                  <p className="font-semibold text-secondary mb-2 flex items-center gap-2">
                    <span className="inline-block w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center text-sm">2</span>
                    海外取引所を利用したい方へ
                  </p>
                  <p className="text-muted-foreground pl-10">
                    BinanceやBybitなど、海外の大手取引所は取扱銘柄が豊富で、手数料も競争力があります。
                  </p>
                </div>
                <div className="p-6 bg-background/80 backdrop-blur-sm rounded-xl border border-accent/10">
                  <p className="font-semibold text-accent mb-2 flex items-center gap-2">
                    <span className="inline-block w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center text-sm">3</span>
                    先物・デリバティブ取引をしたい方へ
                  </p>
                  <p className="text-muted-foreground pl-10">
                    先物・デリバティブ取引に対応している取引所を選ぶことで、より多様な取引戦略が可能です。
                  </p>
                </div>
                <div className="p-6 bg-background/80 backdrop-blur-sm rounded-xl border border-green-500/10">
                  <p className="font-semibold text-green-600 mb-2 flex items-center gap-2">
                    <span className="inline-block w-8 h-8 bg-green-500/10 rounded-full flex items-center justify-center text-sm">4</span>
                    目的別の選び方
                  </p>
                  <div className="text-muted-foreground pl-10 space-y-2">
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li><span className="font-semibold">初心者:</span> GMOコイン、DMM Bitcoin、bitFlyer（使いやすい・サポート充実）</li>
                      <li><span className="font-semibold">手数料重視:</span> GMOコイン、Coincheck（業界最安レベルの手数料）</li>
                      <li><span className="font-semibold">先物取引:</span> Bybit（先物・デリバティブ取引の手数料が安い）</li>
                      <li><span className="font-semibold">マイナーな暗号資産:</span> liquid by QUOINE（マイナーな暗号資産も取扱）</li>
                      <li><span className="font-semibold">海外取引所:</span> Binance、Bybit（取扱銘柄が豊富）</li>
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

export default CryptoComparison;