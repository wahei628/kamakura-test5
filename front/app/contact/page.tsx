import type { Metadata } from "next";
import { Container, Typography } from "@mui/material";

export const metadata: Metadata = {
  title: "お問い合わせ | kamakura-travel",
  description: "ご質問・ご要望はこちらのフォームからお送りください。",
};

const GOOGLE_FORM_EMBED =
  "https://docs.google.com/forms/d/e/1FAIpQLSeX00Lg2MBk40zSIfpZdbaGYBgASO1vbClvRgsJK5LY7gjCPw/viewform?usp=dialog";

export default function ContactPage() {
  return (
    <>
      <iframe
        src={GOOGLE_FORM_EMBED}
        width="100%"
        height="1100"
        loading="lazy"
        className="rounded-md shadow-md bg-white"
      >
        読み込んでいます…
      </iframe>
      </>
  );
}
