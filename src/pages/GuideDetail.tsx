import { useParams, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar, ArrowLeft, ExternalLink, Menu, X, TrendingUp, BookOpen, Users, Award, Lightbulb, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const GuideDetail = () => {
  const { id } = useParams();
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);

  // サンプルデータ（実際はAPIやデータベースから取得）
  const articles: Record<string, any> = {
    "nisa-beginner": {
      title: "【2024年最新版】NISA完全ガイド：初心者が知るべき全て",
      category: "NISA",
      date: "2024年10月30日",
      readTime: "8分",
      content: `
        <h2 id="nisaとは" class="text-2xl font-bold mb-4 mt-12 pb-2 border-b border-gray-200">NISAとは？</h2>
        <p class="mb-8 text-base leading-relaxed">NISA（ニーサ：少額投資非課税制度）は、投資で得た利益が非課税になる制度です。2024年から新しいNISA制度が始まり、より使いやすくなりました。</p>
        
        <h2 id="新nisaの3つの特徴" class="text-2xl font-bold mb-6 mt-12 pb-2 border-b border-gray-200">新NISAの3つの特徴</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 id="非課税期間の無期限化" class="text-xl font-semibold mb-4 flex items-center gap-2">
              <div class="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">1</div>
              <span>非課税期間の無期限化</span>
            </h3>
            <p class="text-base leading-relaxed">従来のNISAでは5年間だった非課税期間が、無期限になりました。長期投資がしやすくなっています。</p>
          </div>
          
          <div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 id="年間投資枠の拡大" class="text-xl font-semibold mb-4 flex items-center gap-2">
              <div class="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">2</div>
              <span>年間投資枠の拡大</span>
            </h3>
            <p class="text-base leading-relaxed">つみたて投資枠：年間120万円、成長投資枠：年間240万円の合計360万円まで投資できるようになりました。</p>
          </div>
          
          <div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 id="非課税保有限度額の設定" class="text-xl font-semibold mb-4 flex items-center gap-2">
              <div class="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">3</div>
              <span>非課税保有限度額の設定</span>
            </h3>
            <p class="text-base leading-relaxed">生涯で1,800万円まで（成長投資枠は1,200万円まで）投資できます。売却した分の枠は翌年に復活します。</p>
          </div>
        </div>
        
        <h2 id="nisaの始め方" class="text-2xl font-bold mb-6 mt-12 pb-2 border-b border-gray-200">NISAの始め方</h2>
        <ol class="list-decimal pl-6 mb-8 space-y-4">
          <li class="pl-2">証券会社を選ぶ</li>
          <li class="pl-2">NISA口座を開設する</li>
          <li class="pl-2">投資する商品を選ぶ</li>
          <li class="pl-2">定期的に投資を続ける</li>
        </ol>
        
        <h2 id="初心者におすすめの投資方法" class="text-2xl font-bold mb-6 mt-12 pb-2 border-b border-gray-200">初心者におすすめの投資方法</h2>
        <p class="mb-4 text-base leading-relaxed">NISAを始める初心者には、つみたて投資枠を使った「インデックスファンド」への積立投資がおすすめです。</p>
        <p class="mb-8 text-base leading-relaxed">月々1万円から始められ、長期的な資産形成に適しています。</p>
        
        <h2 id="まとめ" class="text-2xl font-bold mb-6 mt-12 pb-2 border-b border-gray-200">まとめ</h2>
        <p class="mb-8 text-base leading-relaxed">新NISAは、投資初心者にとって非常に有利な制度です。非課税のメリットを活かして、計画的に資産形成を始めましょう。</p>
      `,
    },
    "stocks-beginner": {
      title: "株式投資の始め方：証券口座開設から銘柄選びまで",
      category: "株式投資",
      date: "2024年10月30日",
      readTime: "10分",
      content: `
        <h2 id="株式投資とは" class="text-2xl font-bold mb-4 mt-12 pb-2 border-b border-gray-200">株式投資とは</h2>
        <p class="mb-8 text-base leading-relaxed">株式投資は、企業が発行する株式を購入し、その企業の成長や配当金によって利益を得る投資方法です。</p>
        
        <h2 id="株式投資を始める手順" class="text-2xl font-bold mb-6 mt-12 pb-2 border-b border-gray-200">株式投資を始める手順</h2>
        <h3 id="証券口座を開設する" class="text-xl font-semibold mb-4 mt-8 flex items-center gap-2">
          <ChevronRight className="h-5 w-5 text-primary" />
          1. 証券口座を開設する
        </h3>
        <p class="mb-8 text-base leading-relaxed">まずは証券会社で口座を開設します。ネット証券なら手数料が安く、初心者にもおすすめです。</p>
        
        <h3 id="投資資金を用意する" class="text-xl font-semibold mb-4 mt-8 flex items-center gap-2">
          <ChevronRight className="h-5 w-5 text-primary" />
          2. 投資資金を用意する
        </h3>
        <p class="mb-8 text-base leading-relaxed">生活費や緊急資金とは別に、投資に回せる余裕資金を準備しましょう。</p>
        
        <h3 id="投資する銘柄を選ぶ" class="text-xl font-semibold mb-4 mt-8 flex items-center gap-2">
          <ChevronRight className="h-5 w-5 text-primary" />
          3. 投資する銘柄を選ぶ
        </h3>
        <p class="mb-8 text-base leading-relaxed">企業の業績、成長性、配当利回りなどを考慮して銘柄を選びます。</p>
        
        <h2 id="初心者が気をつけるべきポイント" class="text-2xl font-bold mb-6 mt-12 pb-2 border-b border-gray-200">初心者が気をつけるべきポイント</h2>
        <ul class="list-disc pl-6 mb-8 space-y-4">
          <li class="pl-2">一度に大金を投資しない</li>
          <li class="pl-2">複数の銘柄に分散投資する</li>
          <li class="pl-2">短期的な値動きに一喜一憂しない</li>
          <li class="pl-2">継続的に学習を続ける</li>
        </ul>
      `,
    },
    "investment-trust": {
      title: "投資信託とは？メリット・デメリットと選び方のポイント",
      category: "投資信託",
      date: "2024年10月30日",
      readTime: "7分",
      content: `
        <h2 id="投資信託の基礎知識" class="text-2xl font-bold mb-4 mt-12 pb-2 border-b border-gray-200">投資信託の基礎知識</h2>
        <p class="mb-8 text-base leading-relaxed">投資信託は、多くの投資家から集めた資金を、専門家が株式や債券などに投資・運用する金融商品です。</p>
        
        <h2 id="投資信託のメリット" class="text-2xl font-bold mb-6 mt-12 pb-2 border-b border-gray-200">投資信託のメリット</h2>
        <ul class="list-disc pl-6 mb-8 space-y-4">
          <li class="pl-2">少額から始められる（100円〜）</li>
          <li class="pl-2">プロに運用を任せられる</li>
          <li class="pl-2">自動的に分散投資ができる</li>
          <li class="pl-2">透明性が高い</li>
        </ul>
        
        <h2 id="投資信託のデメリット" class="text-2xl font-bold mb-6 mt-12 pb-2 border-b border-gray-200">投資信託のデメリット</h2>
        <ul class="list-disc pl-6 mb-8 space-y-4">
          <li class="pl-2">手数料がかかる</li>
          <li class="pl-2">元本保証がない</li>
          <li class="pl-2">短期的な売買には向かない</li>
        </ul>
        
        <h2 id="投資信託の選び方" class="text-2xl font-bold mb-6 mt-12 pb-2 border-b border-gray-200">投資信託の選び方</h2>
        <p class="mb-8 text-base leading-relaxed">インデックスファンドとアクティブファンドの違いを理解し、手数料や過去の運用実績を確認しましょう。</p>
      `,
    },
    // 新しく追加する投資基礎知識記事
    "investment-basics": {
      title: "投資の基礎知識：初心者が必ず知っておくべきポイント",
      category: "投資基礎",
      date: "2024年10月30日",
      readTime: "12分",
      content: `
        <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200 mb-8">
          <div class="flex items-start gap-3">
            <Lightbulb className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
            <div>
              <h3 class="font-bold text-blue-800 mb-2 text-lg">投資初心者のための重要なポイント</h3>
              <p class="text-blue-700 text-base leading-relaxed">このガイドでは、投資を始める前に必ず知っておくべき基礎知識を詳しく解説します。リスクとリターンの関係、分散投資の重要性、長期投資のメリットなどを学びましょう。</p>
            </div>
          </div>
        </div>
        
        <h2 id="投資とは" class="text-2xl font-bold mb-4 mt-12 pb-2 border-b border-gray-200">1. 投資とは</h2>
        <p class="mb-8 text-base leading-relaxed">投資とは、将来の資産増加を期待して、株式、債券、不動産などの金融商品に資金を投じることです。銀行預金よりも高い利回りが期待できる一方、元本割れのリスクも伴います。</p>
        
        <div class="bg-yellow-50 p-6 rounded-lg border border-yellow-200 my-8">
          <h3 class="font-bold text-yellow-800 flex items-center gap-2 mb-4 text-lg">
            <Award className="h-5 w-5" />
            投資の基本原則
          </h3>
          <ul class="list-disc pl-5 space-y-2 text-yellow-700 text-base">
            <li>分散投資でリスクを軽減する</li>
            <li>長期的な視点で投資する</li>
            <li>自分のリスク許容度を理解する</li>
          </ul>
        </div>
        
        <h2 id="代表的な投資の種類と特徴" class="text-2xl font-bold mb-6 mt-12 pb-2 border-b border-gray-200">2. 代表的な投資の種類と特徴</h2>
        <p class="mb-8 text-base leading-relaxed">主な投資の種類には以下のようなものがあります。</p>
        
        <div class="overflow-x-auto my-8">
          <table class="min-w-full border border-gray-300 rounded-lg overflow-hidden shadow-sm">
            <thead>
              <tr class="bg-gradient-to-r from-gray-100 to-gray-200">
                <th class="border-b border-r border-gray-300 px-4 py-3 text-left font-semibold text-gray-700">種類</th>
                <th class="border-b border-r border-gray-300 px-4 py-3 text-left font-semibold text-gray-700">特徴</th>
                <th class="border-b border-r border-gray-300 px-4 py-3 text-left font-semibold text-gray-700">期待できる収益</th>
                <th class="border-b border-gray-300 px-4 py-3 text-left font-semibold text-gray-700">主なリスク</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white even:bg-gray-50 hover:bg-blue-50 transition-colors">
                <td class="border-b border-r border-gray-200 px-4 py-3 font-medium text-gray-800">株式投資</td>
                <td class="border-b border-r border-gray-200 px-4 py-3 text-gray-600">企業の株式を購入し、企業の成長と共に資産を増やすことを目指す</td>
                <td class="border-b border-r border-gray-200 px-4 py-3 text-gray-600">売買益（キャピタルゲイン）、配当金、株主優待</td>
                <td class="border-b border-gray-200 px-4 py-3 text-gray-600">価格変動リスク、倒産リスク</td>
              </tr>
              <tr class="bg-white even:bg-gray-50 hover:bg-blue-50 transition-colors">
                <td class="border-b border-r border-gray-200 px-4 py-3 font-medium text-gray-800">債券投資</td>
                <td class="border-b border-r border-gray-200 px-4 py-3 text-gray-600">国（国債）や企業（社債）などに資金を貸し付け、利子を得る</td>
                <td class="border-b border-r border-gray-200 px-4 py-3 text-gray-600">利子（インカムゲイン）、償還差益</td>
                <td class="border-b border-gray-200 px-4 py-3 text-gray-600">金利変動リスク、信用リスク（デフォルト）</td>
              </tr>
              <tr class="bg-white even:bg-gray-50 hover:bg-blue-50 transition-colors">
                <td class="border-b border-r border-gray-200 px-4 py-3 font-medium text-gray-800">投資信託</td>
                <td class="border-b border-r border-gray-200 px-4 py-3 text-gray-600">多くの投資家から集めた資金を専門家が運用し、その成果を分配する</td>
                <td class="border-b border-r border-gray-200 px-4 py-3 text-gray-600">分配金、売却益</td>
                <td class="border-b border-gray-200 px-4 py-3 text-gray-600">価格変動リスク、運用会社のリスク</td>
              </tr>
              <tr class="bg-white even:bg-gray-50 hover:bg-blue-50 transition-colors">
                <td class="border-b border-r border-gray-200 px-4 py-3 font-medium text-gray-800">不動産投資</td>
                <td class="border-b border-r border-gray-200 px-4 py-3 text-gray-600">マンションやアパートなどを購入し、家賃収入や売却益を得る</td>
                <td class="border-b border-r border-gray-200 px-4 py-3 text-gray-600">家賃収入（インカムゲイン）、売却益</td>
                <td class="border-b border-gray-200 px-4 py-3 text-gray-600">空室リスク、価格変動リスク、流動性リスク</td>
              </tr>
              <tr class="bg-white even:bg-gray-50 hover:bg-blue-50 transition-colors">
                <td class="border-r border-gray-200 px-4 py-3 font-medium text-gray-800">ETF（上場投資信託）</td>
                <td class="border-r border-gray-200 px-4 py-3 text-gray-600">投資信託の一種で、証券取引所に上場しており、株式のように売買できる</td>
                <td class="border-r border-gray-200 px-4 py-3 text-gray-600">分配金、売却益</td>
                <td class="px-4 py-3 text-gray-600">価格変動リスク</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h2 id="投資の始め方-初心者向け" class="text-2xl font-bold mb-6 mt-12 pb-2 border-b border-gray-200">3. 投資の始め方（初心者向け）</h2>
        <p class="mb-8 text-base leading-relaxed">投資を始める際は、以下のステップとポイントを押さえることが重要です。</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 class="font-bold text-gray-800 flex items-center gap-2 mb-4 text-lg">
              <Users className="h-5 w-5 text-primary" />
              目的・目標の明確化
            </h3>
            <p class="text-gray-600 text-base leading-relaxed">何のために、いつまでに、いくら貯めたいのかを具体的に決める（例：老後資金、教育資金）。</p>
          </div>
          <div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 class="font-bold text-gray-800 flex items-center gap-2 mb-4 text-lg">
              <TrendingUp className="h-5 w-5 text-primary" />
              余剰資金で始める
            </h3>
            <p class="text-gray-600 text-base leading-relaxed">生活費や緊急資金には手を付けず、当面使う予定のない「余剰資金」で始める。</p>
          </div>
          <div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 class="font-bold text-gray-800 flex items-center gap-2 mb-4 text-lg">
              <BookOpen className="h-5 w-5 text-primary" />
              証券口座の開設
            </h3>
            <p class="text-gray-600 text-base leading-relaxed">株式や投資信託などを購入するには、証券会社で口座を開設する必要がある。</p>
          </div>
          <div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 class="font-bold text-gray-800 flex items-center gap-2 mb-4 text-lg">
              <Lightbulb className="h-5 w-5 text-primary" />
              少額からスタート
            </h3>
            <p class="text-gray-600 text-base leading-relaxed">最初はリスクを抑えるため、無理のない範囲で少額から始める。</p>
          </div>
        </div>
        
        <h3 id="勉強を続ける" class="text-xl font-semibold mb-4 mt-8 flex items-center gap-2">
          <ChevronRight className="h-5 w-5 text-primary" />
          勉強を続ける
        </h3>
        <p class="mb-8 text-base leading-relaxed">投資に関する正しい情報を自分で見極める姿勢が長期的な成功につながる。</p>
        
        <h2 id="リスク管理と分散投資の基本" class="text-2xl font-bold mb-6 mt-12 pb-2 border-b border-gray-200">4. リスク管理と分散投資の基本</h2>
        <p class="mb-6 text-base leading-relaxed">投資においてリスク管理は不可欠です。「分散投資」が基本戦略となります。</p>
        
        <h3 id="資産の分散" class="text-xl font-semibold mb-4 mt-8 flex items-center gap-2">
          <ChevronRight className="h-5 w-5 text-primary" />
          資産の分散
        </h3>
        <p class="mb-6 text-base leading-relaxed">株式、債券、不動産など、異なる値動きをする複数の資産に資金を分ける。</p>
        
        <h3 id="地域の分散" class="text-xl font-semibold mb-4 mt-8 flex items-center gap-2">
          <ChevronRight className="h-5 w-5 text-primary" />
          地域の分散
        </h3>
        <p class="mb-6 text-base leading-relaxed">国内だけでなく、海外の資産にも投資する。</p>
        
        <h3 id="時間の分散" class="text-xl font-semibold mb-4 mt-8 flex items-center gap-2">
          <ChevronRight className="h-5 w-5 text-primary" />
          時間の分散
        </h3>
        <p class="mb-8 text-base leading-relaxed">一度に全額を投資するのではなく、積立投資などにより時期を分けて投資する（ドルコスト平均法）。</p>
        
        <p class="mb-8 text-base leading-relaxed">これらの方法により、特定の市場や経済環境の変化による影響を軽減し、リスクを抑えながら長期的な資産形成を目指すことができます。</p>
        
        <h2 id="日本の税制と優遇制度" class="text-2xl font-bold mb-6 mt-12 pb-2 border-b border-gray-200">5. 日本の税制と優遇制度</h2>
        <p class="mb-8 text-base leading-relaxed">日本では、NISA（少額投資非課税制度）やiDeCo（個人型確定拠出年金）といった税制優遇制度があります。これらを活用することで、運用益にかかる税金が非課税になったり、掛金が所得控除の対象になったりといったメリットを享受できます。</p>
      `,
    },
  };

  const article = articles[id || "nisa-beginner"] || articles["nisa-beginner"];

  // 見出しを抽出して目次を作成
  useEffect(() => {
    if (article.content) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(article.content, 'text/html');
      const headings = Array.from(doc.querySelectorAll('h2, h3'))
        .map(heading => ({
          id: heading.getAttribute('id') || '',
          text: heading.textContent || '',
          level: parseInt(heading.tagName.charAt(1))
        }))
        .filter(heading => heading.id);
      
      setHeadings(headings);
    }
  }, [article.content]);

  // 目次から特定のセクションにスクロール
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = document.querySelector('header')?.offsetHeight || 0;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight - 20;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      setIsTocOpen(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-gradient-to-r from-muted/50 to-muted/30 py-4 border-b">
          <div className="container mx-auto px-4">
            <Link 
              to="/" 
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors group"
            >
              <ArrowLeft className="h-4 w-4 mr-1 group-hover:-translate-x-1 transition-transform" />
              トップページに戻る
            </Link>
          </div>
        </div>

        {/* Article Header */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Badge 
              variant="secondary" 
              className="mb-6 px-4 py-2 text-sm font-semibold"
            >
              {article.category}
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-8 leading-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
              {article.title}
            </h1>
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-8 pb-8 border-b">
              <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-lg">
                <Calendar className="h-4 w-4 text-primary" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-lg">
                <Clock className="h-4 w-4 text-secondary" />
                <span>読了時間: {article.readTime}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Table of Contents Button (Mobile) */}
        <div className="lg:hidden container mx-auto px-4 mb-6">
          <Button 
            variant="outline" 
            className="w-full flex items-center justify-between"
            onClick={() => setIsTocOpen(true)}
          >
            <span>目次</span>
            <Menu className="h-4 w-4" />
          </Button>
        </div>

        {/* Table of Contents Sidebar (Desktop) and Mobile Overlay */}
        {isTocOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-black/50" onClick={() => setIsTocOpen(false)}>
            <div 
              className="fixed right-0 top-0 h-full w-4/5 max-w-sm bg-background p-6 shadow-lg transform transition-transform duration-300 ease-in-out"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">目次</h3>
                <Button variant="ghost" size="icon" onClick={() => setIsTocOpen(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <nav className="space-y-2 max-h-[calc(100vh-120px)] overflow-y-auto">
                {headings.map((heading) => (
                  <button
                    key={heading.id}
                    className={`block w-full text-left py-2 px-3 rounded-md transition-colors text-sm ${
                      heading.level === 3 ? 'pl-6 text-muted-foreground' : 'font-medium'
                    } hover:bg-muted`}
                    onClick={() => scrollToSection(heading.id)}
                  >
                    {heading.text}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        )}

        {/* Article Content */}
        <section className="pb-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Table of Contents (Desktop) */}
              <aside className="hidden lg:block lg:col-span-1">
                <Card className="sticky top-24">
                  <CardHeader>
                    <CardTitle className="text-lg">目次</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <nav className="space-y-2">
                      {headings.map((heading) => (
                        <button
                          key={heading.id}
                          className={`block w-full text-left py-2 px-3 rounded-md transition-colors text-sm ${
                            heading.level === 3 ? 'pl-6 text-muted-foreground' : 'font-medium'
                          } hover:bg-muted`}
                          onClick={() => scrollToSection(heading.id)}
                        >
                          {heading.text}
                        </button>
                      ))}
                    </nav>
                  </CardContent>
                </Card>
              </aside>

              {/* Main Content */}
              <article className="lg:col-span-2 prose prose-slate max-w-none">
                <div 
                  className="article-content"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              </article>

              {/* Sidebar */}
              <aside className="space-y-6 lg:col-span-1">
                {/* CTA Card */}
                <Card className="sticky top-24 overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/5 border-2 border-primary/20 shadow-xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/20 to-transparent rounded-full blur-2xl"></div>
                  <CardHeader className="relative z-10">
                    <CardTitle className="text-xl flex items-center gap-2">
                      <span className="text-2xl">🚀</span>
                      今すぐ始めよう
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 relative z-10">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      投資を始めるなら、まずは証券口座の開設から。
                    </p>
                    <Button className="w-full shadow-lg hover:shadow-xl transition-shadow" asChild>
                      <Link to="/comparison">
                        証券会社を比較する
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" className="w-full border-2 hover:border-primary/50" asChild>
                      <Link to="/tools">
                        投資をシミュレーション
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Related Articles */}
                <Card className="border-2 hover:border-primary/30 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <span className="text-xl">📚</span>
                      関連記事
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {Object.entries(articles)
                      .filter(([key]) => key !== id)
                      .slice(0, 3)
                      .map(([key, relatedArticle]) => (
                        <Link
                          key={key}
                          to={`/guide/${key}`}
                          className="block p-3 rounded-lg text-sm hover:bg-primary/5 hover:text-primary transition-all border border-transparent hover:border-primary/20 group"
                        >
                          <span className="line-clamp-2 group-hover:underline">{relatedArticle.title}</span>
                        </Link>
                      ))}
                  </CardContent>
                </Card>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GuideDetail;