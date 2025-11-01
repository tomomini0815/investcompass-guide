# 投資総合ガイド

## プロジェクト概要

このプロジェクトは、投資初心者から中級者までを対象とした包括的な投資ガイドサイトです。株式投資、NISA、iDeCo、仮想通貨など、あらゆる投資商品について徹底解説し、信頼できる情報でユーザーの資産形成をサポートします。

## 機能

- 証券会社比較機能
- 暗号資産取引所比較機能
- FX業者比較機能
- 投資診断ツール
- 投資ガイド記事
- 計算ツール

## 開発環境のセットアップ

### 必要条件

- Node.js (推奨: 最新のLTSバージョン)
- npm または yarn

### セットアップ手順

```sh
# Step 1: リポジトリをクローン
git clone <YOUR_GIT_URL>

# Step 2: プロジェクトディレクトリに移動
cd <YOUR_PROJECT_NAME>

# Step 3: 依存関係をインストール
npm i

# Step 4: 開発サーバーを起動
npm run dev
```

### 開発コマンド

- `npm run dev`: 開発サーバーを起動
- `npm run build`: 本番ビルドを作成
- `npm run preview`: ビルド後のプレビューを表示
- `npm run lint`: コードのLintチェック

## 技術スタック

このプロジェクトは以下の技術で構築されています：

- **Vite**: 高速な開発ツール
- **TypeScript**: 型安全なJavaScript
- **React**: コンポーネントベースのUIライブラリ
- **shadcn-ui**: アクセシブルなUIコンポーネント
- **Tailwind CSS**: ユーティリティファーストのCSSフレームワーク

## ディレクトリ構造

```
src/
├── components/
│   ├── features/     # 機能別コンポーネント
│   ├── layout/       # レイアウトコンポーネント
│   └── ui/           # UIコンポーネント
├── pages/            # ページコンポーネント
├── assets/           # 静的アセット
├── hooks/            # カスタムフック
└── lib/              # ユーティリティ関数
```

## デプロイ

このプロジェクトは、以下の手順でデプロイできます：

1. `npm run build` で本番ビルドを作成
2. ビルドされたファイルを任意のホスティングサービスにアップロード

一般的なホスティングサービス:
- Vercel
- Netlify
- GitHub Pages
- その他の静的サイトホスティングサービス

## 貢献

このプロジェクトに貢献する場合は、以下の手順に従ってください：

1. リポジトリをフォーク
2. 新しいブランチを作成 (`git checkout -b feature/AmazingFeature`)
3. 変更をコミット (`git commit -m 'Add some AmazingFeature'`)
4. ブランチにプッシュ (`git push origin feature/AmazingFeature`)
5. プルリクエストを作成

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。詳細は[LICENSE](LICENSE)ファイルを参照してください。