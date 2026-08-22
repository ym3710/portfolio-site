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
| `lp.html` | 「まなログ」（log.htmlの製品名）を紹介するランディングページ |
| `koshien-ranking.html` | 甲子園パワーランキング。春夏通算の実績データだけで独自にスコア化した非公式ランキング（β版）。データは`koshien-data.js`に分離 |

## 甲子園パワーランキングのデータ出典

`koshien-ranking.html`で使用している各校の春夏別の出場回数・優勝回数・勝利数は、以下のサイトを参照して調べた（2026年8月時点のスナップショット。サイトによって集計時点が異なるため、必ず「同じ学校は同じサイト」で統一し、春+夏=合計が一致することを検算した上で採用）。

- 大阪桐蔭: [hsbb.jp](https://hsbb.jp/school/773)
- 智辯和歌山: [hsbb.jp](https://hsbb.jp/school/695)
- 横浜: [hsbb.jp](https://hsbb.jp/school/383)
- 東海大相模: [hsbb.jp](https://hsbb.jp/school/475)
- 慶應義塾: [data-man.com](https://data-man.com/kokoyakyu/school/school.php?s_id=03140009)（hsbb.jpに該当ページが見つからなかったため）

合計値(出場・優勝・勝利)はデータに直接持たず、`koshien-ranking.html`側で春+夏の数値から毎回計算している（同じ値を2箇所に書くとズレの原因になるため）。

スコアの計算式: `優勝回数 × 10 + 出場回数 × 2 + 通算勝利数 × 1`（学力データは意図的に含めていない。附属校の内部進学など、公平な比較が難しいため）

## なぜ作ったか

Claude Codeを使いながらWeb制作を学ぶ過程の記録として作成した。学習用のサンプルで終わらせず、`log.html`のように「今日学んだこと」「SNSに投稿したか」を自分自身が実際に使い続けられるツールまで発展させることを目標にした。

## 学んだこと

- git / GitHubを使ったバージョン管理とデプロイ
- Supabaseを使ったデータベース連携（CRUD操作）
- Supabase Authによるユーザー認証と、RLSによるアクセス制御
- 外部APIとの連携（fetch, async/await, エラーハンドリング）
