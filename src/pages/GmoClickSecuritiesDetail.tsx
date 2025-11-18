import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, CheckCircle, XCircle, Star, ArrowLeft, TrendingUp, Shield, Zap, Users, Award } from "lucide-react";

const GmoClickSecuritiesDetail = () => {
  // GMOクリック証券の基本情報
  const companyInfo = {
    name: "GMOクリック証券",
    fullName: "GMOクリック証券株式会社",
    established: "2005年10月",
    parentCompany: "GMOフィナンシャルホールディングス株式会社",
    headquarters: "東京都渋谷区道玄坂",
    url: "https://click.gmo-jp.com/",
    rating: 4,
    fxRanking: "12年連続世界第1位（※Finance Magnates \"2023年年間FX取引高調査\"報告書において）"
  };

  // 手数料情報
  const fees = [
    {
      plan: "国内株式現物取引",
      description: "約定代金5万円以下",
      fee: "50円〜",
      details: "約定代金が5万円を超える場合は、0.1%（税込）"
    },
    {
      plan: "投資信託",
      description: "手数料無料",
      fee: "0円",
      details: "全銘柄で手数料無料"
    },
    {
      plan: "CFD",
      description: "CFD取引",
      fee: "0円",
      details: "CFD取引手数料はすべて0円"
    },
    {
      plan: "FX",
      description: "FX取引",
      fee: "0円",
      details: "FX取引手数料はすべて0円"
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
      name: "スーパーはっちゅう君",
      description: "株式取引に特化したリッチクライアントツール。リアルタイムの株価更新、スピーディーな発注機能、カスタマイズ性の高い画面レイアウト。",
      image: "/images/securities/gmo-click-trading-tool.png"
    },
    {
      name: "はっちゅう君FXプラス",
      description: "FXトレーダー向けに最適化されたツール。チャート上から直接発注できる機能や、ワンクリックで即座に注文が完了する「スピード注文」など。",
      image: "/images/securities/gmo-click-fxneo.png"
    },
    {
      name: "GMOクリック 株/FX/CFD（スマホアプリ）",
      description: "株式、FX、CFDなど、それぞれの金融商品に特化した専用アプリ。「GMOクリック FXneo」は、PC版に匹敵する高度なチャート分析機能と発注機能を備えています。",
      image: "/images/securities/gmo-click-mobile-app.png"
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
      title: "業界最安水準の手数料・スプレッド",
      icon: <TrendingUp className="h-6 w-6 text-green-500" />,
      details: [
        "国内株式手数料：1日の約定代金合計100万円まで手数料0円の「1日定額プラン」",
        "FXスプレッド：米ドル/円のスプレッドは原則0.2銭（例外あり）",
        "CFDスプレッド：株価指数CFDは取引手数料が無料で、スプレッドも非常に狭く設定",
        "GMOインターネットグループ株主優待：最大で15,000円分がキャッシュバック"
      ]
    },
    {
      title: "自社開発による高性能で使いやすい取引ツール",
      icon: <Zap className="h-6 w-6 text-blue-500" />,
      details: [
        "スーパーはっちゅう君：株式取引に特化したリッチクライアントツール",
        "はっちゅう君FXプラス：FXトレーダー向けに最適化されたツール",
        "GMOクリック 株/FX/CFDアプリ：専用アプリで外出先でもストレスなくトレード可能"
      ]
    },
    {
      title: "CFD取引の圧倒的な利便性",
      icon: <Shield className="h-6 w-6 text-purple-500" />,
      details: [
        "豊富な取扱銘柄：日経225、NYダウ、NASDAQ100、金、銀、原油、個別株など",
        "「売り」から入れる：相場の下落局面でも利益を狙える",
        "ほぼ24時間取引可能：世界の市場が開いている時間は取引可、祝日でも取引できる銘柄あり"
      ]
    },
    {
      title: "GMOあおぞらネット銀行との連携",
      icon: <Users className="h-6 w-6 text-orange-500" />,
      details: [
        "「証券コネクト口座」で資金移動の手間を省ける",
        "証券コネクト口座の預金金利は年0.11%（2024年6月時点）",
        "メガバンクの100倍以上の優遇金利が適用"
      ]
    }
  ];

  // 弱み情報
  const weaknesses = [
    {
      title: "取扱商品が限定的",
      details: [
        "米国個別株の現物取引ができない（CFDでのみ対応）",
        "投資信託の取扱本数が約100本程度と他社比で少ない",
        "IPOや単元未満株の取扱いなし"
      ]
    },
    {
      title: "ポイントプログラムがない",
      details: [
        "楽天ポイントやPontaポイントのようなポイントプログラムなし",
        "取引コストの安さが最大の還元というスタンス"
      ]
    },
    {
      title: "情報コンテンツは少なめ",
      details: [
        "アナリストレポートや詳細な企業分析ツールが他社に比べると充実していない",
        "情報収集は他のツールやサイトで行う必要あり"
      ]
    }
  ];

  // 活用術情報
  const utilizationTips = [
    {
      title: "FX・CFD取引の専用口座として",
      description: "FXやCFDを取引するなら、GMOクリック証券は最有力候補。業界最狭水準のスプレッドと高性能ツールは、短期トレーダーにとって最強の武器。"
    },
    {
      title: "株主優待で手数料を実質ゼロに",
      description: "GMOインターネットグループの株式を購入し、株主優待で手数料キャッシュバックを受けることで、取引コストを大幅に削減可能。"
    },
    {
      title: "祝日のリスクヘッジにCFDを活用",
      description: "日本の長期休場中に海外で大きなイベントが起こるリスクに備え、海外の株価指数CFDを「売り」建てておくことでヘッジ可能。"
    }
  ];

  // FAQ情報
  const faqs = [
    {
      question: "FXやCFDは初心者には危険ではありませんか？",
      answer: "はい、FXやCFDはレバレッジをかけることができるため、大きな利益を狙える反面、大きな損失を被るリスクもあります。初心者がいきなり高いレバレッジで取引するのは非常に危険です。GMOクリック証券ではデモトレード機能があるので、まずはそこで十分に練習し、仕組みとリスクを理解してから、少額・低レバレッジで始めることを強くお勧めします。"
    },
    {
      question: "なぜFXやCFDはそんなに低コストなのですか？",
      answer: "GMOクリック証券がシステムを完全に内製化し、運営コストを徹底的に抑えていることが大きいです。また、FXやCFDは取引高が非常に大いため、薄利多売のビジネスモデルが成立しやすいという側面もあります。"
    },
    {
      question: "NISA口座は開設できますか？",
      answer: "はい、NISA口座の開設は可能です。国内株式や投資信託を非課税で取引できます。ただし、投資信託の取扱本数が少ないため、NISAで様々なファンドに積立投資をしたい場合は、他の証券会社の方が選択肢は豊富です。"
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
                      GMOクリック証券は、<strong>GMOインターネットグループ傘下のネット証券</strong>です。その最大の特徴は、<strong>「圧倒的な低コスト」と「自社開発による使いやすい取引ツール」</strong>にあり、特に<strong>FX（外国為替証拠金取引）とCFD（差金決済取引）</strong>の分野で業界をリードする存在です。
                    </p>
                    <p className="mb-4">
                      2005年の設立以来、「もっと安く、もっと使いやすく」を追求し、徹底したコスト削減とシステムの内製化により、投資家に有利な取引環境を提供し続けています。株式取引においても競争力のある手数料体系を提示しており、コストに敏感なトレーダーから絶大な支持を集めています。
                    </p>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-6">
                      <p className="font-semibold flex items-center gap-2">
                        <Award className="h-5 w-5 text-blue-500" />
                        GMOクリック証券を一言で表すなら
                      </p>
                      <p className="mt-2">
                        「コストとテクノロジーで勝負するアスリート系証券」。華美なポイントプログラムなどはありませんが、取引コストを1銭でも安く抑え、高速で安定したツールでトレードに集中したいという、ストイックな投資家に最適な証券会社です。
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
                          <span className="text-muted-foreground">親会社</span>
                          <span>{companyInfo.parentCompany}</span>
                        </li>
                        <li className="flex justify-between border-b pb-2">
                          <span className="text-muted-foreground">FX取引高</span>
                          <span>{companyInfo.fxRanking}</span>
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
                        GMOクリック証券は、GMOインターネットグループ傘下のネット証券会社です。
                        国内株式現物取引手数料が無条件で0円（完全無料）で、FX取引では最大手クラスの実績を誇ります。
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
                <h2 className="text-3xl font-bold mb-4">GMOクリック証券の強み・メリット</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  GMOクリック証券の強みは、シンプルかつ強力です。
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
                <h2 className="text-3xl font-bold mb-4">GMOクリック証券の特徴と留意点</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  コストとツールに特化している分、他の領域では見劣りする点もあります。
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
                <h2 className="text-3xl font-bold mb-4">GMOクリック証券の活用術と裏ワザ</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  GMOクリック証券は、特定の目的を持つ投資家がサブ口座として利用することで真価を発揮します。
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
                  GMOクリック証券は手数料が無料で、コストを抑えながら投資できます。
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  GMOクリック証券はすべてのNISA制度に対応しており、お得に資産運用できます。
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
                  GMOクリック証券が提供する高機能な取引ツールをご紹介します。
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  口座開設は非常にスピーディーです。
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
                        <p className="text-muted-foreground">「スマホでスピード本人確認」を利用すれば、マイナンバーカードと顔写真を撮影するだけでオンラインで完結します。</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">4</div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">審査完了後、ログイン情報が届く</h3>
                        <p className="text-muted-foreground">最短で申し込み当日に口座開設が完了し、取引を開始できる場合もあります。</p>
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
                  GMOクリック証券に関するよくある質問をご紹介します。
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
                <h2 className="text-3xl font-bold mb-4">まとめ：GMOクリック証券はこんな人におすすめ！</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  GMOクリック証券は、万人向けの証券会社ではありませんが、特定の投資スタイルを持つ人にとっては最高のパートナーとなります。
                </p>
              </div>
              
              <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                <CardContent className="p-8">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>FX・CFDをメインに取引したいトレーダー</strong><br />低スプレッドと高性能ツールを駆使して、短期的な値動きから収益を上げたい方。FX取引高世界No.1の実績は伊達ではありません。</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>取引コストを１円でも安く抑えたいコスト意識の高い方</strong><br />ポイントなどの付加価値よりも、とにかくスプレッドや手数料の安さを最優先する方。</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>株主優待を活用できるアクティブトレーダー</strong><br />GMOインターネットグループの株主となり、手数料キャッシュバックの恩恵を受けながら国内株取引を行いたい方。</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>ヘッジング手段を探している中上級者</strong><br />保有している株式ポートフォリオのリスクヘッジとして、株価指数CFDの「売り」を活用したい方。</span>
                    </li>
                  </ul>
                  
                  <div className="mt-8 p-4 bg-primary/10 rounded-lg">
                    <p className="text-center font-semibold">
                      GMOクリック証券は、余計なものを削ぎ落とし、「取引」という本質的な機能をとことん磨き上げた証券会社です。<br />
                      もしあなたがFXやCFDの世界に足を踏み入れるのであれば、あるいは取引コストに徹底的にこだわりたいのであれば、GMOクリック証券の口座は必ず開設しておくべきと言えるでしょう。
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
                  <h2 className="text-2xl font-bold mb-4">GMOクリック証券の公式サイトへ</h2>
                  <p className="text-muted-foreground mb-6">
                    詳しい情報や口座開設については、GMOクリック証券の公式サイトをご確認ください。
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

export default GmoClickSecuritiesDetail;