import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, TrendingUp, Calculator, PieChart, LineChart, Lightbulb, Users, Award, BarChart3 } from "lucide-react";

const Stocks = () => {
  // 株式投資記事
  const articles = [
    {
      id: "stocks-basics",
      title: "株式投資の基本と仕組み",
      excerpt: "株式とは何か、株式投資の基本的な仕組みと投資の流れについて解説します。",
      readTime: "6分",
      date: "2024年10月30日",
    },
    {
      id: "how-to-buy-stocks",
      title: "株式の買い方・売買の手順",
      excerpt: "証券口座の開設から実際に株式を購入するまでの手順を詳しく説明します。",
      readTime: "8分",
      date: "2024年10月30日",
    },
    {
      id: "stock-analysis",
      title: "銘柄選びと企業分析の方法",
      excerpt: "企業の財務諸表や業績などを分析して、良い銘柄を見極める方法を学びます。",
      readTime: "10分",
      date: "2024年10月30日",
    },
    {
      id: "dividend-investing",
      title: "配当金投資の戦略とポイント",
      excerpt: "配当金を目的とした株式投資の戦略と、安定的な配当金を得るためのポイントについて解説します。",
      readTime: "7分",
      date: "2024年10月30日",
    },
  ];

  // 関連ツール
  const tools = [
    {
      title: "株式リターン計算機",
      description: "株式投資のリターンとリスクを計算するシミュレーションツール",
      href: "/tools/stock-return",
      icon: Calculator,
    },
    {
      title: "ポートフォリオ分析ツール",
      description: "現在の株式ポートフォリオの分析と最適化提案",
      href: "/tools/portfolio-analysis",
      icon: BarChart3,
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
              株式投資
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
              株式投資を始めよう
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              株式投資の基本から実践的なテクニックまで、初心者から中級者まで幅広く対応したガイドです。
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
                    <TrendingUp className="h-16 w-16 text-primary mb-4" />
                    <h3 className="text-xl font-bold text-center">株式投資</h3>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h2 className="text-2xl font-bold mb-4">株式投資で資産を増やそう</h2>
                    <p className="text-muted-foreground mb-4">
                      株式投資は、企業の成長とともに資産を増やすことができる投資方法です。
                      企業の株式を購入し、株価の上昇や配当金によって利益を得ます。
                      このセクションでは、株式投資の基本から始めて、実践的な投資戦略までを詳しく解説します。
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">株式投資</Badge>
                      <Badge variant="outline">企業分析</Badge>
                      <Badge variant="outline">配当金</Badge>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Articles */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">株式投資記事一覧</h2>
              <p className="text-muted-foreground">
                株式投資の基本から応用まで、段階的に学ぶための記事です。
              </p>
            </div>
            
            <div className="space-y-6">
              {articles.map((article, index) => (
                <Card key={article.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="secondary" className="rounded-full">
                            {index + 1}
                          </Badge>
                          <h3 className="text-xl font-bold">{article.title}</h3>
                        </div>
                        <p className="text-muted-foreground mb-3">{article.excerpt}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{article.date}</span>
                          <span>読了時間: {article.readTime}</span>
                        </div>
                      </div>
                      <Button asChild>
                        <Link to={`/guide/${article.id}`}>
                          記事を読む
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tools */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">関連ツール</h2>
                <p className="text-muted-foreground">
                  株式投資を実践するための便利なツールをご紹介します。
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tools.map((tool) => (
                  <Card key={tool.title} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <tool.icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle>{tool.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{tool.description}</p>
                      <Button asChild variant="outline">
                        <Link to={tool.href}>
                          ツールを使う
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
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
                  <h2 className="text-2xl font-bold mb-4">株式投資を始める準備はできましたか？</h2>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    株式投資の基本を学んだら、次は実際に取引するための証券会社を選びましょう。
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg">
                      <Link to="/comparison">
                        証券会社を比較する
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

export default Stocks;