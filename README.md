# kamakura_travel

## サービス概要
kamakura_travelは鎌倉に特化した観光アプリです。
マイナーな箇所に焦点を当ててます。


## 想定されるユーザー層
鎌倉に旅行しに行きたい方。
鎌倉は何回か旅行したことあるけど、マイナースポットを訪れてみたい人



## サービスコンセプト
鎌倉は数多の神社仏閣、自然があり観光地としてとても人気です。
私自身5歳から住み始めてとても住心地のいい街だと感じております。
ただ、鎌倉に限った話ではありませんが、観光地はどうしても有名どころしか紹介されないことがあります。
そのため、私が鎌倉の有名ではないが訪れた人がもっと喜んでくれそうな部分を紹介して観光がもっと楽しくなってくれればと思い作成しました。
定番の観光地ではなく、まだ知られていない、しかし魅力あふれるスポットを発見できます。

## サービスの利用イメージ
鎌倉のマイナーなスポットに訪れてみたい方。
ここで言うマイナーの定義として、googleMapのレビュー総数500件以下で定義します。(現状)
表示領域を鎌倉市全域、text searchに隠れ家、ローカル、穴場などキーワードを入力します。
表示される場所は私がすべて訪れた場所ではもちろんありませんが、特にお気に入りの場所にはピンの色変更、コメントを残しておきたいと考えています。
またユーザーからここもオススメだよといった場所があれば、コメント機能やgoogleformから申請していただくようにしています。


## ユーザーの獲得について
記事での宣伝
友人に使用してもらいたいと考えています。

## サービスの差別化ポイント・推しポイント
多くのSNS、ブログ媒体などで鎌倉は宣伝されていますが、
マイナーな箇所については訪れる人がいないためあまり宣伝されていません。
その部分を埋めるべく所が推しポイントです。

## 実装を予定している機能
### MVP
* トップページ
* 会員登録・ログイン(googleログインのみ)
* 検索機能
* 一覧(地図)表示
* 詳細表示
* 利用規約・プライバシーポリシー
* マイページ
* プロフィール編集
* 口コミ一覧・投稿
* いいね一覧・投稿
* メール送信機能はつけず、google認証とゲストログインのみ
* xシェア

### その後の機能
* イベント予定公開
* 幹事募集
* イベント調整
  * 幹事チャット
  * 幹事タスク管理
* 懇親会（飲み会）登録


## 使用技術
# フロント
* React.js	18.2.0
* Next.js 14.2.28
* TypeScript 5.8.2

# バックエンド
* Ruby 3.4.3	
* Ruby On Rails	7.1.4

# UIコンポーネント
* MUI
* emotion

# gem
* nextauth(google認証ならこちらがよさそう？)
  

# インフラ
* vercel, fly.io

# その他
* Docker
* Git
* GitHub

| 技術                | 推奨バージョン | 正式リリース日        | 出典                   |
| ----------------- | ------- | -------------- | -------------------- |
| **Ruby**          | 3.3.2   | **2024-05-30** | ([Ruby][1])          |
| **Rails**         | 7.1.5   | **2024-10-31** | ([Ruby on Rails][2]) |
| **React**         | 18.3.1  | **2022-06-14** | ([GitHub][3])        |
| **Next.js**       | 14.2.28 | **2025-04-08** | ([GitHub][4])        |
| **Node.js (LTS)** | 20.11.1 | **2024-02-14** | ([Node.js][5])       |
| **TypeScript**    | 5.8.2   | **2025-02-28** | ([GitHub][6])        |
| **MySQL (LTS)**   | 8.4.5   | **2025-04-15** | ([MySQL][7])         |
| **Puma**          | 6.4.2   | **2024-09-19** | ([GitHub][8])        |
| **mysql2 gem**    | 0.5.6   | **2025-02-15** | ([GitHub][9])        |
| **bootsnap**      | 1.18.3  | **2025-01-31** | ([GitHub][10])       |

[1]: https://www.ruby-lang.org/en/news/2024/05/30/ruby-3-3-2-released/?utm_source=chatgpt.com "Ruby 3.3.2 Released"
[2]: https://rubyonrails.org/2024/10/31/Rails-Versions-7-2-2-and-7-1-5-have-been-released?utm_source=chatgpt.com "Rails Versions 7.1.5 and 7.2.2 have been released!"
[3]: https://github.com/facebook/react/releases?utm_source=chatgpt.com "Releases · facebook/react - GitHub"
[4]: https://github.com/vercel/next.js/releases/tag/v14.2.28 "Release v14.2.28 · vercel/next.js · GitHub"
[5]: https://nodejs.org/en/blog/release/v20.11.1 "Node.js — Node v20.11.1 (LTS)"
[6]: https://github.com/microsoft/typescript/releases "Releases · microsoft/TypeScript · GitHub"
[7]: https://dev.mysql.com/doc/relnotes/mysql/8.4/en/news-8-4-5.html?utm_source=chatgpt.com "Changes in MySQL 8.4.5 (2025-04-15, LTS Release)"
[8]: https://github.com/puma/puma/releases/tag/v6.4.2 "Release 6.4.2 · puma/puma · GitHub"
[9]: https://github.com/brianmario/mysql2/releases/tag/0.5.6 "Release Release 0.5.6 · brianmario/mysql2 · GitHub"
[10]: https://github.com/Shopify/bootsnap/releases/tag/v1.18.3 "Release v1.18.3 · Shopify/bootsnap · GitHub"

  
### READMEに記載した機能
- [ ] 新規登録・ログイン機能(google認証のみ)
- [ ] 名前変更機能
- [ ] 記事投稿機能（画像投稿含む）
- [ ] 記事閲覧機能（未ログインでも閲覧可能）
- [ ] 記事編集機能
- [ ] 記事削除機能
- [ ] コメント投稿機能
- [ ] コメント閲覧機能（未ログインでも閲覧可能）
- [ ] コメント編集機能
- [ ] コメント削除機能
- [ ] タグ投稿機能
- [ ] タグ編集機能
- [ ] タグ削除機能
- [ ] いいね機能
- [ ] いいね解除機能

### 未ログインでも閲覧または利用できるページ
以下の項目は適切に未ログインでも閲覧または利用できる画面遷移になっているか？
- [ ] 記事投稿機能（画像投稿含む）
- [ ] コメント閲覧機能（未ログインでも閲覧可能）
- [ ] 利用規約・プライバシーポリシー


### 各画面の作り込み
画面遷移だけでなく、必要なボタンやフォームが確認できるくらい作り込めているか？
- [ ] 作り込みはある程度完了している（Figmaを見て画面の作成ができる状態にある）
