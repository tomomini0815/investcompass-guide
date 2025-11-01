import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, PieChart, Calculator, Lightbulb, Users, Award, TrendingUp } from "lucide-react";

const Nisa = () => {
  // NISA記事
  const articles = [
    {
      id: "nisa-basics",
      title: "NISA・つみたてNISAの基本と違い",
      excerpt: "NISAとつみたてNISAの基本的な概念とそれぞれの特徴、違いについて解説します。",
      readTime: "7分",
      date: "2024年10月30日",
    },
    {
      id: "how-to-open-nisa",
      title: "NISA口座の開設手順",
      excerpt: "NISA口座を開設するまでの手順と必要な書類、注意点について詳しく説明します。",
      readTime: "6分",
      date: "2024年10月30日",
    },
    {
      id: "nisa-investment-strategy",
      title: "NISAでの投資戦略とおすすめ商品",
      excerpt: "NISAを活用した効果的な投資戦略と、おすすめの投資商品を紹介します。",
      readTime: "9分",
      date: "2024年10月30日",
    },
    {
      id: "nisa-tax-benefit",
      title: "NISAの税制優遇と節税効果",
      excerpt: "NISAの税制優遇内容と、実際にどれくらいの節税効果があるのかを解説します。",
      readTime: "8分",
      date: "2024年10月30日",
    },
  ];

  // 関連ツール
  const tools = [
    {
      title: "NISAシミュレータ",
      description: "NISAでの投資効果と節税効果をシミュレーション",
      href: "/tools/nisa-simulator",
      icon: Calculator,
    },
    {
      title: "積立額計算ツール",
      description: "目標額に応じた最適な積立額と期間を計算",
      href: "/tools/saving-calculator",
      icon: PieChart,
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
              NISA・つみたてNISA
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
              NISAで節税しながら資産形成
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              NISA・つみたてNISAの仕組みを理解し、節税効果を最大限に活用した資産形成を実現しましょう。
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
                    <PieChart className="h-16 w-16 text-primary mb-4" />
                    <h3 className="text-xl font-bold text-center">NISA・つみたてNISA</h3>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h2 className="text-2xl font-bold mb-4">節税投資の代表格</h2>
                    <p className="text-muted-foreground mb-4">
                      NISA（少額投資非課税制度）は、投資で得た利益が非課税になる制度です。
                      つみたてNISAは、長期的な資産形成に適した投資信託に特化したNISAです。
                      このセクションでは、NISA・つみたてNISAの基本から始めて、活用方法と節税効果までを詳しく解説します。
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">NISA</Badge>
                      <Badge variant="outline">つみたてNISA</Badge>
                      <Badge variant="outline">節税</Badge>
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
              <h2 className="text-3xl font-bold mb-4">NISA記事一覧</h2>
              <p className="text-muted-foreground">
                NISA・つみたてNISAの基本から活用方法まで、段階的に学ぶための記事です。
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
                  NISAを最大限に活用するための便利なツールをご紹介します。
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
                  <h2 className="text-2xl font-bold mb-4">NISA口座を開設してみませんか？</h2>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    NISAの基本を学んだら、次は実際に口座を開設して投資を始めてみましょう。
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

export default Nisa;