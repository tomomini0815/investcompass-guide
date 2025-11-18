import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, CheckCircle, XCircle, Star, ArrowLeft, TrendingUp, Shield, Zap, Users, Award, Phone, Globe, CreditCard } from "lucide-react";

const AuKabucomSecuritiesDetail = () => {
  // 三菱UFJ eスマート証券（旧 auカブコム証券）の基本情報
  const companyInfo = {
    name: "三菱UFJ eスマート証券",
    fullName: "auカブコム証券株式会社",
    established: "1999年11月",
    headquarters: "東京都千代田区大手町",
    parentCompany: "auフィナンシャルホールディングス株式会社、株式会社三菱UFJ銀行",
    url: "https://kabu.com/",
    rating: 4,
    accountCount: "160万口座超（2024年3月時点）"
  };

  // 手数料情報
  const fees = [
    {
      plan: "国内株式現物取引",
      description: "1日の約定代金100万円まで",
      fee: "無料",
      details: "100万円を超える場合は、超過分に0.099%（税込）"
    },
    {
      plan: "投資信託",
      description: "手数料無料",
      fee: "0円",
      details: "全銘柄で手数料無料"
    },
    {
      plan: "米国株式",
      description: "約定代金に応じた手数料",
      fee: "無料枠あり",
      details: "取扱銘柄数約2,600銘柄（2024年6月時点）"
    }
  ];

  // NISA情報
  const nisaInfo = {
    generalNisa: {
      name: "一般NISA",
      annualLimit: "120万円",
      nonTaxablePeriod: "5年",
      supported: true
    },
    tsumitateNisa: {
      name: "つみたてNISA",
      annualLimit: "40万円",
      nonTaxablePeriod: "20年",
      supported: true
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
      name: "kabuステーション® (PC)",
      description: "高速な情報更新と発注機能に定評のあるプロ仕様のトレーディングツール。特に「フル板発注」機能はデイトレーダーから高い評価を得ています。",
      image: "/images/securities/kabu-station.png"
    },
    {
      name: "三菱UFJ eスマート証券アプリ（スマホ）",
      description: "スマホでも使える取引アプリ。直感的な操作性とリアルタイム情報提供。au PAY カード決済でのクレカ積立に対応。",
      image: "/images/securities/mufj-app.png"
    },
    {
      name: "プチ株®（単元未満株）",
      description: "1株から株式を購入できるサービス。毎月指定した金額で自動的に買い付ける「プレミアム積立®」も可能。",
      image: "/images/securities/puchi-kabu.png"
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
      title: "MUFGグループとしての絶大な信頼性と連携",
      icon: <Shield className="h-6 w-6 text-green-500" />,
      details: [
        "世界有数の総合金融グループの一員として、システムの安定性と顧客資産保護に極めて高い信頼性を誇る",
        "auじぶん銀行との連携サービス「auマネーコネクト」で資金の自動入出金が可能",
        "auマネーコネクト設定でauじぶん銀行の普通預金金利が年0.03%から年0.13%へアップ（2024年6月時点）",
        "MUFGグループの中核である三菱UFJモルガン・スタンレー証券が主幹事や幹事を務めるIPO銘柄の委託販売を多数受け、大型IPOに参加できる機会が多い"
      ]
    },
    {
      title: "au・Pontaポイント経済圏との強力な連携",
      icon: <CreditCard className="h-6 w-6 text-blue-500" />,
      details: [
        "貯まったPontaポイントを1ポイント＝1円として投資信託の購入（積立含む）に利用可能",
        "au PAY カードを使って投資信託を積み立てると、積立額の1%分のPontaポイントが還元（月10万円まで）",
        "投資信託の月間平均保有残高に応じてPontaポイントが還元（最大で年率0.24%）",
        "NISA口座も対象で、通信料金の支払いで貯まるポイントとは別に資産形成でもPontaポイントをザクザク貯められる"
      ]
    },
    {
      title: "独創的で先進的なサービスとツール",
      icon: <Zap className="h-6 w-6 text-purple-500" />,
      details: [
        "kabuステーション®：高速な情報更新と発注機能に定評のあるプロ仕様ツール、「フル板発注」機能で大量注文を直感的に実行可能",
        "APIの無償提供：個人投資家向けにAPIを提供し、独自の取引ツール開発や完全自動売買システム構築が可能",
        "プチ株®（単元未満株）：1株から株式を購入できるサービス、毎月指定金額で自動買い付けの「プレミアム積立®」も可能",
        "一般信用取引の充実：「空売り」可能な銘柄が非常に多く、「長期（最長3年）」や「1日」など多様な期間設定が可能"
      ]
    },
    {
      title: "充実のサポート体制",
      icon: <Phone className="h-6 w-6 text-orange-500" />,
      details: [
        "AIチャットボットによる24時間対応",
        "専門のオペレーターによる電話サポート（平日8:00～17:00）",
        "顧客満足度調査で常に上位にランクイン",
        "初心者でも安心して利用できる手厚いサポート体制"
      ]
    }
  ];

  // 弱み情報（柔らかい表現）
  const weaknesses = [
    {
      title: "外国株の取扱いについて",
      details: [
        "米国株のみの取扱い（2024年6月時点）で、中国株やアセアン株など他の国際市場への投資はできない",
        "米国株の取扱銘柄数も約2,600銘柄と、SBI証券やマネックス証券（6,000銘柄以上）と比較すると限定的",
        "幅広い国に分散投資したい方にとっては選択肢が限られる"
      ]
    },
    {
      title: "国内株式手数料の特徴",
      details: [
        "SBI証券や楽天証券の完全無料とは異なり、1日の約定代金100万円まで無料、超過分には手数料が発生",
        "アクティブに大口取引を行うトレーダーにとっては、コスト面で不利になる可能性がある",
        "これは安定したサービス提供のための料金体系とも言える"
      ]
    },
    {
      title: "ツールのインターフェース",
      details: [
        "高機能なkabuステーション®だが、デザインやUIがやや古風で情報量も多いため、初心者にはとっつきにくい印象を与える",
        "スマホアプリも機能は十分だが、洗練さの点では後発のアプリに分があるという声もある",
        "これは長年の実績と機能性を重視した結果とも言える"
      ]
    }
  ];

  // 活用術情報
  const utilizationTips = [
    {
      title: "auユーザー、Pontaユーザーは迷わず開設",
      description: "au PAYカードでのクレカ積立（1%還元）や、投信保有ポイント、auマネーコネクトによる金利優遇など、メリットが非常に大きいです。auのサービスを多用している方なら、資産形成のコアとなる証券口座になり得ます。"
    },
    {
      title: "MUFGのIPOを狙う",
      description: "三菱UFJモルガン・スタンレー証券が主幹事を務める大型IPOは、auカブコム証券の口座がないと申し込めないことが多いです。IPO投資を本格的に行うなら、SBI証券などと並行して口座を持っておくべきです。"
    },
    {
      title: "信用取引のメイン口座として",
      description: "「1日信用取引」の手数料無料と低金利は、デイトレーダーにとって最強の武器です。また、空売り可能な銘柄の豊富さは、相場の下落局面でも利益を狙う戦略の幅を広げてくれます。"
    }
  ];

  // FAQ情報
  const faqs = [
    {
      question: "auユーザーではありませんが、口座を開設するメリットはありますか？",
      answer: "はい。MUFGグループの信頼性、IPOの取扱機会、APIの開放、信用取引の条件の良さなど、auユーザーでなくても享受できるメリットは多数あります。ただし、Pontaポイント関連の恩恵は小さくなるため、他の証券会社と比較検討する価値はあります。"
    },
    {
      question: "プチ株®（単元未満株）のメリットは何ですか？",
      answer: "1株から購入できるため、数千円から有名企業の株主になれます。また、「プレミアム積立®」を使えば、毎月コツコツと個別株を買い増していくことができ、ドルコスト平均法の効果を得ながら、配当金や株主優待を目指すことができます。（※優待は1単元以上の保有が条件の場合が多い）"
    },
    {
      question: "三菱UFJ銀行の口座から直接入金できますか？",
      answer: "はい、「らくらく電子Venturi」サービスを使えば、三菱UFJ銀行を含む提携金融機関からリアルタイムで手数料無料の入金が可能です。ただし、金利優遇や自動スイープ機能がある「auマネーコネクト」を利用するためには、auじぶん銀行の口座が必要になります。"
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
                      三菱UFJ eスマート証券（旧 auカブコム証券）は、<strong>三菱UFJフィナンシャル・グループ（MUFG）とKDDIが共同出資するネット証券</strong>です。その前身は、<strong>1999年に設立された日本で最初のネット専業証券の一つである「カブドットコム証券」</strong>。2019年にKDDIの連結子会社となり、現在の社名に変更されました。
                    </p>
                    <p className="mb-4">
                      三菱UFJ eスマート証券の最大の特徴は、世界有数の金融グループである<strong>「MUFG」の盤石な信頼性</strong>と、<strong>auブランドやPontaポイント経済圏との連携</strong>という、他社にはないユニークな組み合わせにあります。また、旧カブドットコム証券時代から受け継がれる、<strong>システム開発力と独創的なサービス</strong>にも定評があります。
                    </p>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-6">
                      <p className="font-semibold flex items-center gap-2">
                        <Award className="h-5 w-5 text-blue-500" />
                        auカブコム証券を一言で表すなら
                      </p>
                      <p className="mt-2">
                        「<strong>メガバンクの安心感と通信キャリアの利便性を融合させたハイブリッド証券</strong>」。安定した経営基盤を重視する方や、auユーザー、Pontaポイントを貯めている方にとって、非常に魅力的な選択肢となる証券会社です。
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
                          <span className="text-muted-foreground">本社所在地</span>
                          <span>{companyInfo.headquarters}</span>
                        </li>
                        <li className="flex justify-between border-b pb-2">
                          <span className="text-muted-foreground">主要株主</span>
                          <span>{companyInfo.parentCompany}</span>
                        </li>
                        <li className="flex justify-between border-b pb-2">
                          <span className="text-muted-foreground">口座開設数</span>
                          <span>{companyInfo.accountCount}</span>
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
                        三菱UFJ eスマート証券（旧 auカブコム証券）は、三菱UFJフィナンシャル・グループ傘下のネット証券会社です。
                        auユーザー向けの特典やサービスが充実しており、KDDI連携サービスが特徴です。
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
                <h2 className="text-3xl font-bold mb-4">強み・メリット</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  auカブコム証券の強みは、その出自に由来するものが多く、他社とは異なる輝きを放っています。
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
                <h2 className="text-3xl font-bold mb-4">特徴と考慮点</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  魅力的な点が多い一方、大手2社と比較するといくつかの課題も見られます。
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
                <h2 className="text-3xl font-bold mb-4">活用術と裏ワザ</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  auカブコム証券のポテンシャルを引き出す使い方を紹介します。
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
                    <Globe className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">APIで自分だけのツールを作る</h3>
                      <p className="text-muted-foreground">
                        プログラミングに心得があるなら、APIを活用しない手はありません。市販のツールでは満足できない、自分だけの理想の取引環境を構築するという究極のカスタマイズが可能です。
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
                  三菱UFJ eスマート証券は低コストな手数料体系を提供しています。
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
                  三菱UFJ eスマート証券はすべてのNISA制度に対応しており、お得に資産運用できます。
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
                  三菱UFJ eスマート証券が提供する高機能な取引ツールをご紹介します。
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  手続きは他のネット証券と同様にシンプルです。
                </p>
              </div>
              
              <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">1</div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">公式サイトから申し込み</h3>
                        <p className="text-muted-foreground">au IDをお持ちの方は連携すると入力がスムーズです。</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">2</div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">本人確認</h3>
                        <p className="text-muted-foreground">「スマホで本人確認（e-KYC）」を選び、マイナンバーカード等を撮影。</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">3</div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">情報入力と規約同意</h3>
                        <p className="text-muted-foreground">必要な情報を入力し、利用規約に同意します。</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">4</div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">審査後、ID等が届く</h3>
                        <p className="text-muted-foreground">最短で翌営業日に取引開始可能です。auじぶん銀行の口座も同時に開設すると便利です。</p>
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
                  三菱UFJ eスマート証券に関するよくある質問をご紹介します。
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
                <h2 className="text-3xl font-bold mb-4">まとめ：こんな人におすすめ！</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  auカブコム証券は、特定の強みに特化した、玄人好みの一面も持つ証券会社です。
                </p>
              </div>
              
              <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                <CardContent className="p-8">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>auユーザー、Pontaポイントを貯めている方</strong><br />クレカ積立や投信保有で効率的にPontaポイントを貯め、お得に資産形成をしたい方。</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>安定性と信頼性を最重視する方</strong><br />メガバンクMUFGグループの盤石な経営基盤に安心感を求める保守的な投資家の方。</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>信用取引を駆使するアクティブトレーダー</strong><br />豊富な空売り銘柄と低コストな「1日信用取引」を武器に、相場のあらゆる局面で利益を追求したい方。</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>プログラミングが得意なシステムトレーダー</strong><br />APIを利用して、自分だけのオリジナルの取引環境を構築したい方。</span>
                    </li>
                  </ul>
                  
                  <div className="mt-8 p-4 bg-primary/10 rounded-lg">
                    <p className="text-center font-semibold">
                      auカブコム証券は、SBIや楽天のような「万能型」とは少し趣が異なりますが、その出自であるMUFGの「信頼」とKDDIの「利便性」、そしてカブドットコム証券から受け継いだ「技術力」という三つの要素が融合した、他にない魅力を持つ証券会社です。特にau経済圏に身を置く方にとっては、最強のパートナーとなり得るでしょう。
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
                  <h2 className="text-2xl font-bold mb-4">三菱UFJ eスマート証券の公式サイトへ</h2>
                  <p className="text-muted-foreground mb-6">
                    詳しい情報や口座開設については、三菱UFJ eスマート証券の公式サイトをご確認ください。
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

export default AuKabucomSecuritiesDetail;