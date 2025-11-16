import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, CheckCircle, XCircle, Star, ArrowLeft, CircleCheck, CircleX, Info } from "lucide-react";

const SbiSecuritiesDetailPro = () => {
  // SBI証券の基本情報
  const companyInfo = {
    name: "SBI証券",
    fullName: "株式会社SBI証券",
    established: "1944年12月",
    parentCompany: "SBIホールディングス株式会社",
    url: "https://www.sbisec.co.jp/",
    rating: 5,
  };

  // 基本情報
  const basicInfo = [
    { label: "商号", value: "株式会社SBI証券" },
    { label: "設立", value: "1944年12月" },
    { label: "本社所在地", value: "東京都港区六本木" },
    { label: "親会社", value: "SBIホールディングス株式会社" },
    { label: "口座開設数", value: "1,200万口座超（2024年1月時点）" },
    { label: "預かり資産残高", value: "30兆円超（2024年1月時点）" },
    { label: "主要株主", value: "SBIホールディングス株式会社 (100%)" }
  ];

  // 手数料情報
  const fees = [
    {
      plan: "国内株式現物取引",
      description: "完全無料化（インターネットコース）",
      fee: "0円",
      details: "電子交付サービスの利用設定などの簡単な条件を満たせば、売買手数料が0円になります。約定代金や取引回数に関わらず無料。"
    },
    {
      plan: "米国株式・海外ETF",
      description: "業界最安水準",
      fee: "0.495%",
      details: "約定代金の0.495%（税込）、上限22米ドル（税込）。SBI ETFセレクションで指定の海外ETF10銘柄の買付手数料が無料。"
    },
    {
      plan: "為替手数料（米ドル）",
      description: "1ドルあたり6銭",
      fee: "6銭",
      details: "住信SBIネット銀行の外貨預金口座を利用することで、1ドルあたり6銭（通常25銭）という非常に有利なコストで円とドルを交換可能。"
    },
    {
      plan: "投資信託",
      description: "すべて購入時手数料無料",
      fee: "0円",
      details: "取扱本数2,600本以上すべてが購入時手数料無料（ノーロード）。低コストな「eMAXIS Slim」シリーズなどもラインナップ。"
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
      title: "業界最安水準の手数料体系",
      description: "「ゼロ革命」で国内株式手数料を完全無料化。米国株式・海外ETFも業界最安水準。",
      icon: "💰"
    },
    {
      title: "圧倒的な商品ラインナップ",
      description: "国内株式、IPO、S株、PTS取引、外国株式、投資信託、債券、FX、CFD、先物・オプション、金・プラチナまで網羅。",
      icon: "📈"
    },
    {
      title: "最強の銀行連携",
      description: "住信SBIネット銀行とのシームレスな連携で利便性とお得度が飛躍的に向上。",
      icon: "🏦"
    },
    {
      title: "マルチポイント戦略とクレカ積立",
      description: "Tポイント、Pontaポイント、Vポイントなど選べるポイント経済圏。クレカ積立で最大5.0%の還元率。",
      icon: "💳"
    },
    {
      title: "高機能ツールと豊富な投資情報",
      description: "HYPER SBI 2やSBI証券 株アプリなど、トレーダーレベルに合わせたツールを提供。",
      icon: "💻"
    }
  ];

  // 強み詳細
  const strengths = [
    {
      title: "業界最安水準の手数料体系：「ゼロ革命」のインパクト",
      content: [
        "国内株式手数料の完全無料化：インターネットコースの全顧客が対象。電子交付サービスの利用設定などの簡単な条件を満たせば、売買手数料が0円になります。約定代金や取引回数に関わらず無料となるため、少額取引から大口取引まで、すべてのトレーダーが手数料を気にすることなく取引に集中できます。",
        "米国株式・海外ETFの手数料：約定代金の0.495%（税込）、上限22米ドル（税込）と、業界最安水準。さらに、SBI ETFセレクションとして、指定の海外ETF10銘柄の買付手数料を無料としています。",
        "為替手数料（米ドル）：住信SBIネット銀行の外貨預金口座を利用することで、1ドルあたり6銭（通常25銭）という非常に有利なコストで円とドルを交換できます。",
        "投資信託：取扱本数2,600本以上すべてが購入時手数料無料（ノーロード）。低コストな「eMAXIS Slim」シリーズなども当然ラインナップ。"
      ]
    },
    {
      title: "圧倒的な商品ラインナップ：投資できない金融商品はない",
      content: [
        "国内株式：東証、名証、福証、札証に上場するほぼすべての銘柄を取引可能。IPO取扱銘柄数は業界No.1。2023年には92社を取り扱い、そのうち20社で主幹事を務めました。",
        "S株（単元未満株）：1株から有名企業の株主になれます。買付手数料は無料で、リアルタイム取引にも対応。",
        "PTS取引（夜間取引）：SBI証券は私設取引システム（PTS）を運営するジャパンネクスト証券を子会社に持っており、PTS取引に強みがあります。8:20～16:00のデイタイム・セッションに加え、16:30～23:59のナイトタイム・セッションでも取引が可能。",
        "外国株式：米国、中国、韓国、ロシア、ベトナム、インドネシア、シンガポール、タイ、マレーシアの9カ国もの株式を取り扱っています。米国株の取扱銘柄数は6,000銘柄を超えています。",
        "投資信託：約2,600本以上のノーロード投信を取り揃えています。「投信マイレージ」サービスにより、投資信託の月間平均保有残高に応じてポイントが貯まります。",
        "債券、FX、CFD、先物・オプション、金・プラチナ：個人向け国債や社債、仕組み債、さらには米ドル建てなどの外貨建て債券も豊富。FX、CFD、先物・オプションといったデリバティブ取引も低スプレッド・低手数料で提供。"
      ]
    },
    {
      title: "最強の銀行連携：住信SBIネット銀行とのシナジー",
      content: [
        "SBIハイブリッド預金：住信SBIネット銀行の円普通預金口座に預けているお金を、SBI証券での株式や投資信託の買付余力として自動的に反映させることができるサービス。さらに、SBIハイブリッド預金に預けているお金は、通常の円普通預金よりも格段に高い金利が適用されます。",
        "外貨即時決済サービスと為替コスト：住信SBIネット銀行の外貨普通預金口座を持っていれば、SBI証券で外国株を購入する際に、リアルタイムの為替レートで即座に決済可能。為替手数料が1ドルあたり6銭と破格の安さ。"
      ]
    },
    {
      title: "マルチポイント戦略とクレカ積立",
      content: [
        "選べるポイント：Tポイント、Pontaポイント、Vポイント、dポイント、JALのマイルの中から、自分が貯めている好きなポイントサービスを選んで連携可能。",
        "ポイントの貯め方：国内株式の取引手数料、投資信託の保有残高（投信マイレージ）、金・プラチナ・銀の取引手数料など、様々なシーンでポイントが貯まります。",
        "ポイント投資：貯まったポイントは1ポイント＝1円として、投資信託の買付に利用可能。",
        "クレカ積立：三井住友カード × SBI証券で、積立額の0.5%～5.0%のVポイントが還元。特に「三井住友カード プラチナプリファード」は年会費がかかるものの、5.0%という驚異的な還元率を誇ります。"
      ]
    },
    {
      title: "高機能ツールと豊富な投資情報",
      content: [
        "HYPER SBI 2（PC向けダウンロード版）：プロのディーラーも利用する高機能トレーディングツール。板発注や描画機能が充実したチャート、複数銘柄の気配値を一覧できる「全板」、リアルタイムのニュース速報など、アクティブトレーダーが必要とする機能が網羅。",
        "SBI証券 株アプリ（スマートフォン向け）：シンプルで直感的な操作性。4分割チャートやPC版に匹敵するテクニカル指標など、スマホアプリとは思えないほどの多機能性。生体認証にも対応。",
        "投資情報：会社四季報、東洋経済、ロイター、モーニングスターなど、質の高いレポートやニュースを無料で閲覧可能。アナリストによる市況解説動画や、投資初心者向けのオンラインセミナーも頻繁に開催。"
      ]
    }
  ];

  // 弱み・デメリット
  const weaknesses = [
    "サービスの多機能さゆえの複雑さ：ウェブサイトは情報量が多く、機能も多岐にわたるため、投資経験が全くない初心者にとっては、どこに何があるのか少し分かりにくいと感じる可能性があります。",
    "IPOチャレンジポイントのインフレ：IPOに外れてもポイントが貯まる制度はユニークですが、近年はポイントの価値がインフレ気味。人気IPOに当選するためには数百ポイントを要することも珍しくなく、ポイントを貯め始めてから実際に当選するまでには、数年単位の長い時間が必要になる可能性があります。",
    "外国株の取扱国は多いが、個別銘柄のカバー範囲：9カ国もの外国株を扱っている点は素晴らしいですが、例えば中国株やアセアン株に関しては、他の専門証券会社と比較すると、中小型株やニッチな銘柄のカバー範囲は限定的。"
  ];

  // 活用術と裏ワザ
  const tips = [
    {
      title: "住信SBIネット銀行と三井住友カードは「三種の神器」",
      content: "SBI証券の口座を開設したら、必ず住信SBIネット銀行の口座も開設し、SBIハイブリッド預金を設定しましょう。さらに、三井住友カード（NLなど）を作成し、クレカ積立を設定します。NISA口座で毎月5万円を積み立てれば、自動的にポイントが貯まり続け、長期的なリターンを底上げしてくれます。"
    },
    {
      title: "IPOチャレンジポイントをコツコツ貯める",
      content: "IPOは当選確率が低いからと諦めず、ブックビルディングには毎回欠かさず申し込みましょう。落選してもポイントは着実に貯まります。数年後の「A級」IPO当選を目指し、地道にポイントを貯めるのが王道です。"
    },
    {
      title: "PTS取引を使いこなす",
      content: "企業の決算発表は、取引所の取引時間終了後（15:00以降）に行われることがほとんどです。PTS取引を利用すれば、好決算が発表された銘柄を他の投資家より早く仕込んだり、悪決算の銘柄をいち早く手放したりといった戦略が可能になります。"
    },
    {
      title: "S株（単元未満株）でポートフォリオを微調整",
      content: "100株単位では高くて手が出ない値がさ株（任天堂やキーエンスなど）も、S株なら数千円～数万円から投資できます。また、配当金の再投資や、ポートフォリオのリバランスで端数が出た際に、S株を使って微調整するのも賢い使い方です。"
    }
  ];

  // 口座開設方法
  const accountOpeningSteps = [
    "公式サイトにアクセス：SBI証券の公式サイトから「口座開設」ボタンをクリックします。",
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
      question: "投資初心者ですが、SBI証券は難しくないですか？",
      answer: "機能が豊富なため最初は戸惑うかもしれませんが、初心者向けのコンテンツやサポート体制も充実しています。まずは少額から始められる「S株」や、専門家が運用してくれる「投資信託の積立」から始めるのがおすすめです。慣れてくれば、徐々に様々な機能を使いこなせるようになります。"
    },
    {
      question: "SBI証券が倒産したら、預けている資産はどうなりますか？",
      answer: "心配ありません。証券会社は、顧客から預かった株式や現金などの資産を、自社の資産とは明確に分けて管理すること（分別管理）が法律で義務付けられています。万が一SBI証券が破綻しても、あなたの資産は保護されます。また、分別管理が何らかの理由で機能しなかった場合でも、「投資者保護基金」によって1人あたり1,000万円まで補償されます。"
    },
    {
      question: "NISA口座を開設したいのですが、おすすめですか？",
      answer: "はい、非常におすすめです。SBI証券はNISA口座での取扱商品が非常に豊富で、国内株、米国株、投資信託など、幅広い選択肢から非課税の恩恵を受けられます。特に、前述の「クレカ積立」との相性が抜群で、ポイント還元を受けながら効率的に非課税投資ができます。"
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
                    SBI証券の概要
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <p className="mb-4">
                    SBI証券は、SBIホールディングス傘下の中核企業であり、口座開設数、預かり資産残高、株式委託売買代金シェアにおいて業界No.1を誇る、まさにネット証券の王者です（2024年時点）。1999年にインターネット取引サービスを開始して以来、「顧客中心主義」の経営理念のもと、業界に先駆けて手数料の無料化や革新的なサービスを次々と打ち出してきました。
                  </p>
                  <p className="mb-4">
                    その最大の特徴は、<span className="font-bold text-primary">「圧倒的な総合力」</span>にあります。手数料の安さ、取扱商品の豊富さ、高性能な取引ツール、充実したポイントプログラム、そして住信SBIネット銀行とのシームレスな連携など、あらゆる面で高い水準を誇ります。初心者から専業トレーダーまで、あらゆる投資家のニーズに応えることができる懐の深さが、SBI証券がトップを走り続ける理由と言えるでしょう。
                  </p>
                  <p>
                    SBI証券を一言で表すなら、「迷ったらココ」。どの証券会社にするか決めかねている初心者の方が最初に開設する口座として、また、複数の証券会社を使い分ける中上級者の方がメイン口座として利用するにも最適な、死角の少ない証券会社です。
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
                <h2 className="text-3xl font-bold mb-4">SBI証券の基本情報</h2>
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
                  SBI証券は業界最安水準の手数料体系を提供しています。
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
                  SBI証券はすべてのNISA制度に対応しており、お得に資産運用できます。
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
                  SBI証券が選ばれる理由をご紹介します。
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
                <h2 className="text-3xl font-bold mb-4">SBI証券の強み・メリット（徹底解説）</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  SBI証券の強みは多岐にわたりますが、ここでは特に重要な5つのポイントを深掘りします。
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
                <h2 className="text-3xl font-bold mb-4">SBI証券の弱み・デメリット（注意点）</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  ほぼ死角がないように見えるSBI証券ですが、敢えて挙げるとすればいくつかの注意点が存在します。
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
                <h2 className="text-3xl font-bold mb-4">SBI証券の活用術と裏ワザ</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  SBI証券のメリットを最大限に引き出すための活用法をご紹介します。
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
                  SBI証券の口座開設は、スマートフォンと本人確認書類があれば、オンラインで最短5分程度で申し込みが完了します。
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
                  <CardTitle className="text-2xl font-bold text-center">まとめ：SBI証券はこんな人におすすめ！</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-center">
                    SBI証券は、その圧倒的な総合力から、<span className="font-bold text-primary">「すべての人におすすめできる証券会社」</span>と言っても過言ではありません。その中でも、特に以下のような方には最適です。
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>投資初心者の方：どの証券会社を選べば良いか分からない方。SBI証券を選んでおけば、将来的に投資スタイルが変わっても対応できます。</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>少額から投資を始めたい方：「S株」やポイント投資が便利です。</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>お得に資産形成をしたい方：クレカ積立でVポイントを貯めながら、NISAやiDeCoで着実に資産を増やしたい方。</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>アクティブに取引したい中～上級者の方：国内株式手数料0円のメリットを享受したいデイトレーダー。</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>幅広い商品に投資したい方：米国株だけでなく、中国株やアセアン株などにも分散投資したい方。</span>
                    </li>
                  </ul>
                  <p className="text-muted-foreground text-center font-semibold">
                    結論として、SBI証券は特定の分野に特化しているのではなく、あらゆる投資家のニーズに高いレベルで応えることができる「万能型」の証券会社です。これから投資を始める第一歩の口座としても、経験者が腰を据えて利用するメイン口座としても、最高の選択肢の一つであり続けるでしょう。
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
                  <h2 className="text-2xl font-bold mb-4">SBI証券の公式サイトへ</h2>
                  <p className="text-muted-foreground mb-6">
                    詳しい情報や口座開設については、SBI証券の公式サイトをご確認ください。
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

export default SbiSecuritiesDetailPro;