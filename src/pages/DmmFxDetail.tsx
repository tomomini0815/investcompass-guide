import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, ArrowLeft, CheckCircle, Star, TrendingUp, Shield, Smartphone, Gift, Users, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";

const DmmFxDetail = () => {
  const features = [
    {
      title: "驚きのスピード感！最短即日で取引開始が可能",
      description: "申込はわずか5分で入力完了、最短即日で取引スタート※1、面倒な郵送物の受け取り不要。急な相場変動や、夜間から深夜にかけての大きな市場の動きにも、すぐに対応できます。\n\n※1 最短手続きで本人認証が完結した場合の申込完了から登録審査完了までの時間。当社休業日や申込内容等に不備があった場合は除く。",
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: "魅力的なキャンペーンとポイントプログラム",
      description: "取引数量に応じて最大500,000円のキャッシュバック、取引するほどポイントが貯まるポイントプログラム。取引を重ねることで、実質的なコストを削減できる仕組みが整っています。",
      icon: <Gift className="h-6 w-6" />
    },
    {
      title: "業界最狭水準のスプレッド※2＋取引手数料0円",
      description: "業界最狭水準のスプレッドを提供※2、取引手数料は完全無料。特に頻繁に取引するデイトレーダーにとって、この低コスト構造は大きな魅力です。\n\n※2 国内FX業界2023年度取引高の上位7社と比較（DMM.com証券調べ）",
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      title: "初心者からプロまで満足できる高性能な取引ツール",
      description: "PC版：多彩なチャート分析機能を搭載、スマホアプリ版：外出先でも快適に取引可能、初心者にも直感的に操作できるデザイン、上級者も満足できる高度な機能。実際の利用者からは「シンプルで使いやすい」「必要な情報がすぐに確認できる」といった高評価を得ています。",
      icon: <Smartphone className="h-6 w-6" />
    },
    {
      title: "充実のサポート体制で初心者も安心",
      description: "LINEでの問い合わせ対応、メールサポート、電話サポート。複数のチャネルで気軽に相談できる環境が整っており、初心者でも安心して取引を始められます。",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "全額信託保全で資産をしっかり守る",
      description: "3つの信託銀行と提携、お客様の大切な資産を分別管理、万が一の場合でも、資産は全額保護される。安心・安全な取引環境が整っています。",
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: "業界初！時事通信社のニュース配信で情報収集も万全",
      description: "リアルタイムで重要な経済ニュースをチェック、取引判断の材料として活用できる、別途ニュースサイトを開く手間が不要。取引プラットフォーム内で情報収集から取引まで完結できるのは、大きな時間の節約になります。",
      icon: <Star className="h-6 w-6" />
    }
  ];

  const steps = [
    {
      step: "STEP1",
      title: "口座開設申込（約5分）",
      description: "必要事項を入力するだけ。シンプルなフォームで迷うことなく進められます。"
    },
    {
      step: "STEP2",
      title: "本人確認",
      description: "スマホで本人確認書類を撮影して送信。郵送の手間がかかりません。"
    },
    {
      step: "STEP3",
      title: "取引開始",
      description: "審査完了後、最短即日で取引スタート！詳しい手順はマンガで解説されているので、初めての方でもわかりやすく確認できます。"
    }
  ];

  const importantNotes = [
    "FX取引は元本や利益を保証するものではありません",
    "相場の変動により損失が発生する可能性があります",
    "取引を始める前に、リスクについて十分に理解した上で、ご自身の判断で行ってください"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>DMM FX詳細 | FX業者比較 | 投資総合ナビ</title>
        <meta name="description" content="DMM FXの詳細情報。業界最狭水準のスプレッド、取引手数料0円、高性能な取引ツール、充実のサポート体制を提供。初心者からプロまで満足できるFX業者です。" />
        <meta name="keywords" content="DMM FX, FX業者, FX比較, スプレッド, 取引ツール, キャッシュバック" />
        <link rel="canonical" href="https://www.toushi-navi.com/fx/dmm-fx" />
        
        {/* Open Graph */}
        <meta property="og:title" content="DMM FX詳細 | FX業者比較 | 投資総合ナビ" />
        <meta property="og:description" content="DMM FXの詳細情報。業界最狭水準のスプレッド、取引手数料0円、高性能な取引ツール、充実のサポート体制を提供。初心者からプロまで満足できるFX業者です。" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.toushi-navi.com/fx/dmm-fx" />
        <meta property="og:site_name" content="投資総合ナビ" />
        <meta property="og:locale" content="ja_JP" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@toushi_navi" />
      </Helmet>
      
      <Header />
      
      <main className="flex-grow">
        {/* Breadcrumb */}
        <nav className="container mx-auto px-8 py-6">
          <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
            <li>
              <Link to="/" className="hover:text-primary transition-colors">ホーム</Link>
            </li>
            <li className="text-muted-foreground/50">/</li>
            <li>
              <Link to="/fx-comparison" className="hover:text-primary transition-colors">FX業者比較</Link>
            </li>
            <li className="text-muted-foreground/50">/</li>
            <li className="text-primary">DMM FX</li>
          </ol>
        </nav>
        
        <div className="bg-gradient-to-r from-muted/50 to-muted/30 py-4 border-b">
          <div className="container mx-auto px-8">
            <Link 
              to="/fx-comparison" 
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors group"
            >
              <ArrowLeft className="h-4 w-4 mr-1 group-hover:-translate-x-1 transition-transform" />
              FX業者比較に戻る
            </Link>
          </div>
        </div>

        {/* ヒーローセクション */}
        <section className="relative py-16 container mx-auto px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-accent/5 animate-fade-in" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent animate-fade-in">
              DMM FX
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
              3年連続取引高世界第1位※の実績を持つFX業者
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="px-8 py-6 text-lg hover:scale-105 transition-transform bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg">
                <a 
                  href="https://h.accesstrade.net/sp/cc?rk=0100kz3n00ol0m" 
                  target="_blank" 
                  rel="nofollow noopener"
                  referrerPolicy="no-referrer-when-downgrade"
                >
                  DMM FX公式サイトへ
                  <img src="https://h.accesstrade.net/sp/rr?rk=0100kz3n00ol0m" width="1" height="1" style={{ border: '0' }} alt="" />
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* DMM FXが多くのトレーダーに選ばれる7つの理由 */}
        <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">DMM FXが多くのトレーダーに選ばれる7つの理由</h2>
              
              <div className="space-y-8">
                {features.map((feature, index) => (
                  <Card key={index} className="border-2 hover:shadow-xl transition-all duration-300 overflow-hidden group">
                    <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5">
                      <CardTitle className="flex items-start gap-4">
                        <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                          {feature.icon}
                        </div>
                        <span className="text-xl pt-1">{feature.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <p className="text-muted-foreground whitespace-pre-line leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DMM FXの始め方｜簡単3ステップ */}
        <section className="py-16 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">DMM FXの始め方｜簡単3ステップ</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {steps.map((step, index) => (
                  <Card key={index} className="border-2 hover:shadow-lg transition-all duration-300 text-center h-full bg-gradient-to-b from-background to-muted/20">
                    <CardHeader>
                      <div className="bg-primary/10 text-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <span className="text-2xl font-bold">{step.step}</span>
                      </div>
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FX取引を始める前に知っておきたいこと */}
        <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">FX取引を始める前に知っておきたいこと</h2>
              
              <Card className="border-2 border-yellow-500/50 bg-yellow-50/50 shadow-lg">
                <CardHeader className="bg-yellow-100/50">
                  <CardTitle className="flex items-center gap-2 text-yellow-800">
                    <CheckCircle className="h-5 w-5" />
                    FX取引にはリスクが伴います
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <p className="text-yellow-700">
                      FX取引は、為替レートの変動により利益を得られる可能性がある一方で、損失が発生するリスクも存在します。
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-yellow-700">
                      <li>レバレッジをかけた取引では、元本を超える損失が発生する可能性があります</li>
                      <li>投資資金は余裕資金で行うことをおすすめします</li>
                      <li>最初は少額から始めて、徐々に取引に慣れていくことが大切です</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
              <div className="mt-12 text-center">
                <h3 className="text-2xl font-bold mb-6">まとめ：DMM FXは初心者から上級者まで幅広く対応</h3>
                <p className="text-lg text-muted-foreground mb-8">
                  DMM FXは、以下のような方に特におすすめです：
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                  <div className="flex items-center gap-2 p-3 bg-primary/5 rounded-lg border border-primary/10">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>FX取引を初めて始める方</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-primary/5 rounded-lg border border-primary/10">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>すぐに取引を開始したい方</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-primary/5 rounded-lg border border-primary/10">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>低コストで取引したい方</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-primary/5 rounded-lg border border-primary/10">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>充実したサポート体制を求める方</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-primary/5 rounded-lg md:col-span-2 border border-primary/10">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>信頼できる大手証券会社で取引したい方</span>
                  </div>
                </div>
                
                <p className="mt-8 text-muted-foreground">
                  全てが高スペックで、3年連続取引高世界第1位※という実績が、多くのトレーダーに選ばれている理由を物語っています。
                </p>
                <p className="mt-4 text-sm text-muted-foreground">
                  ※2020年～2022年の取引高（日本国内業者・海外業者を含む）（当社調べ）
                </p>
              </div>
              
              <div className="mt-12 text-center">
                <Button asChild size="lg" className="px-8 py-6 text-lg hover:scale-105 transition-transform bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg">
                  <a 
                    href="https://h.accesstrade.net/sp/cc?rk=0100kz3n00ol0m" 
                    target="_blank" 
                    rel="nofollow noopener"
                    referrerPolicy="no-referrer-when-downgrade"
                  >
                    DMM FX 口座開設はこちら
                    <img src="https://h.accesstrade.net/sp/rr?rk=0100kz3n00ol0m" width="1" height="1" style={{ border: '0' }} alt="" />
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
              
              <Card className="mt-12 border-2 border-destructive/50 bg-destructive/5 shadow-lg">
                <CardHeader className="bg-destructive/10">
                  <CardTitle className="text-destructive flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    【注意事項】
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="list-disc pl-5 space-y-2 text-destructive">
                    {importantNotes.map((note, index) => (
                      <li key={index}>{note}</li>
                    ))}
                  </ul>
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

export default DmmFxDetail;