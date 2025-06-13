import { Container, Typography, Box } from '@mui/material'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'プライバシーポリシー | kamakura-travel',
  description:
    '鎌倉のディープスポット検索アプリ「kamakura-travel」のプライバシーポリシーです。',
}

export default function PrivacyPolicyPage() {
  return (
    <Container maxWidth="md" className="prose prose-lg mx-auto px-4 py-16">
      <Typography variant="h3" component="h1" gutterBottom>
        プライバシーポリシー
      </Typography>

      <Typography variant="body2" color="text.secondary" gutterBottom>
        制定日:2025&nbsp;年&nbsp;6&nbsp;月&nbsp;13&nbsp;日
      </Typography>

      <Section title="1. お客様から取得する情報">
        <p>当社は、お客様から以下の情報を取得します。</p>
        <ul className="list-disc pl-5">
          <li>氏名（ニックネーム・ペンネームを含む）</li>
          <li>年齢または生年月日</li>
          <li>メールアドレス</li>
          <li>写真や動画</li>
          <li>外部サービスの ID など、連携先に開示を認めた情報</li>
          <li>端末識別子、OS が生成する ID 等</li>
          <li>当社サイトの滞在時間・入力履歴・購買履歴</li>
          <li>位置情報</li>
        </ul>
      </Section>

      <Section title="2. お客様の情報を利用する目的">
        <ul className="list-disc pl-5">
          <li>サービス登録の受付、本人確認・認証</li>
          <li>利用履歴の管理</li>
          <li>行動履歴の分析によるサービス維持・改善</li>
          <li>お問い合わせ対応</li>
          <li>規約・法令違反への対応</li>
          <li>サービス変更・終了・契約解除の連絡</li>
          <li>規約変更等の通知</li>
          <li>上記のほか、サービス提供・保護・改善に必要な範囲</li>
        </ul>
      </Section>

      <Section title="3. 安全管理措置">
        <p>
          取得した情報の安全管理措置については、お問い合わせいただければ法令に従い個別にご回答します。
        </p>
      </Section>

      <Section title="4. 第三者提供">
        <p>
          当社は個人データをお客様の同意なく第三者に提供しません。ただし、以下の場合を除きます。
        </p>
        <ul className="list-disc pl-5">
          <li>取扱いを外部委託する場合</li>
          <li>当社またはサービスが買収された場合</li>
          <li>事業パートナーとの共同利用（別途公表）</li>
          <li>法令で許容される場合</li>
        </ul>
      </Section>

      <Section title="5. アクセス解析ツール">
        <p>
          本サービスは Google アナリティクスを利用しています。Cookie
          により匿名でデータを収集しており、個人を特定しません。無効化はブラウザ設定から行えます。詳細は
          <a
            href="https://marketingplatform.google.com/about/analytics/terms/jp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            こちら
          </a>
          をご覧ください。
        </p>
      </Section>

      <Section title="6. プライバシーポリシーの変更">
        <p>
          必要に応じて本ポリシーを変更し、施行時期と内容を適切な方法で周知または通知します。
        </p>
      </Section>

      <Section title="7. お問い合わせ">
        <p>
          情報の開示・訂正・削除をご希望の場合は
          <a href="mailto:wahei628＠gmail.com">wahei628＠gmail.com</a>
          までご連絡ください。本人確認のため運転免許証などの提示をお願いしています。開示請求には
          1 件 1,000 円の事務手数料がかかります。
        </p>
      </Section>
    </Container>
  )
}

type Props = {
  title: string
  children: React.ReactNode
}
function Section({ title, children }: Props) {
  return (
    <Box component="section" className="mb-10">
      <Typography variant="h5" component="h2" gutterBottom>
        {title}
      </Typography>
      <div className="space-y-4">{children}</div>
    </Box>
  )
}
