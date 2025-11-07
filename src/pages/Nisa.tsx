import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, PieChart, Calculator, Lightbulb, Users, Award, TrendingUp } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";

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

  // シミュレーション用の状態管理
  const [monthlyAmount, setMonthlyAmount] = useState("5000");
  const [years, setYears] = useState("20");
  const [annualReturn, setAnnualReturn] = useState("5");
  
  // シミュレーション結果の計算
  const [totalInvestment, setTotalInvestment] = useState(0);
  const [futureValue, setFutureValue] = useState(0);
  const [profit, setProfit] = useState(0);
  
  // シミュレーション結果を計算するエフェクト
  useEffect(() => {
    const monthly = parseFloat(monthlyAmount) || 0;
    const yearsNum = parseFloat(years) || 0;
    const rate = parseFloat(annualReturn) / 100 || 0;
    
    // 総投資額の計算
    const total = monthly * 12 * yearsNum;
    setTotalInvestment(total);
    
    // 将来価値の計算（複利計算）
    if (rate === 0) {
      setFutureValue(total);
    } else {
      const monthlyRate = rate / 12;
      const months = yearsNum * 12;
      const fv = monthly * (((1 + monthlyRate) ** months - 1) / monthlyRate);
      setFutureValue(Math.round(fv));
    }
    
    // 利益の計算
    setProfit(Math.round(futureValue - total));
  }, [monthlyAmount, years, annualReturn, futureValue]);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>NISA・つみたてNISA投資ガイド | 非課税制度を活用した資産運用</title>
        <meta name="description" content="NISA・つみたてNISAの基本から投資戦略、おすすめ商品まで徹底解説。非課税制度を活用して効率的な資産運用を始めましょう。" />
        <meta name="keywords" content="NISA,つみたてNISA,投資,資産運用,非課税制度,投資信託,積立投資" />
        <link rel="canonical" href="https://www.toushi-navi.com/nisa" />
        
        {/* Open Graph */}
        <meta property="og:title" content="NISA・つみたてNISA投資ガイド | 非課税制度を活用した資産運用" />
        <meta property="og:description" content="NISA・つみたてNISAの基本から投資戦略、おすすめ商品まで徹底解説。非課税制度を活用して効率的な資産運用を始めましょう。" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.toushi-navi.com/nisa" />
        <meta property="og:site_name" content="投資総合ガイド" />
        <meta property="og:locale" content="ja_JP" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@toushi_navi" />
      </Helmet>
      
      <Header />
      
      <main className="flex-grow">
        {/* パンくずリスト */}
        <nav className="container mx-auto px-4 py-4">
          <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
            <li>
              <Link to="/" className="hover:text-primary transition-colors">ホーム</Link>
            </li>
            <li className="text-muted-foreground/50">/</li>
            <li className="text-primary">NISA・つみたてNISA</li>
          </ol>
        </nav>

        {/* ヒーローセクション */}
        <section className="py-12 sm:py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="secondary" className="mb-4">投資の基礎知識</Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">NISA・つみたてNISA投資ガイド</h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              非課税制度を活用した資産運用で、あなたの未来をしっかりサポート
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/#診断">投資診断を始める</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/comparison">証券会社を比較</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* 記事一覧セクション */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {articles.map((article) => (
                <Card key={article.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">
                      <Link to={`/nisa/${article.id}`} className="hover:text-primary transition-colors">
                        {article.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                      <span>{article.date}</span>
                      <span>{article.readTime}読了</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* NISA投資シミュレーションツール */}
        <section className="py-12 sm:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="h-6 w-6 text-primary" />
                    NISA投資シミュレーション
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    月々の積立額と運用年数を入力して、将来の資産形成イメージをシミュレーションできます。
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="monthlyAmount" className="block text-sm font-medium mb-2">
                        月々の積立額（円）
                      </label>
                      <input
                        type="number"
                        id="monthlyAmount"
                        className="w-full px-3 py-2 border border-input rounded-md"
                        placeholder="5,000"
                        value={monthlyAmount}
                        onChange={(e) => setMonthlyAmount(e.target.value)}
                      />
                    </div>
                    <div>
                      <label htmlFor="years" className="block text-sm font-medium mb-2">
                        運用年数
                      </label>
                      <input
                        type="number"
                        id="years"
                        className="w-full px-3 py-2 border border-input rounded-md"
                        placeholder="20"
                        value={years}
                        onChange={(e) => setYears(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <label htmlFor="annualReturn" className="block text-sm font-medium mb-2">
                      年間リターン（%）
                    </label>
                    <input
                      type="range"
                      id="annualReturn"
                      min="1"
                      max="15"
                      step="0.1"
                      value={annualReturn}
                      onChange={(e) => setAnnualReturn(e.target.value)}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>1%</span>
                      <span className="font-medium">{annualReturn}%</span>
                      <span>15%</span>
                    </div>
                  </div>
                  <div className="mt-8 p-4 bg-primary/5 rounded-lg">
                    <h3 className="font-bold mb-2">シミュレーション結果</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">総投資額</p>
                        <p className="text-xl font-bold">¥{totalInvestment.toLocaleString()}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">評価額</p>
                        <p className="text-xl font-bold text-primary">¥{futureValue.toLocaleString()}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">利益</p>
                        <p className="text-xl font-bold text-green-600">¥{profit.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* NISA口座開設の勧誘セクション */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-to-r from-primary to-blue-600 text-primary-foreground">
                <CardContent className="p-8 text-center">
                  <Lightbulb className="h-12 w-12 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold mb-4">NISA口座開設で投資を始めよう</h2>
                  <p className="mb-6 max-w-2xl mx-auto">
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