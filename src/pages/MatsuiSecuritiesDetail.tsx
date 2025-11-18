import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, CheckCircle, XCircle, Star, ArrowLeft, TrendingUp, Shield, Zap, Users, Award, Phone, Globe } from "lucide-react";

const MatsuiSecuritiesDetail = () => {
  // 松井証券の基本情報
  const companyInfo = {
    name: "松井証券",
    fullName: "松井証券株式会社",
    established: "1918年5月（創業）",
    netTradingStart: "1998年5月（ネット取引開始）",
    headquarters: "東京都千代田区麹町",
    parentCompany: "松井金融グループ",
    url: "https://www.matsui.co.jp/",
    rating: 4,
    history: "100年以上の歴史"
  };

  // 手数料情報
  const fees = [
    {
      plan: "国内株式現物取引",
      description: "1日の約定代金合計50万円まで",
      fee: "無料",
      details: "50万円を超える場合は、100万円まで1,100円、200万円まで2,200円"
    },
    {
      plan: "投資信託",
      description: "手数料無料",
      fee: "0円",
      details: "全銘柄で手数料無料、ロボアド「投信工房」利用料も無料"
    },
    {
      plan: "信用取引",
      description: "無期限信用取引に対応",
      fee: "無料枠あり",
      details: "1日50万円までの現物取引と同様の手数料体系"
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
      name: "ネットストック・ハイスピード（PC）",
      description: "PC版の取引ツール。高機能で安定した取引環境を提供します。",
      image: "/images/securities/matsui-netstock.png"
    },
    {
      name: "松井証券 日本株アプリ（スマホ）",
      description: "スマホでも使える取引アプリ。直感的な操作性とリアルタイム情報提供。",
      image: "/images/securities/matsui-mobile-app.png"
    },
    {
      name: "投信工房",
      description: "無料のロボアドバイザー。自分に合った投資信託のポートフォリオを提案。",
      image: "/images/securities/matsui-robo-advisor.png"
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
      title: "少額投資家に圧倒的有利！「1日50万円まで手数料無料」",
      icon: <TrendingUp className="h-6 w-6 text-green-500" />,
      details: [
        "1日の約定代金合計が50万円以下であれば、現物取引・信用取引ともに手数料が0円",
        "25歳以下の投資家は、約定代金にかかわらず国内株式の現物取引手数料が全額無料",
        "多くの個人投資家、特に初心者の1日の取引額をカバーする絶妙な金額設定"
      ]
    },
    {
      title: "業界最高峰！安心のサポート体制",
      icon: <Phone className="h-6 w-6 text-blue-500" />,
      details: [
        "HDI格付けで最高評価を13年連続獲得（2023年時点）",
        "「株の取引相談窓口」で投資に関する初歩的な相談にも専門スタッフが電話対応",
        "フリーダイヤル電話サポート、AIチャットボット、リモートサポートなど多様なチャネル"
      ]
    },
    {
      title: "信用取引のパイオニア「無期限信用取引」",
      icon: <Shield className="h-6 w-6 text-purple-500" />,
      details: [
        "返済期限がない独自の信用取引サービス",
        "将来的な成長が見込める銘柄を長期保有する戦略が可能",
        "一日信用取引も低コストで提供、デイトレーダーにも優しい設計"
      ]
    },
    {
      title: "無料で使える本格ロボアド「投信工房」",
      icon: <Zap className="h-6 w-6 text-orange-500" />,
      details: [
        "簡単な質問に答えるだけで最適な投資信託ポートフォリオを提案",
        "提案されたポートフォリオはボタン一つで一括購入可能",
        "利用料が一切かからない画期的なサービス",
        "NISA（つみたて投資枠・成長投資枠）、iDeCoにも対応"
      ]
    }
  ];

  // 弱み情報（柔らかい表現）
  const weaknesses = [
    {
      title: "外国株の取扱いについて",
      details: [
        "米国株、中国株をはじめ、外国の個別株式を一切取り扱っていません",
        "投資信託を通じて海外の指数に投資することは可能ですが、AppleやGoogleなどの直接購入はできません",
        "グローバルな分散投資を個別株で行いたい投資家にとっては選択肢が限られます"
      ]
    },
    {
      title: "ポイント経済圏・クレカ積立の対応",
      details: [
        "楽天証券やSBI証券のようなクレジットカードで投信を積み立ててポイントが貯まるサービスはありません",
        "TポイントやPontaポイントが貯まったり使えるポイントプログラムもありません",
        "お得感やポイ活の楽しさを重視する方には物足りない面があります"
      ]
    },
    {
      title: "その他のサービス面での特徴",
      details: [
        "IPOの取扱数がSBI証券や楽天証券といった大手と比較すると控えめです",
        "PC版の取引ツールやスマホアプリは機能的には十分ですが、デザイン面でやや古風な印象を受けるかもしれません",
        "これらの点は会社の戦略として国内サービスに経営資源を集中させているためと考えられます"
      ]
    }
  ];

  // 活用術情報
  const utilizationTips = [
    {
      title: "投資の「最初の第一歩」を踏み出す口座として",
      description: "「投資を始めたいけど、何から手をつけていいか分からない」「損をするのが怖い」という方にこそ、松井証券は最適です。「株の取引相談窓口」に電話をして、初歩的な疑問を一つひとつ解消しながら、まずは50万円以下の少額取引で手数料無料で個別株に挑戦してみましょう。"
    },
    {
      title: "国内株の少額デイトレード専用口座として",
      description: "1日50万円という無料枠を活かして、国内株のデイトレードを行うサブ口座として活用するのも非常に有効です。コストを気にせず、小さな利益を積み重ねていく戦略に向いています。"
    },
    {
      title: "「投信工房」でNISAデビュー",
      description: "「NISAを始めたいけど、どの投資信託を選べばいいか分からない」という方は、まず「投信工房」を試してみましょう。無料で自分に合ったポートフォリオを提案してもらえるので、銘柄選びの失敗リスクを大幅に減らすことができます。"
    }
  ];

  // FAQ情報
  const faqs = [
    {
      question: "なぜ松井証券は外国株を扱わないのですか？",
      answer: "会社の戦略として、国内の投資家に向けたサービスに経営資源を集中させているためと考えられます。外国株取引のシステム開発や管理には多大なコストがかかります。そのコストをかける代わりに、手数料の引き下げやサポート体制の充実に力を入れていると言えるでしょう。"
    },
    {
      question: "50万円を超えると手数料は高くなりますか？",
      answer: "50万円を超えた場合、100万円までなら1,100円、200万円までなら2,200円と、約定代金に応じて手数料がかかります。大口の取引になると、SBI証券や楽天証券のゼロコースに比べて割高になる可能性があります。自分の1日の取引スタイルを考えて判断する必要があります。"
    },
    {
      question: "信用取引は初心者には危険ではないですか？",
      answer: "はい、信用取引はレバレッジがかかるため、現物取引よりもリスクが高い取引です。しかし、松井証券は初心者向けの動画セミナーなどで信用取引のリスクや仕組みについても丁寧に解説しています。まずは十分な知識を身につけ、余裕資金の範囲内で、低いレバレッジから試してみることが重要です。「無期限信用」は長期戦略も可能ですが、金利コストがかかり続ける点には注意が必要です。"
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
                      松井証券は、<strong>1918年（大正7年）に創業された、100年以上の歴史を誇る日本の証券会社</strong>です。もともとは対面営業の老舗証券でしたが、<strong>1998年に日本で初めて本格的なインターネット取引を導入</strong>し、ネット証券のパイオニアへと変貌を遂げました。
                    </p>
                    <p className="mb-4">
                      その最大の特徴は、<strong>「老舗ならではの絶大な信頼感」と「徹底した初心者目線」</strong>の融合にあります。業界に先駆けて「ボックスレート（1日の約定代金合計に応じた手数料体系）」を導入したり、返済期限のない「無期限信用取引」を開発したりするなど、常に投資家ための革新的なサービスを追求してきました。特に<strong>「1日50万円までの取引手数料無料」</strong>というサービスと、業界最高水準と名高い<strong>「手厚い電話サポート」</strong>は、これから投資を始める初心者にとって、何よりの心強い味方となります。
                    </p>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg my-6">
                      <p className="font-semibold flex items-center gap-2">
                        <Award className="h-5 w-5 text-blue-500" />
                        松井証券を一言で表すなら
                      </p>
                      <p className="mt-2">
                        「投資家の不安にどこまでも寄り添う、安心と信頼の駆け込み寺」。最新のポイント経済圏や派手なキャンペーン合戦とは一線を画し、投資の本質的なサービスを実直に磨き続ける姿勢は、多くの投資家から長年にわたり支持されています。
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
                          <span className="text-muted-foreground">創業</span>
                          <span>{companyInfo.established}</span>
                        </li>
                        <li className="flex justify-between border-b pb-2">
                          <span className="text-muted-foreground">ネット取引開始</span>
                          <span>{companyInfo.netTradingStart}</span>
                        </li>
                        <li className="flex justify-between border-b pb-2">
                          <span className="text-muted-foreground">本社所在地</span>
                          <span>{companyInfo.headquarters}</span>
                        </li>
                        <li className="flex justify-between border-b pb-2">
                          <span className="text-muted-foreground">特徴</span>
                          <span>{companyInfo.history}、手厚いサポート、少額取引手数料無料</span>
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
                        松井証券は、1962年の設立以来、証券業界のパイオニアとしての実績を持つ老舗ネット証券会社です。
                        シンプルな手数料体系と低コストが特徴で、初心者から上級者まで幅広く支持されています。
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
                <h2 className="text-3xl font-bold mb-4">松井証券の強み・メリット</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  松井証券の強みは、長年の歴史の中で培われた、投資家への深い洞察に基づいています。
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
                <h2 className="text-3xl font-bold mb-4">松井証券の特徴と考慮点</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  長年の歴史と信頼を誇る松井証券ですが、時代の変化の中で見劣りするようになった点も存在します。
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
                <h2 className="text-3xl font-bold mb-4">松井証券の活用術と裏ワザ</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  松井証券は、その特性を理解することで、特に初心者にとって最強の口座となり得ます。
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
                      <h3 className="font-bold text-lg mb-2">単元未満株（1株投資）の出口戦略として</h3>
                      <p className="text-muted-foreground">
                        松井証券では、1株から株を買える「単元未満株」のサービスもあります。買付手数料はかかりますが（約定代金の0.55%、最低手数料なし）、売却時の手数料は無料です。他の証券会社で単元未満株を買い集め、売却する時だけ松井証券に移管して売る、といった少しマニアックな使い方も考えられます。
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
                  松井証券はシンプルで低コストな手数料体系を提供しています。
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
                  松井証券はすべてのNISA制度に対応しており、お得に資産運用できます。
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
                  松井証券が提供する高機能な取引ツールをご紹介します。
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
                  口座開設はオンラインで簡単に完結します。
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
                        <h3 className="text-xl font-bold mb-2">本人確認方法の選択</h3>
                        <p className="text-muted-foreground">「オンラインで申し込む（eKYC）」を選択すると、郵送物の受け取りが不要でスピーディーです。</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">3</div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">本人確認書類の撮影</h3>
                        <p className="text-muted-foreground">スマホでマイナンバーカードと顔写真を撮影します。</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">4</div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">お客様情報の入力</h3>
                        <p className="text-muted-foreground">氏名、住所、職業などを入力します。</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">5</div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">審査後、ID等がメールで届く</h3>
                        <p className="text-muted-foreground">最短で申し込み当日に口座開設が完了し、IDとパスワードがメールで通知されます。</p>
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
                  松井証券に関するよくある質問をご紹介します。
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
                <h2 className="text-3xl font-bold mb-4">まとめ：松井証券はこんな人におすすめ！</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  松井証券は、華やかさよりも実質と安心感を求める投資家に最適な証券会社です。
                </p>
              </div>
              
              <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                <CardContent className="p-8">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>投資が全く初めてで、手厚いサポートを求める初心者の方</strong><br />電話で気軽に相談しながら、安心して投資の第一歩を踏み出したい方。このサポート体制は業界随一です。</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>1日の取引が50万円以下の少額投資家</strong><br />手数料を気にせず、国内株を少しずつ売買したい方。デイトレーダーにも最適です。</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>25歳以下の若い投資家</strong><br />国内株の現物取引手数料が完全無料になるため、若いうちから株式投資の経験を積みたい方。</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>NISAやiDeCoを始めたいが、銘柄選びに自信がない方</strong><br />無料のロボアド「投信工房」を使って、専門家が組んだバランスの良いポートフォリオで手堅く資産形成を始めたい方。</span>
                    </li>
                  </ul>
                  
                  <div className="mt-8 p-4 bg-primary/10 rounded-lg">
                    <p className="text-center font-semibold">
                      松井証券は、100年という長い年月をかけて、日本の個人投資家が何に悩み、何を求めているのかを見つめ続けてきました。その答えが、「圧倒的な安心感」と「初心者に優しい手数料体系」です。もしあなたが、投資の世界への一歩を踏み出すことに不安を感じているのなら、松井証券ほど頼りになるパートナーはいないでしょう。
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
                  <h2 className="text-2xl font-bold mb-4">松井証券の公式サイトへ</h2>
                  <p className="text-muted-foreground mb-6">
                    詳しい情報や口座開設については、松井証券の公式サイトをご確認ください。
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

export default MatsuiSecuritiesDetail;