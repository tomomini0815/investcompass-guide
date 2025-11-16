import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, ArrowLeft, CheckCircle, Wallet, TrendingDown, Smartphone, Gift, Users, BookOpen, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";

const DmmStockDetail = () => {
  const features = [
    {
      title: "少額投資OK！1,000円以下から始められる",
      description: "日本株も米国株も1,000円以下で購入できる銘柄が用意されています。お小遣いの範囲内で、まずは体験してみることができるのは大きな魅力です。少額から始めることで、投資の感覚をつかみながら、自分のペースで学んでいけます。",
      icon: <Wallet className="h-6 w-6" />
    },
    {
      title: "手数料の安さが際立つコストパフォーマンス",
      description: "米国株取引手数料：0ドル〜、国内現物取引：55円〜、25歳以下の方は国内株式手数料が実質0円！、国内信用取引：0円、米国株信用取引：0ドル。特に若い世代の投資家にとって、25歳以下の手数料実質0円は大きなアドバンテージ。取引コストを抑えることで、より効率的な資産形成が可能になります。",
      icon: <TrendingDown className="h-6 w-6" />
    },
    {
      title: "スマホアプリで完結する手軽さ",
      description: "日本株・米国株・NISA取引まで、すべてを一つのアプリで管理できます。通勤時間やちょっとした空き時間に、マーケットの動きをチェックしたり、取引したりすることが可能です。",
      icon: <Smartphone className="h-6 w-6" />
    },
    {
      title: "取引でポイントが貯まる！現金化も簡単",
      description: "取引するたびにポイントが貯まり、「1ポイント=1円」で現金化できるのも嬉しいポイント。継続的に取引を行う方にとっては、実質的な手数料の割引効果も期待できます。コツコツ貯めて、次の投資資金にするのも良いでしょう。",
      icon: <Gift className="h-6 w-6" />
    },
    {
      title: "自分のレベルに合わせて使い分けできるツール",
      description: "シンプルな「かんたんモード」と、高機能な「ノーマルモード」を切り替えることができます。最初はかんたんモードで基本を学び、慣れてきたらノーマルモードで本格的な分析を行う、といった使い方が可能です。",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "無料で充実した投資情報を入手できる",
      description: "株式新聞やバロンズダイジェストなど、通常有料の投資レポートを無料で提供しています。初心者の方は、これらの情報を読むだけでも投資の知識が深まります。",
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      title: "お得なキャンペーンが充実",
      description: "米国株信用買方金利が業界最安水準の2.9%（2025年8月29日〜2026年2月28日）、新規登録者向け抽選で2,000円プレゼント、取引量に応じたポイントプログラム。こうした特典を活用することで、よりお得に投資をスタートできます。",
      icon: <Zap className="h-6 w-6" />
    }
  ];

  const steps = [
    {
      step: "ステップ1",
      title: "アカウント情報の入力（最短約5分）",
      description: "必要事項を入力するだけ。スマホからでもサクサク進みます。"
    },
    {
      step: "ステップ2",
      title: "本人確認書類の提出",
      description: "オンラインで完結するため、郵送の手間がありません。"
    },
    {
      step: "ステップ3",
      title: "申込完了",
      description: "審査が完了すれば、最短即日で取引開始が可能です！\n\n※最短手続きで本人認証が完結した場合の申込完了から登録審査完了までの時間です。休業日や申込内容に不備があった場合は除きます。"
    }
  ];

  const importantNotes = [
    "株式取引には元本割れや当初元本を上回る損失が生じる恐れがあります",
    "投資判断は自己責任で行い、無理のない範囲で取引しましょう",
    "不明な点は、必ずカスタマーサポートに確認してください",
    "キャンペーン内容や手数料は変更される場合がありますので、公式サイトで最新情報をご確認ください",
    "この記事は情報提供を目的としており、投資を推奨するものではありません。投資は自己判断・自己責任で行ってください。"
  ];

  const beginnerTips = [
    {
      title: "リスクについて正しく理解する",
      points: [
        "元本割れのリスク：株式投資では、投資した金額を下回る可能性があります",
        "市場変動リスク：経済情勢や企業業績により、株価は日々変動します",
        "流動性リスク：銘柄によっては、売りたいときに売れない場合もあります"
      ]
    },
    {
      title: "無理のない投資計画を立てる",
      points: [
        "生活費を圧迫しない範囲で投資する",
        "最初は少額から始めて、徐々に金額を増やす",
        "分散投資を心がける"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>DMM株（DMM.com証券）詳細 | 証券会社比較 | 投資総合ナビ</title>
        <meta name="description" content="DMM株（DMM.com証券）の詳細情報。少額投資OK、手数料が安い、スマホアプリで完結、ポイントが貯まるなど初心者に嬉しい特徴を多数揃えています。" />
        <meta name="keywords" content="DMM株, DMM.com証券, 証券会社, 株式投資, 少額投資, 手数料" />
        <link rel="canonical" href="https://www.toushi-navi.com/stocks/dmm-stock" />
        
        {/* Open Graph */}
        <meta property="og:title" content="DMM株（DMM.com証券）詳細 | 証券会社比較 | 投資総合ナビ" />
        <meta property="og:description" content="DMM株（DMM.com証券）の詳細情報。少額投資OK、手数料が安い、スマホアプリで完結、ポイントが貯まるなど初心者に嬉しい特徴を多数揃えています。" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.toushi-navi.com/stocks/dmm-stock" />
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
              <Link to="/comparison" className="hover:text-primary transition-colors">証券会社比較</Link>
            </li>
            <li className="text-muted-foreground/50">/</li>
            <li className="text-primary">DMM株（DMM.com証券）</li>
          </ol>
        </nav>
        
        <div className="bg-gradient-to-r from-muted/50 to-muted/30 py-4 border-b">
          <div className="container mx-auto px-8">
            <Link 
              to="/comparison" 
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors group"
            >
              <ArrowLeft className="h-4 w-4 mr-1 group-hover:-translate-x-1 transition-transform" />
              証券会社比較に戻る
            </Link>
          </div>
        </div>

        {/* ヒーローセクション */}
        <section className="relative py-16 container mx-auto px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-accent/5 animate-fade-in" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent animate-fade-in">
              DMM株（DMM.com証券）
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
              2025年最新！株式投資を始めるなら今がチャンス！
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="px-8 py-6 text-lg hover:scale-105 transition-transform bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg">
                <a 
                  href="https://h.accesstrade.net/sp/cc?rk=0100mkk300ol0m" 
                  target="_blank" 
                  rel="nofollow noopener"
                  referrerPolicy="no-referrer-when-downgrade"
                >
                  DMM 株公式サイトへ
                  <img src="https://h.accesstrade.net/sp/rr?rk=0100mkk300ol0m" width="1" height="1" style={{ border: '0' }} alt="" />
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* DMM 株が初心者に選ばれる7つの理由 */}
        <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">DMM 株が初心者に選ばれる7つの理由</h2>
              
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
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 取引ツール */}
        <section className="py-16 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">取引ツール</h2>
              
              <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col items-center">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 flex items-center justify-center mb-4 overflow-hidden">
                        <img 
                          src="/images/securities/dmm-pro-plus.png" 
                          alt="DMM株 PRO＋" 
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <h3 className="text-xl font-bold mb-2">DMM株 PRO＋</h3>
                      <p className="text-muted-foreground text-center">
                        DMM株の主力トレーディングツール。高速な注文機能と充実のチャート機能を備えています。
                      </p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 flex items-center justify-center mb-4 overflow-hidden">
                        <img 
                          src="/images/securities/dmm-app.png" 
                          alt="DMM株アプリ" 
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <h3 className="text-xl font-bold mb-2">DMM株アプリ</h3>
                      <p className="text-muted-foreground text-center">
                        スマホでも使えるDMM株のモバイルアプリ。直感的な操作性とリアルタイムの市場情報提供。
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 口座開設はたったの3ステップ！最短即日取引可能 */}
        <section className="py-16 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">口座開設はたったの3ステップ！最短即日取引可能</h2>
              
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
                      <p className="text-muted-foreground whitespace-pre-line">{step.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 初心者が気をつけるべきポイント */}
        <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">初心者が気をつけるべきポイント</h2>
              
              <div className="space-y-8">
                {beginnerTips.map((tip, index) => (
                  <Card key={index} className="border-2 hover:shadow-lg transition-all duration-300 bg-gradient-to-b from-background to-muted/20">
                    <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5">
                      <CardTitle className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        {tip.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        {tip.points.map((point, pointIndex) => (
                          <li key={pointIndex}>{point}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* まとめ：あなたの投資デビューをDMM 株がサポート */}
        <section className="py-16 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">まとめ：あなたの投資デビューをDMM 株がサポート</h2>
              
              <Card className="border-2 hover:shadow-lg transition-all duration-300 bg-gradient-to-b from-background to-muted/20">
                <CardContent className="pt-6">
                  <p className="text-lg text-muted-foreground mb-6">
                    株式投資は、正しい知識と適切なツールがあれば、決して難しいものではありません。
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2 p-3 bg-primary/5 rounded-lg border border-primary/10">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>少額から始められる</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-primary/5 rounded-lg border border-primary/10">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>手数料が安い</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-primary/5 rounded-lg border border-primary/10">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>アプリで簡単取引</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-primary/5 rounded-lg border border-primary/10">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>充実した情報提供</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">
                    これらの特徴は、これから投資を始める方にとって理想的な環境です。
                  </p>
                  
                  <p className="text-muted-foreground">
                    まずは少額から、自分のペースで始めてみませんか？
                  </p>
                  <p className="text-muted-foreground mt-2">
                    最短即日で取引開始できるスピーディーさも魅力。思い立ったら、まずは口座開設から始めてみましょう。
                  </p>
                </CardContent>
              </Card>
              
              <div className="mt-12 text-center">
                <Button asChild size="lg" className="px-8 py-6 text-lg hover:scale-105 transition-transform bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg">
                  <a 
                    href="https://h.accesstrade.net/sp/cc?rk=0100mkk300ol0m" 
                    target="_blank" 
                    rel="nofollow noopener"
                    referrerPolicy="no-referrer-when-downgrade"
                  >
                    DMM 株公式サイトへ
                    <img src="https://h.accesstrade.net/sp/rr?rk=0100mkk300ol0m" width="1" height="1" style={{ border: '0' }} alt="" />
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

export default DmmStockDetail;