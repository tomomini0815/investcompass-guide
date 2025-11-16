import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, CheckCircle, XCircle, Star, ArrowLeft, CircleCheck, CircleX, Info } from "lucide-react";

const MonexSecuritiesDetailPro = () => {
  // マネックス証券の基本情報
  const companyInfo = {
    name: "マネックス証券",
    fullName: "マネックス証券株式会社",
    established: "1999年4月",
    parentCompany: "マネックスグループ株式会社",
    url: "https://www.monex.co.jp/",
    rating: 4,
  };

  // 基本情報
  const basicInfo = [
    { label: "商号", value: "マネックス証券株式会社" },
    { label: "設立", value: "1999年4月" },
    { label: "本社所在地", value: "東京都港区赤坂" },
    { label: "親会社", value: "マネックスグループ株式会社" },
    { label: "口座開設数", value: "220万口座超（2023年12月時点）" },
    { label: "主要株主", value: "マネックスグループ、株式会社NTTドコモ" }
  ];

  // 手数料情報
  const fees = [
    {
      plan: "国内株式現物取引",
      description: "約定代金5万円まで55円",
      fee: "55円〜",
      details: "1日の約定代金合計100万円まで手数料無料というプランもありますが、完全に無料ではないため、国内株を頻繁に売買する投資家にとってはコスト面で不利になる可能性があります。"
    },
    {
      plan: "米国株式・海外ETF",
      description: "業界最多クラスの取扱銘柄数",
      fee: "0銭",
      details: "買付時の為替手数料（買付時）が0銭。売却時（ドル→円）には1ドルあたり25銭かかります。"
    },
    {
      plan: "投資信託",
      description: "すべて購入時手数料無料",
      fee: "0円",
      details: "取扱本数1,500本以上すべてが購入時手数料無料（ノーロード）。"
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
      title: "米国株投資の圧倒的な強み",
      description: "業界最多クラスの取扱銘柄数（6,000銘柄以上）、24時間取引可能、買付時の為替手数料が無料。",
      icon: "🇺🇸"
    },
    {
      title: "最強の銘柄分析ツール「銘柄スカウター」",
      description: "長期の業績推移をビジュアル表示、3ヵ月ごとの四半期業績も網羅、豊富な指標と分かりやすい解説。",
      icon: "📊"
    },
    {
      title: "プロ仕様の取引ツール「トレードステーション」",
      description: "高度なチャート分析機能、独自のプログラミング言語「EasyLanguage」、レーダースクリーンとマトリックス。",
      icon: "💻"
    },
    {
      title: "投資教育コンテンツの充実",
      description: "著名アナリストによるレポート、マネックスユニバーシティ、IPOの完全平等抽選。",
      icon: "📚"
    },
    {
      title: "dポイントとの連携開始",
      description: "2024年からのNTTドコモとの提携により、dポイントとの連携が始まりました。",
      icon: "📱"
    }
  ];

  // 強み詳細
  const strengths = [
    {
      title: "米国株投資の圧倒的な強み",
      content: [
        "業界最多クラスの取扱銘柄数：取扱銘柄数は6,000銘柄以上。ニューヨーク証券取引所（NYSE）とNASDAQに上場する主要銘柄はもちろんのこと、他の証券会社では扱っていないような中小型株やIPO直後の銘柄まで幅広くカバーしています。",
        "24時間取引可能：通常の米国市場の取引時間（日本時間 22:30～翌5:00、サマータイム）に加え、プレマーケット（21:00～22:30）とアフターマーケット（5:00～9:00）にも対応。合計で日本時間の夜9時から翌朝9時までの12時間、取引が可能です。",
        "買付時の為替手数料が無料：円からドルに両替して米国株を購入する際の為替手数料（買付時）が0銭です。売却時（ドル→円）には1ドルあたり25銭かかりますが、買い付けコストを抑えられるのは嬉しいポイントです。",
        "「銘柄スカウター米国株」の存在：このツールがあるだけでもマネックス証券で米国株を取引する価値があります。",
        "中国株も充実：香港市場に上場する銘柄（H株、レッドチップなど）を約2,400銘柄取り扱っており、米国株だけでなく中国株にも強いのが特徴です。"
      ]
    },
    {
      title: "最強の銘柄分析ツール「銘柄スカウター」",
      content: [
        "長期の業績推移をビジュアル表示：企業の売上高、営業利益、EPS（1株あたり利益）などの業績データを、最大で過去10期分以上、美しいグラフで視覚的に確認できます。",
        "3ヵ月ごとの四半期業績も網羅：通期業績だけでなく、四半期ごとの業績推移も見ることができます。これにより、「前年同期比で成長が加速しているか」「季節性はあるか」といった、より詳細な分析が可能になります。",
        "豊富な指標と分かりやすい解説：PER、PBR、ROEといった基本的な指標はもちろん、EV/EBITDA倍率、PSRなど、プロが使うような指標も網羅。それぞれの指標が何を意味するのか、分かりやすい解説も付いているため、初心者でも学びながら分析を進められます。",
        "米国株・中国株にも対応：この強力なツールが、日本株だけでなく米国株、中国株にも対応している点が驚異的です。「銘柄スカウター米国株」では、GAFAMのような巨大企業から中小型グロース株まで、同様の详细な分析が可能です。"
      ]
    },
    {
      title: "プロ仕様の取引ツール「トレードステーション」",
      content: [
        "高度なチャート分析機能：100種類以上のテクニカル指標を搭載。複数のチャートを同期させて異なる時間軸で分析したり、自分だけのオリジナル指標を作成したりすることも可能です。",
        "独自のプログラミング言語「EasyLanguage」：簡単なプログラムを書くことで、自分だけの売買戦略をシステム化し、過去のデータでその有効性を検証（バックテスト）したり、自動売買を行ったりすることができます。",
        "レーダースクリーンとマトリックス：「レーダースクリーン」は、数百銘柄をリアルタイムで監視し、自定义した条件に合致した銘柄を瞬時に見つけ出す機能です。「マトリックス」は、板情報とチャート、発注画面が一体となったツールで、マウス操作だけで直感的に高速発注が可能です。"
      ]
    },
    {
      title: "投資教育コンテンツの充実",
      content: [
        "著名アナリストによるレポート：チーフ・ストラテジストの広木隆氏や、チーフ・FXコンサルタントの吉田恒氏など、メディアでも著名な専門家による質の高いレポートを毎日配信。",
        "マネックスユニバーシティ：投資初心者向けの基礎知識から、上級者向けの専門的なテーマまで、幅広いオンラインセミナーを頻繁に開催しています。ライブセミナーではリアルタイムで質問も可能です。",
        "IPOの完全平等抽選：IPOの配分においては、コンピュータによる完全平等抽選を導入しています。これは、申込者一人ひとりが資金量に関係なく、平等に1票として扱われる方식です。"
      ]
    },
    {
      title: "dポイントとの連携開始",
      content: [
        "2024年からのNTTドコモとの提携により、dポイントとの連携が始まりました。取引に応じてdポイントが貯まるようになり、貯まったdポイントを株式や投資信託の購入に利用できる「dポイント投資」も提供されています。"
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
      title: "米国株投資のメイン口座として活用する",
      content: "米国株に投資するなら、マネックス証券は絶対に外せません。豊富な銘柄数と「銘柄スカウター米国株」を駆使して、有望な成長株を発掘しましょう。SBI証券や楽天証券を国内株や投信積立の口座とし、マネックス証券を米国株専用の分析・取引口座として使い分けるのが賢い戦略です。"
    },
    {
      title: "「銘柄スカウター」を徹底的に使い倒す",
      content: "日本株に投資する場合でも、まずは「銘柄スカウター」で企業のファンダメンタルズを徹底的に分析する習慣をつけましょう。「10年スクリーニング」機能を使えば、「過去10年、毎年増収増益を続けている企業」といった、長期的な成長株を簡単に見つけ出すことができます。"
    },
    {
      title: "IPOは必ず申し込む",
      content: "完全平等抽選なので、資金力に関係なく誰にでもチャンスがあります。宝くじ感覚で、IPOのブックビルディングには毎回欠かさず参加しましょう。"
    },
    {
      title: "ドコモユーザーはdポイント連携を",
      content: "ドコモユーザーであれば、dポイント連携を設定しましょう。貯まったdポイントを投資に回すことで、無理なく投资を始めるきっかけになります。"
    }
  ];

  // 口座開設方法
  const accountOpeningSteps = [
    "公式サイトにアクセスし、「口座開設」ボタンをクリック。",
    "メールアドレスを登録し、基本情報を入力。",
    "本人確認：「オンライン口座開設（eKYC）」を選択し、スマホで本人確認書類（マイナンバーカード or 運転免許証等）と顔写真を撮影。",
    "審査完了後、IDとパスワードが届く：最短で翌営業日には取引を開始できます。"
  ];

  // よくある質問
  const faqs = [
    {
      question: "投資初心者ですが、マネックス証券は難しいですか？",
      answer: "「銘柄スカウター」などのツールは情報量が多いですが、非常に分かりやすく設計されています。むしろ、这些ツールを使いながら企業分析の方法を学ぶことで、初心者を最速で卒業できる可能性があります。投資教育コンテンツも充実しているので、学びながら実践したい初心者には最適です。"
    },
    {
      question: "「トレードステーション」は使った方が良いですか？",
      answer: "短期売買を頻繁に行うデイトレーダーや、システムトレードに挑戦したい上級者向けのツールです。長期投資や積立投資がメインの方であれば、通常のブラウザ版ツールや「銘柄スカウター」だけで十分です。"
    },
    {
      question: "ドコモとの提携で何が変わりましたか？",
      answer: "2024年から、dポイントが貯まる・使えるようになりました。今後は、d払いアプリとの連携や、ドコモショップでのサポートなど、さらなるサービス拡充が期待されています。ドコモユーザーにとっては利便性が大きく向上しました。"
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
                    マネックス証券の概要
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <p className="mb-4">
                    マネックス証券は、1999年にソニー出身の松本大氏とゴールドマン・サックス出身の者が中心となり設立された、ネット証券の草分け的存在です。SBI証券や楽天証券のような巨大な経済圏を持たない独立系の証券会社でありながら、<span className="font-bold text-primary">「米国株投資のパイオニア」としての地位と、「ユニークで高性能な分析ツール」</span>を武器に、確固たる存在感を放っています。
                  </p>
                  <p className="mb-4">
                    「個人のための真のファイナンシャル・プラットフォームを創造する」という創業以来の理念のもと、投资教育コンテンツの充実にも力を入れており、単순히取引の場を提供するだけでなく、投資家を育てることにも注力しているのが特徴です。2024年にはNTTドコモとの資本業務提携を発表し、ドコモ経済圏との連携による新たな成長ステージへの期待が高まっています。
                  </p>
                  <p>
                    マネックス証券を一言で表すなら、「知的好奇心旺盛な投資家のための分析工房」。特に米国株に深く投資したい人や、徹底的な企業分析を通じて自分だけの有望銘柄を発掘したい人にとって、これ以上ないパートナーとなる証券会社です。
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
                <h2 className="text-3xl font-bold mb-4">マネックス証券の基本情報</h2>
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
                  マネックス証券の手数料体系についてご紹介します。
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
                  マネックス証券はすべてのNISA制度に対応しており、お得に資産運用できます。
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
                  マネックス証券が選ばれる理由をご紹介します。
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
                <h2 className="text-3xl font-bold mb-4">マネックス証券の強み・メリット（徹底解説）</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  マネックス証券の独自性は、他の大手ネット証券とは一線を画す魅力に溢れています。
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
                <h2 className="text-3xl font-bold mb-4">マネックス証券の特徴と留意点</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  マネックス証券の特徴をより深く理解するために、いくつかの留意点をご紹介します。
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
                <h2 className="text-3xl font-bold mb-4">マネックス証券の活用術と裏ワザ</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  マネックス証券を最大限に活用するためのポイントです。
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
                  口座開設はオンラインで完結します。
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
                  <CardTitle className="text-2xl font-bold text-center">まとめ：マネックス証券はこんな人におすすめ！</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-center">
                    マネックス証券は、万人受けするタイプの証券会社ではありませんが、特定のニーズを持つ投資家にとってはかけがえのない存在です。
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>米国株に本格的に取り組みたい方：GAFAMだけでなく、将来のテンバガー候補となる中小型株まで幅広く投资したい方。豊富な銘柄数と時間外取引が魅力です。</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>企業分析が好きな「探求型」の投資家：「銘柄スカウター」を使って、財務諸表を読み解き、自分だけの有望銘柄を発掘するプロセスを楽しめる方。</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>システムトレードに挑戦したい上級者：「トレードステーション」を使って、独自の売買ロジックを構築・検証したい方。</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>IPOで一攫千金を狙いたい方：資金力に自信がなくても、「完全平等抽選」で人気IPOの当選を狙いたい方。</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>ドコモユーザーの方：dポイントを貯めながら、お得に投資を始めたい方。</span>
                    </li>
                  </ul>
                  <p className="text-muted-foreground text-center font-semibold">
                    マネックス証券は、ただ取引手数料の安さを追求するのではなく、投資家が「より良い判断を下すための武器」を提供することに価値を見出している証券会社です。知的好奇心を満たし、投資家として成長する喜びを感じたいのであれば、マネックス証券は最高の学び舎であり、最強のパートナーとなるでしょう。
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
                  <h2 className="text-2xl font-bold mb-4">マネックス証券の公式サイトへ</h2>
                  <p className="text-muted-foreground mb-6">
                    詳しい情報や口座開設については、マネックス証券の公式サイトをご確認ください。
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

export default MonexSecuritiesDetailPro;