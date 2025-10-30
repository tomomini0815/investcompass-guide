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
        <section className="relative gradient-hero py-20 md:py-28 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(251,191,36,0.1),transparent_50%)]"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <CalcIcon className="h-4 w-4" />
                <span className="text-sm font-semibold">無料シミュレーションツール</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
                投資計算ツール
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 animate-fade-in-up">
                複利効果をシミュレーションして、
                <br />
                あなたの投資計画を立てましょう。
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                {[
                  { icon: "📊", text: "視覚的にわかりやすい" },
                  { icon: "🎯", text: "目標金額を設定" },
                  { icon: "💡", text: "最適な投資戦略を発見" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                    <span>{item.icon}</span>
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-20 container mx-auto px-4">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">複利計算シミュレーター</h2>
            <p className="text-muted-foreground text-lg">
              初期投資額と毎月の積立額を入力すると、複利効果を考慮した将来の資産額を計算できます。
            </p>
          </div>
          <Calculator />
        </section>

        {/* Tips Section */}
        <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto relative overflow-hidden bg-gradient-to-br from-secondary/10 via-primary/5 to-accent/5 border-2 border-primary/20 shadow-2xl">
              <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-secondary/10 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-accent/10 to-transparent rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
              
              <CardHeader className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 bg-secondary/10 rounded-xl">
                    <TrendingUp className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl md:text-3xl">複利効果とは？</CardTitle>
                </div>
                <p className="text-muted-foreground">アインシュタインが「人類最大の発明」と呼んだ複利の力</p>
              </CardHeader>
              <CardContent className="space-y-6 relative z-10">
                <div className="p-6 bg-background/80 backdrop-blur-sm rounded-xl border border-primary/10">
                  <p className="leading-relaxed">
                    複利とは、投資で得た利益を再投資することで、
                    「元本＋利益」に対してさらに利益が生まれる仕組みです。
                  </p>
                  <p className="leading-relaxed mt-4">
                    長期投資において大きな威力を発揮し、時間を味方につけることで資産を飛躍的に増やすことができます。
                  </p>
                </div>
                
                <div className="p-6 bg-gradient-to-br from-secondary/5 to-primary/5 rounded-xl border-2 border-secondary/20">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl">💰</span>
                    <p className="font-bold text-lg">実例シミュレーション</p>
                  </div>
                  <p className="font-semibold mb-4 text-foreground">月3万円を20年間、年利5%で運用した場合</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-background rounded-lg text-center">
                      <p className="text-sm text-muted-foreground mb-1">投資元本</p>
                      <p className="text-2xl font-bold text-primary">720万円</p>
                    </div>
                    <div className="p-4 bg-background rounded-lg text-center">
                      <p className="text-sm text-muted-foreground mb-1">複利運用後</p>
                      <p className="text-2xl font-bold text-secondary">1,233万円</p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-lg text-center border-2 border-secondary/30">
                      <p className="text-sm text-muted-foreground mb-1">運用益</p>
                      <p className="text-2xl font-bold text-secondary">+513万円</p>
                      <p className="text-xs text-accent font-semibold mt-1">(+71%)</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Other Tools */}
        <section className="py-20 container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">その他の計算ツール</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              様々な投資シミュレーションツールを順次追加予定です
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {otherTools.map((tool, index) => (
              <Card 
                key={index} 
                className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/30"
              >
                {tool.comingSoon && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 bg-gradient-to-r from-accent to-accent/80 text-white text-xs font-semibold rounded-full shadow-lg">
                      Coming Soon
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="text-center relative z-10">
                  <div className="mx-auto w-20 h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <tool.icon className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-bold">{tool.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-sm text-muted-foreground text-center leading-relaxed">
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
