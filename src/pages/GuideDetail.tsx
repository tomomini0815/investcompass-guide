import { useParams, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar, ArrowLeft, ExternalLink } from "lucide-react";

const GuideDetail = () => {
  const { id } = useParams();

  // サンプルデータ（実際はAPIやデータベースから取得）
  const articles: Record<string, any> = {
    "nisa-beginner": {
      title: "【2024年最新版】NISA完全ガイド：初心者が知るべき全て",
      category: "NISA",
      date: "2024年1月15日",
      readTime: "8分",
      content: `
        <h2>NISAとは？</h2>
        <p>NISA（ニーサ：少額投資非課税制度）は、投資で得た利益が非課税になる制度です。2024年から新しいNISA制度が始まり、より使いやすくなりました。</p>
        
        <h2>新NISAの3つの特徴</h2>
        <h3>1. 非課税期間の無期限化</h3>
        <p>従来のNISAでは5年間だった非課税期間が、無期限になりました。長期投資がしやすくなっています。</p>
        
        <h3>2. 年間投資枠の拡大</h3>
        <p>つみたて投資枠：年間120万円、成長投資枠：年間240万円の合計360万円まで投資できるようになりました。</p>
        
        <h3>3. 非課税保有限度額の設定</h3>
        <p>生涯で1,800万円まで（成長投資枠は1,200万円まで）投資できます。売却した分の枠は翌年に復活します。</p>
        
        <h2>NISAの始め方</h2>
        <ol>
          <li>証券会社を選ぶ</li>
          <li>NISA口座を開設する</li>
          <li>投資する商品を選ぶ</li>
          <li>定期的に投資を続ける</li>
        </ol>
        
        <h2>初心者におすすめの投資方法</h2>
        <p>NISAを始める初心者には、つみたて投資枠を使った「インデックスファンド」への積立投資がおすすめです。</p>
        <p>月々1万円から始められ、長期的な資産形成に適しています。</p>
        
        <h2>まとめ</h2>
        <p>新NISAは、投資初心者にとって非常に有利な制度です。非課税のメリットを活かして、計画的に資産形成を始めましょう。</p>
      `,
    },
    "stocks-beginner": {
      title: "株式投資の始め方：証券口座開設から銘柄選びまで",
      category: "株式投資",
      date: "2024年1月12日",
      readTime: "10分",
      content: `
        <h2>株式投資とは</h2>
        <p>株式投資は、企業が発行する株式を購入し、その企業の成長や配当金によって利益を得る投資方法です。</p>
        
        <h2>株式投資を始める手順</h2>
        <h3>1. 証券口座を開設する</h3>
        <p>まずは証券会社で口座を開設します。ネット証券なら手数料が安く、初心者にもおすすめです。</p>
        
        <h3>2. 投資資金を用意する</h3>
        <p>生活費や緊急資金とは別に、投資に回せる余裕資金を準備しましょう。</p>
        
        <h3>3. 投資する銘柄を選ぶ</h3>
        <p>企業の業績、成長性、配当利回りなどを考慮して銘柄を選びます。</p>
        
        <h2>初心者が気をつけるべきポイント</h2>
        <ul>
          <li>一度に大金を投資しない</li>
          <li>複数の銘柄に分散投資する</li>
          <li>短期的な値動きに一喜一憂しない</li>
          <li>継続的に学習を続ける</li>
        </ul>
      `,
    },
    "investment-trust": {
      title: "投資信託とは？メリット・デメリットと選び方のポイント",
      category: "投資信託",
      date: "2024年1月10日",
      readTime: "7分",
      content: `
        <h2>投資信託の基礎知識</h2>
        <p>投資信託は、多くの投資家から集めた資金を、専門家が株式や債券などに投資・運用する金融商品です。</p>
        
        <h2>投資信託のメリット</h2>
        <ul>
          <li>少額から始められる（100円〜）</li>
          <li>プロに運用を任せられる</li>
          <li>自動的に分散投資ができる</li>
          <li>透明性が高い</li>
        </ul>
        
        <h2>投資信託のデメリット</h2>
        <ul>
          <li>手数料がかかる</li>
          <li>元本保証がない</li>
          <li>短期的な売買には向かない</li>
        </ul>
        
        <h2>投資信託の選び方</h2>
        <p>インデックスファンドとアクティブファンドの違いを理解し、手数料や過去の運用実績を確認しましょう。</p>
      `,
    },
  };

  const article = articles[id || "nisa-beginner"] || articles["nisa-beginner"];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-muted/30 py-4">
          <div className="container mx-auto px-4">
            <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary">
              <ArrowLeft className="h-4 w-4 mr-1" />
              トップページに戻る
            </Link>
          </div>
        </div>

        {/* Article Header */}
        <section className="py-12 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">{article.category}</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              {article.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {article.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                読了時間: {article.readTime}
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <article className="lg:col-span-2 prose prose-slate max-w-none">
                <div 
                  className="article-content"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              </article>

              {/* Sidebar */}
              <aside className="space-y-6">
                {/* CTA Card */}
                <Card className="sticky top-4">
                  <CardHeader>
                    <CardTitle className="text-lg">今すぐ始めよう</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      投資を始めるなら、まずは証券口座の開設から。
                    </p>
                    <Button className="w-full" asChild>
                      <Link to="/comparison">
                        証券会社を比較する
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/tools">
                        投資をシミュレーション
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Related Articles */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">関連記事</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {Object.entries(articles)
                      .filter(([key]) => key !== id)
                      .slice(0, 3)
                      .map(([key, relatedArticle]) => (
                        <Link
                          key={key}
                          to={`/guide/${key}`}
                          className="block text-sm hover:text-primary transition-colors"
                        >
                          {relatedArticle.title}
                        </Link>
                      ))}
                  </CardContent>
                </Card>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GuideDetail;
