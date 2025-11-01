import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BookOpen, TrendingUp, Calculator, PieChart, LineChart, Coins, Lightbulb, Users, Award } from "lucide-react";

const Basics = () => {
  // 投資の基礎知識記事
  const articles = [
    {
      id: "what-is-investment",
      title: "投資とは？基本的な概念と目的",
      excerpt: "投資の基本的な概念、目的、そして投資が資産形成にどのように役立つかを解説します。",
      readTime: "5分",
      date: "2024年10月30日",
    },
    {
      id: "risk-return",
      title: "リスクとリターンの関係性",
      excerpt: "投資におけるリスクとリターンの関係を理解し、自分のリスク許容度を把握する方法を学びます。",
      readTime: "7分",
      date: "2024年10月30日",
    },
    {
      id: "diversification",
      title: "分散投資の重要性と基本戦略",
      excerpt: "資産を分散させることでリスクを軽減する方法と、実践的な分散投資戦略について解説します。",
      readTime: "8分",
      date: "2024年10月30日",
    },
    {
      id: "long-term",
      title: "長期投資のメリットとコツ",
      excerpt: "なぜ長期投資が重要なのか、そして成功するためのポイントについて詳しく説明します。",
      readTime: "6分",
      date: "2024年10月30日",
    },
  ];

  // 関連ツール
  const tools = [
    {
      title: "リスク許容度診断",
      description: "自分のリスク許容度を診断し、適切な投資戦略を見つけましょう",
      href: "/tools/risk-assessment",
      icon: Users,
    },
    {
      title: "複利計算シミュレータ",
      description: "長期投資の効果を可視化する複利計算ツール",
      href: "/tools/compound-interest",
      icon: Calculator,
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
              投資基礎知識
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
              投資の基礎をしっかり学ぼう
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              投資初心者の方でもわかりやすく、投資の基本的な概念から実践的な戦略までを段階的に学ぶことができます。
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
                    <BookOpen className="h-16 w-16 text-primary mb-4" />
                    <h3 className="text-xl font-bold text-center">投資の基礎知識</h3>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h2 className="text-2xl font-bold mb-4">投資を始める前に知っておくべきこと</h2>
                    <p className="text-muted-foreground mb-4">
                      投資は資産形成の重要な手段ですが、同時にリスクも伴います。成功するためには、基本的な知識と正しい理解が不可欠です。
                      このセクションでは、投資の基本概念から始めて、リスク管理、分散投資、長期投資の重要性までをわかりやすく解説します。
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">初心者向け</Badge>
                      <Badge variant="outline">基礎知識</Badge>
                      <Badge variant="outline">リスク管理</Badge>
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
              <h2 className="text-3xl font-bold mb-4">基礎知識記事一覧</h2>
              <p className="text-muted-foreground">
                投資の基本を段階的に学ぶための記事です。順番に読んでいくことをおすすめします。
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
                  学んだ知識を実践するための便利なツールをご紹介します。
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
                  <h2 className="text-2xl font-bold mb-4">次のステップに進みましょう</h2>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    投資の基礎知識を学んだら、次は自分に合った投資方法を見つけるための診断ツールを試してみましょう。
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg">
                      <Link to="/#診断">
                        投資診断を始める
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <Link to="/comparison">
                        証券会社を比較する
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

export default Basics;