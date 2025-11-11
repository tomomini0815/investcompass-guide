import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BookOpen, TrendingUp, Calculator, PieChart, LineChart, Coins, Lightbulb, Users, Award, ChevronRight } from "lucide-react";

const Basics = () => {
  // 投資の基礎知識記事
  const articles = [
    {
      id: "what-is-investment",
      title: "投資とは？基本的な概念と目的",
      content: `
        <div class="mb-6">
          <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
            <ChevronRight className="h-5 w-5 text-primary" />
            投資の定義
          </h3>
          <p class="mb-4 text-base leading-relaxed">投資とは、将来の資産増加を期待して、株式、債券、不動産などの金融商品に資金を投じることです。銀行預金よりも高い利回りが期待できる一方、元本割れのリスクも伴います。投資は単に利益を追求するだけでなく、将来の目標達成や資産形成のための重要な手段です。</p>
          <p class="mb-4 text-base leading-relaxed">投資の基本的な考え方は、現在の資金を何かしらの形で運用し、将来それ以上の価値を得ることです。このとき、時間の経過とともに資産が増えていくことを「複利効果」と呼び、長期的な投資において非常に重要な概念となります。</p>
        </div>
        
        <div class="mb-6">
          <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
            <ChevronRight className="h-5 w-5 text-primary" />
            投資の目的
          </h3>
          <p class="mb-4 text-base leading-relaxed">投資にはさまざまな目的がありますが、主なものとして以下の3つが挙げられます。</p>
          <ul class="list-disc pl-6 mb-4 space-y-2">
            <li class="pl-2">資産形成・増加：現在の収入だけでは将来の生活資金が不足する場合、投資によって追加の収益を得ることで資産を増やします。</li>
            <li class="pl-2">将来の資金準備（老後資金、教育資金など）：子どもの教育費や老後の生活資金など、将来必要になる大きな資金を準備するために投資を利用します。</li>
            <li class="pl-2">インフレ対策：物価が上昇することでお金の価値が下がるインフレに対抗するため、価値が上がることが期待できる資産に投資します。</li>
          </ul>
          <p class="mb-4 text-base leading-relaxed">これらの目的を達成するためには、自分のライフスタイルや将来の目標に合った投資戦略を立てる必要があります。例えば、若いうちはリスクを取って高いリターンを目指すことが可能ですが、年齢とともにリスク許容度が下がるため、資産の保護を重視した投資戦略への切り替えも検討する必要があります。</p>
        </div>
        
        <div class="mb-6">
          <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
            <ChevronRight className="h-5 w-5 text-primary" />
            投資と投機の違い
          </h3>
          <p class="mb-4 text-base leading-relaxed">投資と投機は似ているようですが、重要な違いがあります。投資は、企業の業績や経済情勢など、基本的な要因に基づいて価値が上昇すると予想される資産に資金を投じることです。一方、投機は短期的な値動きや市場の心理など、基本的な要因以外の要素に左右される資産に資金を投じることです。</p>
          <p class="mb-4 text-base leading-relaxed">投資は長期的な視点で資産を運用することを目的としており、リスク管理や分散投資などの戦略を用います。一方、投機は短期的な利益を追求するため、大きな利益を得られる反面、大きな損失を被るリスクも高くなります。</p>
          <p class="mb-4 text-base leading-relaxed">初心者のうちは、投資と投機の区別がつきにくいかもしれませんが、基本的な分析に基づいて判断する投資を心がけることが重要です。</p>
        </div>
        
        <div class="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
          <h3 class="font-bold text-yellow-800 flex items-center gap-2 mb-2">
            <Lightbulb className="h-5 w-5" />
            投資の基本原則
          </h3>
          <ul class="list-disc pl-5 space-y-1 text-yellow-700 text-base">
            <li>分散投資でリスクを軽減する：一つの資産に投資を集中させると、その資産が下落したときに大きな損失を被る可能性があります。複数の資産に分散投資することで、リスクを軽減できます。</li>
            <li>長期的な視点で投資する：短期的な値動きに一喜一憂せず、長期的な視点で資産を運用することが重要です。複利効果により、時間が経つほど資産は増えていきます。</li>
            <li>自分のリスク許容度を理解する：自分の年齢、収入、家族構成などを考慮し、どの程度のリスクを取れるかを理解しておく必要があります。リスク許容度を超える投資は、精神的なストレスを増加させます。</li>
            <li>投資知識を継続的に学ぶ：金融市場は常に変化しています。新しい情報や知識を継続的に学ぶことで、より良い投資判断が可能になります。</li>
          </ul>
        </div>
      `,
      date: "2024年10月30日",
    },
    {
      id: "risk-return",
      title: "リスクとリターンの関係性",
      content: `
        <div class="mb-6">
          <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
            <ChevronRight className="h-5 w-5 text-primary" />
            リスクとリターンの関係
          </h3>
          <p class="mb-4 text-base leading-relaxed">投資において、リスクとリターンは表裏一体の関係にあります。一般的に、高いリターンを期待するほど、リスクも高くなります。逆に、リスクを抑えるとリターンも低くなります。これは「リスク・リターンのトレードオフ」と呼ばれ、投資の基本原則の一つです。</p>
          <p class="mb-4 text-base leading-relaxed">リスクとは、投資によって元本を失う可能性や、期待したリターンを得られない可能性を指します。例えば、株式投資では企業の業績悪化や経済情勢の変化により、株価が下落し元本を失うリスクがあります。一方、預金や国債などの低リスク商品では、元本は保護されますが、リターンも低くなります。</p>
        </div>
        
        <div class="mb-6">
          <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
            <ChevronRight className="h-5 w-5 text-primary" />
            主な投資の種類とリスク・リターン
          </h3>
          <p class="mb-4 text-base leading-relaxed">投資商品にはさまざまな種類があり、それぞれに特徴的なリスクとリターンのバランスがあります。以下に代表的な投資商品とその特徴を示します。</p>
          <div class="overflow-x-auto my-4">
            <table class="min-w-full border border-gray-300 rounded-lg overflow-hidden shadow-sm">
              <thead>
                <tr class="bg-gradient-to-r from-gray-100 to-gray-200">
                  <th class="border-b border-r border-gray-300 px-4 py-2 text-left font-semibold text-gray-700">投資商品</th>
                  <th class="border-b border-r border-gray-300 px-4 py-2 text-left font-semibold text-gray-700">リスク</th>
                  <th class="border-b border-gray-300 px-4 py-2 text-left font-semibold text-gray-700">リターン</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white even:bg-gray-50">
                  <td class="border-b border-r border-gray-200 px-4 py-2 font-medium text-gray-800">預金・貯金</td>
                  <td class="border-b border-r border-gray-200 px-4 py-2 text-gray-600">非常に低い</td>
                  <td class="border-b border-gray-200 px-4 py-2 text-gray-600">低い</td>
                </tr>
                <tr class="bg-white even:bg-gray-50">
                  <td class="border-b border-r border-gray-200 px-4 py-2 font-medium text-gray-800">国債</td>
                  <td class="border-b border-r border-gray-200 px-4 py-2 text-gray-600">低い</td>
                  <td class="border-b border-gray-200 px-4 py-2 text-gray-600">やや低い</td>
                </tr>
                <tr class="bg-white even:bg-gray-50">
                  <td class="border-b border-r border-gray-200 px-4 py-2 font-medium text-gray-800">投資信託</td>
                  <td class="border-b border-r border-gray-200 px-4 py-2 text-gray-600">中程度</td>
                  <td class="border-b border-gray-200 px-4 py-2 text-gray-600">中程度</td>
                </tr>
                <tr class="bg-white even:bg-gray-50">
                  <td class="border-b border-r border-gray-200 px-4 py-2 font-medium text-gray-800">株式</td>
                  <td class="border-b border-r border-gray-200 px-4 py-2 text-gray-600">高い</td>
                  <td class="border-b border-gray-200 px-4 py-2 text-gray-600">高い</td>
                </tr>
                <tr class="bg-white even:bg-gray-50">
                  <td class="border-r border-gray-200 px-4 py-2 font-medium text-gray-800">暗号資産</td>
                  <td class="border-r border-gray-200 px-4 py-2 text-gray-600">非常に高い</td>
                  <td class="px-4 py-2 text-gray-600">非常に高い</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="mb-4 text-base leading-relaxed">この表からわかるように、リスクが低い商品ほどリターンも低く、リスクが高い商品ほどリターンも高くなります。自分のリスク許容度に合った商品を選ぶことが重要です。</p>
        </div>
        
        <div class="mb-6">
          <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
            <ChevronRight className="h-5 w-5 text-primary" />
            リスク管理の方法
          </h3>
          <p class="mb-4 text-base leading-relaxed">リスクを完全に排除することはできませんが、いくつかの方法でリスクを管理・軽減することが可能です。</p>
          <ul class="list-disc pl-6 mb-4 space-y-2">
            <li class="pl-2">分散投資：異なる資産クラス、業種、地域に投資を分散させることで、特定の投資先の不調による損失を他の投資先の利益で補うことができます。</li>
            <li class="pl-2">ドルコスト平均法：定期的に一定額を投資することで、市場のタイミングを気にする必要がなくなり、平均的な購入単価を抑えることができます。</li>
            <li class="pl-2">ストップロス注文：予め損切りのラインを設定しておくことで、大きな損失を被るのを防ぐことができます。</li>
            <li class="pl-2">ポートフォリオの見直し：定期的にポートフォリオを見直し、自分のリスク許容度や目標に合った資産配分を維持することが重要です。</li>
          </ul>
        </div>
        
        <div class="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h3 class="font-bold text-blue-800 flex items-center gap-2 mb-2">
            <Award className="h-5 w-5" />
            リスク許容度の自己診断
          </h3>
          <p class="text-blue-700 text-base leading-relaxed">自分のリスク許容度を理解することで、適切な投資商品を選ぶことができます。リスク許容度診断ツールを使って、自分の適した投資スタイルを見つけてみましょう。診断では、あなたの年齢、収入、投資経験、目標などを考慮し、最適な投資戦略を提案します。</p>
        </div>
      `,
      date: "2024年10月30日",
    },
    {
      id: "diversification",
      title: "分散投資の重要性と基本戦略",
      content: `
        <div class="mb-6">
          <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
            <ChevronRight className="h-5 w-5 text-primary" />
            分散投資とは
          </h3>
          <p class="mb-4 text-base leading-relaxed">分散投資とは、資産を一つの投資先に集中させるのではなく、複数の投資先に分散させることで、特定の投資先のリスクを軽減する投資戦略です。これは投資の基本原則の一つであり、すべての投資家が理解すべき重要な概念です。</p>
          <p class="mb-4 text-base leading-relaxed">分散投資の効果は、一つの投資先が下落しても、他の投資先が上昇することで損失を補うことができる点にあります。これにより、全体のポートフォリオの変動を抑えることができ、安定した資産運用が可能になります。</p>
        </div>
        
        <div class="mb-6">
          <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
            <ChevronRight className="h-5 w-5 text-primary" />
            分散投資の方法
          </h3>
          <p class="mb-4 text-base leading-relaxed">分散投資にはさまざまな方法があります。効果的な分散投資を行うためには、以下の複数の軸で分散することが重要です。</p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
            <div class="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <h4 class="font-bold text-gray-800 flex items-center gap-2 mb-2">
                <TrendingUp className="h-4 w-4 text-primary" />
                資産の分散
              </h4>
              <p class="text-gray-600 text-sm leading-relaxed">株式、債券、不動産など、異なる資産クラスに分散することで、特定の資産クラスの不調による損失を他の資産クラスの利益で補うことができます。</p>
            </div>
            <div class="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <h4 class="font-bold text-gray-800 flex items-center gap-2 mb-2">
                <LineChart className="h-4 w-4 text-primary" />
                地域の分散
              </h4>
              <p class="text-gray-600 text-sm leading-relaxed">国内だけでなく、海外の資産にも投資することで、特定の国の経済状況による影響を軽減できます。例えば、日本経済が不調でも、海外経済が好調であれば損益が相殺されます。</p>
            </div>
            <div class="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <h4 class="font-bold text-gray-800 flex items-center gap-2 mb-2">
                <Coins className="h-4 w-4 text-primary" />
                時間の分散
              </h4>
              <p class="text-gray-600 text-sm leading-relaxed">定期的に少額ずつ投資（ドルコスト平均法）することで、市場のタイミングを気にする必要がなくなり、平均的な購入単価を抑えることができます。</p>
            </div>
          </div>
        </div>
        
        <div class="mb-6">
          <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
            <ChevronRight className="h-5 w-5 text-primary" />
            分散投資の注意点
          </h3>
          <p class="mb-4 text-base leading-relaxed">分散投資にも注意すべき点があります。まず、分散しすぎるとリターンも低下する可能性があるため、適度な分散が重要です。また、単に銘柄数を増やすだけでは分散投資とは言えません。本当に効果的な分散投資を行うには、相関の低い資産に投資する必要があります。</p>
          <p class="mb-4 text-base leading-relaxed">例えば、同じ業種の株式に投資しても、業種リスクを回避することはできません。本当に効果的な分散投資を行うには、異なる業種、異なる資産クラス、異なる地域に投資する必要があります。</p>
        </div>
        
        <div class="bg-green-50 p-4 rounded-lg border border-green-200">
          <h3 class="font-bold text-green-800 flex items-center gap-2 mb-2">
            <BookOpen className="h-5 w-5" />
            分散投資の効果
          </h3>
          <p class="text-green-700 text-base leading-relaxed">分散投資により、特定の資産や地域の不調による損失を他の資産の利益で補うことができ、全体のリスクを軽減できます。ただし、分散しすぎるとリターンも低下する可能性があるため、適度な分散が重要です。また、分散投資はリスクを完全に排除するものではありませんが、リスクを適切に管理するための有効な手段です。</p>
        </div>
      `,
      date: "2024年10月30日",
    },
    {
      id: "long-term",
      title: "長期投資のメリットとコツ",
      content: `
        <div class="mb-6">
          <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
            <ChevronRight className="h-5 w-5 text-primary" />
            長期投資のメリット
          </h3>
          <p class="mb-4 text-base leading-relaxed">長期投資には多くのメリットがあります。まず、複利効果による資産の雪だるま式増加が挙げられます。これは、投資で得た利益を再投資することで、利益がさらに利益を生むという効果です。時間の経過とともにこの効果は顕著になります。</p>
          <ul class="list-disc pl-6 mb-4 space-y-2">
            <li class="pl-2">複利効果による資産の雪だるま式増加：投資で得た利益を再投資することで、利益がさらに利益を生むという効果があります。</li>
            <li class="pl-2">短期的な値動きに左右されず、安定した資産形成が可能：短期的な市場の変動に一喜一憂する必要がなく、長期的な視点で資産を運用できます。</li>
            <li class="pl-2">手数料などのコストを抑えられる：頻繁に売買する短期投資よりも、長期的に保有することで取引コストを抑えることができます。</li>
            <li class="pl-2">時間の経過とともにリスクが軽減される：統計的に見ると、投資期間が長くなるほどマイナスのリターンになる確率が低くなります。</li>
          </ul>
        </div>
        
        <div class="mb-6">
          <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
            <ChevronRight className="h-5 w-5 text-primary" />
            長期投資のコツ
          </h3>
          <p class="mb-4 text-base leading-relaxed">長期投資を成功させるためには、以下のコツが重要です。</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div class="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <h4 class="font-bold text-gray-800 flex items-center gap-2 mb-2">
                <Users className="h-4 w-4 text-primary" />
                継続が何より重要
              </h4>
              <p class="text-gray-600 text-sm leading-relaxed">定期的な積立投資により、市場のタイミングを気にする必要がなくなります。これはドルコスト平均法と呼ばれ、長期的には効果的な投資戦略です。</p>
            </div>
            <div class="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <h4 class="font-bold text-gray-800 flex items-center gap-2 mb-2">
                <Calculator className="h-4 w-4 text-primary" />
                複利効果を活用
              </h4>
              <p class="text-gray-600 text-sm leading-relaxed">利益を再投資することで、雪だるま式に資産が増加します。時間は長期投資の最も重要な味方です。</p>
            </div>
            <div class="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <h4 class="font-bold text-gray-800 flex items-center gap-2 mb-2">
                <PieChart className="h-4 w-4 text-primary" />
                分散投資を徹底
              </h4>
              <p class="text-gray-600 text-sm leading-relaxed">リスクを軽減し、安定したリターンを目指します。長期投資でも分散投資は重要です。</p>
            </div>
            <div class="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <h4 class="font-bold text-gray-800 flex items-center gap-2 mb-2">
                <Lightbulb className="h-4 w-4 text-primary" />
                情報収集と学習
              </h4>
              <p class="text-gray-600 text-sm leading-relaxed">正しい知識を身につけ、感情的な判断を避けます。長期投資でも市場の動向を理解することは重要です。</p>
            </div>
          </div>
        </div>
        
        <div class="mb-6">
          <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
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
        </div>
        
        <div class="bg-purple-50 p-4 rounded-lg border border-purple-200">
          <h3 class="font-bold text-purple-800 flex items-center gap-2 mb-2">
            <Award className="h-5 w-5" />
            長期投資成功の秘訣
          </h3>
          <p class="text-purple-700 text-base leading-relaxed">長期投資の成功には、継続的な積立、分散投資、そして市場の変動に一喜一憂しない冷静な姿勢が重要です。感情に左右されず、計画的に投資を続けることが、資産形成の鍵となります。また、自分の目標や状況に応じて戦略を見直す柔軟性も必要です。</p>
        </div>
      `,
      date: "2024年10月30日",
    },
    {
      id: "investment-planning",
      title: "投資計画の立て方と目標設定",
      content: `
        <div class="mb-6">
          <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
            <ChevronRight className="h-5 w-5 text-primary" />
            投資計画の重要性
          </h3>
          <p class="mb-4 text-base leading-relaxed">投資を始める前に、明確な投資計画を立てることは非常に重要です。投資計画には、投資の目的、目標、リスク許容度、投資期間、資産配分などが含まれます。適切な投資計画を立てることで、感情的な判断を避け、計画的に資産を運用することが可能になります。</p>
        </div>
        
        <div class="mb-6">
          <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
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
        </div>
        
        <div class="mb-6">
          <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
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
        </div>
        
        <div class="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
          <h3 class="font-bold text-indigo-800 flex items-center gap-2 mb-2">
            <Award className="h-5 w-5" />
            投資計画の成功の秘訣
          </h3>
          <p class="text-indigo-700 text-base leading-relaxed">投資計画の成功には、柔軟性と継続性が重要です。人生の状況や目標が変化するにつれて、投資計画も見直す必要があります。また、一度立てた計画を継続的に実行することが、長期的な資産形成の鍵となります。</p>
        </div>
      `,
      date: "2024年10月30日",
    },
  ];

  // 関連ツール
  const tools = [
    {
      title: "リスク許容度診断",
      description: "自分のリスク許容度を診断し、適切な投資戦略を見つけましょう",
      href: "/tools/risk-assessment",
      icon: Users,
    },
    {
      title: "複利計算シミュレータ",
      description: "長期投資の効果を可視化する複利計算ツール",
      href: "/tools/compound-interest",
      icon: Calculator,
    },
  ];

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

        {/* Page Header */}
        <section className="relative py-20 container mx-auto px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 animate-fade-in" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <Badge variant="secondary" className="mb-6 px-6 py-2 text-sm font-semibold animate-fade-in hover:scale-105 transition-transform">
              投資基礎知識
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-fade-in">
              投資の基礎をしっかり学ぼう
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
              投資初心者の方でもわかりやすく、投資の基本的な概念から実践的な戦略までを段階的に学ぶことができます。
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden border-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-card/50">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-primary/20 via-primary/10 to-accent/10 p-8 flex flex-col items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <BookOpen className="h-20 w-20 text-primary mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-bold text-center relative z-10">投資の基礎知識</h3>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">投資を始める前に知っておくべきこと</h2>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      投資は資産形成の重要な手段ですが、同時にリスクも伴います。成功するためには、基本的な知識と正しい理解が不可欠です。
                      このセクションでは、投資の基本概念から始めて、リスク管理、分散投資、長期投資の重要性までをわかりやすく解説します。
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors">初心者向け</Badge>
                      <Badge variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors">基礎知識</Badge>
                      <Badge variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors">リスク管理</Badge>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Articles */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">基礎知識コンテンツ</h2>
              <p className="text-muted-foreground">
                投資の基本を段階的に学ぶための詳細なコンテンツです。
              </p>
            </div>
            
            <div className="space-y-8">
              {articles.map((article, index) => (
                <Card key={article.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 bg-gradient-to-br from-card to-card/80 hover:border-primary/30">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="secondary" className="rounded-full w-8 h-8 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        {index + 1}
                      </Badge>
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{article.title}</h3>
                    </div>
                    <div 
                      className="article-content mb-4"
                      dangerouslySetInnerHTML={{ __html: article.content }}
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tools */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">関連ツール</h2>
                <p className="text-muted-foreground">
                  学んだ知識を実践するための便利なツールをご紹介します。
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tools.map((tool, index) => (
                  <Card key={tool.title} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 bg-gradient-to-br from-card to-card/80 hover:border-primary/30 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/10 rounded-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                          <tool.icon className="h-7 w-7 text-primary" />
                        </div>
                        <CardTitle className="group-hover:text-primary transition-colors">{tool.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{tool.description}</p>
                      <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                        <Link to={tool.href}>
                          ツールを使う →
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 border-2 border-primary/30 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-50" />
                <CardContent className="p-10 text-center relative z-10">
                  <div className="inline-block p-4 bg-background rounded-full mb-6 animate-pulse">
                    <Lightbulb className="h-12 w-12 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">投資の基礎をしっかり学びましたか？</h2>
                  <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                    投資の基本を理解したら、次は自分に合った投資方法を見つけるための診断ツールを試してみましょう。
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="text-lg px-8 hover:scale-105 transition-transform">
                      <Link to="/#診断">
                        投資診断を始める →
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="text-lg px-8 hover:scale-105 transition-transform">
                      <Link to="/comparison">
                        証券会社を比較する
                      </Link>
                    </Button>
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

export default Basics;