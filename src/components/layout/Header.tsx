import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, TrendingUp, X, PanelLeft, PanelRight, AlignJustify } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    { name: "ホーム", href: "/" },
    { name: "証券会社比較", href: "/comparison" },
    { name: "暗号資産取引所比較", href: "/crypto-comparison" },
    { name: "FX業者比較", href: "/fx-comparison" },
    { name: "投資ガイド", href: "/guide/investment-basics" },
    { name: "投資計算ツール", href: "/tools" },
  ];

  // 現在のパスに基づいてアクティブなナビゲーション項目を判定する関数
  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  // 投資診断セクションにスクロールする関数
  const scrollToDiagnostic = () => {
    // risk-assessmentページでない場合はrisk-assessmentページに移動
    if (location.pathname !== "/tools/risk-assessment") {
      navigate("/tools/risk-assessment#diagnostic-tool");
    } else {
      // ページ遷移後に診断ツールセクションにスクロール
      setTimeout(() => {
        const element = document.getElementById("diagnostic-tool");
        if (element) {
          const headerHeight = document.querySelector('header')?.offsetHeight || 0;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
          
          // モバイルメニューが開いている場合は閉じる
          setIsMobileMenuOpen(false);
        }
      }, 100);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <div className="gradient-primary p-2 rounded-lg">
            <TrendingUp className="h-6 w-6 text-white" />
          </div>
          <span className="text-primary">投資総合ナビ</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-sm font-medium transition-colors px-3 py-2 rounded-md ${
                isActive(item.href)
                  ? "text-primary bg-primary/20 font-semibold"
                  : "text-foreground/80 hover:text-primary hover:bg-accent"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Button variant="default" size="sm" onClick={scrollToDiagnostic} className="ml-2">
            総合診断を始める
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-10 w-10 drop-shadow-[0_0_1px_rgba(0,0,0,1)]" /> : <AlignJustify className="h-10 w-10 drop-shadow-[0_0_1px_rgba(0,0,0,1)]" />}
        </Button>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container mx-auto px-4 py-4 space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block py-2 text-sm font-medium transition-colors px-3 rounded-md ${
                  isActive(item.href)
                    ? "text-primary bg-primary/20 font-semibold"
                    : "text-foreground/80 hover:text-primary hover:bg-accent"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button variant="default" size="sm" className="w-full mt-2" onClick={scrollToDiagnostic}>
              総合診断を始める
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;