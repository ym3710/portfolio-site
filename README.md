# portfolio-site

プログラミング未経験からWeb制作を学ぶ過程で作った個人サイト。学習記録であると同時に、就職活動・副業の実績としても運用している。

**公開URL:** https://ym3710.github.io/portfolio-site/

## 使用技術

- HTML / CSS / JavaScript（フレームワークなし、素の実装）
- [Supabase](https://supabase.com/)（データベース、認証）
- GitHub Pages（静的サイトホスティング）

## ページ一覧

| ページ | 内容 |
|---|---|
| `index.html` | 自己紹介ページ。各ツールへのリンクを掲載 |
| `memo.html` | 投稿アイデアメモ。追加・編集・削除ができるCRUDアプリ。Supabaseの`memos`テーブルと連携 |
| `quote.html` | 今日の一言。外部API（api.adviceslip.com）と連携し、fetch/async-awaitを練習したページ |
| `log.html` | 学習ログ×投稿ログ。Supabase Authによるログイン機能付き。ユーザーごとにRLS（Row Level Security）でデータを分離し、自分の記録だけが見える設計 |

## なぜ作ったか

Claude Codeを使いながらWeb制作を学ぶ過程の記録として作成した。学習用のサンプルで終わらせず、`log.html`のように「今日学んだこと」「SNSに投稿したか」を自分自身が実際に使い続けられるツールまで発展させることを目標にした。

## 学んだこと

- git / GitHubを使ったバージョン管理とデプロイ
- Supabaseを使ったデータベース連携（CRUD操作）
- Supabase Authによるユーザー認証と、RLSによるアクセス制御
- 外部APIとの連携（fetch, async/await, エラーハンドリング）
