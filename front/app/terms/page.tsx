import type { Metadata } from "next";
import { Container, Typography, Box } from "@mui/material";

export const metadata: Metadata = {
  title: "利用規約 | kamakura-travel",
  description:
    "鎌倉のディープスポット検索アプリ「kamakura-travel」の利用規約です。",
};

export default function TermsPage() {
  return (
    <Container maxWidth="md" className="prose prose-lg mx-auto px-4 py-16">
      <Typography variant="h3" component="h1" gutterBottom>
        利用規約
      </Typography>

      <Typography variant="body2" color="text.secondary" gutterBottom>
        制定日:2025&nbsp;年&nbsp;6&nbsp;月&nbsp;13&nbsp;日
      </Typography>

      <p>
        本利用規約（以下「<strong>本規約</strong>」）は、kamakura-travel
        ページ及びこれに付随する一切のサービス（以下総称して「
        <strong>本サービス</strong>
        」）の利用条件を定めるものです。本サービスを利用する全てのユーザーは、本規約に同意したものとみなされます。
      </p>

      <Section title="1. 本規約への同意">
        <p>
          ユーザーは、本サービスを利用することで、本規約に有効かつ取り消し不能な同意をしたものとみなされます。本規約に同意しないユーザーは、本サービスをご利用いただけません。
        </p>
      </Section>

      <Section title="2. 利用登録">
        <p>
          本サービスの利用を希望する方は、本規約に同意のうえ、当社の定める方法で利用登録を申請し、当社が承認した場合に利用登録が完了します。
        </p>
        <SectionSub title="2-1. 登録拒否">
          <ul>
            <li>虚偽の事項を届け出た場合</li>
            <li>過去に本規約に違反したことがある場合</li>
            <li>その他、当社が不適当と判断した場合</li>
          </ul>
        </SectionSub>
      </Section>

      <Section title="3. 未成年による利用">
        <p>
          未成年のユーザーは法定代理人の同意を得た上で本サービスをご利用ください。成年に達した後も利用を継続した場合、未成年時の行為を追認したものとみなします。
        </p>
      </Section>

      <Section title="4. ログイン情報の管理">
        <p>
          ログイン情報はユーザー自身が責任をもって管理するものとし、第三者への譲渡・貸与は禁止します。当社は、ユーザーの過失による情報漏えい等について責任を負いません。
        </p>
      </Section>

      <Section title="5. コンテンツの利用">
        <p>
          当社が提供するコンテンツは、本サービス利用範囲内の私的利用に限り許諾します。範囲を超えた利用は一切禁止します。
        </p>
      </Section>

      <Section title="6. 遅延損害金">
        <p>
          支払遅延があった場合、年 14.6% の遅延損害金をお支払いいただきます。
        </p>
      </Section>

      <Section title="7. ユーザーの投稿">
        <p>
          ユーザーは投稿に関して適法な権利を有し、第三者の権利を侵害しないことを保証します。当社はサービス提供・改善のために無償で投稿を利用できるものとします。
        </p>
        <SectionSub title="禁止される投稿例">
          <ul className="list-disc pl-5">
            <li>第三者の知的財産権を侵害する情報</li>
            <li>個人情報を含む情報（当社が求めた場合を除く）</li>
            <li>わいせつ表現・自傷行為の助長・違法薬物の売買等</li>
            <li>その他当社が不適切と判断する情報</li>
          </ul>
        </SectionSub>
      </Section>

      <Section title="8. 禁止事項">
        <p>
          ユーザーは以下の行為を行ってはなりません（抜粋）。詳細は原文をご確認ください。
        </p>
        <ul className="list-disc pl-5">
          <li>法令違反・犯罪行為</li>
          <li>当社または第三者の権利侵害</li>
          <li>サーバー・ネットワークへの過度な負荷や妨害</li>
          <li>不正アクセス・リバースエンジニアリング</li>
          <li>本サービス上での無断宣伝・営業行為</li>
          <li>反社会的勢力への利益供与 等</li>
        </ul>
      </Section>

      <Section title="9. 反社会的勢力の排除">
        <p>
          ユーザーは暴力団員等に該当しないこと、および将来にわたっても該当しないことを保証していただきます。
        </p>
      </Section>

      <Section title="10. 利用制限・退会">
        <p>
          当社はユーザーが本規約に違反した場合等、事前通知なくアカウントの利用制限または抹消を行うことがあります。
        </p>
      </Section>

      <Section title="11. 免責事項">
        <p>
          本サービスに関してユーザーに生じた損害について、当社は一切の責任を負いません。消費者契約法上の適用を受ける場合であっても賠償額の上限は直近
          1 か月の利用料金または 1 万円のいずれか低い方とします。
        </p>
      </Section>


      <Section title="12. サービス内容の変更・終了">
        <p>
          当社はユーザーへの事前通知なく本サービスの内容変更、提供停止または終了を行うことがあります。
        </p>
      </Section>


      <Section title="13. 規約変更">
        <p>
          当社はユーザーに通知することなく本規約を変更できます。変更後に本サービスを利用した場合、変更に同意したものとみなします。
        </p>
      </Section>


      <Section title="14. 準拠法・裁判管轄">
        <p>
          本規約の準拠法は日本法とし、本サービスに起因または関連する紛争については当社本店所在地を管轄する地方裁判所を専属的合意管轄裁判所とします。
        </p>
      </Section>
    </Container>
  );
}

type Props = {
  title: string;
  children: React.ReactNode;
};
function Section({ title, children }: Props) {
  return (
    <Box component="section" className="mb-10">
      <Typography variant="h5" component="h2" gutterBottom>
        {title}
      </Typography>
      <div className="space-y-4">{children}</div>
    </Box>
  );
}

function SectionSub({ title, children }: Props) {
  return (
    <Box component="section" className="mb-6">
      <Typography variant="h6" component="h3" gutterBottom>
        {title}
      </Typography>
      <div className="space-y-3">{children}</div>
    </Box>
  );
}
