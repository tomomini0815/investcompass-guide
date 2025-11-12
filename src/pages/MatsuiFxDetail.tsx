import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, ArrowLeft, CheckCircle, Wallet, TrendingDown, Smartphone, Zap, Users, BarChart } from "lucide-react";
import { Helmet } from "react-helmet-async";

const MatsuiFxDetail = () => {
  const features = [
    {
      title: "業界最小級！100円から取引できる",
      description: "一般的なFX会社では1,000通貨や10,000通貨からの取引が主流ですが、松井証券なら1通貨（米ドル/円なら約100円程度）から取引可能。これは「まずは少額で試してみたい」という初心者にとって大きなメリットです。\n\n少額取引のメリット：\n• 損失リスクを最小限に抑えられる\n• 実際の資金で取引感覚を掴める\n• 心理的負担が少なく、冷静な判断ができる",
      icon: <Wallet className="h-6 w-6" />
    },
    {
      title: "各種手数料が0円！コストを徹底的に抑える",
      description: "取引で発生するコストは以下の通り、すべて無料です。\n\n✓ 口座開設手数料：0円\n✓ 口座維持手数料：0円\n✓ 取引手数料：0円\n✓ 入出金手数料：0円（クイック入金）\n✓ 自動売買利用料：0円\nさらに、スプレッド（売値と買値の差）も業界最狭水準を提供しており、取引コストを抑えることができます。",
      icon: <TrendingDown className="h-6 w-6" />
    },
    {
      title: "初心者にやさしい自動売買機能",
      description: "松井証券では「リピート系自動売買」というサービスを提供しています。\n\n自動売買の特徴：\n• あらかじめ設定したルールで自動的に売買\n• 24時間チャートを見続ける必要なし\n• 感情に左右されない機械的な取引が可能\n• 100円から自動売買も可能\n\n「仕事で忙しくてチャートを見る時間がない」という方にもおすすめの機能です。",
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: "充実のサポート体制",
      description: "FX初心者にとって、困った時のサポート体制は重要です。\n\n• FX専用サポートダイヤル：夜24時まで受付\n• 電話・メールでの問い合わせ対応\n• 初心者向けの情報コンテンツも充実\n\n取引に関する疑問や操作方法など、気軽に相談できる環境が整っています。",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "使いやすいスマホアプリ",
      description: "外出先でも取引できる、直感的に操作できるスマホアプリを提供。\n\n• シンプルで見やすいデザイン\n• スピーディーな注文が可能\n• チャート分析ツールも充実\n• プッシュ通知で取引チャンスを逃さない",
      icon: <Smartphone className="h-6 w-6" />
    }
  ];

  const steps = [
    {
      step: "STEP1",
      title: "口座開設申込",
      description: "公式サイトから必要事項を入力するだけ。最短5分で完了します。"
    },
    {
      step: "STEP2",
      title: "本人確認",
      description: "本人確認書類をスマホで撮影して送信。郵送の手間がありません。"
    },
    {
      step: "STEP3",
      title: "取引開始",
      description: "審査完了後、最短即日で取引開始！100円から始められます。"
    }
  ];

  const importantNotes = [
    "FX取引は元本を保証するものではありません",
    "レバレッジをかけることで少額資金で大きな取引ができますが、その分損失も大きくなる可能性があります",
    "為替相場は24時間変動しており、予想外の動きをすることもあります",
    "生活費や緊急時の資金には手をつけず、余裕資金の範囲で取引しましょう"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>松井証券FX詳細 | FX業者比較 | 投資総合ナビ</title>
        <meta name="description" content="松井証券FXの詳細情報。100円から取引可能、各種手数料0円、初心者にやさしい自動売買機能、充実のサポート体制を提供。" />
        <meta name="keywords" content="松井証券, FX, 少額取引, 自動売買, 初心者" />
        <link rel="canonical" href="https://www.toushi-navi.com/fx/matsui-fx" />
        
        {/* Open Graph */}
        <meta property="og:title" content="松井証券FX詳細 | FX業者比較 | 投資総合ナビ" />
        <meta property="og:description" content="松井証券FXの詳細情報。100円から取引可能、各種手数料0円、初心者にやさしい自動売買機能、充実のサポート体制を提供。" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.toushi-navi.com/fx/matsui-fx" />
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
            <li className="text-primary">松井証券FX</li>
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
              松井証券FX
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
              100円から始めるFX取引
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="px-8 py-6 text-lg hover:scale-105 transition-transform bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg">
                <a 
                  href="https://www.matsui.co.jp/service/fx/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  松井証券FX 公式サイトへ
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* 松井証券のFX 5つの魅力 */}
        <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">松井証券のFX 5つの魅力</h2>
              
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

        {/* 松井証券FXの始め方｜簡単3ステップ */}
        <section className="py-16 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">松井証券FXの始め方｜簡単3ステップ</h2>
              
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

        {/* こんな人に松井証券のFXがおすすめ */}
        <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">こんな人に松井証券のFXがおすすめ</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <div className="flex items-center gap-2 p-3 bg-primary/5 rounded-lg border border-primary/10">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>FX初心者で、まずは少額から始めたい方</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-primary/5 rounded-lg border border-primary/10">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>コストを抑えて取引したい方</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-primary/5 rounded-lg border border-primary/10">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>自動売買に興味がある方</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-primary/5 rounded-lg border border-primary/10">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>信頼できる大手証券会社で取引したい方</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-primary/5 rounded-lg border border-primary/10 md:col-span-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>仕事が忙しく、取引時間が限られている方</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FX取引を始める前の注意点 */}
        <section className="py-16 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">FX取引を始める前の注意点</h2>
              
              <Card className="border-2 border-yellow-500/50 bg-yellow-50/50 shadow-lg">
                <CardHeader className="bg-yellow-100/50">
                  <CardTitle className="flex items-center gap-2 text-yellow-800">
                    <CheckCircle className="h-5 w-5" />
                    FX取引にはリスクが伴います
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="list-disc pl-5 space-y-2 text-yellow-700">
                    {importantNotes.map((note, index) => (
                      <li key={index}>{note}</li>
                    ))}
                  </ul>
                  <p className="mt-4 text-yellow-700">
                    ※FX取引は元本を保証するものではありません。取引の際は、ご自身の判断と責任において行ってください。
                  </p>
                </CardContent>
              </Card>
              
              <div className="mt-12 text-center">
                <Button asChild size="lg" className="px-8 py-6 text-lg hover:scale-105 transition-transform bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg">
                  <a 
                    href="https://www.matsui.co.jp/service/fx/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    松井証券FX 口座開設はこちら
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
                  <p className="text-destructive">
                    ※サービス内容や手数料等は変更される場合があります。最新情報は松井証券公式サイトでご確認ください。
                  </p>
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

export default MatsuiFxDetail;