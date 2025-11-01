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
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-semibold">
              計算ツール
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
              投資を科学する計算ツール
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              投資の意思決定をサポートする様々な計算ツールとシミュレータをご紹介します。
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-primary/10 to-secondary/10 p-8 flex flex-col items-center justify-center">
                    <Calculator className="h-16 w-16 text-primary mb-4" />
                    <h3 className="text-xl font-bold text-center">計算ツール</h3>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h2 className="text-2xl font-bold mb-4">データに基づく投資判断</h2>
                    <p className="text-muted-foreground mb-4">
                      投資は感情ではなくデータに基づいて行うべきです。
                      当サイトが提供する計算ツールとシミュレータを使えば、
                      自分の投資計画がどのようになるかを事前にシミュレーションできます。
                      これらのツールを活用して、より良い投資判断を行いましょう。
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">計算ツール</Badge>
                      <Badge variant="outline">シミュレーション</Badge>
                      <Badge variant="outline">意思決定支援</Badge>
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
              {tools.map((tool) => (
                <Card key={tool.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <tool.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle>{tool.title}</CardTitle>
                        <Badge variant="secondary" className="mt-1">
                          {tool.category}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{tool.description}</p>
                    <Button asChild>
                      <Link to={`/tools/${tool.id}`}>
                        ツールを使う
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
              <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary/20">
                <CardContent className="p-8 text-center">
                  <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h2 className="text-2xl font-bold mb-4">ツールを使って投資計画を立てましょう</h2>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    計算ツールを使って自分の投資計画をシミュレーションし、
                    より良い投資判断を行いましょう。
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg">
                      <Link to="/tools">
                        すべてのツールを見る
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
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