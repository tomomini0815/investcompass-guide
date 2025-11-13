import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ComparisonTable from "@/components/features/ComparisonTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Comparison = () => {
  const selectionPoints = [
    {
      title: "手数料の安さ",
      description: "取引コストを抑えることで、長期的なリターンを最大化できます。",
    },
    {
      title: "取扱商品の豊富さ",
      description: "株式、投資信託、外国株など、多様な商品から選べることが重要です。",
    },
    {
      title: "NISA対応",
      description: "非課税制度を活用できる証券会社を選びましょう。",
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
                証券会社徹底比較
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 animate-fade-in-up">
                手数料、取扱商品、サービス内容を一覧で比較。
                <br />
                あなたに最適な証券会社を見つけましょう。
              </p>
            </div>
          </div>
        </section>

        {/* Selection Points */}
        <section className="py-20 container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              証券会社選びの4つのポイント
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              最適な証券会社を選ぶために、必ずチェックすべき重要なポイントをご紹介します
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
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
            <ComparisonTable />
          </div>
        </section>

        {/* Additional Comparison Links */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="text-center group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">₿</span>
                  </div>
                  <CardTitle className="text-xl font-bold">暗号資産取引所比較</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    国内外の主要暗号資産取引所を比較して、最適な取引所を選びましょう。
                  </p>
                  <Button asChild>
                    <Link to="/crypto-comparison">
                      比較ページへ
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="text-center group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">💱</span>
                  </div>
                  <CardTitle className="text-xl font-bold">FX業者比較</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    スプレッド、通貨ペア、スワップポイントなどを比較して、最適なFX業者を選びましょう。
                  </p>
                  <Button asChild>
                    <Link to="/fx-comparison">
                      比較ページへ
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
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
                  証券会社選びのコツ
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 relative z-10">
                <div className="p-6 bg-background/80 backdrop-blur-sm rounded-xl border border-primary/10">
                  <p className="font-semibold text-primary mb-2 flex items-center gap-2">
                    <span className="inline-block w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm">1</span>
                    初心者の方へ
                  </p>
                  <p className="text-muted-foreground pl-10">
                    まずはSBI証券や楽天証券など、大手で実績のある証券会社から始めることをおすすめします。
                    使いやすさと充実したサポート体制が魅力です。
                  </p>
                </div>
                <div className="p-6 bg-background/80 backdrop-blur-sm rounded-xl border border-secondary/10">
                  <p className="font-semibold text-secondary mb-2 flex items-center gap-2">
                    <span className="inline-block w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center text-sm">2</span>
                    米国株投資をしたい方へ
                  </p>
                  <p className="text-muted-foreground pl-10">
                    マネックス証券は米国株の取扱銘柄数が豊富で、手数料も競争力があります。
                  </p>
                </div>
                <div className="p-6 bg-background/80 backdrop-blur-sm rounded-xl border border-accent/10">
                  <p className="font-semibold text-accent mb-2 flex items-center gap-2">
                    <span className="inline-block w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center text-sm">3</span>
                    ポイント活用したい方へ
                  </p>
                  <p className="text-muted-foreground pl-10">
                    楽天証券（楽天ポイント）、SBI証券（Tポイント・Vポイント）、auカブコム証券（Pontaポイント）など、
                    普段使っているポイントで投資できる証券会社を選ぶとお得です。
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

export default Comparison;