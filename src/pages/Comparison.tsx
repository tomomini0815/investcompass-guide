import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ComparisonTable from "@/components/features/ComparisonTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

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
        <section className="gradient-hero py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                証券会社徹底比較
              </h1>
              <p className="text-lg md:text-xl text-white/90">
                手数料、取扱商品、サービス内容を一覧で比較。
                <br />
                あなたに最適な証券会社を見つけましょう。
              </p>
            </div>
          </div>
        </section>

        {/* Selection Points */}
        <section className="py-16 container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            証券会社選びの4つのポイント
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {selectionPoints.map((point, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{point.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{point.description}</p>
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

        {/* Tips Section */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  証券会社選びのコツ
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  <strong>初心者の方へ：</strong>
                  まずはSBI証券や楽天証券など、大手で実績のある証券会社から始めることをおすすめします。
                  使いやすさと充実したサポート体制が魅力です。
                </p>
                <p>
                  <strong>米国株投資をしたい方へ：</strong>
                  マネックス証券は米国株の取扱銘柄数が豊富で、手数料も競争力があります。
                </p>
                <p>
                  <strong>ポイント活用したい方へ：</strong>
                  楽天証券（楽天ポイント）、SBI証券（Tポイント・Vポイント）、auカブコム証券（Pontaポイント）など、
                  普段使っているポイントで投資できる証券会社を選ぶとお得です。
                </p>
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
