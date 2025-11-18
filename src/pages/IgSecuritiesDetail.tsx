import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, CheckCircle, XCircle, Star, ArrowLeft, TrendingUp, Shield, Zap, Globe, Award, Clock, BookOpen } from "lucide-react";

const IgSecuritiesDetail = () => {
  // IG証券の基本情報
  const companyInfo = {
    name: "IG証券",
    fullName: "IG証券株式会社",
    established: "2002年4月（日本法人）",
    parentCompany: "IG Group Holdings plc (英国)",
    headquarters: "東京都港区東新橋",
    url: "https://www.ig.com/jp/",
    rating: 4,
    founded: "1974年（英国本社）",
    offices: "世界19カ国",
    customers: "約31万人以上"
  };

  // 手数料情報
  const fees = [
    {
      plan: "CFD取引",
      description: "株価指数CFD、商品CFD、FX、ノックアウトオプションなど",
      fee: "変動スプレッド",
      details: "市場状況によりスプレッドが変動します"
    },
    {
      plan: "株式CFD",
      description: "日本、米国、英国、ドイツ、香港など12,000銘柄以上",
      fee: "銘柄別スプレッド",
      details: "主要銘柄は狭いスプレッドを維持"
    },
    {
      plan: "ノックアウト・オプション",
      description: "画期的なリスク管理ツール",
      fee: "プレミアムのみ",
      details: "損失は購入金額に限定"
    }
  ];

  // NISA情報
  const nisaInfo = {
    generalNisa: {
      name: "一般NISA",
      annualLimit: "120万円",
      nonTaxablePeriod: "5年",
      supported: false
    },
    tsumitateNisa: {
      name: "つみたてNISA",
      annualLimit: "40万円",
      nonTaxablePeriod: "20年",
      supported: false
    },
    juniorNisa: {
      name: "ジュニアNISA",
      annualLimit: "80万円",
      nonTaxablePeriod: "5年",
      supported: false
    }
  };

  // 取引ツール情報
  const tradingTools = [
    {
      name: "IG取引プラットフォーム",
      description: "ブラウザ版の取引システムはカスタマイズ性が高く、チャート分析機能も充実。ProRealTimeを一定条件で無料利用可能。",
      image: "/images/securities/ig-platform.png"
    },
    {
      name: "IGアプリ",
      description: "スマホでも使えるIG証券のモバイルアプリ。直感的な操作性とリアルタイム情報提供。ほぼ24時間取引可能。",
      image: "/images/securities/ig-app.png"
    }
  ];

  // 評価を星アイコンで表示するコンポーネント
  const RatingStars = ({ rating }: { rating: number }) => (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
        />
      ))}
    </div>
  );

  // 強み情報
  const strengths = [
    {
      title: "圧巻の取扱銘柄数：17,000を超える投資機会",
      icon: <Globe className="h-6 w-6 text-green-500" />,
      details: [
        "株式CFD：12,000銘柄以上（日本、米国、英国、ドイツ、香港など）",
        "株価指数CFD：約100銘柄（日経225、NYダウ、S&P500、VIX指数など）",
        "商品（コモディティ）CFD：約50銘柄（金、銀、原油、穀物など）",
        "FX（為替）：約100通貨ペア（メジャーからマイナー通貨まで）",
        "暗号資産CFD：ビットコイン、イーサリアムなど"
      ]
    },
    {
      title: "画期的なリスク管理ツール「ノックアウト・オプション」",
      icon: <Shield className="h-6 w-6 text-blue-500" />,
      details: [
        "損失額が購入金額に限定される（追証リスクなし）",
        "利益に上限がない（損失限定・利益無限大）",
        "レバレッジ効果が高い（少ない資金で大きなポジション）",
        "専門的なリスク管理が可能"
      ]
    },
    {
      title: "ほぼ24時間、土日も取引可能",
      icon: <Clock className="h-6 w-6 text-purple-500" />,
      details: [
        "月曜早朝から土曜早朝までほぼ24時間取引可能",
        "週末専用銘柄（週末GBP/USD、週末DAXなど）も提供",
        "地政学リスクや要人発言などへの即時対応が可能"
      ]
    },
    {
      title: "プロ仕様の取引プラットフォームと学習コンテンツ",
      icon: <Zap className="h-6 w-6 text-orange-500" />,
      details: [
        "高機能取引プラットフォームとカスタマイズ可能なチャート",
        "ProRealTimeを一定条件で無料利用可能",
        "取引システムAPIによる独自アルゴリズム取引環境構築に対応",
        "IGアカデミーによる無料オンライン学習コンテンツ"
      ]
    }
  ];

  // 弱み情報（柔らかい表現）
  const weaknesses = [
    {
      title: "現物株・投資信託の取扱いがない",
      details: [
        "IG証券で取引できるのはCFDやオプションなどのデリバティブ商品のみ",
        "株式の長期保有による配当や株主優待を受け取ることはできません",
        "NISAで投資信託を積み立てて非課税の恩恵を受けることはできません",
        "あくまで「トレード」に特化した証券会社としてのポジショニング"
      ]
    },
    {
      title: "商品性が専門的で学習が必要",
      details: [
        "CFDやFXはレバレッジ取引が基本で、知識と経験が求められます",
        "ノックアウト・オプションなど複雑な商品の仕組み理解が必要",
        "商品の仕組みとリスクを完全に理解してからのご利用が推奨されます",
        "初心者にはハードルが高い可能性があります"
      ]
    },
    {
      title: "税制やコスト面での配慮",
      details: [
        "FXやCFD、オプション取引の利益は「申告分離課税（先物取引に係る雑所得等）」として扱われます",
        "株式現物取引や投資信託との損益通算ができない点にご注意ください",
        "スプレッドは市場の流動性により変動し、早朝や重要な経済指標発表時には拡大する傾向があります"
      ]
    }
  ];

  // 活用術情報
  const utilizationTips = [
    {
      title: "ノックアウト・オプションで相場の急変を狙う",
      description: "米国の雇用統計やFOMCなど、相場が大きく動くことが予想されるイベントの際に、ノックアウト・オプションを活用するのは非常に有効な戦略です。損失額を限定した上で、大きな値動きを狙うことができます。"
    },
    {
      title: "あらゆる資産クラスへの分散投資",
      description: "「株式市場が不調な時は、コモディティ（金など）に資金を移す」といった、アセットクラスをまたいだダイナミックな資産配分が、IG証券の口座一つで可能です。世界経済全体の動きを読み解き、グローバル・マクロ戦略を実践したい投資家には最適な環境です。"
    },
    {
      title: "現物株ポートフォリオのヘッジ",
      description: "SBI証券などで日本株の長期保有ポートフォリオを組んでいる投資家が、相場全体の下落を予測した場合、保有株を売却する代わりに、IG証券で日経225のCFDやノックアウト・オプションを「売り（ベア）」建てておくことで、相場が下落した場合の損失を相殺する「ヘッジ取引」が可能です。"
    }
  ];

  // FAQ情報
  const faqs = [
    {
      question: "全くの投資初心者でも使えますか？",
      answer: "IG証券が扱う商品は、レバレッジやオプションの概念など、一定の金融知識を前提としています。まずはSBI証券や楽天証券などで投資信託や現物株の取引から始め、経験と知識を積んでから、ステップアップとしてIG証券のデモ口座を試してみるのが安全です。"
    },
    {
      question: "なぜIG証券はこんなに多くの銘柄を扱えるのですか？",
      answer: "IG証券はCFDのマーケットメイクを自社で行う「ディーラー」だからです。投資家からの注文を取引所に取り次ぐ「ブローカー」とは異なり、自らが取引の相手方となることで、多様な銘柄の価格を提示し、流動性を提供することが可能です。そのグローバルなネットワークとリスク管理能力が、圧倒的な商品ラインナップを支えています。"
    },
    {
      question: "ノックアウト・オプションにデメリットはありますか？",
      answer: "はい。損失が限定される代わりに、相場がノックアウト・レベルに一瞬でも触れると、その後の値動きにかかわらずポジションが消滅してしまいます（これを「ノックアウトされる」と言います）。また、オプション購入金額には、時間的価値やスプレッドが含まれており、実質的な取引コストはゼロではありません。"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-gradient-to-r from-muted/50 to-muted/30 py-4 border-b">
          <div className="container mx-auto px-4">
            <Link 
              to="/comparison" 
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors group"
            >
              <ArrowLeft className="h-4 w-4 mr-1 group-hover:-translate-x-1 transition-transform" />
              証券会社比較に戻る
            </Link>
          </div>
        </div>

        {/* Company Header */}
        <section className="py-12 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4 px-4 py-1 text-sm">
                国内証券会社
              </Badge>
              <h1 className="text-4xl font-bold mb-4">{companyInfo.name}</h1>
              <p className="text-lg text-muted-foreground mb-6">{companyInfo.fullName}</p>
              <div className="flex justify-center items-center gap-4">
                <RatingStars rating={companyInfo.rating} />
                <span className="text-lg font-semibold">{companyInfo.rating}.0</span>
              </div>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold flex items-center gap-2">
                    <CheckCircle className="h-6 w-6 text-primary" />
                    会社概要
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose max-w-none">
                    <p className="text-lg mb-4">
                      IG証券は、<strong>1974年に英国・ロンドンで設立されたIGグループの日本法人</strong>です。<strong>約50年の歴史</strong>を持ち、<strong>世界19カ国にオフィスを構え、約31万人以上の顧客にサービスを提供</strong>する、金融デリバティブ取引の世界的リーディングカンパニーです。
                    </p>
                    <p className="mb-4">
                      その最大の特徴は、<strong>「圧倒的な取扱銘柄数」と「多様な取引商品」</strong>にあります。株式、株価指数、為替（FX）、商品（コモディティ）、債券、さらには暗号資産（仮想通貨）まで、CFD（差金決済取引）を中心に<strong>17,000種類以上</strong>という、他の証券会社とは比較にならないほどの膨大な銘柄を取り扱っています。また、損失限定・利益無限大という画期的な商品性の<strong>「ノックアウト・オプション」</strong>も提供しており、プロのトレーダーや上級者から絶大な信頼を得ています。
                    </p>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-6">
                      <p className="font-semibold flex items-center gap-2">
                        <Award className="h-5 w-5 text-blue-500" />
                        IG証券を一言で表すなら
                      </p>
                      <p className="mt-2">
                        「地球上のほぼすべての金融商品を取引できる、プロフェッショナル・トレーダーのための武器庫」。現物株の長期保有といった一般的な投資には向きませんが、あらゆる市場のあらゆる値動きを収益機会に変えたいと考える、<strong>知識と経験、そしてリスク管理能力を兼ね備えた投資家</strong>にとって、これ以上ない取引環境を提供してくれる証券会社です。
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">基本情報</h3>
                      <ul className="space-y-2">
                        <li className="flex justify-between border-b pb-2">
                          <span className="text-muted-foreground">商号</span>
                          <span>{companyInfo.fullName}</span>
                        </li>
                        <li className="flex justify-between border-b pb-2">
                          <span className="text-muted-foreground">設立</span>
                          <span>{companyInfo.established}</span>
                        </li>
                        <li className="flex justify-between border-b pb-2">
                          <span className="text-muted-foreground">親会社</span>
                          <span>{companyInfo.parentCompany}</span>
                        </li>
                        <li className="flex justify-between border-b pb-2">
                          <span className="text-muted-foreground">本社所在地</span>
                          <span>{companyInfo.headquarters}</span>
                        </li>
                        <li className="flex justify-between border-b pb-2">
                          <span className="text-muted-foreground">取扱商品</span>
                          <span>CFD, FX, バイナリーオプション, ノックアウト・オプション</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">グローバル情報</h3>
                      <ul className="space-y-2">
                        <li className="flex justify-between border-b pb-2">
                          <span className="text-muted-foreground">創業</span>
                          <span>{companyInfo.founded}</span>
                        </li>
                        <li className="flex justify-between border-b pb-2">
                          <span className="text-muted-foreground">オフィス数</span>
                          <span>{companyInfo.offices}</span>
                        </li>
                        <li className="flex justify-between border-b pb-2">
                          <span className="text-muted-foreground">顧客数</span>
                          <span>{companyInfo.customers}</span>
                        </li>
                      </ul>
                      <div className="mt-4">
                        <h3 className="font-semibold text-lg mb-2">評価</h3>
                        <div className="flex items-center gap-4 mb-4">
                          <RatingStars rating={companyInfo.rating} />
                          <span className="text-2xl font-bold">{companyInfo.rating}.0/5.0</span>
                        </div>
                        <p className="text-muted-foreground">
                          IG証券は、CFD・FX・ノックアウトオプション専門のネット証券会社です。
                          イギリスのIGグループ傘下のグローバル企業で、個人口座で最大5倍、法人口座で最大20倍のレバレッジが利用可能です。
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Strengths Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">IG証券の強み・メリット</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  IG証券の強みは、そのグローバルな規模と専門性に由来します。
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {strengths.map((strength, index) => (
                  <Card key={index} className="shadow-md border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold flex items-start gap-3">
                        <span className="mt-1">{strength.icon}</span>
                        {strength.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {strength.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Weaknesses Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">IG証券の特徴と留意点</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  IG証券は専門性が高い分、初心者や一般的な投資家にとってはハードルが高い側面もあります。
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {weaknesses.map((weakness, index) => (
                  <Card key={index} className="shadow-md border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold flex items-center gap-2">
                        <XCircle className="h-5 w-5 text-muted-foreground" />
                        {weakness.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {weakness.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-muted-foreground">•</span>
                            <span className="text-muted-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Utilization Tips Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">IG証券の活用術と裏ワザ</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  IG証券は、他の証券会社と組み合わせて使うことで、その真価を発揮します。
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {utilizationTips.map((tip, index) => (
                  <Card key={index} className="shadow-md border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold flex items-center gap-2">
                        <span className="text-primary">0{index + 1}</span>
                        {tip.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{tip.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <Card className="shadow-md border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 mt-8">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <BookOpen className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">デモ口座で徹底的に練習する</h3>
                      <p className="text-muted-foreground">
                        IG証券は、実際の資金を使わずに取引を体験できるデモ口座を提供しています。いきなり本番の取引を始めるのではなく、まずはデモ口座でノックアウト・オプションやCFDの操作方法、値動きの感覚を徹底的に掴むことが、成功への近道です。
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Fee Structure */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">手数料体系</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  IG証券はCFD取引に特化しており、手数料は取引量に応じて変動します。
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {fees.map((fee, index) => (
                  <Card key={index} className="shadow-md border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg font-bold">{fee.plan}</CardTitle>
                      <p className="text-sm text-muted-foreground">{fee.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center mb-4">
                        <span className="text-2xl font-bold text-primary">{fee.fee}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{fee.details}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <Card className="shadow-md border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 mt-8">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <TrendingUp className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">スプレッドについて</h3>
                      <p className="text-muted-foreground">
                        スプレッド（売買価格の差）は原則固定ではなく、市場の流動性が低い早朝や、重要な経済指標の発表時などには拡大する傾向があります。予期せぬコスト増につながる可能性があるため、注意が必要です。
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* NISA Information */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">NISA対応状況</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  IG証券は現物株取引を行わないため、NISA制度に対応していません。
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {Object.values(nisaInfo).map((nisa, index) => (
                  <Card key={index} className="shadow-md border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold flex items-center justify-between">
                        {nisa.name}
                        {nisa.supported ? (
                          <CheckCircle className="h-6 w-6 text-green-500" />
                        ) : (
                          <XCircle className="h-6 w-6 text-red-500" />
                        )}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">年間非課税投資枠</span>
                          <span className="font-semibold">{nisa.annualLimit}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">非課税期間</span>
                          <span className="font-semibold">{nisa.nonTaxablePeriod}</span>
                        </div>
                        <div className="pt-3">
                          {nisa.supported ? (
                            <Badge variant="secondary" className="bg-green-100 text-green-800">
                              対応しています
                            </Badge>
                          ) : (
                            <Badge variant="secondary" className="bg-red-100 text-red-800">
                              未対応
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <Card className="shadow-md border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 mt-8">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">NISA利用について</h3>
                      <p className="text-muted-foreground">
                        株式の現物取引や投資信託の利益は「申告分離課税（譲渡所得）」ですが、FXやCFD、オプション取引の利益は「申告分離課税（先物取引に係る雑所得等）」として扱われます。これらは互いに損益通算ができないため、複数の種類の取引を行っている場合、確定申告が複雑になります。
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Trading Tools */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">取引ツール</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  IG証券が提供する高機能な取引ツールをご紹介します。
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {tradingTools.map((tool, index) => (
                  <Card key={index} className="shadow-md border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold">{tool.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col gap-6">
                        <div className="flex-shrink-0">
                          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-40 flex items-center justify-center">
                            <span className="text-gray-500 text-sm">取引ツール画像</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-muted-foreground mb-4">{tool.description}</p>
                          <Button asChild size="sm" variant="outline">
                            <a href={companyInfo.url} target="_blank" rel="noopener noreferrer">
                              ツール詳細を見る
                              <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Account Opening Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">口座開設手順</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  口座開設はオンラインで完結しますが、デリバティブ取引のリスク理解度を確認するプロセスが含まれます。
                </p>
              </div>
              
              <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">1</div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">公式サイトから申し込み</h3>
                        <p className="text-muted-foreground">「口座開設」ボタンをクリックします。</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">2</div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">個人情報の入力</h3>
                        <p className="text-muted-foreground">氏名、住所、職業、年収、投資経験などを入力します。投資経験に関する質問には正直に回答する必要があります。</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">3</div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">本人確認書類の提出</h3>
                        <p className="text-muted-foreground">マイナンバーカードや運転免許証などをアップロードします。</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">4</div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">審査</h3>
                        <p className="text-muted-foreground">入力内容や投資経験に基づき、審査が行われます。審査の結果、口座開設が承認されない場合もあります。</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">5</div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">口座開設完了</h3>
                        <p className="text-muted-foreground">審査に通過すると、ログイン情報が通知され、取引を開始できます。</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">よくある質問（Q&A）</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  IG証券に関するよくある質問をご紹介します。
                </p>
              </div>
              
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <Card key={index} className="shadow-md border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                    <CardHeader>
                      <CardTitle className="text-lg font-bold text-primary">Q{index + 1}. {faq.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Summary Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">まとめ：IG証券はこんな人におすすめ！</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  IG証券は、選ばれしトレーダーのためのプラットフォームです。以下のような明確な目的とスキルを持つ方に最適です。
                </p>
              </div>
              
              <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                <CardContent className="p-8">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>FXやCFDを極めたい専業トレーダー、上級者</strong><br />多様な銘柄、高度なツール、APIなどを駆使して、本格的なトレーディングを行いたい方。</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>リスク管理を徹底した上でハイリターンを狙いたい中級者</strong><br />「ノックアウト・オプション」の仕組みを理解し、損失を限定しながら資金効率の高い取引に挑戦したい方。</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>グローバルな視点で投資したい方</strong><br />株式だけでなく、為替、商品、暗号資産など、世界中のあらゆる資産の値動きを収益機会と捉え、ダイナミックに取引したい方。</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>ポートフォリオのヘッジ手段を探している長期投資家</strong><br />現物株ポートフォリオを保有しつつ、相場の下落リスクに備えるためのプロフェッショナルなツールを求めている方。</span>
                    </li>
                  </ul>
                  
                  <div className="mt-8 p-4 bg-primary/10 rounded-lg">
                    <p className="text-center font-semibold">
                      IG証券は、投資の「遊園地」ではなく、F1レースの「ピット」のような場所です。スリルと興奮、そして高度な技術が要求されます。もしあなたが、ただ資産を増やすだけでなく、トレーディングという知的なゲームそのものを楽しみたいと考えるなら、IG証券のドアを叩く価値は十二分にあるでしょう。
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="shadow-lg border-0 bg-gradient-to-br from-primary/10 to-secondary/10 text-center">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">IG証券の公式サイトへ</h2>
                  <p className="text-muted-foreground mb-6">
                    詳しい情報や口座開設については、IG証券の公式サイトをご確認ください。
                  </p>
                  <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg hover:shadow-xl transition-all">
                    <a href={companyInfo.url} target="_blank" rel="noopener noreferrer">
                      公式サイトへ
                      <ExternalLink className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default IgSecuritiesDetail;