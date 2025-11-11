import { useParams, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar, ArrowLeft, ExternalLink, Menu, X, TrendingUp, BookOpen, Users, Award, Lightbulb, ChevronRight, Rocket } from "lucide-react";
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
      date: "2025年10月30日",
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
      date: "2025年10月30日",
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
      date: "2025年10月30日",
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
      date: "2025年10月30日",
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
        <p class="mb-4 text-base leading-relaxed">投資とは、将来の資産増加を期待して、株式、債券、不動産などの金融商品に資金を投じることです。銀行預金よりも高い利回りが期待できる一方、元本割れのリスクも伴います。</p>
        <p class="mb-4 text-base leading-relaxed">投資は単に利益を追求するだけでなく、将来の目標達成や資産形成のための重要な手段です。投資の基本的な考え方は、現在の資金を何かしらの形で運用し、将来それ以上の価値を得ることです。このとき、時間の経過とともに資産が増えていくことを「複利効果」と呼び、長期的な投資において非常に重要な概念となります。</p>
        
        <h3 id="投資の目的" class="text-xl font-semibold mb-4 mt-8 flex items-center gap-2">
          <ChevronRight className="h-5 w-5 text-primary" />
          投資の目的
        </h3>
        <p class="mb-4 text-base leading-relaxed">投資にはさまざまな目的がありますが、主なものとして以下の3つが挙げられます。</p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li class="pl-2">資産形成・増加：現在の収入だけでは将来の生活資金が不足する場合、投資によって追加の収益を得ることで資産を増やします。</li>
          <li class="pl-2">将来の資金準備（老後資金、教育資金など）：子どもの教育費や老後の生活資金など、将来必要になる大きな資金を準備するために投資を利用します。</li>
          <li class="pl-2">インフレ対策：物価が上昇することでお金の価値が下がるインフレに対抗するため、価値が上がることが期待できる資産に投資します。</li>
        </ul>
        <p class="mb-8 text-base leading-relaxed">これらの目的を達成するためには、自分のライフスタイルや将来の目標に合った投資戦略を立てる必要があります。例えば、若いうちはリスクを取って高いリターンを目指すことが可能ですが、年齢とともにリスク許容度が下がるため、資産の保護を重視した投資戦略への切り替えも検討する必要があります。</p>
        
        <div class="bg-yellow-50 p-6 rounded-lg border border-yellow-200 my-8">
          <h3 class="font-bold text-yellow-800 flex items-center gap-2 mb-4 text-lg">
            <Award className="h-5 w-5" />
            投資の基本原則
          </h3>
          <ul class="list-disc pl-5 space-y-2 text-yellow-700 text-base">
            <li>分散投資でリスクを軽減する：一つの資産に投資を集中させると、その資産が下落したときに大きな損失を被る可能性があります。複数の資産に分散投資することで、リスクを軽減できます。</li>
            <li>長期的な視点で投資する：短期的な値動きに一喜一憂せず、長期的な視点で資産を運用することが重要です。複利効果により、時間が経つほど資産は増えていきます。</li>
            <li>自分のリスク許容度を理解する：自分の年齢、収入、家族構成などを考慮し、どの程度のリスクを取れるかを理解しておく必要があります。リスク許容度を超える投資は、精神的なストレスを増加させます。</li>
            <li>投資知識を継続的に学ぶ：金融市場は常に変化しています。新しい情報や知識を継続的に学ぶことで、より良い投資判断が可能になります。</li>
          </ul>
        </div>
        
        <h2 id="代表的な投資の種類と特徴" class="text-2xl font-bold mb-6 mt-12 pb-2 border-b border-gray-200">2. 代表的な投資の種類と特徴</h2>
        <p class="mb-4 text-base leading-relaxed">主な投資の種類には以下のようなものがあります。それぞれに特徴があり、自分の目的やリスク許容度に合った商品を選ぶことが重要です。</p>
        
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
        
        <p class="mb-8 text-base leading-relaxed">この表からわかるように、リスクが低い商品ほどリターンも低く、リスクが高い商品ほどリターンも高くなります。自分のリスク許容度に合った商品を選ぶことが重要です。</p>
        
        <h2 id="投資の始め方-初心者向け" class="text-2xl font-bold mb-6 mt-12 pb-2 border-b border-gray-200">3. 投資の始め方（初心者向け）</h2>
        <p class="mb-4 text-base leading-relaxed">投資を始める際は、以下のステップとポイントを押さえることが重要です。</p>
        
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
        <p class="mb-8 text-base leading-relaxed">投資に関する正しい情報を自分で見極める姿勢が長期的な成功につながる。金融市場は常に変化しているため、新しい情報や知識を継続的に学ぶことが重要です。</p>
        
        <h2 id="リスク管理と分散投資の基本" class="text-2xl font-bold mb-6 mt-12 pb-2 border-b border-gray-200">4. リスク管理と分散投資の基本</h2>
        <p class="mb-4 text-base leading-relaxed">投資においてリスク管理は不可欠です。「分散投資」が基本戦略となります。リスクを完全に排除することはできませんが、いくつかの方法でリスクを管理・軽減することが可能です。</p>
        
        <h3 id="資産の分散" class="text-xl font-semibold mb-4 mt-8 flex items-center gap-2">
          <ChevronRight className="h-5 w-5 text-primary" />
          資産の分散
        </h3>
        <p class="mb-4 text-base leading-relaxed">株式、債券、不動産など、異なる値動きをする複数の資産に資金を分けることで、特定の資産クラスの不調による損失を他の資産クラスの利益で補うことができます。</p>
        
        <h3 id="地域の分散" class="text-xl font-semibold mb-4 mt-8 flex items-center gap-2">
          <ChevronRight className="h-5 w-5 text-primary" />
          地域の分散
        </h3>
        <p class="mb-4 text-base leading-relaxed">国内だけでなく、海外の資産にも投資することで、特定の国の経済状況による影響を軽減できます。例えば、日本経済が不調でも、海外経済が好調であれば損益が相殺されます。</p>
        
        <h3 id="時間の分散" class="text-xl font-semibold mb-4 mt-8 flex items-center gap-2">
          <ChevronRight className="h-5 w-5 text-primary" />
          時間の分散
        </h3>
        <p class="mb-4 text-base leading-relaxed">定期的に少額ずつ投資（ドルコスト平均法）することで、市場のタイミングを気にする必要がなくなり、平均的な購入単価を抑えることができます。</p>
        
        <h3 id="分散投資の注意点" class="text-xl font-semibold mb-4 mt-8 flex items-center gap-2">
          <ChevronRight className="h-5 w-5 text-primary" />
          分散投資の注意点
        </h3>
        <p class="mb-4 text-base leading-relaxed">分散投資にも注意すべき点があります。まず、分散しすぎるとリターンも低下する可能性があるため、適度な分散が重要です。また、単に銘柄数を増やすだけでは分散投資とは言えません。本当に効果的な分散投資を行うには、相関の低い資産に投資する必要があります。</p>
        <p class="mb-8 text-base leading-relaxed">例えば、同じ業種の株式に投資しても、業種リスクを回避することはできません。本当に効果的な分散投資を行うには、異なる業種、異なる資産クラス、異なる地域に投資する必要があります。</p>
        
        <p class="mb-8 text-base leading-relaxed">これらの方法により、特定の市場や経済環境の変化による影響を軽減し、リスクを抑えながら長期的な資産形成を目指すことができます。分散投資はリスクを完全に排除するものではありませんが、リスクを適切に管理するための有効な手段です。</p>
        
        <h2 id="長期投資のメリットと戦略" class="text-2xl font-bold mb-6 mt-12 pb-2 border-b border-gray-200">5. 長期投資のメリットと戦略</h2>
        <p class="mb-4 text-base leading-relaxed">長期投資には多くのメリットがあります。まず、複利効果による資産の雪だるま式増加が挙げられます。これは、投資で得た利益を再投資することで、利益がさらに利益を生むという効果です。時間の経過とともにこの効果は顕著になります。</p>
        
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li class="pl-2">複利効果による資産の雪だるま式増加：投資で得た利益を再投資することで、利益がさらに利益を生むという効果があります。</li>
          <li class="pl-2">短期的な値動きに左右されず、安定した資産形成が可能：短期的な市場の変動に一喜一憂する必要がなく、長期的な視点で資産を運用できます。</li>
          <li class="pl-2">手数料などのコストを抑えられる：頻繁に売買する短期投資よりも、長期的に保有することで取引コストを抑えることができます。</li>
          <li class="pl-2">時間の経過とともにリスクが軽減される：統計的に見ると、投資期間が長くなるほどマイナスのリターンになる確率が低くなります。</li>
        </ul>
        
        <h3 id="長期投資の戦略" class="text-xl font-semibold mb-4 mt-8 flex items-center gap-2">
          <ChevronRight className="h-5 w-5 text-primary" />
          長期投資の戦略
        </h3>
        <p class="mb-4 text-base leading-relaxed">効果的な長期投資戦略には、以下の要素が含まれます。</p>
        
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li class="pl-2">インデックス投資：市場全体の動きを追うインデックスファンドに投資することで、手数料を抑えながら市場の平均リターンを得ることができます。</li>
          <li class="pl-2">資産配分の最適化：自分のリスク許容度と目標に応じて、株式・債券・不動産などの資産配分を最適化します。</li>
          <li class="pl-2">定期的な見直し：ポートフォリオを定期的に見直し、自分の目標やリスク許容度に合った資産配分を維持します。</li>
          <li class="pl-2">税制優遇の活用：NISAやiDeCoなどの税制優遇制度を活用することで、投資のリターンを最大化できます。</li>
        </ul>
        
        <p class="mb-8 text-base leading-relaxed">長期投資の成功には、継続的な積立、分散投資、そして市場の変動に一喜一憂しない冷静な姿勢が重要です。感情に左右されず、計画的に投資を続けることが、資産形成の鍵となります。また、自分の目標や状況に応じて戦略を見直す柔軟性も必要です。</p>
        
        <h2 id="日本の税制と優遇制度" class="text-2xl font-bold mb-6 mt-12 pb-2 border-b border-gray-200">6. 日本の税制と優遇制度</h2>
        <p class="mb-4 text-base leading-relaxed">日本では、NISA（少額投資非課税制度）やiDeCo（個人型確定拠出年金）といった税制優遇制度があります。これらを活用することで、運用益にかかる税金が非課税になったり、掛金が所得控除の対象になったりといったメリットを享受できます。</p>
        
        <h3 id="NISA" class="text-xl font-semibold mb-4 mt-8 flex items-center gap-2">
          <ChevronRight className="h-5 w-5 text-primary" />
          NISA（少額投資非課税制度）
        </h3>
        <p class="mb-4 text-base leading-relaxed">NISAは、投資で得た利益が非課税になる制度です。2024年から新しいNISA制度が始まり、より使いやすくなりました。</p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h4 class="text-lg font-semibold mb-4 flex items-center gap-2">
              <div class="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">1</div>
              <span>非課税期間の無期限化</span>
            </h4>
            <p class="text-base leading-relaxed">従来のNISAでは5年間だった非課税期間が、無期限になりました。長期投資がしやすくなっています。</p>
          </div>
          
          <div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h4 class="text-lg font-semibold mb-4 flex items-center gap-2">
              <div class="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">2</div>
              <span>年間投資枠の拡大</span>
            </h4>
            <p class="text-base leading-relaxed">つみたて投資枠：年間120万円、成長投資枠：年間240万円の合計360万円まで投資できるようになりました。</p>
          </div>
          
          <div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h4 class="text-lg font-semibold mb-4 flex items-center gap-2">
              <div class="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">3</div>
              <span>非課税保有限度額の設定</span>
            </h4>
            <p class="text-base leading-relaxed">生涯で1,800万円まで（成長投資枠は1,200万円まで）投資できます。売却した分の枠は翌年に復活します。</p>
          </div>
        </div>
        
        <h3 id="iDeCo" class="text-xl font-semibold mb-4 mt-8 flex items-center gap-2">
          <ChevronRight className="h-5 w-5 text-primary" />
          iDeCo（個人型確定拠出年金）
        </h3>
        <p class="mb-8 text-base leading-relaxed">iDeCoは、老後の資金準備として活用できる個人年金制度です。掛金が全額所得控除され、運用益も非課税、受給時に優遇税率が適用されるという三重の優遇措置があります。</p>
        
        <h2 id="投資計画の立て方と目標設定" class="text-2xl font-bold mb-6 mt-12 pb-2 border-b border-gray-200">7. 投資計画の立て方と目標設定</h2>
        <p class="mb-4 text-base leading-relaxed">投資を始める前に、明確な投資計画を立てることは非常に重要です。投資計画には、投資の目的、目標、リスク許容度、投資期間、資産配分などが含まれます。適切な投資計画を立てることで、感情的な判断を避け、計画的に資産を運用することが可能になります。</p>
        
        <h3 id="目標設定の方法" class="text-xl font-semibold mb-4 mt-8 flex items-center gap-2">
          <ChevronRight className="h-5 w-5 text-primary" />
          目標設定の方法
        </h3>
        <p class="mb-4 text-base leading-relaxed">投資の目標を設定する際には、SMARTの原則（Specific: 具体的、Measurable: 測定可能、Achievable: 達成可能、Relevant: 関連性がある、Time-bound: 期限がある）に従うことが重要です。</p>
        
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li class="pl-2">具体的な目標：「資産を増やしたい」ではなく、「20年後に3000万円の老後資金を準備する」など具体的な目標を設定します。</li>
          <li class="pl-2">測定可能な目標：目標が達成できたかどうかを判断できるように、数値目標を設定します。</li>
          <li class="pl-2">達成可能な目標：自分の収入やリスク許容度を考慮し、現実的な目標を設定します。</li>
          <li class="pl-2">関連性のある目標：自分の人生計画と一致した目標を設定します。</li>
          <li class="pl-2">期限のある目標：目標達成の期限を設定することで、計画的に投資を進めることができます。</li>
        </ul>
        
        <h3 id="投資計画の作成ステップ" class="text-xl font-semibold mb-4 mt-8 flex items-center gap-2">
          <ChevronRight className="h-5 w-5 text-primary" />
          投資計画の作成ステップ
        </h3>
        <p class="mb-4 text-base leading-relaxed">効果的な投資計画を作成するためには、以下のステップを踏むことが重要です。</p>
        
        <ol class="list-decimal pl-6 mb-4 space-y-2">
          <li class="pl-2">現在の財政状況の把握：収入、支出、資産、負債などを正確に把握します。</li>
          <li class="pl-2">投資目的と目標の明確化：なぜ投資するのか、何のために投資するのかを明確にします。</li>
          <li class="pl-2">リスク許容度の評価：自分のリスクへの耐性を評価し、適切なリスクレベルを決定します。</li>
          <li class="pl-2">投資期間の設定：目標達成までの期間を設定し、それに応じた投資戦略を立てます。</li>
          <li class="pl-2">資産配分の決定：リスク許容度と投資期間を考慮し、最適な資産配分を決定します。</li>
          <li class="pl-2">投資商品の選択：資産配分に応じて、具体的な投資商品を選択します。</li>
          <li class="pl-2">ポートフォリオの構築：選択した投資商品でポートフォリオを構築します。</li>
          <li class="pl-2">定期的な見直し：ポートフォリオを定期的に見直し、必要に応じて調整します。</li>
        </ol>
        
        <p class="mb-8 text-base leading-relaxed">投資計画の成功には、柔軟性と継続性が重要です。人生の状況や目標が変化するにつれて、投資計画も見直す必要があります。また、一度立てた計画を継続的に実行することが、長期的な資産形成の鍵となります。</p>
        
        <h2 id="まとめ" class="text-2xl font-bold mb-6 mt-12 pb-2 border-b border-gray-200">8. まとめ</h2>
        <p class="mb-4 text-base leading-relaxed">投資は資産形成の重要な手段ですが、同時にリスクも伴います。成功するためには、基本的な知識と正しい理解が不可欠です。</p>
        <p class="mb-4 text-base leading-relaxed">このガイドでは、投資の基本概念から始めて、リスク管理、分散投資、長期投資の重要性、税制優遇制度の活用、投資計画の立て方までを詳しく解説しました。</p>
        <p class="mb-8 text-base leading-relaxed">投資を始める際は、自分の目的やリスク許容度を明確にし、計画的に資産を運用することが重要です。また、継続的な学習と情報収集を通じて、より良い投資判断ができるよう努めましょう。</p>
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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-background/90 to-muted/30">
      <Header />
      
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 py-4 border-b border-primary/10">
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
        <section className="py-16 container mx-auto px-4 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/10 rounded-full blur-3xl"></div>
          </div>
          <div className="max-w-4xl mx-auto relative z-10">
            <Badge 
              variant="secondary" 
              className="mb-6 px-4 py-2 text-sm font-semibold bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30"
            >
              {article.category}
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-8 leading-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              {article.title}
            </h1>
          </div>
        </section>

        {/* Table of Contents (Desktop - Above Content) */}
        <div className="container mx-auto px-4 mb-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-background/80 to-muted/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Menu className="h-5 w-5" />
                  目次
                </CardTitle>
              </CardHeader>
              <CardContent>
                <nav className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                  {headings.map((heading) => (
                    <button
                      key={heading.id}
                      className={`block w-full text-left py-2 px-3 rounded-md transition-all duration-200 text-sm ${
                        heading.level === 3 ? 'pl-6 text-muted-foreground hover:text-primary' : 'font-medium hover:bg-primary/10'
                      } hover:scale-[1.02]`}
                      onClick={() => scrollToSection(heading.id)}
                    >
                      {heading.text}
                    </button>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Article Content */}
        <section className="pb-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col gap-8">
              {/* Main Content */}
              <article className="prose prose-slate max-w-none bg-background/80 backdrop-blur-sm rounded-xl p-6 border border-primary/10 shadow-lg">
                <div 
                  className="article-content"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              </article>

              {/* CTA Card */}
              <Card className="overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/5 border-2 border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-300">
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
                  <Button className="w-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]" asChild>
                    <Link to="/comparison">
                      証券会社を比較する
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full border-2 hover:border-primary/50 hover:scale-[1.02] transition-all duration-300" asChild>
                    <Link to="/tools">
                      投資をシミュレーション
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Related Articles */}
              <Card className="border-2 hover:border-primary/30 transition-all duration-300 bg-gradient-to-br from-background/80 to-muted/20 backdrop-blur-sm shadow-lg">
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
                        className="block p-3 rounded-lg text-sm hover:bg-primary/5 hover:text-primary transition-all border border-transparent hover:border-primary/20 group hover:scale-[1.01] duration-200"
                      >
                        <span className="line-clamp-2 group-hover:underline">{relatedArticle.title}</span>
                      </Link>
                    ))}
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

export default GuideDetail;