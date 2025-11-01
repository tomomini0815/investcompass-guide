import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Coins, Calculator, Lightbulb, Users, Award, BarChart3 } from "lucide-react";

const Crypto = () => {
  // 仮想通貨記事
  const articles = [
    {
      id: "crypto-basics",
      title: "仮想通貨の基本と仕組み",
      excerpt: "仮想通貨とは何か、基本的な仕組みと特徴について解説します。",
      readTime: "8分",
      date: "2024年10月30日",
    },
    {
      id: "how-to-buy-crypto",
      title: "仮想通貨の買い方と取引所の選び方",
      excerpt: "仮想通貨を購入する手順と、安全な取引所の選び方を詳しく説明します。",
      readTime: "9分",
      date: "2024年10月30日",
    },
    {
      id: "crypto-wallet",
      title: "ウォレットの種類と安全な管理方法",
      excerpt: "仮想通貨を安全に保管するためのウォレットの種類と管理方法について解説します。",
      readTime: "7分",
      date: "2024年10月30日",
    },
    {
      id: "crypto-risk",
      title: "仮想通貨投資のリスクと注意点",
      excerpt: "仮想通貨投資に伴うリスクと、安全な投資を行うための注意点について解説します。",
      readTime: "10分",
      date: "2024年10月30日",
    },
  ];

  // 関連ツール
  const tools = [
    {
      title: "仮想通貨リターン計算機",
      description: "仮想通貨投資のリターンとリスクをシミュレーション",
      href: "/tools/crypto-return",
      icon: Calculator,
    },
    {
      title: "ポートフォリオ分析ツール",
      description: "仮想通貨ポートフォリオの分析とリスク評価",
      href: "/tools/crypto-portfolio",
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
              仮想通貨
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
              仮想通貨投資を始めよう
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              仮想通貨の基本から実践的な投資戦略まで、初心者から中級者まで対応したガイドです。
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
                    <Coins className="h-16 w-16 text-primary mb-4" />
                    <h3 className="text-xl font-bold text-center">仮想通貨</h3>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h2 className="text-2xl font-bold mb-4">未来の通貨への投資</h2>
                    <p className="text-muted-foreground mb-4">
                      仮想通貨は、ブロックチェーン技術を基盤としたデジタル資産です。
                      高いリターンの可能性がある一方、価格変動が大きくリスクも高い投資商品です。
                      このセクションでは、仮想通貨の基本から始めて、安全な投資方法までを詳しく解説します。
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">仮想通貨</Badge>
                      <Badge variant="outline">ブロックチェーン</Badge>
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
              <h2 className="text-3xl font-bold mb-4">仮想通貨記事一覧</h2>
              <p className="text-muted-foreground">
                仮想通貨の基本から応用まで、段階的に学ぶための記事です。
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
                  仮想通貨投資を安全に実践するための便利なツールをご紹介します。
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
                  <h2 className="text-2xl font-bold mb-4">仮想通貨投資を始める準備はできましたか？</h2>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    仮想通貨の基本を学んだら、次は安全な取引所を選んで投資を始めてみましょう。
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg">
                      <Link to="/crypto-comparison">
                        取引所を比較する
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

export default Crypto;