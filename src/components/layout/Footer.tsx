import { Link } from "react-router-dom";
import { TrendingUp } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    "投資の基礎": [
      { name: "投資とは", href: "/basics" },
      { name: "リスクとリターン", href: "/basics" },
      { name: "投資用語集", href: "/basics" },
    ],
    "投資商品": [
      { name: "株式投資", href: "/stocks" },
      { name: "NISA・つみたてNISA", href: "/nisa" },
      { name: "iDeCo", href: "/basics" },
      { name: "仮想通貨", href: "/crypto" },
    ],
    "ツール": [
      { name: "複利計算", href: "/tools-detail" },
      { name: "投資診断", href: "/#診断" },
      { name: "証券会社比較", href: "/comparison" },
    ],
    "比較": [
      { name: "証券会社", href: "/comparison" },
      { name: "FX業者", href: "/fx-comparison" },
      { name: "暗号資産", href: "/crypto-comparison" },
    ],
  };

  return (
    <footer className="border-t bg-muted/30 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap justify-between gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4 flex-1 min-w-[200px]">
            <Link to="/" className="flex items-center gap-2 font-bold text-xl">
              <div className="gradient-primary p-2 rounded-lg">
                <TrendingUp className="h-5 w-5 text-white" />
              </div>
              <span className="text-primary">投資総合ガイド</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              あなたの投資を成功に導く完全ガイド。初心者から中級者まで、信頼性の高い情報をお届けします。
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="flex-1 min-w-[200px]">
              <h3 className="font-semibold mb-4 text-foreground">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024-2025 投資総合ガイド. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-primary transition-colors">
              プライバシーポリシー
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors">
              利用規約
            </Link>
            <Link to="/disclaimer" className="hover:text-primary transition-colors">
              免責事項
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;