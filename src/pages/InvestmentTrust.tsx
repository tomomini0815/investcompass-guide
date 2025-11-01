import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, LineChart, Calculator, Lightbulb, Users, Award, PieChart } from "lucide-react";

const InvestmentTrust = () => {
  // 投資信託記事
  const articles = [
    {
      id: "investment-trust-basics",
      title: "投資信託の基本と仕組み",
      excerpt: "投資信託とは何か、基本的な仕組みと特徴について解説します。",
      readTime: "7分",
      date: "2024年10月30日",
    },
    {
      id: "index-vs-active",
      title: "インデックス型とアクティブ型の違い",
      excerpt: "インデックス型とアクティブ型投資信託の違いとそれぞれの特徴を比較します。",
      readTime: "8分",
      date: "2024年10月30日",
    },
    {
      id: "how-to-choose-fund",
      title: "投資信託の選び方と評価ポイント",
      excerpt: "自分に合った投資信託を選ぶための評価ポイントと選び方を詳しく解説します。",
      readTime: "9分",
      date: "2024年10月30日",
    },
    {
      id: "dollar-cost-averaging",
      title: "ドルコスト平均法と積立投資",
      excerpt: "ドルコスト平均法の仕組みと、積立投資によるリスク低減効果について解説します。",
      readTime: "6分",
      date: "2024年10月30日",
    },
  ];

  // 関連ツール
  const tools = [
    {
      title: "投資信託リターン計算機",
      description: "投資信託の期待リターンとリスクをシミュレーション",
      href: "/tools/fund-return",
      icon: Calculator,
    },
    {
      title: "ポートフォリオ最適化ツール",
      description: "最適な投資信託の組み合わせを提案",
      href: "/tools/portfolio-optimizer",
      icon: LineChart,
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
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 animate-fade-in" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <Badge variant="secondary" className="mb-6 px-6 py-2 text-sm font-semibold animate-fade-in hover:scale-105 transition-transform">
              投資信託
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-fade-in">
              投資信託で簡単・安心の資産運用
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
              プロの運用者に任せる投資信託の基本から、自分に合った商品の選び方までを詳しく解説します。
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden border-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-card/50">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/10 p-8 flex flex-col items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <LineChart className="h-20 w-20 text-primary mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-bold text-center relative z-10">投資信託</h3>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">プロに任せる安心の投資</h2>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      投資信託は、多くの投資家の資金を集めて、専門の運用会社が株式や債券などに投資・運用する金融商品です。
                      少額から始められ、自動的に分散投資が行われるため、初心者にもおすすめです。
                      このセクションでは、投資信託の基本から始めて、選び方と活用方法までを詳しく解説します。
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors">投資信託</Badge>
                      <Badge variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors">インデックスファンド</Badge>
                      <Badge variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors">プロ運用</Badge>
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
              <h2 className="text-3xl font-bold mb-4">投資信託記事一覧</h2>
              <p className="text-muted-foreground">
                投資信託の基本から応用まで、段階的に学ぶための記事です。
              </p>
            </div>
            
            <div className="space-y-6">
              {articles.map((article, index) => (
                <Card key={article.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 bg-gradient-to-br from-card to-card/80 hover:border-primary/30">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="secondary" className="rounded-full w-8 h-8 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            {index + 1}
                          </Badge>
                          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{article.title}</h3>
                        </div>
                        <p className="text-muted-foreground mb-3 leading-relaxed">{article.excerpt}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">📅 {article.date}</span>
                          <span className="flex items-center gap-1">⏱️ {article.readTime}</span>
                        </div>
                      </div>
                      <Button asChild className="group-hover:scale-105 transition-transform">
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
                  投資信託を最大限に活用するための便利なツールをご紹介します。
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tools.map((tool, index) => (
                  <Card key={tool.title} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 bg-gradient-to-br from-card to-card/80 hover:border-primary/30 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/10 rounded-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                          <tool.icon className="h-7 w-7 text-primary" />
                        </div>
                        <CardTitle className="group-hover:text-primary transition-colors">{tool.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{tool.description}</p>
                      <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                        <Link to={tool.href}>
                          ツールを使う →
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
              <Card className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 border-2 border-primary/30 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-50" />
                <CardContent className="p-10 text-center relative z-10">
                  <div className="inline-block p-4 bg-background rounded-full mb-6 animate-pulse">
                    <Lightbulb className="h-12 w-12 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">投資信託を始めてみませんか？</h2>
                  <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                    投資信託の基本を学んだら、次は実際に投資を始めてみましょう。
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="text-lg px-8 hover:scale-105 transition-transform">
                      <Link to="/comparison">
                        証券会社を比較する →
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

export default InvestmentTrust;