import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, CheckCircle, XCircle, Star, ArrowLeft, TrendingUp, Shield, Zap, Users, Award, Phone } from "lucide-react";

const DmmSecuritiesDetail = () => {
  // DMM株（DMM.com証券）の基本情報
  const companyInfo = {
    name: "DMM 株（DMM.com証券）",
    fullName: "株式会社DMM.com証券",
    established: "2006年12月",
    stockServiceStart: "2018年4月（DMM 株）",
    headquarters: "東京都中央区日本橋",
    parentCompany: "株式会社DMM.com",
    url: "https://kabu.dmm.com/",
    rating: 4,
    relatedServices: "DMM FX, DMMバヌーシー（競走馬ファンド）など"
  };

  // 手数料情報
  const fees = [
    {
      plan: "国内株式現物取引",
      description: "1約定5万円まで",
      fee: "55円",
      details: "1約定10万円まで88円、1日定額1,200円（上限）"
    },
    {
      plan: "米国株式現物取引",
      description: "約定代金にかかわらず",
      fee: "0円",
      details: "完全無料（為替スプレッドあり）"
    },
    {
      plan: "投資信託",
      description: "取扱なし",
      fee: "-",
      details: "投資信託の取扱いはありません"
    }
  ];

  // NISA情報
  const nisaInfo = {
    generalNisa: {
      name: "一般NISA（成長投資枠）",
      annualLimit: "120万円",
      nonTaxablePeriod: "5年",
      supported: true
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
      supported: true
    }
  };

  // 取引ツール情報
  const tradingTools = [
    {
      name: "スマホアプリ「DMM株」",
      description: "最大の特徴は、「かんたんモード」と「ノーマルモード」の2つのモードを切り替えられる点。初心者から中級者まで幅広く対応。",
      image: "/images/securities/dmm-mobile-app.png"
    },
    {
      name: "PC取引ツール",
      description: "ブラウザ版とダウンロード版（DMM株 PRO+）があります。黒を基調とした洗練されたデザインで、TradingViewを搭載した高機能チャートを備えています。",
      image: "/images/securities/dmm-pc-tool.png"
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
      title: "業界震撼！米国株の取引手数料が「0円」",
      icon: <TrendingUp className="h-6 w-6 text-green-500" />,
      details: [
        "米国株の現物取引手数料が、約定代金にかかわらず一律で0円",
        "SBI証券や楽天証券の「上限22米ドル」に対し、DMM証券は上限なし",
        "テスラの株を1万ドル分購入しても無料（他社では約3,400円の手数料）"
      ]
    },
    {
      title: "初心者に優しい、徹底的にシンプルな取引ツール",
      icon: <Zap className="h-6 w-6 text-blue-500" />,
      details: [
        "スマホアプリ「DMM株」：「かんたんモード」と「ノーマルモード」を切り替え可能",
        "かんたんモード：株価チャートと「買う」「売る」ボタンのみの極シンプル画面",
        "PC取引ツール：ブラウザ版とダウンロード版（DMM株 PRO+）あり、TradingView搭載の高機能チャート"
      ]
    },
    {
      title: "意外と侮れない「DMM株ポイント」",
      icon: <Award className="h-6 w-6 text-purple-500" />,
      details: [
        "国内株式の取引手数料の1%が「DMM株ポイント」として還元",
        "1ポイント＝1円で現金に交換可能",
        "口座開設時のキャッシュバックキャンペーンなども頻繁に実施"
      ]
    },
    {
      title: "LINEで気軽に質問できるサポート体制",
      icon: <Phone className="h-6 w-6 text-orange-500" />,
      details: [
        "電話やメールに加えて、LINEでの問い合わせに対応",
        "チャット形式で気軽に質問可能",
        "サポート時間：平日8:00～17:00（LINEは9:00～17:00）"
      ]
    }
  ];

  // 弱み情報
  const weaknesses = [
    {
      title: "取扱商品が極端に少ない",
      details: [
        "投資信託の取扱いがありません（NISAのつみたて投資枠やiDeCoで利用不可）",
        "単元未満株（S株など）の取扱いがありません（最低1単元からの取引）",
        "IPO（新規公開株）の取扱いもありません",
        "取引可能なのは「国内株式（現物・信用）」と「米国株式（現物）」のみ"
      ]
    },
    {
      title: "NISA口座の魅力が半減",
      details: [
        "NISA口座（成長投資枠）は開設可能だが、つみたて投資枠で利用できる投資信託がない",
        "「つみたて投資枠は投信で、成長投資枠は個別株で」という一般的な戦略が取れない"
      ]
    },
    {
      title: "銀行連携サービスがない",
      details: [
        "SBI証券の「SBIハイブリッド預金」や楽天証券の「マネーブリッジ」のようなサービスなし",
        "銀行口座と連携して金利が優遇されたり、資金移動が自動化されるサービスなし"
      ]
    }
  ];

  // 活用術情報
  const utilizationTips = [
    {
      title: "米国株の短期～中期トレード専用口座として",
      description: "SBI証券や楽天証券でNISAやiDeCoの積立設定を行い、資産形成のコアはそちらに任せます。そして、個別株、特に米国株でアクティブに利益を狙うための「攻め」の口座としてDMM証券を活用します。"
    },
    {
      title: "NISA成長投資枠の「米国株専用口座」として",
      description: "NISAのつみたて投資枠は他の証券会社で利用し、成長投資枠の240万円をDMM証券で米国株に集中投資するという戦略も考えられます。非課税メリットと手数料0円メリットを同時に享受可能。"
    },
    {
      title: "初心者のはじめての「個別株」体験口座として",
      description: "「かんたんモード」は、投資の知識が全くない人でも、ゲーム感覚で株取引を体験するのに最適です。「まずは米国株を1銘柄だけ買ってみる」という第一歩を踏み出すための口座として最適。"
    }
  ];

  // FAQ情報
  const faqs = [
    {
      question: "本当に米国株手数料は0円なのですか？何か裏があるのでは？",
      answer: "はい、取引手数料は本当に0円です。裏があるとすれば、米国株を円貨決済する際の「為替スプレッド」が証券会社の収益源の一つになっています。しかし、これは他の証券会社も同様であり、DMM証券が特別に不利なわけではありません。取引手数料がかからないメリットは、多くの場合、為替スプレッドのコストを上回ります。"
    },
    {
      question: "なぜDMM証券はこんなに尖ったサービスができるのですか？",
      answer: "DMMはFX事業で大きな成功を収めており、そのノウハウと収益基盤があります。株式取引は後発であるため、既存の顧客やシステムに縛られず、新規顧客獲得のために大胆な戦略を打ちやすいという側面があります。また、取扱商品を絞ることで、システム開発や運営のコストを抑えていることも、低価格戦略を可能にしている理由です。"
    },
    {
      question: "DMMポイントは投資に使えますか？",
      answer: "いいえ、DMM株ポイントは投資には使えず、現金への交換のみとなります。SBI証券や楽天証券のように、ポイントを使って株や投資信託を買うことはできません。"
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
                      DMM証券は、動画配信、ゲーム、英会話、FXなど多岐にわたる事業を展開する<strong>DMM.comグループが運営するネット証券</strong>です。株式取引サービスである「DMM 株」は2018年にサービスを開始した<strong>後発組</strong>ですが、その最後発の強みを活かし、業界の常識を覆すような<strong>大胆なサービス</strong>を次々と打ち出しています。
                    </p>
                    <p className="mb-4">
                      その最大の武器は、何と言っても<strong>「米国株の取引手数料が完全無料」</strong>という、衝撃的な価格設定です。この一点突破の戦略と、徹底的にシンプルさを追求したツールにより、特に米国株取引を始めたい初心者や、コストを極限まで抑えたいトレーダーから<strong>熱い視線を浴びています</strong>。
                    </p>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-6">
                      <p className="font-semibold flex items-center gap-2">
                        <Award className="h-5 w-5 text-blue-500" />
                        DMM証券を一言で表すなら
                      </p>
                      <p className="mt-2">
                        「米国株取引の価格破壊者」。NISAやiDeCo、投資信託といった積立系の資産形成には向きませんが、「とにかくコストをかけずに米国株を取引したい」という明確な目的を持つ投資家にとって、これ以上ないほど魅力的な選択肢となる、<strong>鋭く尖った証券会社</strong>です。
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
                          <span className="text-muted-foreground">株式サービス開始</span>
                          <span>{companyInfo.stockServiceStart}</span>
                        </li>
                        <li className="flex justify-between border-b pb-2">
                          <span className="text-muted-foreground">本社所在地</span>
                          <span>{companyInfo.headquarters}</span>
                        </li>
                        <li className="flex justify-between border-b pb-2">
                          <span className="text-muted-foreground">親会社</span>
                          <span>{companyInfo.parentCompany}</span>
                        </li>
                        <li className="flex justify-between border-b pb-2">
                          <span className="text-muted-foreground">関連サービス</span>
                          <span>{companyInfo.relatedServices}</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">評価</h3>
                      <div className="flex items-center gap-4 mb-4">
                        <RatingStars rating={companyInfo.rating} />
                        <span className="text-2xl font-bold">{companyInfo.rating}.0/5.0</span>
                      </div>
                      <p className="text-muted-foreground">
                        DMM 株（DMM.com証券）は、DMMグループ傘下のネット証券会社です。
                        25歳以下の方は現物株式取引手数料が実質無料となる特典があり、低コストで投資を始めることができます。
                      </p>
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
                <h2 className="text-3xl font-bold mb-4">DMM証券の強み・メリット</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  DMM証券の強みは、シンプルながらも極めて強力です。ここでは4つのポイントを深掘りします。
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
                <h2 className="text-3xl font-bold mb-4">DMM証券の特徴と留意点</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  尖った強みを持つ一方で、DMM証券には明確な弱点が存在します。これらを理解した上で利用することが極めて重要です。
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
                <h2 className="text-3xl font-bold mb-4">DMM証券の活用術と裏ワザ</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  DMM証券は、メイン口座としてすべてを賄うのには不向きですが、「特定の目的」に特化したサブ口座として利用することで、その真価を120%発揮します。
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
                  DMM 株は低コストな手数料体系を提供しており、特に米国株の取引手数料が完全無料です。
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
                    <Shield className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">為替スプレッドに注意</h3>
                      <p className="text-muted-foreground">
                        「手数料0円」は魅力的ですが、注意点もあります。米国株を円貨決済（日本円で直接購入）する場合、証券会社が設定する為替レートには「為替スプレッド」が含まれています。DMM証券の場合、基準レートに対して買付時は+25銭、売却時は-25銭のスプレッドがかかります。
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
                  DMM 株は一部のNISA制度に対応していますが、投資信託の取扱がないため制限があります。
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
                      <h3 className="font-bold text-lg mb-2">NISA口座の制限</h3>
                      <p className="text-muted-foreground">
                        NISA口座（成長投資枠）を開設することは可能で、国内株や米国株を非課税で取引できます。米国株手数料が0円なので、非課税メリットと合わせて非常に強力に見えます。
                        しかし、つみたて投資枠で利用できる投資信託がないため、NISA制度の柔軟性を最大限に活かすことができません。「つみたて投資枠は投信で、成長投資枠は個別株で」という一般的な戦略が取れないのです。
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
                  DMM 株が提供する高機能な取引ツールをご紹介します。
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
              
              <Card className="shadow-md border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 mt-8">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Zap className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">DMM株の特徴</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>「かんたんモード」：株価チャートと「買う」「売る」のボタンだけが表示される、極めてシンプルな画面</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>「ノーマルモード」：板情報、歩み値、詳細なチャート（テクニカル指標の表示も可能）などを表示可能</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>PC取引ツール：TradingViewを搭載しており、80種類以上のテクニカル指標や描画ツールが利用可能</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
                  DMM 証券の口座開設は、そのシンプルさを体現するように非常にスピーディーです。
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
                        <h3 className="text-xl font-bold mb-2">情報入力</h3>
                        <p className="text-muted-foreground">氏名、住所などの基本情報を入力します。</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">3</div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">本人確認</h3>
                        <p className="text-muted-foreground">「スマホでスピード本人確認」を選択します。マイナンバーカード（または通知カード＋運転免許証）と自身の顔をスマホのカメラで撮影するだけで完了です。</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">4</div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">審査完了後、IDが郵送される</h3>
                        <p className="text-muted-foreground">最短で申し込み当日に審査が完了し、その後、ログインID・パスワードが記載された通知が簡易書留で郵送されます。郵送物の受け取りが必要な点に注意が必要です。</p>
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
                  DMM 株に関するよくある質問をご紹介します。
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
                <h2 className="text-3xl font-bold mb-4">まとめ：DMM証券はこんな人におすすめ！</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  DMM証券は、すべての人におすすめできる万能な証券会社ではありません。しかし、以下の目的を持つ投資家にとっては、他のどの証券会社よりも優れた「最高のツール」となり得ます。
                </p>
              </div>
              
              <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                <CardContent className="p-8">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>米国株の取引コストをとにかくゼロにしたい方</strong><br />短期～中期でアクティブに米国株を売買し、手数料を気にせず利益を追求したいトレーダー。</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>投資初心者で、まずはシンプルな取引から始めたい方</strong><br />複雑な機能は不要で、スマホで直感的に米国株や国内株の売買を体験してみたい方。</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>メイン口座を他に持ち、サブ口座を探している方</strong><br />NISAの積立投資などはSBI証券や楽天証券で行い、個別株、特に米国株のトレード専用口座として割り切って使える方。</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>DMMの各種サービスに親しみがある方</strong><br />DMM FXやDMMの他のサービスを利用しており、同じグループのサービスで統一したい方。</span>
                    </li>
                  </ul>
                  
                  <div className="mt-8 p-4 bg-primary/10 rounded-lg">
                    <p className="text-center font-semibold">
                      DMM証券は、まさに「選択と集中」を地で行く証券会社です。投資信託やIPOといった多くの機能を大胆に切り捨てることで、「米国株手数料0円」という一点において他社を圧倒する輝きを放っています。あなたの投資スタイルがこの「一点」に合致するならば、DMM証券はあなたの資産形成の強力な武器となることは間違いないでしょう。
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
                  <h2 className="text-2xl font-bold mb-4">DMM 株の公式サイトへ</h2>
                  <p className="text-muted-foreground mb-6">
                    詳しい情報や口座開設については、DMM 株の公式サイトをご確認ください。
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
};

export default DmmSecuritiesDetail;