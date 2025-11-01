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
      content: `
        <h3 class="text-xl font-bold mb-3">NISAとは？</h3>
        <p class="mb-4">NISA（少額投資非課税制度）とは、個人が株式や投資信託などの金融商品に投資した際の利益（配当金・分配金・売却益）が非課税となる制度です。2014年に導入され、2024年現在も継続されています。</p>
        
        <h3 class="text-xl font-bold mb-3">つみたてNISAとは？</h3>
        <p class="mb-4">つみたてNISAは、2018年に導入された長期的な資産形成に適した投資信託に特化したNISAです。毎月少額ずつ積み立てながら、インデックス型投資信託などの低コストで分散投資が可能な商品に投資できます。</p>
        
        <h3 class="text-xl font-bold mb-3">NISAとつみたてNISAの違い</h3>
        <div class="overflow-x-auto mb-4">
          <table class="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr class="bg-gray-100">
                <th class="py-2 px-4 border-b text-left">項目</th>
                <th class="py-2 px-4 border-b text-left">NISA</th>
                <th class="py-2 px-4 border-b text-left">つみたてNISA</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="py-2 px-4 border-b">対象商品</td>
                <td class="py-2 px-4 border-b">株式、投資信託、ETF、ETNなど</td>
                <td class="py-2 px-4 border-b">特定のインデックス型投資信託など</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="py-2 px-4 border-b">非課税枠</td>
                <td class="py-2 px-4 border-b">年間120万円（累計1,000万円）</td>
                <td class="py-2 px-4 border-b">年間40万円（累計800万円）</td>
              </tr>
              <tr>
                <td class="py-2 px-4 border-b">非課税期間</td>
                <td class="py-2 px-4 border-b">5年間</td>
                <td class="py-2 px-4 border-b">20年間</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="py-2 px-4 border-b">売却ルール</td>
                <td class="py-2 px-4 border-b">特定口座で管理（源泉分離課税）</td>
                <td class="py-2 px-4 border-b">特定口座で管理（源泉分離課税）</td>
              </tr>
              <tr>
                <td class="py-2 px-4 border-b">積立投資</td>
                <td class="py-2 px-4 border-b">任意</td>
                <td class="py-2 px-4 border-b">推奨（自動引き落とし）</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h3 class="text-xl font-bold mb-3">新NISA制度</h3>
        <p class="mb-4">2024年から新NISA制度が始まりました。年間180万円の非課税枠（うち120万円が分配金・配当金、60万円が譲渡益）が導入され、従来のNISAとつみたてNISAが統合されました。新NISAは、従来の制度のメリットを活かしつつ、より柔軟な運用が可能になっています。</p>
      `,
      readTime: "7分",
      date: "2024年10月30日",
    },
    {
      id: "how-to-open-nisa",
      title: "NISA口座の開設手順",
      excerpt: "NISA口座を開設するまでの手順と必要な書類、注意点について詳しく説明します。",
      content: `
        <h3 class="text-xl font-bold mb-3">NISA口座開設の流れ</h3>
        <ol class="list-decimal pl-5 mb-4 space-y-2">
          <li>証券会社を選ぶ</li>
          <li>必要な書類を準備する</li>
          <li>口座開設申込書に記入する</li>
          <li>本人確認と印鑑証明書の提出</li>
          <li>口座開設の完了</li>
        </ol>
        
        <h3 class="text-xl font-bold mb-3">証券会社の選び方</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div class="bg-green-50 p-4 rounded-lg">
            <h4 class="font-bold text-green-800 mb-2">チェックポイント</h4>
            <ul class="list-disc pl-5 space-y-1">
              <li>手数料の安さ</li>
              <li>取扱商品の充実度</li>
              <li>使いやすい取引ツール</li>
              <li>信頼性と実績</li>
              <li>サポート体制</li>
            </ul>
          </div>
          <div class="bg-blue-50 p-4 rounded-lg">
            <h4 class="font-bold text-blue-800 mb-2">注意点</h4>
            <ul class="list-disc pl-5 space-y-1">
              <li>キャンペーンの条件を確認</li>
              <li>年会費や管理費の有無</li>
              <li>振込手数料の設定</li>
              <li>利用可能なNISAの種類</li>
            </ul>
          </div>
        </div>
        
        <h3 class="text-xl font-bold mb-3">必要な書類</h3>
        <ul class="list-disc pl-5 mb-4 space-y-1">
          <li>本人確認書類（運転免許証、パスポートなど）</li>
          <li>印鑑（認印）</li>
          <li>印鑑証明書（市区町村で発行、3か月以内）</li>
          <li>源泉徴収票または確定申告書（一部の証券会社）</li>
        </ul>
        
        <h3 class="text-xl font-bold mb-3">口座開設後の注意点</h3>
        <ul class="list-disc pl-5 space-y-1">
          <li>年間非課税枠の管理</li>
          <li>非課税期間の確認</li>
          <li>売却時の注意（特定口座での管理）</li>
          <li>他の口座との使い分け</li>
        </ul>
      `,
      readTime: "6分",
      date: "2024年10月30日",
    },
    {
      id: "nisa-investment-strategy",
      title: "NISAでの投資戦略とおすすめ商品",
      excerpt: "NISAを活用した効果的な投資戦略と、おすすめの投資商品を紹介します。",
      content: `
        <h3 class="text-xl font-bold mb-3">NISA投資の基本戦略</h3>
        <p class="mb-4">NISA口座での投資では、非課税枠を最大限に活用することが重要です。長期的な資産形成を目指す場合は、分散投資とドルコスト平均法による積立投資が効果的です。</p>
        
        <h3 class="text-xl font-bold mb-3">おすすめ投資商品</h3>
        <div class="space-y-4 mb-4">
          <div class="border-l-4 border-blue-500 pl-4">
            <h4 class="font-bold text-blue-700 mb-2">インデックス型投資信託</h4>
            <p>市場全体の動きに連動するため、リスク分散が図れ、信託報酬も比較的安価です。つみたてNISAの対象商品としても推奨されています。</p>
          </div>
          
          <div class="border-l-4 border-green-500 pl-4">
            <h4 class="font-bold text-green-700 mb-2">ETF（上場投資信託）</h4>
            <p>株式のように取引所で売買できる投資信託で、手数料が安くて流動性が高いのが特徴です。日本株、米国株、先進国株など多様な商品があります。</p>
          </div>
          
          <div class="border-l-4 border-purple-500 pl-4">
            <h4 class="font-bold text-purple-700 mb-2">個人向け国債（変動金利型）</h4>
            <p>元本が保証され、金利が変動する国債です。リスクが低く安定した運用を求める方におすすめです。</p>
          </div>
        </div>
        
        <h3 class="text-xl font-bold mb-3">ポートフォリオの組み方</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div class="bg-blue-50 p-4 rounded-lg text-center">
            <PieChart class="h-12 w-12 text-blue-600 mx-auto mb-2" />
            <h4 class="font-bold text-blue-800 mb-1">国内株式</h4>
            <p class="text-sm">30-40%</p>
          </div>
          <div class="bg-green-50 p-4 rounded-lg text-center">
            <TrendingUp class="h-12 w-12 text-green-600 mx-auto mb-2" />
            <h4 class="font-bold text-green-800 mb-1">海外株式</h4>
            <p class="text-sm">40-50%</p>
          </div>
          <div class="bg-purple-50 p-4 rounded-lg text-center">
            <Award class="h-12 w-12 text-purple-600 mx-auto mb-2" />
            <h4 class="font-bold text-purple-800 mb-1">債券・その他</h4>
            <p class="text-sm">10-20%</p>
          </div>
        </div>
        
        <h3 class="text-xl font-bold mb-3">リスク管理とリバランス</h3>
        <ul class="list-disc pl-5 space-y-1">
          <li>定期的にポートフォリオを見直す（年1-2回）</li>
          <li>資産配分が目標から大きくずれた場合は調整する</li>
          <li>市場の変動に一喜一憂せず、長期的な視点を持つ</li>
          <li>自分のリスク許容度に合った運用を行う</li>
        </ul>
      `,
      readTime: "9分",
      date: "2024年10月30日",
    },
    {
      id: "nisa-tax-benefit",
      title: "NISAの税制優遇と節税効果",
      excerpt: "NISAの税制優遇内容と、実際にどれくらいの節税効果があるのかを解説します。",
      content: `
        <h3 class="text-xl font-bold mb-3">NISAの税制優遇内容</h3>
        <p class="mb-4">NISAでは、投資で得た利益（配当金・分配金・売却益）が非課税になります。これは、通常の特定口座では利益に応じて約20%の税金（所得税15%、住民税5%）がかかるのに対し、NISA口座ではその税金がかからないという大きなメリットです。</p>
        
        <h3 class="text-xl font-bold mb-3">節税効果の計算例</h3>
        <div class="bg-yellow-50 p-4 rounded-lg mb-4">
          <h4 class="font-bold text-yellow-800 mb-2">例：年間120万円の利益を得た場合</h4>
          <ul class="list-disc pl-5 space-y-1">
            <li>通常の特定口座：120万円 × 20% = 24万円の税金</li>
            <li>NISA口座：0円の税金</li>
            <li><strong>節税効果：24万円</strong></li>
          </ul>
        </div>
        
        <h3 class="text-xl font-bold mb-3">新NISAの節税効果</h3>
        <p class="mb-4">2024年から始まった新NISAでは、年間180万円の非課税枠があります。そのうち120万円が分配金・配当金、60万円が譲渡益の非課税枠です。</p>
        
        <div class="bg-green-50 p-4 rounded-lg mb-4">
          <h4 class="font-bold text-green-800 mb-2">新NISAの節税効果計算例</h4>
          <ul class="list-disc pl-5 space-y-1">
            <li>分配金・配当金：120万円 × 20% = 24万円の節税</li>
            <li>譲渡益：60万円 × 20% = 12万円の節税</li>
            <li><strong>合計節税効果：36万円</strong></li>
          </ul>
        </div>
        
        <h3 class="text-xl font-bold mb-3">NISAと他の制度の併用</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div class="border border-blue-300 rounded-lg p-4">
            <h4 class="font-bold text-blue-700 mb-2">iDeCoとの併用</h4>
            <p class="text-sm">NISAとiDeCo（個人型確定拠出年金）は併用可能です。両制度を活用することで、より大きな節税効果と資産形成が期待できます。</p>
          </div>
          <div class="border border-green-300 rounded-lg p-4">
            <h4 class="font-bold text-green-700 mb-2">一般の特定口座との併用</h4>
            <p class="text-sm">NISA口座と一般の特定口座を併用することも可能です。目的に応じて使い分けることで、より効率的な資産運用ができます。</p>
          </div>
        </div>
        
        <h3 class="text-xl font-bold mb-3">節税効果を最大限に活用するポイント</h3>
        <ul class="list-disc pl-5 space-y-1">
          <li>年間非課税枠を最大限に活用する</li>
          <li>長期的な運用で複利効果を活かす</li>
          <li>適切な分散投資でリスクを管理する</li>
          <li>他の節税制度と組み合わせる</li>
        </ul>
      `,
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
        <section className="relative py-20 container mx-auto px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 animate-fade-in" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <Badge variant="secondary" className="mb-6 px-6 py-2 text-sm font-semibold animate-fade-in hover:scale-105 transition-transform">
              NISA・つみたてNISA
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent animate-fade-in">
              NISAで節税しながら資産形成
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
              NISA・つみたてNISAの仕組みを理解し、節税効果を最大限に活用した資産形成を実現しましょう。
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden border-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-card/50">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-accent/20 via-accent/10 to-primary/10 p-8 flex flex-col items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <PieChart className="h-20 w-20 text-accent mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-bold text-center relative z-10">NISA・つみたてNISA</h3>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">節税投資の代表格</h2>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      NISA（少額投資非課税制度）は、投資で得た利益が非課税になる制度です。
                      つみたてNISAは、長期的な資産形成に適した投資信託に特化したNISAです。
                      このセクションでは、NISA・つみたてNISAの基本から始めて、活用方法と節税効果までを詳しく解説します。
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="hover:bg-accent hover:text-accent-foreground transition-colors">NISA</Badge>
                      <Badge variant="outline" className="hover:bg-accent hover:text-accent-foreground transition-colors">つみたてNISA</Badge>
                      <Badge variant="outline" className="hover:bg-accent hover:text-accent-foreground transition-colors">節税</Badge>
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
                  NISAを最大限に活用するための便利なツールをご紹介します。
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tools.map((tool, index) => (
                  <Card key={tool.title} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 bg-gradient-to-br from-card to-card/80 hover:border-accent/30 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-gradient-to-br from-accent/20 to-primary/10 rounded-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
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
              <Card className="relative overflow-hidden bg-gradient-to-br from-accent/20 via-primary/10 to-secondary/20 border-2 border-accent/30 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent opacity-50" />
                <CardContent className="p-10 text-center relative z-10">
                  <div className="inline-block p-4 bg-background rounded-full mb-6 animate-pulse">
                    <Lightbulb className="h-12 w-12 text-accent" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">NISA口座を開設してみませんか？</h2>
                  <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                    NISAの基本を学んだら、次は実際に口座を開設して投資を始めてみましょう。
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

export default Nisa;