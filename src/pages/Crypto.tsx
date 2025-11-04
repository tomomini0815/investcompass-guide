import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Coins, Calculator, Lightbulb, Users, Award, BarChart3 } from "lucide-react";

const Crypto = () => {
  // 暗号資産記事
  const articles = [
    {
      id: "crypto-basics",
      title: "暗号資産の基本と仕組み",
      excerpt: "暗号資産とは何か、基本的な仕組みと特徴について解説します。",
      content: `
        <h3 class="text-xl font-bold mb-3">暗号資産とは？</h3>
        <p class="mb-4">暗号資産とは、インターネット上で利用されるデジタルな通貨の総称です。中央銀行や政府などの機関に発行・管理されず、暗号技術によって発行・管理される金融資産です。</p>
        
        <h3 class="text-xl font-bold mb-3">ブロックチェーン技術</h3>
        <p class="mb-4">仮想通貨の基盤となるのがブロックチェーン技術です。これは、取引記録を分散型ネットワークで管理する技術で、改ざんが困難で透明性が高いという特徴があります。</p>
        
        <h3 class="text-xl font-bold mb-3">暗号資産の特徴</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div class="bg-blue-50 p-4 rounded-lg">
            <h4 class="font-bold text-blue-800 mb-2">メリット</h4>
            <ul class="list-disc pl-5 space-y-1">
              <li>国際送金が高速・低コスト</li>
              <li>24時間365日取引可能</li>
              <li>中央集権的な管理がない</li>
              <li>透明性が高い</li>
              <li>少額から投資可能</li>
            </ul>
          </div>
          <div class="bg-red-50 p-4 rounded-lg">
            <h4 class="font-bold text-red-800 mb-2">デメリット</h4>
            <ul class="list-disc pl-5 space-y-1">
              <li>価格変動が非常に大きい</li>
              <li>法的規制が未整備</li>
              <li>セキュリティリスク</li>
              <li>投資家保護が不十分</li>
              <li>詐欺や不正取引のリスク</li>
            </ul>
          </div>
        </div>
      `,
      readTime: "8分",
      date: "2024年10月30日",
    },
    {
      id: "how-to-buy-crypto",
      title: "暗号資産の買い方と取引所の選び方",
      excerpt: "暗号資産を購入する手順と、安全な取引所の選び方を詳しく説明します。",
      content: `
        <h3 class="text-xl font-bold mb-3">暗号資産の購入手順</h3>
        <ol class="list-decimal pl-5 mb-4 space-y-2">
          <li>信頼できる暗号資産取引所を選ぶ</li>
          <li>取引所にアカウント登録する</li>
          <li>本人確認（KYC）を行う</li>
          <li>銀行口座から取引所に日本円を入金</li>
          <li>購入したい暗号資産を選択して注文</li>
          <li>ウォレットに移動して安全に保管</li>
        </ol>
        
        <h3 class="text-xl font-bold mb-3">取引所の選び方</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div class="bg-green-50 p-4 rounded-lg">
            <h4 class="font-bold text-green-800 mb-2">チェックポイント</h4>
            <ul class="list-disc pl-5 space-y-1">
              <li>ライセンスと規制対応</li>
              <li>セキュリティ対策の充実度</li>
              <li>取扱っている暗号資産の種類</li>
              <li>手数料の安さ</li>
              <li>使いやすさとUI/UX</li>
            </ul>
          </div>
          <div class="bg-blue-50 p-4 rounded-lg">
            <h4 class="font-bold text-blue-800 mb-2">国内主要取引所</h4>
            <ul class="list-disc pl-5 space-y-1">
              <li>bitFlyer</li>
              <li>Coinbase</li>
              <li>GMOコイン</li>
              <li>liquid（旧Quoine）</li>
              <li>BITPOINT</li>
            </ul>
          </div>
        </div>
        
        <h3 class="text-xl font-bold mb-3">注文方法</h3>
        <div class="space-y-3 mb-4">
          <div>
            <h4 class="font-bold mb-1">成行注文</h4>
            <p>現在の市場価格で即座に約定する注文方法。手軽だが価格が不利になる可能性がある。</p>
          </div>
          <div>
            <h4 class="font-bold mb-1">指値注文</h4>
            <p>指定した価格で売買する注文方法。希望価格で約定するが、約定しないこともある。</p>
          </div>
        </div>
        
        <h3 class="text-xl font-bold mb-3">注意点</h3>
        <ul class="list-disc pl-5 space-y-1">
          <li>個人情報の取り扱いに注意</li>
          <li>二段階認証を設定する</li>
          <li>入出金方法と手数料を確認</li>
          <li>評判と口コミを調べる</li>
          <li>サポート体制を確認</li>
        </ul>
      `,
      readTime: "9分",
      date: "2024年10月30日",
    },
    {
      id: "crypto-wallet",
      title: "ウォレットの種類と安全な管理方法",
      excerpt: "暗号資産を安全に保管するためのウォレットの種類と管理方法について解説します。",
      content: `
        <h3 class="text-xl font-bold mb-3">ウォレットとは？</h3>
        <p class="mb-4">ウォレットとは、暗号資産を保管・管理するためのデジタルツールです。実際の通貨ではなく、通貨を所有していることを証明する「秘密鍵」と「公開鍵」を管理します。</p>
        
        <h3 class="text-xl font-bold mb-3">ウォレットの種類</h3>
        <div class="overflow-x-auto mb-4">
          <table class="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr class="bg-gray-100">
                <th class="py-2 px-4 border-b text-left">種類</th>
                <th class="py-2 px-4 border-b text-left">特徴</th>
                <th class="py-2 px-4 border-b text-left">メリット</th>
                <th class="py-2 px-4 border-b text-left">デメリット</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="py-2 px-4 border-b font-bold">ホットウォレット</td>
                <td class="py-2 px-4 border-b">インターネットに接続されたウォレット</td>
                <td class="py-2 px-4 border-b">使いやすい、送受信が簡単</td>
                <td class="py-2 px-4 border-b">ハッキングリスクがある</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="py-2 px-4 border-b font-bold">コールドウォレット</td>
                <td class="py-2 px-4 border-b">インターネットに接続されていないウォレット</td>
                <td class="py-2 px-4 border-b">セキュリティが高い</td>
                <td class="py-2 px-4 border-b">使いにくく、コストがかかる</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h3 class="text-xl font-bold mb-3">安全な管理方法</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div class="bg-purple-50 p-4 rounded-lg">
            <h4 class="font-bold text-purple-800 mb-2">基本のセキュリティ</h4>
            <ul class="list-disc pl-5 space-y-1">
              <li>秘密鍵を絶対に他人に知られない</li>
              <li>公式ウォレットを使用する</li>
              <li>定期的なバックアップを取る</li>
              <li>二段階認証を設定する</li>
            </ul>
          </div>
          <div class="bg-yellow-50 p-4 rounded-lg">
            <h4 class="font-bold text-yellow-800 mb-2">リスク管理</h4>
            <ul class="list-disc pl-5 space-y-1">
              <li>少額ずつ分散して保有</li>
              <li>取引所に長期間預けない</li>
              <li>フィッシングサイトに注意</li>
              <li>最新のセキュリティ対策を確認</li>
            </ul>
          </div>
        </div>
        
        <h3 class="text-xl font-bold mb-3">おすすめウォレット</h3>
        <ul class="list-disc pl-5 space-y-1">
          <li>ハードウェアウォレット：Ledger、Trezor</li>
          <li>ソフトウェアウォレット：Electrum、MyEtherWallet</li>
          <li>モバイルウォレット：Coinomi、Edge</li>
        </ul>
      `,
      readTime: "7分",
      date: "2024年10月30日",
    },
    {
      id: "crypto-risk",
      title: "暗号資産投資のリスクと注意点",
      excerpt: "暗号資産投資に伴うリスクと、安全な投資を行うための注意点について解説します。",
      content: `
        <h3 class="text-xl font-bold mb-3">暗号資産投資の主なリスク</h3>
        <div class="space-y-4 mb-4">
          <div class="border-l-4 border-red-500 pl-4">
            <h4 class="font-bold text-red-700 mb-2">1. 価格変動リスク</h4>
            <p>暗号資産は価格変動が非常に大きく、短期間で大きな損益が出る可能性があります。デリバティブ取引ではさらにリスクが高まります。</p>
          </div>
          
          <div class="border-l-4 border-orange-500 pl-4">
            <h4 class="font-bold text-orange-700 mb-2">2. セキュリティリスク</h4>
            <p>ハッキング、フィッシング、マルウェアなどのセキュリティリスクがあります。ウォレットや取引所の管理が重要です。</p>
          </div>
          
          <div class="border-l-4 border-yellow-500 pl-4">
            <h4 class="font-bold text-yellow-700 mb-2">3. 規制リスク</h4>
            <p>政府の規制変更や法整備の遅れにより、価値が大きく変動する可能性があります。</p>
          </div>
          
          <div class="border-l-4 border-green-500 pl-4">
            <h4 class="font-bold text-green-700 mb-2">4. 流動性リスク</h4>
            <p>マイナーな暗号資産は売買の際に価格が大きく変動したり、売買が成立しないリスクがあります。</p>
          </div>
        </div>
        
        <h3 class="text-xl font-bold mb-3">安全な投資のための注意点</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div class="bg-red-50 p-4 rounded-lg">
            <h4 class="font-bold text-red-800 mb-2">絶対に避けること</h4>
            <ul class="list-disc pl-5 space-y-1">
              <li>全財産を暗号資産に投資しない</li>
              <li>借金してまで投資しない</li>
              <li>高槓桿レバレッジ取引を避ける</li>
              <li>怪しいプロジェクトやポンジスキームに騙されない</li>
            </ul>
          </div>
          <div class="bg-green-50 p-4 rounded-lg">
            <h4 class="font-bold text-green-800 mb-2">守るべき原則</h4>
            <ul class="list-disc pl-5 space-y-1">
              <li>リスク許容度を明確にする</li>
              <li>分散投資を行う</li>
              <li>長期的な視点を持つ</li>
              <li>最新情報を収集する</li>
            </ul>
          </div>
        </div>
        
        <h3 class="text-xl font-bold mb-3">詐欺と不正取引の識別</h3>
        <ul class="list-disc pl-5 space-y-1">
          <li>高すぎるリターンを約束するプロジェクト</li>
          <li>匿名性の高い運営チーム</li>
          <li>ソースコードが公開されていない</li>
          <li>過剰なマーケティングと宣伝</li>
          <li>評判が極端に良いまたは悪い</li>
        </ul>
        
        <h3 class="text-xl font-bold mb-3">リスク管理戦略</h3>
        <ul class="list-disc pl-5 space-y-1">
          <li>損切りラインを事前に設定</li>
          <li>利益確定のタイミングを決める</li>
          <li>定期的なポートフォリオの見直し</li>
          <li>投資額の記録と分析</li>
        </ul>
      `,
      readTime: "10分",
      date: "2024年10月30日",
    },
  ];

  // 関連ツール
  const tools = [
    {
      title: "暗号資産リターン計算機",
      description: "暗号資産投資のリターンとリスクをシミュレーション",
      href: "/tools/crypto-return",
      icon: Calculator,
    },
    {
      title: "ポートフォリオ分析ツール",
      description: "暗号資産ポートフォリオの分析とリスク評価",
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
        <section className="relative py-20 container mx-auto px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-secondary/5 animate-fade-in" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <Badge variant="secondary" className="mb-6 px-6 py-2 text-sm font-semibold animate-fade-in hover:scale-105 transition-transform">
              暗号資産
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-accent via-secondary to-primary bg-clip-text text-transparent animate-fade-in">
              暗号資産投資を始めよう
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
              暗号資産の基本から実践的な投資戦略まで、初心者から中級者まで対応したガイドです。
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden border-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-card/50">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-accent/20 via-accent/10 to-secondary/10 p-8 flex flex-col items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Coins className="h-20 w-20 text-accent mb-4 relative z-10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                    <h3 className="text-xl font-bold text-center relative z-10">暗号資産</h3>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">未来の通貨への投資</h2>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      暗号資産は、ブロックチェーン技術を基盤としたデジタル資産です。
                      高いリターンの可能性がある一方、価格変動が大きくリスクも高い投資商品です。
                      このセクションでは、暗号資産の基本から始めて、安全な投資方法までを詳しく解説します。
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="hover:bg-accent hover:text-accent-foreground transition-colors">暗号資産</Badge>
                      <Badge variant="outline" className="hover:bg-accent hover:text-accent-foreground transition-colors">ブロックチェーン</Badge>
                      <Badge variant="outline" className="hover:bg-accent hover:text-accent-foreground transition-colors">リスク管理</Badge>
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
              <h2 className="text-3xl font-bold mb-4">暗号資産記事一覧</h2>
              <p className="text-muted-foreground">
                暗号資産の基本から応用まで、段階的に学ぶための記事です。
              </p>
            </div>
            
            <div className="space-y-8">
              {articles.map((article, index) => (
                <Card key={article.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 bg-gradient-to-br from-card to-card/80 hover:border-accent/30">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="secondary" className="rounded-full w-8 h-8 flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                        {index + 1}
                      </Badge>
                      <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">{article.title}</h3>
                    </div>
                    <div 
                      className="article-content mb-4"
                      dangerouslySetInnerHTML={{ __html: article.content }}
                    />
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">📅 {article.date}</span>
                      <span className="flex items-center gap-1">⏱️ {article.readTime}</span>
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
                  暗号資産投資を安全に実践するための便利なツールをご紹介します。
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tools.map((tool, index) => (
                  <Card key={tool.title} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 bg-gradient-to-br from-card to-card/80 hover:border-accent/30 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-gradient-to-br from-accent/20 to-secondary/10 rounded-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                          <tool.icon className="h-7 w-7 text-accent" />
                        </div>
                        <CardTitle className="group-hover:text-accent transition-colors">{tool.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{tool.description}</p>
                      <Button asChild variant="outline" className="w-full group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all">
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
              <Card className="relative overflow-hidden bg-gradient-to-br from-accent/20 via-secondary/10 to-primary/20 border-2 border-accent/30 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent opacity-50" />
                <CardContent className="p-10 text-center relative z-10">
                  <div className="inline-block p-4 bg-background rounded-full mb-6 animate-pulse">
                    <Lightbulb className="h-12 w-12 text-accent" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">暗号資産投資を始める準備はできましたか？</h2>
                  <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                    暗号資産の基本を学んだら、次は安全な取引所を選んで投資を始めてみましょう。
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="text-lg px-8 hover:scale-105 transition-transform">
                      <Link to="/crypto-comparison">
                        取引所を比較する →
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

export default Crypto;