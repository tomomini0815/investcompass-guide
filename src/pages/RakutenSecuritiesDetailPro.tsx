import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, CheckCircle, XCircle, Star, ArrowLeft, CircleCheck, CircleX, Info } from "lucide-react";

const RakutenSecuritiesDetailPro = () => {
  // 楽天証券の基本情報
  const companyInfo = {
    name: "楽天証券",
    fullName: "楽天証券株式会社",
    established: "2000年4月",
    parentCompany: "楽天グループ",
    url: "https://www.rakuten-sec.co.jp/",
    rating: 5,
  };

  // 基本情報
  const basicInfo = [
    { label: "商号", value: "楽天証券株式会社" },
    { label: "設立", value: "2000年4月" },
    { label: "本社所在地", value: "東京都品川区東品川" },
    { label: "親会社", value: "楽天グループ" },
    { label: "口座開設数", value: "800万口座超（2024年1月時点）" },
    { label: "預かり資産残高", value: "20兆円超（2024年1月時点）" },
    { label: "主要株主", value: "楽天グループ各社 (100%)" }
  ];

  // 手数料情報
  const fees = [
    {
      plan: "国内株式現物取引",
      description: "超割コース：55円〜(現物取引 5万円以下)",
      fee: "55円〜",
      details: "いちにち定額コース：0円〜（月額330円）"
    },
    {
      plan: "米国株式・海外ETF",
      description: "業界最安水準",
      fee: "1.99ドル〜",
      details: "米国株式・海外ETFの取引手数料は1.99ドル〜と業界最安水準。月額330円のコースでは、米国株式・海外ETFの取引手数料が0ドルになります。"
    },
    {
      plan: "為替手数料（米ドル）",
      description: "1ドルあたり10銭",
      fee: "10銭",
      details: "楽天銀行の外貨預金口座を利用することで、1ドルあたり10銭（通常25銭）という有利なコストで円とドルを交換可能。"
    },
    {
      plan: "投資信託",
      description: "すべて購入時手数料無料",
      fee: "0円",
      details: "取扱本数2,000本以上すべてが購入時手数料無料（ノーロード）。低コストな「eMAXIS Slim」シリーズなどもラインナップ。"
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

  // 主要特徴
  const features = [
    {
      title: "楽天エコノミー圏との連携",
      description: "楽天ポイントと連携可、投資信託積立でもポイント獲得、利便性の高いトレーディングツール、IPO取扱件数が多い。",
      icon: "💳"
    },
    {
      title: "業界最安水準の手数料体系",
      description: "超割コースで国内株式手数料が55円〜。いちにち定額コースで0円〜（月額330円）。",
      icon: "💰"
    },
    {
      title: "圧倒的なIPO取扱件数",
      description: "IPO取扱件数は業界トップクラス。2023年には80社を取り扱い、そのうち10社で主幹事を務めました。",
      icon: "📈"
    },
    {
      title: "高機能なトレーディングツール",
      description: "楽天証券 株アプリや楽天証券WEBサービスなど、初心者から上級者まで対応する多様なツールを提供。",
      icon: "💻"
    },
    {
      title: "豊富な投資情報",
      description: "楽天リサーチや楽天証券独自の投資情報、アナリストによる市況解説動画など、学びの機会が豊富に提供。",
      icon: "📚"
    }
  ];

  // 強み詳細
  const strengths = [
    {
      title: "楽天エコノミー圏との連携：「ポイント革命」のインパクト",
      content: [
        "楽天ポイントの獲得・利用可：楽天証券で取引すると楽天ポイントが貯まり、楽天市場でのお買い物に利用できます。投資信託の積立でもポイントが獲得可能。",
        "楽天銀行との連携：楽天銀行の普通預金口座と連携することで、資金移動がスムーズになります。また、為替手数料も楽天銀行の外貨預金口座を利用することで、1ドルあたり10銭（通常25銭）という有利なコストで円とドルを交換可能。",
        "楽天カードとの連携：楽天カード（NL）やゴールド（NL）、プラチナプリファードなど、対象のクレジットカードで投資信託を積立購入すると、積立額の0.5%～1.0%の楽天ポイントが還元されます。"
      ]
    },
    {
      title: "業界最安水準の手数料体系：「超割コース」と「いちにち定額コース」",
      content: [
        "国内株式手数料の安さ：超割コースで国内株式手数料が55円〜（現物取引 5万円以下）。これは業界最安水準の価格です。",
        "いちにち定額コース：月額330円で、国内株式の現物取引が0円〜になります。アクティブに売買を繰り返すデイトレーダーやスイングトレーダーにとって、計り知れないメリットがあります。",
        "米国株式・海外ETFの手数料：米国株式・海外ETFの取引手数料は1.99ドル〜と業界最安水準。月額330円のコースでは、米国株式・海外ETFの取引手数料が0ドルになります。",
        "投資信託：取扱本数2,000本以上すべてが購入時手数料無料（ノーロード）。低コストな「eMAXIS Slim」シリーズなども当然ラインナップ。"
      ]
    },
    {
      title: "圧倒的なIPO取扱件数：「IPO王」の称号",
      content: [
        "IPO取扱件数は業界トップクラス：2023年には80社を取り扱い、そのうち10社で主幹事を務めました。IPO投資で利益を狙うなら、楽天証券の口座は必須と言えます。",
        "抽選に外れても「IPOチャレンジポイント」が貯まります：IPOチャレンジポイントは、IPOに申し込みをすることで貯まるポイントで、次回以降の当選確率が上がる独自の制度です。",
        "「いちかぶ」で1株からIPOに参加可能：単元未満株（「いちかぶ」）1株から有名企業の株主になれます。買付手数料は無料で、リアルタイム取引にも対応しています。"
      ]
    },
    {
      title: "高機能なトレーディングツール：初心者から上級者まで対応",
      content: [
        "楽天証券 株アプリ（スマートフォン向け）：シンプルで直感的な操作性が魅力。銘柄検索からチャート分析、発注までスムーズに行えます。4分割チャートやPC版に匹敵するテクニカル指標など、スマホアプリとは思えないほどの多機能性を誇ります。生体認証にも対応しており、セキュリティも万全です。",
        "楽天証券WEBサービス（PC向け）：ブラウザ上で完結する高機能トレーディングツール。板発注や描画機能が充実したチャート、複数銘柄の気配値を一覧できる「全板」、リアルタイムのニュース速報など、アクティブトレーダーが必要とする機能が網羅されています。",
        "楽天証券 株アプリ for iPad：iPad専用に最適化されたアプリで、より大きな画面でチャート分析や発注が可能です。"
      ]
    },
    {
      title: "豊富な投資情報：学びの機会が豊富に提供",
      content: [
        "楽天リサーチ：楽天グループが運営するリサーチ会社で、質の高いレポートやニュースを無料で閲覧できます。",
        "楽天証券独自の投資情報：会社四季報、東洋経済、ロイター、モーニングスターなど、質の高いレポートやニュースを無料で閲覧できます。",
        "アナリストによる市況解説動画：楽天証券のアナリストが市場動向を解説する動画を随時配信しています。",
        "投資初心者向けのオンラインセミナー：楽天証券では、投資初心者向けのオンラインセミナーを頻繁に開催しています。"
      ]
    }
  ];

  // 弱み・デメリット
  const weaknesses = [
    "サービスの多機能さゆえに、初めてご利用される方には少し操作方法が複雑に感じるかもしれません。しかし、使いこなせば非常に便利な機能がたくさんあります。",
    "IPOチャレンジポイント制度は便利ですが、人気のあるIPOに当選するには多くのポイントが必要になることがあります。ポイントを貯めるには時間がかかりますが、長期的な視点で取り組むことをおすすめします。",
    "米国株の取扱銘柄数は多いものの、他の専門証券会社と比較すると、特定の国のニッチな銘柄については限定的である場合があります。そういった銘柄に投資したい場合は、他の証券会社と使い分けると良いでしょう。"
  ];

  // 活用術と裏ワザ
  const tips = [
    {
      title: "楽天銀行と楽天カードは「三種の神器」",
      content: "楽天証券の口座を開設したら、必ず楽天銀行の口座も開設し、資金移動をスムーズにしましょう。さらに、楽天カード（NLなど）を作成し、クレカ積立を設定します。NISA口座で毎月5万円を積み立てれば、自動的にポイントが貯まり続け、長期的なリターンを底上げしてくれます。"
    },
    {
      title: "IPOチャレンジポイントをコツコツ貯める",
      content: "IPOは当選確率が低いからと諦めず、ブックビルディングには毎回欠かさず申し込みましょう。落選してもポイントは着実に貯まります。数年後の「A級」IPO当選を目指し、地道にポイントを貯めるのが王道です。"
    },
    {
      title: "「いちかぶ」でポートフォリオを微調整",
      content: "100株単位では高くて手が出ない値が「いちかぶ」なら数千円～数万円から投資できます。また、配当金の再投資や、ポートフォリオのリバランスで端数が出た際に、「いちかぶ」を使って微調整するのも賢い使い方です。"
    },
    {
      title: "楽天ポイントを最大限に活用する",
      content: "楽天証券で取引して貯まった楽天ポイントは、楽天市場でのお買い物に利用できます。また、投資信託の積立でもポイントが獲得可能なので、ポイントを最大限に活用しましょう。"
    }
  ];

  // 口座開設方法
  const accountOpeningSteps = [
    "公式サイトにアクセス：楽天証券の公式サイトから「口座開設」ボタンをクリックします。",
    "メールアドレスの登録：メールアドレスを登録し、送信されてくる認証コードを入力します。",
    "お客様情報の入力：氏名、住所、生年月日、職業などの必要事項を入力します。NISA口座やiDeCoも同時に申し込むことができます。",
    "規約の確認と同意：利用規約などを確認し、同意します。",
    "口座開設方法の選択：「ネットで口座開設」または「郵送で口座開設」を選びます。「ネットで口座開設」がスピーディーでおすすめです。",
    "本人確認書類の提出：マイナンバーカードをお持ちの場合、スマホのカメラでマイナンバーカードとご自身の顔写真を撮影するだけで完了します。通知カード＋運転免許証などの場合、同様にスマホで撮影してアップロードします。",
    "初期設定：口座開設完了の通知が届いたら、サイトにログインして取引パスワードなどの初期設定を行います。"
  ];

  // よくある質問
  const faqs = [
    {
      question: "投資初心者ですが、楽天証券は難しくないですか？",
      answer: "機能が豊富なため最初は戸惑うかもしれませんが、初心者向けのコンテンツやサポート体制も充実しています。まずは少額から始められる「いちかぶ」や、専門家が運用してくれる「投資信託の積立」から始めるのがおすすめです。慣れてくれば、徐々に様々な機能を使いこなせるようになります。"
    },
    {
      question: "楽天証券が倒産したら、預けている資産はどうなりますか？",
      answer: "心配ありません。証券会社は、顧客から預かった株式や現金などの資産を、自社の資産とは明確に分けて管理すること（分別管理）が法律で義務付けられています。万が一楽天証券が破綻しても、あなたの資産は保護されます。また、分別管理が何らかの理由で機能しなかった場合でも、「投資者保護基金」によって1人あたり1,000万円まで補償されます。"
    },
    {
      question: "NISA口座を開設したいのですが、おすすめですか？",
      answer: "はい、非常におすすめです。楽天証券はNISA口座での取扱商品が非常に豊富で、国内株、米国株、投資信託など、幅広い選択肢から非課税の恩恵を受けられます。特に、楽天ポイントとの相性が抜群で、ポイント還元を受けながら効率的に非課税投資ができます。"
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

        {/* Introduction */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold flex items-center gap-2">
                    <Info className="h-6 w-6 text-primary" />
                    楽天証券の概要
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <p className="mb-4">
                    楽天証券は、楽天グループ傘下の証券会社であり、口座開設数、預かり資産残高において業界トップクラスを誇る、ネット証券の有力企業です（2024年時点）。2000年にインターネット取引サービスを開始して以来、「顧客中心主義」の経営理念のもと、業界に先駆けて手数料の無料化や革新的なサービスを次々と打ち出してきました。
                  </p>
                  <p className="mb-4">
                    その最大の特徴は、<span className="font-bold text-primary">「楽天エコノミー圏との連携」</span>にあります。楽天ポイントとの連携、楽天銀行とのシームレスな連携、楽天カードとの連携など、楽天グループのサービスと連携することで、利便性とお得度が飛躍的に向上します。初心者から専業トレーダーまで、あらゆる投資家のニーズに応えることができる懐の深さが、楽天証券が人気を博している理由と言えるでしょう。
                  </p>
                  <p>
                    楽天証券を一言で表すなら、「ポイントが貯まる証券会社」。楽天ポイントを貯めたい方、楽天グループのサービスを最大限に活用したい方には最適な証券会社です。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Basic Information */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">楽天証券の基本情報</h2>
              </div>
              
              <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {basicInfo.map((info, index) => (
                      <div key={index} className="flex justify-between border-b pb-2">
                        <span className="font-semibold">{info.label}</span>
                        <span>{info.value}</span>
                      </div>
                    ))}
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
                  楽天証券は業界最安水準の手数料体系を提供しています。
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  楽天証券はすべてのNISA制度に対応しており、お得に資産運用できます。
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {Object.values(nisaInfo).map((nisa, index) => (
                  <Card key={index} className="shadow-md border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold flex items-center justify-between">
                        {nisa.name}
                        {nisa.supported ? (
                          <CircleCheck className="h-6 w-6 text-green-500" />
                        ) : (
                          <CircleX className="h-6 w-6 text-red-500" />
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

        {/* Key Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">主要な特徴</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  楽天証券が選ばれる理由をご紹介します。
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <Card key={index} className="shadow-md border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold flex items-center gap-3">
                        <span className="text-2xl">{feature.icon}</span>
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Strengths */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">楽天証券の強み・メリット（徹底解説）</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  楽天証券の強みは多岐にわたりますが、ここでは特に重要な5つのポイントを深掘りします。
                </p>
              </div>
              
              <div className="space-y-8">
                {strengths.map((strength, index) => (
                  <Card key={index} className="shadow-md border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold flex items-start gap-3">
                        <span className="text-primary font-bold text-2xl">{index + 1}.</span>
                        {strength.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {strength.content.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span className="text-muted-foreground">{item}</span>
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

        {/* Weaknesses */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">楽天証券の特徴と留意点</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  楽天証券の特徴をより深く理解するために、いくつかの留意点をご紹介します。
                </p>
              </div>
              
              <Card className="shadow-md border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                <CardContent className="p-6">
                  <ul className="space-y-4">
                    {weaknesses.map((weakness, index) => (
                      <li key={index} className="flex items-start">
                        <CircleX className="h-5 w-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{weakness}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">楽天証券の活用術と裏ワザ</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  楽天証券のメリットを最大限に引き出すための活用法をご紹介します。
                </p>
              </div>
              
              <div className="space-y-6">
                {tips.map((tip, index) => (
                  <Card key={index} className="shadow-md border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold flex items-start gap-3">
                        <span className="text-primary font-bold text-2xl">{index + 1}.</span>
                        {tip.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{tip.content}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Account Opening */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">口座開設の方法</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  楽天証券の口座開設は、スマートフォンと本人確認書類があれば、オンラインで最短5分程度で申し込みが完了します。
                </p>
              </div>
              
              <Card className="shadow-md border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                <CardContent className="p-6">
                  <ol className="space-y-4">
                    {accountOpeningSteps.map((step, index) => (
                      <li key={index} className="flex items-start">
                        <span className="bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">
                          {index + 1}
                        </span>
                        <span className="text-muted-foreground">{step}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">よくある質問（Q&A）</h2>
              </div>
              
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <Card key={index} className="shadow-md border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                    <CardHeader>
                      <CardTitle className="text-lg font-bold text-primary">Q. {faq.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">A. {faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="shadow-lg border-0 bg-gradient-to-br from-primary/10 to-secondary/10">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-center">まとめ：楽天証券はこんな人におすすめ！</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-center">
                    楽天証券は、その<span className="font-bold text-primary">「楽天エコノミー圏との連携」</span>という最大の特徴から、<span className="font-bold text-primary">「ポイントが貯まる証券会社」</span>として人気を博しています。その中でも、特に以下のような方には最適です。
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>楽天ポイントを貯めたい方：楽天証券で取引すると楽天ポイントが貯まり、楽天市場でのお買い物に利用できます。</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>楽天グループのサービスを最大限に活用したい方：楽天銀行や楽天カードとの連携で、利便性とお得度が飛躍的に向上します。</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>少額から投資を始めたい方：「いちかぶ」やポイント投資が便利です。</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>お得に資産形成をしたい方：クレカ積立で楽天ポイントを貯めながら、NISAやiDeCoで着実に資産を増やしたい方。</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>幅広い商品に投資したい方：国内株式、米国株式、投資信託など、幅広い選択肢から投資できます。</span>
                    </li>
                  </ul>
                  <p className="text-muted-foreground text-center font-semibold">
                    結論として、楽天証券は特定の分野に特化しているのではなく、あらゆる投資家のニーズに高いレベルで応えることができる「万能型」の証券会社です。楽天ポイントを貯めたい方、楽天グループのサービスを最大限に活用したい方には最適な証券会社です。
                  </p>
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
                  <h2 className="text-2xl font-bold mb-4">楽天証券の公式サイトへ</h2>
                  <p className="text-muted-foreground mb-6">
                    詳しい情報や口座開設については、楽天証券の公式サイトをご確認ください。
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

export default RakutenSecuritiesDetailPro;