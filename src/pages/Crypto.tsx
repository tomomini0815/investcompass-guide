import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Coins, Calculator, Lightbulb, Users, Award, BarChart3 } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Crypto = () => {
  // 暗号資産記事
  const articles = [
    {
      id: "crypto-basics",
      title: "暗号資産の基本と仕組み",
      excerpt: "暗号資産とは何か、基本的な仕組みと特徴について解説します。",
      content: `
      <h3 className="text-xl font-bold mb-4 mt-6">暗号資産とは？</h3>
      <p className="mb-6 leading-relaxed">暗号資産とは、インターネット上で利用されるデジタルな通貨の総称です。中央銀行や政府などの機関に発行・管理されず、暗号技術によって発行・管理される金融資産です。</p>
      
      <h3 className="text-xl font-bold mb-4 mt-8">ブロックチェーン技術</h3>
      <p className="mb-6 leading-relaxed">暗号資産の基盤となるのがブロックチェーン技術です。これは、取引記録を分散型ネットワークで管理する技術で、改ざんが困難で透明性が高いという特徴があります。</p>
      
      <h3 className="text-xl font-bold mb-4 mt-8">暗号資産の特徴</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-blue-50 p-6 rounded-xl hover:bg-blue-100/50 transition-all duration-300 shadow-sm hover:shadow-md">
          <h4 className="font-bold text-blue-800 mb-3 text-lg">メリット</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>国際送金が高速・低コスト</li>
            <li>24時間365日取引可能</li>
            <li>中央集権的な管理がない</li>
            <li>透明性が高い</li>
            <li>少額から投資可能</li>
          </ul>
        </div>
        <div className="bg-red-50 p-6 rounded-xl hover:bg-red-100/50 transition-all duration-300 shadow-sm hover:shadow-md">
          <h4 className="font-bold text-red-800 mb-3 text-lg">デメリット</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>価格変動が非常に大きい</li>
            <li>法的規制が未整備</li>
            <li>セキュリティリスク</li>
            <li>投資家保護が不十分</li>
            <li>詐欺や不正取引のリスク</li>
          </ul>
        </div>
      </div>
      
      <h3 className="text-xl font-bold mb-4 mt-8">主要な暗号資産</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="border border-gray-200 rounded-xl p-6 hover:bg-gray-50/50 transition-all duration-300 shadow-sm hover:shadow-md">
          <h4 className="font-bold text-lg mb-3">ビットコイン (BTC)</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">最初の暗号資産で、デジタルゴールドと呼ばれる。価値保存の手段として注目されている。</p>
        </div>
        <div className="border border-gray-200 rounded-xl p-6 hover:bg-gray-50/50 transition-all duration-300 shadow-sm hover:shadow-md">
          <h4 className="font-bold text-lg mb-3">イーサリアム (ETH)</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">スマートコントラクト機能を持つプラットフォーム。DeFiやNFTの基盤となる。</p>
        </div>
        <div className="border border-gray-200 rounded-xl p-6 hover:bg-gray-50/50 transition-all duration-300 shadow-sm hover:shadow-md">
          <h4 className="font-bold text-lg mb-3"> Ripple (XRP)</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">銀行間の国際送金を効率化することを目的とした暗号資産。</p>
        </div>
      </div>
    `,
      readTime: "8分",
      date: "2024年10月30日",
    },
    {
      id: "how-to-buy-crypto",
      title: "暗号資産の買い方と取引所の選び方",
      excerpt: "暗号資産を購入する手順と、安全な取引所の選び方を詳しく説明します。",
      content: `
      <h3 className="text-xl font-bold mb-4 mt-6">暗号資産の購入手順</h3>
      <ol className="list-decimal pl-5 mb-6 space-y-3">
        <li>信頼できる暗号資産取引所を選ぶ</li>
        <li>取引所にアカウント登録する</li>
        <li>本人確認（KYC）を行う</li>
        <li>銀行口座から取引所に日本円を入金</li>
        <li>購入したい暗号資産を選択して注文</li>
        <li>ウォレットに移動して安全に保管</li>
      </ol>
      
      <h3 className="text-xl font-bold mb-4 mt-8">取引所の選び方</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-green-50 p-6 rounded-xl hover:bg-green-100/50 transition-all duration-300 shadow-sm hover:shadow-md">
          <h4 className="font-bold text-green-800 mb-3 text-lg">チェックポイント</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>ライセンスと規制対応</li>
            <li>セキュリティ対策の充実度</li>
            <li>取扱っている暗号資産の種類</li>
            <li>手数料の安さ</li>
            <li>使いやすさとUI/UX</li>
          </ul>
        </div>
        <div className="bg-blue-50 p-6 rounded-xl hover:bg-blue-100/50 transition-all duration-300 shadow-sm hover:shadow-md">
          <h4 className="font-bold text-blue-800 mb-3 text-lg">国内主要取引所</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>bitFlyer</li>
            <li>Coinbase</li>
            <li>GMOコイン</li>
            <li>liquid（旧Quoine）</li>
            <li>BITPOINT</li>
          </ul>
        </div>
      </div>
      
      <h3 className="text-xl font-bold mb-4 mt-8">注文方法</h3>
      <div className="space-y-4 mb-8">
        <div className="hover:bg-muted/50 transition-all duration-300 p-6 rounded-xl shadow-sm hover:shadow-md">
          <h4 className="font-bold mb-2 text-lg">成行注文</h4>
          <p className="leading-relaxed">現在の市場価格で即座に約定する注文方法。手軽だが価格が不利になる可能性がある。</p>
        </div>
        <div className="hover:bg-muted/50 transition-all duration-300 p-6 rounded-xl shadow-sm hover:shadow-md">
          <h4 className="font-bold mb-2 text-lg">指値注文</h4>
          <p className="leading-relaxed">指定した価格で売買する注文方法。希望価格で約定するが、約定しないこともある。</p>
        </div>
      </div>
      
      <h3 className="text-xl font-bold mb-4 mt-8">注意点</h3>
      <ul className="list-disc pl-5 space-y-2 mb-6">
        <li>個人情報の取り扱いに注意</li>
        <li>二段階認証を設定する</li>
        <li>入出金方法と手数料を確認</li>
        <li>評判と口コミを調べる</li>
        <li>サポート体制を確認</li>
      </ul>
      
      <h3 className="text-xl font-bold mb-4 mt-8">最新の規制動向</h3>
      <p className="mb-6 hover:bg-muted/50 transition-all duration-300 p-6 rounded-xl leading-relaxed shadow-sm hover:shadow-md">日本では2017年に暗号資産交換業者法が施行され、取引所の登録制が導入されました。また、2023年には仮想通貨の支払手段としての利用が全面的に禁止されました。規制は今後も変化していく可能性があるため、最新の情報を確認することが重要です。</p>
    `,
      date: "2024年10月30日",
    },
    {
      id: "crypto-wallet",
      title: "ウォレットの種類と安全な管理方法",
      excerpt: "暗号資産を安全に保管するためのウォレットの種類と管理方法について解説します。",
      content: `
      <h3 className="text-xl font-bold mb-4 mt-6">ウォレットとは？</h3>
      <p className="mb-6 leading-relaxed">ウォレットとは、暗号資産を保管・管理するためのデジタルツールです。実際の通貨ではなく、通貨を所有していることを証明する「秘密鍵」と「公開鍵」を管理します。</p>
      
      <h3 className="text-xl font-bold mb-4 mt-8">ウォレットの種類</h3>
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full bg-white border border-gray-200 rounded-xl">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-4 px-6 border-b text-left font-semibold">種類</th>
              <th className="py-4 px-6 border-b text-left font-semibold">特徴</th>
              <th className="py-4 px-6 border-b text-left font-semibold">メリット</th>
              <th className="py-4 px-6 border-b text-left font-semibold">デメリット</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="py-4 px-6 border-b font-semibold">ホットウォレット</td>
              <td className="py-4 px-6 border-b">インターネットに接続されたウォレット</td>
              <td className="py-4 px-6 border-b">使いやすい、送受信が簡単</td>
              <td className="py-4 px-6 border-b">ハッキングリスクがある</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
              <td className="py-4 px-6 border-b font-semibold">コールドウォレット</td>
              <td className="py-4 px-6 border-b">インターネットに接続されていないウォレット</td>
              <td className="py-4 px-6 border-b">セキュリティが高い</td>
              <td className="py-4 px-6 border-b">使いにくく、コストがかかる</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <h3 className="text-xl font-bold mb-4 mt-8">安全な管理方法</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-purple-50 p-6 rounded-xl hover:bg-purple-100/50 transition-all duration-300 shadow-sm hover:shadow-md">
          <h4 className="font-bold text-purple-800 mb-3 text-lg">基本のセキュリティ</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>秘密鍵を絶対に他人に知られない</li>
            <li>公式ウォレットを使用する</li>
            <li>定期的なバックアップを取る</li>
            <li>二段階認証を設定する</li>
          </ul>
        </div>
        <div className="bg-yellow-50 p-6 rounded-xl hover:bg-yellow-100/50 transition-all duration-300 shadow-sm hover:shadow-md">
          <h4 className="font-bold text-yellow-800 mb-3 text-lg">リスク管理</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>少額ずつ分散して保有</li>
            <li>取引所に長期間預けない</li>
            <li>フィッシングサイトに注意</li>
            <li>最新のセキュリティ対策を確認</li>
          </ul>
        </div>
      </div>
      
      <h3 className="text-xl font-bold mb-4 mt-8">おすすめウォレット</h3>
      <ul className="list-disc pl-5 space-y-2 mb-6">
        <li>ハードウェアウォレット：Ledger、Trezor</li>
        <li>ソフトウェアウォレット：Electrum、MyEtherWallet</li>
        <li>モバイルウォレット：Coinomi、Edge</li>
      </ul>
      
      <h3 className="text-xl font-bold mb-4 mt-8">ウォレットの最新トレンド</h3>
      <p className="mb-6 hover:bg-muted/50 transition-all duration-300 p-6 rounded-xl leading-relaxed shadow-sm hover:shadow-md">最近では、DeFi（分散型金融）に対応したウォレットや、NFT（非代替性トークン）に対応したウォレットが増えてきています。また、ハードウェアウォレットのセキュリティ機能も向上しており、生体認証やマルチシグ機能などが搭載されるようになっています。</p>
    `,
      readTime: "7分",
      date: "2024年10月30日",
    },
    {
      id: "crypto-risk",
      title: "暗号資産投資のリスクと注意点",
      excerpt: "暗号資産投資に伴うリスクと、安全な投資を行うための注意点について解説します。",
      content: `
      <h3 className="text-xl font-bold mb-4 mt-6">暗号資産投資の主なリスク</h3>
      <div className="space-y-6 mb-8">
        <div className="border-l-4 border-red-500 pl-6 hover:bg-red-50/50 transition-all duration-300 p-6 rounded-r-xl shadow-sm hover:shadow-md">
          <h4 className="font-bold text-red-700 mb-3 text-lg">1. 価格変動リスク</h4>
          <p className="leading-relaxed">暗号資産は価格変動が非常に大きく、短期間で大きな損益が出る可能性があります。デリバティブ取引ではさらにリスクが高まります。</p>
        </div>
        
        <div className="border-l-4 border-orange-500 pl-6 hover:bg-orange-50/50 transition-all duration-300 p-6 rounded-r-xl shadow-sm hover:shadow-md">
          <h4 className="font-bold text-orange-700 mb-3 text-lg">2. セキュリティリスク</h4>
          <p className="leading-relaxed">ハッキング、フィッシング、マルウェアなどのセキュリティリスクがあります。ウォレットや取引所の管理が重要です。</p>
        </div>
        
        <div className="border-l-4 border-yellow-500 pl-6 hover:bg-yellow-50/50 transition-all duration-300 p-6 rounded-r-xl shadow-sm hover:shadow-md">
          <h4 className="font-bold text-yellow-700 mb-3 text-lg">3. 規制リスク</h4>
          <p className="leading-relaxed">政府の規制変更や法整備の遅れにより、価値が大きく変動する可能性があります。</p>
        </div>
        
        <div className="border-l-4 border-green-500 pl-6 hover:bg-green-50/50 transition-all duration-300 p-6 rounded-r-xl shadow-sm hover:shadow-md">
          <h4 className="font-bold text-green-700 mb-3 text-lg">4. 流動性リスク</h4>
          <p className="leading-relaxed">マイナーな暗号資産は売買の際に価格が大きく変動したり、売買が成立しないリスクがあります。</p>
        </div>
      </div>
      
      <h3 className="text-xl font-bold mb-4 mt-8">安全な投資のための注意点</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-red-50 p-6 rounded-xl hover:bg-red-100/50 transition-all duration-300 shadow-sm hover:shadow-md">
          <h4 className="font-bold text-red-800 mb-3 text-lg">絶対に避けること</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>全財産を暗号資産に投資しない</li>
            <li>借金してまで投資しない</li>
            <li>レバレッジ取引を避ける</li>
            <li>怪しいプロジェクトやポンジスキームに騙されない</li>
          </ul>
        </div>
        <div className="bg-green-50 p-6 rounded-xl hover:bg-green-100/50 transition-all duration-300 shadow-sm hover:shadow-md">
          <h4 className="font-bold text-green-800 mb-3 text-lg">守るべき原則</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>リスク許容度を明確にする</li>
            <li>分散投資を行う</li>
            <li>長期的な視点を持つ</li>
            <li>最新情報を収集する</li>
          </ul>
        </div>
      </div>
      
      <h3 className="text-xl font-bold mb-4 mt-8">詐欺と不正取引の識別</h3>
      <ul className="list-disc pl-5 space-y-2 mb-6">
        <li>高すぎるリターンを約束するプロジェクト</li>
        <li>匿名性の高い運営チーム</li>
        <li>ソースコードが公開されていない</li>
        <li>過剰なマーケティングと宣伝</li>
        <li>評判が極端に良いまたは悪い</li>
      </ul>
      
      <h3 className="text-xl font-bold mb-4 mt-8">リスク管理戦略</h3>
      <ul className="list-disc pl-5 space-y-2 mb-6">
        <li>損切りラインを事前に設定</li>
        <li>利益確定のタイミングを決める</li>
        <li>定期的なポートフォリオの見直し</li>
        <li>投資額の記録と分析</li>
      </ul>
      
      <h3 className="text-xl font-bold mb-4 mt-8">2024年の最新リスク動向</h3>
      <p className="mb-6 hover:bg-muted/50 transition-all duration-300 p-6 rounded-xl leading-relaxed shadow-sm hover:shadow-md">最近では、AI関連の暗号資産への投資が増加していますが、その一方で詐欺プロジェクトも増加傾向にあります。また、各国の中央銀行がCBDC（中央銀行デジタル通貨）の導入を検討する中で、既存の暗号資産への規制が強化される可能性もあります。</p>
    `,
      readTime: "10分",
      date: "2024年10月30日",
    },
  ];

  // 関連ツール
  const tools = [
    {
      title: "暗号資産リターン計算機",
      description: "暗号資産投資のリターンとリスクをシミュレーション",
      href: "/tools/crypto-return",
      icon: Calculator,
    },
    {
      title: "ポートフォリオ分析ツール",
      description: "暗号資産ポートフォリオの分析とリスク評価",
      href: "/tools/crypto-portfolio",
      icon: BarChart3,
    },
  ];

  // 目次項目
  const tableOfContents = [
    { id: "crypto-basics", title: "暗号資産の基本と仕組み" },
    { id: "how-to-buy-crypto", title: "暗号資産の買い方と取引所の選び方" },
    { id: "crypto-wallet", title: "ウォレットの種類と安全な管理方法" },
    { id: "crypto-risk", title: "暗号資産投資のリスクと注意点" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>暗号資産投資ガイド | ビットコイン・イーサリアムなどの基礎と取引方法</title>
        <meta name="description" content="暗号資産（ビットコイン・イーサリアムなど）の基本から購入方法、ウォレットの管理、リスクと注意点まで徹底解説。安全な暗号資産投資を始めましょう。" />
        <meta name="keywords" content="暗号資産,ビットコイン,イーサリアム,ブロックチェーン,取引所,ウォレット,投資,リスク管理" />
        <link rel="canonical" href="https://www.toushi-navi.com/crypto" />
        
        {/* Open Graph */}
        <meta property="og:title" content="暗号資産投資ガイド | ビットコイン・イーサリアムなどの基礎と取引方法" />
        <meta property="og:description" content="暗号資産（ビットコイン・イーサリアムなど）の基本から購入方法、ウォレットの管理、リスクと注意点まで徹底解説。安全な暗号資産投資を始めましょう。" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.toushi-navi.com/crypto" />
        <meta property="og:site_name" content="投資総合ガイド" />
        <meta property="og:locale" content="ja_JP" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@toushi_navi" />
        
        {/* 構造化マークアップ */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "暗号資産投資ガイド | ビットコイン・イーサリアムなどの基礎と取引方法",
            "description": "暗号資産（ビットコイン・イーサリアムなど）の基本から購入方法、ウォレットの管理、リスクと注意点まで徹底解説。安全な暗号資産投資を始めましょう。",
            "author": {
              "@type": "Organization",
              "name": "投資総合ガイド"
            },
            "publisher": {
              "@type": "Organization",
              "name": "投資総合ガイド",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.toushi-navi.com/logo.png"
              }
            },
            "datePublished": "2024-10-30",
            "dateModified": "2024-10-30",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.toushi-navi.com/crypto"
            }
          })}
        </script>
      </Helmet>
      
      <Header />
      
      <main className="flex-grow">
        {/* Breadcrumb */}
        <div className="bg-gradient-to-r from-muted/50 to-muted/30 py-4 border-b">
          <div className="container mx-auto px-8">
            <Link 
              to="/" 
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors group"
            >
              <ArrowLeft className="h-4 w-4 mr-1 group-hover:-translate-x-1 transition-transform" />
              トップページに戻る
            </Link>
          </div>
        </div>

        {/* ヒーローセクション */}
        <section className="relative py-20 container mx-auto px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-accent/5 animate-fade-in" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <Badge variant="secondary" className="mb-6 px-6 py-2 text-sm font-semibold animate-fade-in hover:scale-105 transition-transform">
              投資の基礎知識
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent animate-fade-in">
              暗号資産投資ガイド
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
              ビットコイン・イーサリアムなどの暗号資産で、未来の資産形成を始めましょう
            </p>
          </div>
        </section>

        {/* 目次セクション */}
        <section className="py-4 bg-gradient-to-b from-muted/30 to-background border-b">
          <div className="container mx-auto px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="border-2 hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Coins className="h-5 w-5 text-primary" />
                    目次
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {tableOfContents.map((item, index) => (
                      <div key={item.id} className="flex items-start gap-2 p-1 rounded hover:bg-muted/50 transition-colors">
                        <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                          {index + 1}
                        </span>
                        <a 
                          href={`#${item.id}`} 
                          className="text-base text-primary hover:text-secondary hover:underline transition-colors"
                        >
                          {item.title}
                        </a>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 記事詳細セクション */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">暗号資産投資ガイド</h2>
              
              {/* 記事1: 暗号資産の基本と仕組み */}
              <Card id="crypto-basics" className="mb-16 overflow-hidden border-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-card/50">
                <CardHeader>
                  <CardTitle className="text-2xl">暗号資産の基本と仕組み</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose max-w-none">
                    <h3 className="text-xl font-bold mb-4 mt-6">暗号資産とは？</h3>
                    <p className="mb-6 leading-relaxed">暗号資産とは、インターネット上で利用されるデジタルな通貨の総称です。中央銀行や政府などの機関に発行・管理されず、暗号技術によって発行・管理される金融資産です。</p>
                    
                    <h3 className="text-xl font-bold mb-4 mt-8">ブロックチェーン技術</h3>
                    <p className="mb-6 leading-relaxed">暗号資産の基盤となるのがブロックチェーン技術です。これは、取引記録を分散型ネットワークで管理する技術で、改ざんが困難で透明性が高いという特徴があります。</p>
                    
                    <h3 className="text-xl font-bold mb-4 mt-8">暗号資産の特徴</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-blue-50 p-6 rounded-xl hover:bg-blue-100/50 transition-all duration-300 shadow-sm hover:shadow-md">
                        <h4 className="font-bold text-blue-800 mb-3 text-lg">メリット</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>国際送金が高速・低コスト</li>
                          <li>24時間365日取引可能</li>
                          <li>中央集権的な管理がない</li>
                          <li>透明性が高い</li>
                          <li>少額から投資可能</li>
                        </ul>
                      </div>
                      <div className="bg-red-50 p-6 rounded-xl hover:bg-red-100/50 transition-all duration-300 shadow-sm hover:shadow-md">
                        <h4 className="font-bold text-red-800 mb-3 text-lg">デメリット</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>価格変動が非常に大きい</li>
                          <li>法的規制が未整備</li>
                          <li>セキュリティリスク</li>
                          <li>投資家保護が不十分</li>
                          <li>詐欺や不正取引のリスク</li>
                        </ul>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 mt-8">主要な暗号資産</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      <div className="border border-gray-200 rounded-xl p-6 hover:bg-gray-50/50 transition-all duration-300 shadow-sm hover:shadow-md">
                        <h4 className="font-bold text-lg mb-3">ビットコイン (BTC)</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">最初の暗号資産で、デジタルゴールドと呼ばれる。価値保存の手段として注目されている。</p>
                      </div>
                      <div className="border border-gray-200 rounded-xl p-6 hover:bg-gray-50/50 transition-all duration-300 shadow-sm hover:shadow-md">
                        <h4 className="font-bold text-lg mb-3">イーサリアム (ETH)</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">スマートコントラクト機能を持つプラットフォーム。DeFiやNFTの基盤となる。</p>
                      </div>
                      <div className="border border-gray-200 rounded-xl p-6 hover:bg-gray-50/50 transition-all duration-300 shadow-sm hover:shadow-md">
                        <h4 className="font-bold text-lg mb-3"> Ripple (XRP)</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">銀行間の国際送金を効率化することを目的とした暗号資産。</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 記事2: 暗号資産の買い方と取引所の選び方 */}
              <Card id="how-to-buy-crypto" className="mb-16 overflow-hidden border-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-card/50">
                <CardHeader>
                  <CardTitle className="text-2xl">暗号資産の買い方と取引所の選び方</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose max-w-none">
                    <h3 className="text-xl font-bold mb-4 mt-6">暗号資産の購入手順</h3>
                    <ol className="list-decimal pl-5 mb-6 space-y-3">
                      <li>信頼できる暗号資産取引所を選ぶ</li>
                      <li>取引所にアカウント登録する</li>
                      <li>本人確認（KYC）を行う</li>
                      <li>銀行口座から取引所に日本円を入金</li>
                      <li>購入したい暗号資産を選択して注文</li>
                      <li>ウォレットに移動して安全に保管</li>
                    </ol>
                    
                    <h3 className="text-xl font-bold mb-4 mt-8">取引所の選び方</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-green-50 p-6 rounded-xl hover:bg-green-100/50 transition-all duration-300 shadow-sm hover:shadow-md">
                        <h4 className="font-bold text-green-800 mb-3 text-lg">チェックポイント</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>ライセンスと規制対応</li>
                          <li>セキュリティ対策の充実度</li>
                          <li>取扱っている暗号資産の種類</li>
                          <li>手数料の安さ</li>
                          <li>使いやすさとUI/UX</li>
                        </ul>
                      </div>
                      <div className="bg-blue-50 p-6 rounded-xl hover:bg-blue-100/50 transition-all duration-300 shadow-sm hover:shadow-md">
                        <h4 className="font-bold text-blue-800 mb-3 text-lg">国内主要取引所</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>bitFlyer</li>
                          <li>Coinbase</li>
                          <li>GMOコイン</li>
                          <li>liquid（旧Quoine）</li>
                          <li>BITPOINT</li>
                        </ul>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 mt-8">注文方法</h3>
                    <div className="space-y-4 mb-8">
                      <div className="hover:bg-muted/50 transition-all duration-300 p-6 rounded-xl shadow-sm hover:shadow-md">
                        <h4 className="font-bold mb-2 text-lg">成行注文</h4>
                        <p className="leading-relaxed">現在の市場価格で即座に約定する注文方法。手軽だが価格が不利になる可能性がある。</p>
                      </div>
                      <div className="hover:bg-muted/50 transition-all duration-300 p-6 rounded-xl shadow-sm hover:shadow-md">
                        <h4 className="font-bold mb-2 text-lg">指値注文</h4>
                        <p className="leading-relaxed">指定した価格で売買する注文方法。希望価格で約定するが、約定しないこともある。</p>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 mt-8">注意点</h3>
                    <ul className="list-disc pl-5 space-y-2 mb-6">
                      <li>個人情報の取り扱いに注意</li>
                      <li>二段階認証を設定する</li>
                      <li>入出金方法と手数料を確認</li>
                      <li>評判と口コミを調べる</li>
                      <li>サポート体制を確認</li>
                    </ul>
                    
                    <h3 className="text-xl font-bold mb-4 mt-8">最新の規制動向</h3>
                    <p className="mb-6 hover:bg-muted/50 transition-all duration-300 p-6 rounded-xl leading-relaxed shadow-sm hover:shadow-md">日本では2017年に暗号資産交換業者法が施行され、取引所の登録制が導入されました。また、2023年には仮想通貨の支払手段としての利用が全面的に禁止されました。規制は今後も変化していく可能性があるため、最新の情報を確認することが重要です。</p>
                  </div>
                </CardContent>
              </Card>

              {/* 記事3: ウォレットの種類と安全な管理方法 */}
              <Card id="crypto-wallet" className="mb-16 overflow-hidden border-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-card/50">
                <CardHeader>
                  <CardTitle className="text-2xl">ウォレットの種類と安全な管理方法</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose max-w-none">
                    <h3 className="text-xl font-bold mb-4 mt-6">ウォレットとは？</h3>
                    <p className="mb-6 leading-relaxed">ウォレットとは、暗号資産を保管・管理するためのデジタルツールです。実際の通貨ではなく、通貨を所有していることを証明する「秘密鍵」と「公開鍵」を管理します。</p>
                    
                    <h3 className="text-xl font-bold mb-4 mt-8">ウォレットの種類</h3>
                    <div className="overflow-x-auto mb-8">
                      <table className="min-w-full bg-white border border-gray-200 rounded-xl">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="py-4 px-6 border-b text-left font-semibold">種類</th>
                            <th className="py-4 px-6 border-b text-left font-semibold">特徴</th>
                            <th className="py-4 px-6 border-b text-left font-semibold">メリット</th>
                            <th className="py-4 px-6 border-b text-left font-semibold">デメリット</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="hover:bg-gray-50 transition-colors">
                            <td className="py-4 px-6 border-b font-semibold">ホットウォレット</td>
                            <td className="py-4 px-6 border-b">インターネットに接続されたウォレット</td>
                            <td className="py-4 px-6 border-b">使いやすい、送受信が簡単</td>
                            <td className="py-4 px-6 border-b">ハッキングリスクがある</td>
                          </tr>
                          <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                            <td className="py-4 px-6 border-b font-semibold">コールドウォレット</td>
                            <td className="py-4 px-6 border-b">インターネットに接続されていないウォレット</td>
                            <td className="py-4 px-6 border-b">セキュリティが高い</td>
                            <td className="py-4 px-6 border-b">使いにくく、コストがかかる</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 mt-8">安全な管理方法</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-purple-50 p-6 rounded-xl hover:bg-purple-100/50 transition-all duration-300 shadow-sm hover:shadow-md">
                        <h4 className="font-bold text-purple-800 mb-3 text-lg">基本のセキュリティ</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>秘密鍵を絶対に他人に知られない</li>
                          <li>公式ウォレットを使用する</li>
                          <li>定期的なバックアップを取る</li>
                          <li>二段階認証を設定する</li>
                        </ul>
                      </div>
                      <div className="bg-yellow-50 p-6 rounded-xl hover:bg-yellow-100/50 transition-all duration-300 shadow-sm hover:shadow-md">
                        <h4 className="font-bold text-yellow-800 mb-3 text-lg">リスク管理</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>少額ずつ分散して保有</li>
                          <li>取引所に長期間預けない</li>
                          <li>フィッシングサイトに注意</li>
                          <li>最新のセキュリティ対策を確認</li>
                        </ul>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 mt-8">おすすめウォレット</h3>
                    <ul className="list-disc pl-5 space-y-2 mb-6">
                      <li>ハードウェアウォレット：Ledger、Trezor</li>
                      <li>ソフトウェアウォレット：Electrum、MyEtherWallet</li>
                      <li>モバイルウォレット：Coinomi、Edge</li>
                    </ul>
                    
                    <h3 className="text-xl font-bold mb-4 mt-8">ウォレットの最新トレンド</h3>
                    <p className="mb-6 hover:bg-muted/50 transition-all duration-300 p-6 rounded-xl leading-relaxed shadow-sm hover:shadow-md">最近では、DeFi（分散型金融）に対応したウォレットや、NFT（非代替性トークン）に対応したウォレットが増えてきています。また、ハードウェアウォレットのセキュリティ機能も向上しており、生体認証やマルチシグ機能などが搭載されるようになっています。</p>
                  </div>
                </CardContent>
              </Card>

              {/* 記事4: 暗号資産投資のリスクと注意点 */}
              <Card id="crypto-risk" className="mb-16 overflow-hidden border-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-card/50">
                <CardHeader>
                  <CardTitle className="text-2xl">暗号資産投資のリスクと注意点</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose max-w-none">
                    <h3 className="text-xl font-bold mb-4 mt-6">暗号資産投資の主なリスク</h3>
                    <div className="space-y-6 mb-8">
                      <div className="border-l-4 border-red-500 pl-6 hover:bg-red-50/50 transition-all duration-300 p-6 rounded-r-xl shadow-sm hover:shadow-md">
                        <h4 className="font-bold text-red-700 mb-3 text-lg">1. 価格変動リスク</h4>
                        <p className="leading-relaxed">暗号資産は価格変動が非常に大きく、短期間で大きな損益が出る可能性があります。デリバティブ取引ではさらにリスクが高まります。</p>
                      </div>
                      
                      <div className="border-l-4 border-orange-500 pl-6 hover:bg-orange-50/50 transition-all duration-300 p-6 rounded-r-xl shadow-sm hover:shadow-md">
                        <h4 className="font-bold text-orange-700 mb-3 text-lg">2. セキュリティリスク</h4>
                        <p className="leading-relaxed">ハッキング、フィッシング、マルウェアなどのセキュリティリスクがあります。ウォレットや取引所の管理が重要です。</p>
                      </div>
                      
                      <div className="border-l-4 border-yellow-500 pl-6 hover:bg-yellow-50/50 transition-all duration-300 p-6 rounded-r-xl shadow-sm hover:shadow-md">
                        <h4 className="font-bold text-yellow-700 mb-3 text-lg">3. 規制リスク</h4>
                        <p className="leading-relaxed">政府の規制変更や法整備の遅れにより、価値が大きく変動する可能性があります。</p>
                      </div>
                      
                      <div className="border-l-4 border-green-500 pl-6 hover:bg-green-50/50 transition-all duration-300 p-6 rounded-r-xl shadow-sm hover:shadow-md">
                        <h4 className="font-bold text-green-700 mb-3 text-lg">4. 流動性リスク</h4>
                        <p className="leading-relaxed">マイナーな暗号資産は売買の際に価格が大きく変動したり、売買が成立しないリスクがあります。</p>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 mt-8">安全な投資のための注意点</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-red-50 p-6 rounded-xl hover:bg-red-100/50 transition-all duration-300 shadow-sm hover:shadow-md">
                        <h4 className="font-bold text-red-800 mb-3 text-lg">絶対に避けること</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>全財産を暗号資産に投資しない</li>
                          <li>借金してまで投資しない</li>
                          <li>レバレッジ取引を避ける</li>
                          <li>怪しいプロジェクトやポンジスキームに騙されない</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 p-6 rounded-xl hover:bg-green-100/50 transition-all duration-300 shadow-sm hover:shadow-md">
                        <h4 className="font-bold text-green-800 mb-3 text-lg">守るべき原則</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>リスク許容度を明確にする</li>
                          <li>分散投資を行う</li>
                          <li>長期的な視点を持つ</li>
                          <li>最新情報を収集する</li>
                        </ul>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 mt-8">詐欺と不正取引の識別</h3>
                    <ul className="list-disc pl-5 space-y-2 mb-6">
                      <li>高すぎるリターンを約束するプロジェクト</li>
                      <li>匿名性の高い運営チーム</li>
                      <li>ソースコードが公開されていない</li>
                      <li>過剰なマーケティングと宣伝</li>
                      <li>評判が極端に良いまたは悪い</li>
                    </ul>
                    
                    <h3 className="text-xl font-bold mb-4 mt-8">リスク管理戦略</h3>
                    <ul className="list-disc pl-5 space-y-2 mb-6">
                      <li>損切りラインを事前に設定</li>
                      <li>利益確定のタイミングを決める</li>
                      <li>定期的なポートフォリオの見直し</li>
                      <li>投資額の記録と分析</li>
                    </ul>
                    
                    <h3 className="text-xl font-bold mb-4 mt-8">2024年の最新リスク動向</h3>
                    <p className="mb-6 hover:bg-muted/50 transition-all duration-300 p-6 rounded-xl leading-relaxed shadow-sm hover:shadow-md">最近では、AI関連の暗号資産への投資が増加していますが、その一方で詐欺プロジェクトも増加傾向にあります。また、各国の中央銀行がCBDC（中央銀行デジタル通貨）の導入を検討する中で、既存の暗号資産への規制が強化される可能性もあります。</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 暗号資産取引所を開設して投資を始めようセクション（一番下に配置） */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="relative overflow-hidden bg-gradient-to-br from-secondary/20 via-accent/10 to-primary/20 border-2 border-secondary/30 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-transparent opacity-50" />
                <CardContent className="p-10 text-center relative z-10">
                  <div className="inline-block p-4 bg-background rounded-full mb-6 animate-pulse">
                    <Lightbulb className="h-12 w-12 text-secondary" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">暗号資産取引所を開設して投資を始めよう</h2>
                  <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                    暗号資産の基本を学んだら、次は実際に取引所を開設して投資を始めてみましょう。
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="text-lg px-8 hover:scale-105 transition-transform">
                      <Link to="/crypto-comparison">
                        取引所を比較する →
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="text-lg px-8 hover:scale-105 transition-transform">
                      <Link to="/tools/risk-assessment">
                        総合診断を始める
                      </Link>
                    </Button>
                  </div>
                  <div className="mt-8 pt-8 border-t border-blue-300">
                    <h3 className="text-lg font-semibold mb-4">関連する投資ガイド</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                      <Link to="/nisa" className="text-primary hover:underline hover:text-secondary transition-colors">NISA・つみたてNISA投資ガイド</Link>
                      <Link to="/investment-trust" className="text-primary hover:underline hover:text-secondary transition-colors">投資信託投資ガイド</Link>
                      <Link to="/stocks" className="text-primary hover:underline hover:text-secondary transition-colors">株式投資ガイド</Link>
                    </div>
                  </div>
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

export default Crypto;