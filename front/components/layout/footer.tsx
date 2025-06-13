import { LocationOn } from '@mui/icons-material'
import { Box, Container, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import Link from 'next/link'

export default function Footer() {
  return (
    <Box
      component="footer"
      className="bg-surface border-t border-gray-200 mt-auto"
    >
      <Container maxWidth="lg" className="py-8">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Link
              href="/"
              className="flex items-center gap-2 mb-4 no-underline"
            >
              <LocationOn className="text-primary-500" />
              <Typography variant="h6" className="font-bold text-primary-500">
                kamakura-travel
              </Typography>
            </Link>
            <Typography variant="body2" color="text.secondary">
              鎌倉の隠れた魅力を発見し、
              <br />
              地元の人だけが知る特別なスポットを共有しよう
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" className="font-semibold mb-4">
              サービス
            </Typography>
            <Box className="space-y-2">
              <Link
                href="/spots"
                className="block text-gray-600 hover:text-primary-500 no-underline"
              >
                <Typography variant="body2">スポット検索</Typography>
              </Link>
              <Link
                href="/likes"
                className="block text-gray-600 hover:text-primary-500 no-underline"
              >
                <Typography variant="body2">いいね一覧</Typography>
              </Link>
              <Link
                href="/profile"
                className="block text-gray-600 hover:text-primary-500 no-underline"
              >
                <Typography variant="body2">マイページ</Typography>
              </Link>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" className="font-semibold mb-4">
              サポート
            </Typography>
            <Box className="space-y-2">
              <Link
                href="/terms"
                className="block text-gray-600 hover:text-primary-500 no-underline"
              >
                <Typography variant="body2">利用規約</Typography>
              </Link>
              <Link
                href="/privacyPolicy"
                className="block text-gray-600 hover:text-primary-500 no-underline"
              >
                <Typography variant="body2">プライバシーポリシー</Typography>
              </Link>
              <Link
                href="#"
                className="block text-gray-600 hover:text-primary-500 no-underline"
              >
                <Typography variant="body2">お問い合わせ</Typography>
              </Link>
            </Box>
          </Grid>
        </Grid>

        <Box className="border-t border-gray-200 mt-8 pt-8 text-center">
          <Typography variant="body2" color="text.secondary">
            © 2025 kamakura-travel. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
