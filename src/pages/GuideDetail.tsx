import { useParams, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar, ArrowLeft, ExternalLink, BookOpen, TrendingUp, Shield } from "lucide-react";

const GuideDetail = () => {
  const { id } = useParams();

  // サンプルデータ（実際はAPIやデータベースから取得）
  const articles: Record<string, any> = {
    "nisa-beginner": {
      title: "【2024年最新版】NISA完全ガイド：初心者が知るべき全て",
      category: "NISA",
      date: "2024年1月15日",
      readTime: "8分",
      icon: "📚",
      content: `
        <div class="space-y-6">
          <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 md:p-6 rounded-xl border border-blue-100">
            <h2 class="text-xl md:text-2xl font-bold text-blue-800 mb-3 md:mb-4">
              <BookOpen className="h-5 w-5 md:h-6 md:w-6 inline-block mr-2 align-middle" />
              <span class="align-middle">NISAとは？</span>
            </h2>
            <p class="text-gray-700">NISA（ニーサ：少額投資非課税制度）は、投資で得た利益が非課税になる制度です。2024年から新しいNISA制度が始まり、より使いやすくなりました。</p>
          </div>
          
          <div class="border-2 border-blue-200 rounded-xl">
            <div class="p-4 md:p-6">
              <h3 class="text-lg md:text-xl font-bold text-blue-800 mb-4">
                <TrendingUp className="h-5 w-5 inline-block mr-2 align-middle" />
                <span class="align-middle">新NISAの3つの特徴</span>
              </h3>
              <div class="space-y-4">
                <div class="p-3 md:p-4 bg-blue-50 rounded-lg">
                  <h4 class="font-bold text-base md:text-lg text-blue-700 mb-2">1. 非課税期間の無期限化</h4>
                  <p class="text-gray-700 text-sm md:text-base">従来のNISAでは5年間だった非課税期間が、無期限になりました。長期投資がしやすくなっています。</p>
                </div>
                
                <div class="p-3 md:p-4 bg-blue-50 rounded-lg">
                  <h4 class="font-bold text-base md:text-lg text-blue-700 mb-2">2. 年間投資枠の拡大</h4>
                  <p class="text-gray-700 text-sm md:text-base">つみたて投資枠：年間120万円、成長投資枠：年間240万円の合計360万円まで投資できるようになりました。</p>
                </div>
                
                <div class="p-3 md:p-4 bg-blue-50 rounded-lg">
                  <h4 class="font-bold text-base md:text-lg text-blue-700 mb-2">3. 非課税保有限度額の設定</h4>
                  <p class="text-gray-700 text-sm md:text-base">生涯で1,800万円まで（成長投資枠は1,200万円まで）投資できます。売却した分の枠は翌年に復活します。</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="border-2 border-green-200 rounded-xl">
            <div class="p-4 md:p-6">
              <h3 class="text-lg md:text-xl font-bold text-green-800 mb-4">NISAの始め方</h3>
              <ol class="space-y-3">
                <li class="flex items-start gap-3">
                  <span class="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  <span class="text-sm md:text-base">証券会社を選ぶ</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  <span class="text-sm md:text-base">NISA口座を開設する</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  <span class="text-sm md:text-base">投資する商品を選ぶ</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                  <span class="text-sm md:text-base">定期的に投資を続ける</span>
                </li>
              </ol>
            </div>
          </div>
          
          <div class="bg-gradient-to-r from-purple-50 to-pink-50 p-4 md:p-6 rounded-xl border border-purple-100">
            <h2 class="text-xl md:text-2xl font-bold text-purple-800 mb-3 md:mb-4">初心者におすすめの投資方法</h2>
            <p class="text-gray-700 mb-2 md:mb-3 text-sm md:text-base">NISAを始める初心者には、つみたて投資枠を使った「インデックスファンド」への積立投資がおすすめです。</p>
            <p class="text-gray-700 text-sm md:text-base">月々1万円から始められ、長期的な資産形成に適しています。</p>
          </div>
          
          <div class="bg-gradient-to-r from-amber-50 to-orange-50 p-4 md:p-6 rounded-xl border border-amber-100">
            <h2 class="text-xl md:text-2xl font-bold text-amber-800 mb-3 md:mb-4">まとめ</h2>
            <p class="text-gray-700 text-sm md:text-base">新NISAは、投資初心者にとって非常に有利な制度です。非課税のメリットを活かして、計画的に資産形成を始めましょう。</p>
          </div>
        </div>
      `,
    },
    "stocks-beginner": {
      title: "株式投資の始め方：証券口座開設から銘柄選びまで",
      category: "株式投資",
      date: "2024年1月12日",
      readTime: "10分",
      icon: "📈",
      content: `
        <div class="space-y-6">
          <div class="bg-gradient-to-r from-green-50 to-emerald-50 p-4 md:p-6 rounded-xl border border-green-100">
            <h2 class="text-xl md:text-2xl font-bold text-green-800 mb-3 md:mb-4 flex items-center gap-2">
              <BookOpen class="h-5 w-5 md:h-6 md:w-6" />
              株式投資とは
            </h2>
            <p class="text-gray-700 text-sm md:text-base">株式投資は、企業が発行する株式を購入し、その企業の成長や配当金によって利益を得る投資方法です。</p>
          </div>
          
          <div class="border-2 border-green-200 rounded-xl">
            <div class="p-4 md:p-6">
              <h3 class="text-lg md:text-xl font-bold text-green-800 mb-4">株式投資を始める手順</h3>
              <div class="space-y-4">
                <div class="p-3 md:p-4 bg-green-50 rounded-lg">
                  <h4 class="font-bold text-base md:text-lg text-green-700 mb-2">1. 証券口座を開設する</h4>
                  <p class="text-gray-700 text-sm md:text-base">まずは証券会社で口座を開設します。ネット証券なら手数料が安く、初心者にもおすすめです。</p>
                </div>
                
                <div class="p-3 md:p-4 bg-green-50 rounded-lg">
                  <h4 class="font-bold text-base md:text-lg text-green-700 mb-2">2. 投資資金を用意する</h4>
                  <p class="text-gray-700 text-sm md:text-base">生活費や緊急資金とは別に、投資に回せる余裕資金を準備しましょう。</p>
                </div>
                
                <div class="p-3 md:p-4 bg-green-50 rounded-lg">
                  <h4 class="font-bold text-base md:text-lg text-green-700 mb-2">3. 投資する銘柄を選ぶ</h4>
                  <p class="text-gray-700 text-sm md:text-base">企業の業績、成長性、配当利回りなどを考慮して銘柄を選びます。</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="border-2 border-amber-200 rounded-xl">
            <div class="p-4 md:p-6">
              <h3 class="text-lg md:text-xl font-bold text-amber-800 mb-4">初心者が気をつけるべきポイント</h3>
              <ul class="space-y-3">
                <li class="flex items-start gap-3">
                  <span class="flex-shrink-0 w-5 h-5 bg-amber-500 text-white rounded-full flex items-center justify-center text-xs">✓</span>
                  <span class="text-sm md:text-base">一度に大金を投資しない</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="flex-shrink-0 w-5 h-5 bg-amber-500 text-white rounded-full flex items-center justify-center text-xs">✓</span>
                  <span class="text-sm md:text-base">複数の銘柄に分散投資する</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="flex-shrink-0 w-5 h-5 bg-amber-500 text-white rounded-full flex items-center justify-center text-xs">✓</span>
                  <span class="text-sm md:text-base">短期的な値動きに一喜一憂しない</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="flex-shrink-0 w-5 h-5 bg-amber-500 text-white rounded-full flex items-center justify-center text-xs">✓</span>
                  <span class="text-sm md:text-base">継続的に学習を続ける</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      `,
    },
    "investment-trust": {
      title: "投資信託とは？メリット・デメリットと選び方のポイント",
      category: "投資信託",
      date: "2024年1月10日",
      readTime: "7分",
      icon: "💰",
      content: `
        <div class="space-y-6">
          <div class="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 md:p-6 rounded-xl border border-indigo-100">
            <h2 class="text-xl md:text-2xl font-bold text-indigo-800 mb-3 md:mb-4">
              <BookOpen class="h-5 w-5 md:h-6 md:w-6 inline-block mr-2" />
              投資信託の基礎知識
            </h2>
            <p class="text-gray-700 text-sm md:text-base">投資信託は、多くの投資家から集めた資金を、専門家が株式や債券などに投資・運用する金融商品です。</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div class="border-2 border-green-200 rounded-xl">
              <div class="p-4 md:p-6">
                <h3 class="text-lg md:text-xl font-bold text-green-800 mb-4">投資信託のメリット</h3>
                <ul class="space-y-3">
                  <li class="flex items-start gap-3">
                    <span class="flex-shrink-0 w-5 h-5 bg-green-500 text-white rounded-full flex items-center justify-center text-xs">+</span>
                    <span class="text-sm md:text-base">少額から始められる（100円〜）</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="flex-shrink-0 w-5 h-5 bg-green-500 text-white rounded-full flex items-center justify-center text-xs">+</span>
                    <span class="text-sm md:text-base">プロに運用を任せられる</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="flex-shrink-0 w-5 h-5 bg-green-500 text-white rounded-full flex items-center justify-center text-xs">+</span>
                    <span class="text-sm md:text-base">自動的に分散投資ができる</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="flex-shrink-0 w-5 h-5 bg-green-500 text-white rounded-full flex items-center justify-center text-xs">+</span>
                    <span class="text-sm md:text-base">透明性が高い</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div class="border-2 border-red-200 rounded-xl">
              <div class="p-4 md:p-6">
                <h3 class="text-lg md:text-xl font-bold text-red-800 mb-4">投資信託のデメリット</h3>
                <ul class="space-y-3">
                  <li class="flex items-start gap-3">
                    <span class="flex-shrink-0 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center text-xs">-</span>
                    <span class="text-sm md:text-base">手数料がかかる</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="flex-shrink-0 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center text-xs">-</span>
                    <span class="text-sm md:text-base">元本保証がない</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="flex-shrink-0 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center text-xs">-</span>
                    <span class="text-sm md:text-base">短期的な売買には向かない</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="bg-gradient-to-r from-amber-50 to-orange-50 p-4 md:p-6 rounded-xl border border-amber-100">
            <h2 class="text-xl md:text-2xl font-bold text-amber-800 mb-3 md:mb-4">投資信託の選び方</h2>
            <p class="text-gray-700 text-sm md:text-base">インデックスファンドとアクティブファンドの違いを理解し、手数料や過去の運用実績を確認しましょう。</p>
          </div>
        </div>
      `,
    },
    "investment-basics": {
      title: "投資の基本と始め方：初心者必見の基礎知識",
      category: "投資基礎",
      date: "2024年1月20日",
      readTime: "12分",
      icon: "🎓",
      content: `
        <div class="space-y-6">
          <div class="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 md:p-6 rounded-xl border border-blue-100">
            <h2 class="text-xl md:text-2xl font-bold text-blue-800 mb-3 md:mb-4">
              <BookOpen className="h-5 w-5 md:h-6 md:w-6 inline-block mr-2 align-middle" />
              <span class="align-middle">投資の基本と種類</span>
            </h2>
            <p class="text-gray-700 text-sm md:text-base">投資とは、将来の資産増加を期待して、株式、債券、投資信託などの金融商品に資金を投じることです。元本保証ではありませんが、預貯金よりも高いリターン（収益）を期待できます。</p>
          </div>
          
          <div class="border-2 border-blue-200 rounded-xl">
            <div class="p-4 md:p-6">
              <h3 class="text-lg md:text-xl font-bold text-blue-800 mb-4">代表的な投資の種類と特徴</h3>
              <div class="overflow-x-auto -mx-4 md:mx-0">
                <div class="inline-block min-w-full align-middle px-4 md:px-0">
                  <table class="min-w-full border-collapse text-sm md:text-base">
                    <thead>
                      <tr class="bg-blue-50">
                        <th class="border border-blue-200 px-3 py-2 md:px-4 md:py-3 text-left font-bold text-blue-800 whitespace-nowrap">種類</th>
                        <th class="border border-blue-200 px-3 py-2 md:px-4 md:py-3 text-left font-bold text-blue-800 whitespace-nowrap">特徴</th>
                        <th class="border border-blue-200 px-3 py-2 md:px-4 md:py-3 text-left font-bold text-blue-800">主なメリット・デメリット</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="hover:bg-blue-50/50">
                        <td class="border border-blue-200 px-3 py-2 md:px-4 md:py-3 font-semibold whitespace-nowrap">株式投資</td>
                        <td class="border border-blue-200 px-3 py-2 md:px-4 md:py-3">企業の株式を購入し、株主となる。</td>
                        <td class="border border-blue-200 px-3 py-2 md:px-4 md:py-3">
                          <p class="font-semibold text-green-600 mb-1">メリット:</p>
                          <ul class="list-disc pl-4 mb-2 text-xs md:text-sm">
                            <li>売却益（キャピタルゲイン）、配当金、株主優待が得られる可能性がある。</li>
                          </ul>
                          <p class="font-semibold text-red-600 mb-1">デメリット:</p>
                          <ul class="list-disc pl-4 text-xs md:text-sm">
                            <li>株価変動リスクが大きく、元本割れの可能性がある。</li>
                          </ul>
                        </td>
                      </tr>
                      <tr class="hover:bg-blue-50/50">
                        <td class="border border-blue-200 px-3 py-2 md:px-4 md:py-3 font-semibold whitespace-nowrap">債券</td>
                        <td class="border border-blue-200 px-3 py-2 md:px-4 md:py-3">国や地方自治体、企業などが発行する借用証書（国債、社債など）。</td>
                        <td class="border border-blue-200 px-3 py-2 md:px-4 md:py-3">
                          <p class="font-semibold text-green-600 mb-1">メリット:</p>
                          <ul class="list-disc pl-4 mb-2 text-xs md:text-sm">
                            <li>比較的リスクが低く、定期的に利息（インカムゲイン）が得られる。</li>
                          </ul>
                          <p class="font-semibold text-red-600 mb-1">デメリット:</p>
                          <ul class="list-disc pl-4 text-xs md:text-sm">
                            <li>金利変動により価格が変動するリスクがある。</li>
                          </ul>
                        </td>
                      </tr>
                      <tr class="hover:bg-blue-50/50">
                        <td class="border border-blue-200 px-3 py-2 md:px-4 md:py-3 font-semibold whitespace-nowrap">投資信託</td>
                        <td class="border border-blue-200 px-3 py-2 md:px-4 md:py-3">多くの投資家から集めた資金をプロ（運用会社）が運用し、その成果を分配する商品。</td>
                        <td class="border border-blue-200 px-3 py-2 md:px-4 md:py-3">
                          <p class="font-semibold text-green-600 mb-1">メリット:</p>
                          <ul class="list-disc pl-4 mb-2 text-xs md:text-sm">
                            <li>少額から始められ、様々な資産への分散投資が容易。</li>
                            <li>銘柄選びの手間が少ない。</li>
                          </ul>
                          <p class="font-semibold text-red-600 mb-1">デメリット:</p>
                          <ul class="list-disc pl-4 text-xs md:text-sm">
                            <li>運用報酬（信託報酬）がかかる。</li>
                            <li>元本割れの可能性がある。</li>
                          </ul>
                        </td>
                      </tr>
                      <tr class="hover:bg-blue-50/50">
                        <td class="border border-blue-200 px-3 py-2 md:px-4 md:py-3 font-semibold whitespace-nowrap">不動産投資</td>
                        <td class="border border-blue-200 px-3 py-2 md:px-4 md:py-3">アパートやマンションなどを購入し、家賃収入や売却益を目指す。</td>
                        <td class="border border-blue-200 px-3 py-2 md:px-4 md:py-3">
                          <p class="font-semibold text-green-600 mb-1">メリット:</p>
                          <ul class="list-disc pl-4 mb-2 text-xs md:text-sm">
                            <li>安定した家賃収入（インカムゲイン）が期待できる。</li>
                          </ul>
                          <p class="font-semibold text-red-600 mb-1">デメリット:</p>
                          <ul class="list-disc pl-4 text-xs md:text-sm">
                            <li>初期費用が高額。</li>
                            <li>空室リスクや金利上昇リスクなどがある。</li>
                          </ul>
                        </td>
                      </tr>
                      <tr class="hover:bg-blue-50/50">
                        <td class="border border-blue-200 px-3 py-2 md:px-4 md:py-3 font-semibold whitespace-nowrap">iDeCo / NISA</td>
                        <td class="border border-blue-200 px-3 py-2 md:px-4 md:py-3">税制優遇制度を活用した投資方法。</td>
                        <td class="border border-blue-200 px-3 py-2 md:px-4 md:py-3">
                          <p class="font-semibold text-green-600 mb-1">メリット:</p>
                          <ul class="list-disc pl-4 mb-2 text-xs md:text-sm">
                            <li>運用益や掛金が非課税になるなど、税制上の大きな優遇がある。</li>
                          </ul>
                          <p class="font-semibold text-red-600 mb-1">デメリット:</p>
                          <ul class="list-disc pl-4 text-xs md:text-sm">
                            <li>制度ごとの制限（拠出限度額、引き出し制限など）がある。</li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p class="text-xs text-muted-foreground text-center mt-3 md:mt-4 px-4 md:hidden">
                ← 横にスクロールして全項目を確認できます →
              </p>
            </div>
          </div>
          
          <div class="border-2 border-green-200 rounded-xl">
            <div class="p-4 md:p-6">
              <h3 class="text-lg md:text-xl font-bold text-green-800 mb-4">
                <TrendingUp className="h-5 w-5 inline-block mr-2 align-middle" />
                <span class="align-middle">投資の始め方（初心者向け）</span>
              </h3>
              <div class="space-y-4">
                <div class="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-green-50 rounded-lg">
                  <span class="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-xs md:text-sm">1</span>
                  <div>
                    <h4 class="font-bold text-green-800 mb-1 text-sm md:text-base">目的・目標の明確化</h4>
                    <p class="text-gray-700 text-xs md:text-sm">何のために、いつまでに、いくら貯めたいのかを具体的に設定します（例: 老後資金、教育費、住宅購入資金など）。</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-green-50 rounded-lg">
                  <span class="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-xs md:text-sm">2</span>
                  <div>
                    <h4 class="font-bold text-green-800 mb-1 text-sm md:text-base">家計の把握と資金の確保</h4>
                    <p class="text-gray-700 text-xs md:text-sm">毎月の収支を把握し、投資に回せる余剰資金を確認します。生活防衛資金として、ある程度の預貯金は確保しておきましょう。</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-green-50 rounded-lg">
                  <span class="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-xs md:text-sm">3</span>
                  <div>
                    <h4 class="font-bold text-green-800 mb-1 text-sm md:text-base">証券口座の開設</h4>
                    <p class="text-gray-700 text-xs md:text-sm">投資を始めるには、証券会社や銀行で口座を開設する必要があります。</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-green-50 rounded-lg">
                  <span class="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-xs md:text-sm">4</span>
                  <div>
                    <h4 class="font-bold text-green-800 mb-1 text-sm md:text-base">金融商品の選択</h4>
                    <p class="text-gray-700 text-xs md:text-sm">自分のリスク許容度（どれくらい損失が出ても耐えられるか）や目的に合った金融商品を選びます。初心者は、少額から始められる投資信託や、税制優遇のあるNISA・iDeCoの活用がおすすめです。</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-green-50 rounded-lg">
                  <span class="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-xs md:text-sm">5</span>
                  <div>
                    <h4 class="font-bold text-green-800 mb-1 text-sm md:text-base">少額からスタート</h4>
                    <p class="text-gray-700 text-xs md:text-sm">最初は10万円以下の少額から始め、経験を積みながら徐々に投資額を増やしていくのが賢明です。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="border-2 border-purple-200 rounded-xl">
            <div class="p-4 md:p-6">
              <h3 class="text-lg md:text-xl font-bold text-purple-800 mb-4">資産形成のための重要戦略</h3>
              <div class="space-y-4">
                <div class="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-purple-50 rounded-lg">
                  <TrendingUp className="flex-shrink-0 h-4 w-4 md:h-5 md:w-5 text-purple-600 mt-0.5" />
                  <div class="flex-1">
                    <h4 class="font-bold text-purple-800 mb-1 text-sm md:text-base">長期投資</h4>
                    <p class="text-gray-700 text-xs md:text-sm">短期的な価格変動に一喜一憂せず、長期的な視点で資産を育てることで、リスクを抑えながら複利効果を期待できます。</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-purple-50 rounded-lg">
                  <TrendingUp className="flex-shrink-0 h-4 w-4 md:h-5 md:w-5 text-purple-600 mt-0.5" />
                  <div class="flex-1">
                    <h4 class="font-bold text-purple-800 mb-1 text-sm md:text-base">積立投資</h4>
                    <p class="text-gray-700 text-xs md:text-sm">毎月一定額を自動的に買い付けることで、購入時期を分散し、高値掴みのリスクを低減できます（ドルコスト平均法）。</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-purple-50 rounded-lg">
                  <TrendingUp className="flex-shrink-0 h-4 w-4 md:h-5 md:w-5 text-purple-600 mt-0.5" />
                  <div class="flex-1">
                    <h4 class="font-bold text-purple-800 mb-1 text-sm md:text-base">分散投資</h4>
                    <p class="text-gray-700 text-xs md:text-sm">1つの銘柄や資産に集中投資せず、複数の銘柄、資産（株式、債券など）、地域に分けて投資することで、リスクを軽減します。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="border-2 border-amber-200 rounded-xl">
            <div class="p-4 md:p-6">
              <h3 class="text-lg md:text-xl font-bold text-amber-800 mb-4">
                <Shield className="h-4 w-4 md:h-5 md:w-5 inline-block mr-2 align-middle" />
                <span class="align-middle">リスク管理の重要性</span>
              </h3>
              <p class="text-gray-700 mb-3 text-sm md:text-base">投資には必ずリスク（不確実性）が伴い、元本割れする可能性もあります。一般的に、高いリターンを目指すほどリスクも大きくなります。</p>
              
              <div class="space-y-4">
                <div class="p-3 md:p-4 bg-amber-50 rounded-lg">
                  <h4 class="font-bold text-amber-800 mb-2 text-sm md:text-base">リスク許容度の理解</h4>
                  <p class="text-gray-700 text-xs md:text-sm">自分自身がどれくらいのリスクを受け入れられるかを理解することが重要です。</p>
                </div>
                
                <div class="p-3 md:p-4 bg-amber-50 rounded-lg">
                  <h4 class="font-bold text-amber-800 mb-2 text-sm md:text-base">リスクを減らす方法</h4>
                  <p class="text-gray-700 text-xs md:text-sm">長期・積立・分散投資は、リスクを管理する上で非常に有効な手段です。</p>
                </div>
              </div>
              
              <div class="bg-yellow-50 border-l-4 border-yellow-400 p-3 md:p-4 my-4 rounded-r-lg">
                <p class="font-semibold text-yellow-700 text-xs md:text-sm">投資は自己責任で行うものであり、正しい知識を身につけ、無理のない範囲で始めることが成功への鍵となります。</p>
              </div>
            </div>
          </div>
        </div>
      `,
    },
  };

  const article = articles[id || "nisa-beginner"] || articles["nisa-beginner"];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-gradient-to-r from-muted/50 to-muted/30 py-3 md:py-4 border-b">
          <div className="container mx-auto px-4">
            <Link 
              to="/" 
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors group"
            >
              <ArrowLeft className="h-3 w-3 md:h-4 md:w-4 mr-1 group-hover:-translate-x-1 transition-transform" />
              トップページに戻る
            </Link>
          </div>
        </div>

        {/* Article Header */}
        <section className="py-8 md:py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <span className="text-xl md:text-2xl">{article.icon}</span>
              <Badge 
                variant="secondary" 
                className="px-3 py-1 md:px-4 md:py-2 text-xs md:text-sm font-semibold"
              >
                {article.category}
              </Badge>
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 leading-tight">
              {article.title}
            </h1>
            <div className="flex flex-wrap gap-3 md:gap-6 text-xs md:text-sm text-muted-foreground mb-6 md:mb-8 pb-6 md:pb-8 border-b">
              <div className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-muted/50 rounded-lg">
                <Calendar className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-muted/50 rounded-lg">
                <Clock className="h-3 w-3 md:h-4 md:w-4 text-secondary" />
                <span>読了時間: {article.readTime}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-8 md:pb-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Main Content */}
              <article className="lg:col-span-2">
                <div 
                  className="article-content"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              </article>

              {/* Sidebar */}
              <aside className="space-y-6">
                {/* CTA Card */}
                <div className="border-2 border-primary/20 rounded-xl bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/5 shadow-lg overflow-hidden">
                  <div className="p-5 md:p-6">
                    <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 flex items-center gap-2">
                      <span className="text-xl">🚀</span>
                      今すぐ始めよう
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground mb-4">
                      投資を始めるなら、まずは証券口座の開設から。
                    </p>
                    <div className="space-y-3">
                      <Button className="w-full text-sm md:text-base shadow-md hover:shadow-lg transition-shadow" asChild>
                        <Link to="/comparison">
                          証券会社を比較する
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="outline" className="w-full text-sm md:text-base border-2 hover:border-primary/50" asChild>
                        <Link to="/tools">
                          投資をシミュレーション
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Related Articles */}
                <div className="border-2 rounded-xl hover:border-primary/30 transition-colors">
                  <div className="p-5 md:p-6">
                    <h3 className="text-lg md:text-xl font-bold mb-4 flex items-center gap-2">
                      <span className="text-xl">📚</span>
                      関連記事
                    </h3>
                    <div className="space-y-3">
                      {Object.entries(articles)
                        .filter(([key]) => key !== id)
                        .slice(0, 3)
                        .map(([key, relatedArticle]) => (
                          <Link
                            key={key}
                            to={`/guide/${key}`}
                            className="block p-3 rounded-lg text-sm hover:bg-primary/5 hover:text-primary transition-all border border-transparent hover:border-primary/20 group"
                          >
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-base">{relatedArticle.icon}</span>
                              <Badge variant="outline" className="text-xs">
                                {relatedArticle.category}
                              </Badge>
                            </div>
                            <span className="line-clamp-2 group-hover:underline font-medium">{relatedArticle.title}</span>
                          </Link>
                        ))}
                    </div>
                  </div>
                </div>
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