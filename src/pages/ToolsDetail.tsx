import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calculator, PieChart, LineChart, TrendingUp, Coins, Lightbulb, Users, Award } from "lucide-react";

const ToolsDetail = () => {
  // 計算ツール
  const tools = [
    {
      id: "compound-interest",
      title: "複利計算シミュレータ",
      description: "長期投資の効果を可視化する複利計算ツール",
      icon: Calculator,
      category: "基礎計算",
    },
    {
      id: "saving-calculator",
      title: "積立額計算ツール",
      description: "目標額に応じた最適な積立額と期間を計算",
      icon: PieChart,
      category: "基礎計算",
    },
    {
      id: "risk-assessment",
      title: "リスク許容度診断",
      description: "自分のリスク許容度を診断し、適切な投資戦略を見つけましょう",
      icon: LineChart,
      category: "診断ツール",
    },
    {
      id: "stock-return",
      title: "株式リターン計算機",
      description: "株式投資のリターンとリスクを計算するシミュレーションツール",
      icon: TrendingUp,
      category: "株式投資",
    },
    {
      id: "fund-return",
      title: "投資信託リターン計算機",
      description: "投資信託の期待リターンとリスクをシミュレーション",
      icon: PieChart,
      category: "投資信託",
    },
    {
      id: "crypto-return",
      title: "仮想通貨リターン計算機",
      description: "仮想通貨投資のリターンとリスクをシミュレーション",
      icon: Coins,
      category: "仮想通貨",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-gradient-to-r from-muted/50 to-muted/30 py-4 border-b">
          <div className="container mx-auto px-4">
            <Link 
              to="/" 
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors group"
            >
              <ArrowLeft className="h-4 w-4 mr-1 group-hover:-translate-x-1 transition-transform" />
              トップページに戻る
            </Link>
          </div>
        </div>

        {/* Page Header */}
        <section className="relative py-20 container mx-auto px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-accent/5 animate-fade-in" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <Badge variant="secondary" className="mb-6 px-6 py-2 text-sm font-semibold animate-fade-in hover:scale-105 transition-transform">
              計算ツール
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent animate-fade-in">
              投資を科学する計算ツール
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
              投資の意思決定をサポートする様々な計算ツールとシミュレータをご紹介します。
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden border-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-card/50">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-secondary/20 via-secondary/10 to-accent/10 p-8 flex flex-col items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Calculator className="h-20 w-20 text-secondary mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-bold text-center relative z-10">計算ツール</h3>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">データに基づく投資判断</h2>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      投資は感情ではなくデータに基づいて行うべきです。
                      当サイトが提供する計算ツールとシミュレータを使えば、
                      自分の投資計画がどのようになるかを事前にシミュレーションできます。
                      これらのツールを活用して、より良い投資判断を行いましょう。
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="hover:bg-secondary hover:text-secondary-foreground transition-colors">計算ツール</Badge>
                      <Badge variant="outline" className="hover:bg-secondary hover:text-secondary-foreground transition-colors">シミュレーション</Badge>
                      <Badge variant="outline" className="hover:bg-secondary hover:text-secondary-foreground transition-colors">意思決定支援</Badge>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Tools */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">計算ツール一覧</h2>
              <p className="text-muted-foreground">
                投資の様々なシーンで役立つ計算ツールとシミュレータをご紹介します。
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tools.map((tool, index) => (
                <Card key={tool.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 bg-gradient-to-br from-card to-card/80 hover:border-secondary/30 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-gradient-to-br from-secondary/20 to-accent/10 rounded-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <tool.icon className="h-7 w-7 text-secondary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="group-hover:text-secondary transition-colors">{tool.title}</CardTitle>
                        <Badge variant="secondary" className="mt-1 text-xs group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                          {tool.category}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{tool.description}</p>
                    <Button asChild className="w-full group-hover:scale-105 transition-transform">
                      <Link to={`/tools/${tool.id}`}>
                        ツールを使う →
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="relative overflow-hidden bg-gradient-to-br from-secondary/20 via-accent/10 to-primary/20 border-2 border-secondary/30 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-transparent opacity-50" />
                <CardContent className="p-10 text-center relative z-10">
                  <div className="inline-block p-4 bg-background rounded-full mb-6 animate-pulse">
                    <Lightbulb className="h-12 w-12 text-secondary" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">ツールを使って投資計画を立てましょう</h2>
                  <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                    計算ツールを使って自分の投資計画をシミュレーションし、
                    より良い投資判断を行いましょう。
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="text-lg px-8 hover:scale-105 transition-transform">
                      <Link to="/tools">
                        すべてのツールを見る →
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="text-lg px-8 hover:scale-105 transition-transform">
                      <Link to="/#診断">
                        投資診断を始める
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ToolsDetail;