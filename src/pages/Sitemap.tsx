import { Link } from "react-router-dom";
import { ChevronLeft, Home, BookOpen, TrendingUp, Calculator, List, FileText } from "lucide-react";

const Sitemap = () => {
  // サイトマップの構造を定義
  const sitemapStructure = [
    {
      category: "メインページ",
      icon: Home,
      items: [
        { name: "ホーム", href: "/" },
      ]
    },
    {
      category: "投資の基礎知識",
      icon: BookOpen,
      items: [
        { name: "投資の基礎", href: "/basics" },
        { name: "株式投資", href: "/stocks" },
        { name: "NISA・つみたてNISA", href: "/nisa" },
        { name: "投資信託", href: "/investment-trust" },
        { name: "暗号資産", href: "/crypto" },
      ]
    },
    {
      category: "投資ツール",
      icon: Calculator,
      items: [
        { name: "投資ツール一覧", href: "/tools" },
        { name: "複利計算ツール", href: "/tools/compound-interest" },
        { name: "株式リターン計算ツール", href: "/tools/stock-return" },
        { name: "投資信託リターン計算ツール", href: "/tools/fund-return" },
        { name: "暗号資産リターン計算ツール", href: "/tools/crypto-return" },
        { name: "貯蓄計算ツール", href: "/tools/saving-calculator" },
        { name: "リスク診断ツール", href: "/tools/risk-assessment" },
        { name: "FX計算シミュレータ", href: "/tools/fx-calculator" },
      ]
    },
    {
      category: "比較ページ",
      icon: List,
      items: [
        { name: "証券会社比較", href: "/comparison" },
        { name: "FX業者比較", href: "/fx-comparison" },
        { name: "暗号資産取引所比較", href: "/crypto-comparison" },
      ]
    },
    {
      category: "記事一覧",
      icon: FileText,
      items: [
        { name: "記事一覧", href: "/articles" },
      ]
    },
    {
      category: "その他ページ",
      icon: FileText,
      items: [
        { name: "運営会社", href: "/company" },
        { name: "お問い合わせ", href: "/contact" },
        { name: "プライバシーポリシー", href: "/privacy" },
        { name: "利用規約", href: "/terms" },
        { name: "免責事項", href: "/disclaimer" },
        { name: "特定商取引法", href: "/legal" },
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* ヘッダー */}
      <div className="bg-gradient-to-r from-muted/50 to-muted/30 py-4 border-b">
        <div className="container mx-auto px-4">
          <Link 
            to="/" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors group"
          >
            <ChevronLeft className="h-4 w-4 mr-1 group-hover:-translate-x-1 transition-transform" />
            ホームに戻る
          </Link>
        </div>
      </div>

      {/* メインコンテンツ */}
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent text-center">
              サイトマップ
            </h1>
            
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              当サイトのすべてのページへのリンクをカテゴリ別に一覧表示しています。
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sitemapStructure.map((section, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-card to-card/50 border-2 hover:shadow-2xl transition-all duration-300 p-6 rounded-lg"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-accent/20 p-2 rounded-full mr-3">
                      <section.icon className="h-5 w-5 text-accent" />
                    </div>
                    <h2 className="text-xl font-bold">{section.category}</h2>
                  </div>
                  
                  <ul className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <Link
                          to={item.href}
                          className="text-muted-foreground hover:text-primary transition-colors flex items-center py-2"
                        >
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            {/* 更新日 */}
            <div className="pt-8 border-t border-border mt-12">
              <p className="text-sm text-muted-foreground text-right">
                最終更新日：2025年11月10日
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Sitemap;