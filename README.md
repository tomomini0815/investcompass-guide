# 投資コンパスガイド (InvestCompass Guide)

投資コンパスガイドは、投資初心者から中級者までを対象とした包括的な投資情報サイトです。証券会社比較、暗号資産取引所比較、FX業者比較、投資ガイドなどの機能を提供しています。

## プロジェクト概要

このプロジェクトは、投資に関する情報を分かりやすく提供し、ユーザーが適切な投資判断を行えるように支援することを目的としています。

## 開発環境のセットアップ

### 前提条件

- Node.js (バージョン16以上)
- npm (通常Node.jsと一緒にインストールされます)

### セットアップ手順

```sh
# Step 1: リポジトリをクローン
git clone https://github.com/tomomini0815/investcompass-guide.git

# Step 2: プロジェクトディレクトリに移動
cd investcompass-guide

# Step 3: 依存関係をインストール
npm install

# Step 4: 開発サーバーを起動
npm run dev
```

開発サーバーが起動すると、通常は http://localhost:8080 でアプリケーションにアクセスできます。

## 使用技術

このプロジェクトは以下の技術スタックで構築されています：

- Vite (ビルドツール)
- TypeScript
- React
- shadcn-ui (UIコンポーネント)
- Tailwind CSS (スタイリング)
- React Router (ルーティング)
- Lucide React (アイコン)

## デプロイ

このプロジェクトはGitHub Pagesを使用してデプロイされています。

デプロイ手順：

```sh
# ビルド
npm run build

# デプロイ
npm run deploy
```

## ディレクトリ構造

```
investcompass-guide/
├── public/              # 静的ファイル
├── src/                 # ソースコード
│   ├── components/      # Reactコンポーネント
│   ├── pages/           # ページコンポーネント
│   ├── App.tsx          # メインアプリコンポーネント
│   └── main.tsx         # エントリーポイント
├── index.html           # メインHTMLファイル
├── package.json         # 依存関係とスクリプト
└── vite.config.ts       # Vite設定ファイル
```

## 貢献方法

1. リポジトリをフォーク
2. 新しいブランチを作成 (`git checkout -b feature/AmazingFeature`)
3. 変更をコミット (`git commit -m 'Add some AmazingFeature'`)
4. ブランチにプッシュ (`git push origin feature/AmazingFeature`)
5. プルリクエストを作成

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。詳細は[LICENSE](LICENSE)ファイルを参照してください。