import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Calculator from "@/components/features/Calculator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator as CalcIcon, PieChart, TrendingUp } from "lucide-react";

const Tools = () => {
  const otherTools = [
    {
      icon: PieChart,
      title: "資産配分診断",
      description: "あなたに最適なポートフォリオを提案します",
      comingSoon: true,
    },
    {
      icon: TrendingUp,
      title: "リスク許容度診断",
      description: "投資リスクの適切な水準を判定します",
      comingSoon: true,
    },
    {
      icon: CalcIcon,
      title: "老後資金計算機",
      description: "必要な老後資金をシミュレーションします",
      comingSoon: true,
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
                投資計算ツール
              </h1>
              <p className="text-lg md:text-xl text-white/90">
                複利効果をシミュレーションして、
                <br />
                あなたの投資計画を立てましょう。
              </p>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-16 container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">複利計算シミュレーター</h2>
            <p className="text-muted-foreground">
              初期投資額と毎月の積立額を入力すると、複利効果を考慮した将来の資産額を計算できます。
            </p>
          </div>
          <Calculator />
        </section>

        {/* Tips Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto bg-gradient-to-br from-secondary/10 to-primary/10 border-primary/20">
              <CardHeader>
                <CardTitle>複利効果とは？</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  複利とは、投資で得た利益を再投資することで、
                  「元本＋利益」に対してさらに利益が生まれる仕組みです。
                </p>
                <p>
                  アインシュタインが「人類最大の発明」と言ったとされる複利効果は、
                  長期投資において大きな威力を発揮します。
                </p>
                <div className="p-4 bg-background rounded-lg">
                  <p className="font-semibold mb-2">例: 月3万円を20年間、年利5%で運用した場合</p>
                  <ul className="space-y-2 text-sm">
                    <li>・投資元本: 720万円</li>
                    <li>・複利運用後: 約1,233万円</li>
                    <li>・<span className="text-secondary font-semibold">運用益: 約513万円（+71%）</span></li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Other Tools */}
        <section className="py-16 container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">その他の計算ツール</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {otherTools.map((tool, index) => (
              <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-shadow">
                {tool.comingSoon && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full">
                      Coming Soon
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <tool.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{tool.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    {tool.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Tools;
