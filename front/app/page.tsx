import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import { LocationOn, Favorite, People } from "@mui/icons-material";

export default function Home() {
  return (
    <Box className="min-h-screen">
      {/* Hero セクション */}
      <Box className="relative h-[70vh] flex items-center justify-center">
        <Box className="absolute inset-0 z-0">
          <Image
            src="/hero.jpg"
            alt="鎌倉の風景"
            fill
            className="object-cover"
            priority
          />
          <Box className="absolute inset-0 bg-black/40"></Box>
        </Box>

        <Box className="relative z-10 text-center text-white px-4">
          <Typography
            variant="h1"
            component="h1"
            className="font-bold mb-12"
          >
            鎌倉の隠れた魅力を
            <br />
            発見しよう
          </Typography>

          <Typography
            variant="h5"
            className=" mx-auto"
          >
            地元の人だけが知る特別なスポットを検索・共有できる観光サポートアプリ
          </Typography>

          <Button
            variant="contained"
            size="large"
            component={Link}
            href="/spots"
            color="secondary"
            className="text-lg px-8 py-3"
          >
            今すぐ探索を始める
          </Button>
        </Box>
      </Box>

      {/* メインコンテンツ */}
      <Container maxWidth="lg" className="py-16">
        <Grid container spacing={6}>
          {/* 左下：アプリ説明 */}
          <Grid item xs={12} lg={6}>
            <Card className="h-full shadow-lg">
              <CardContent className="p-8">
                <Typography
                  variant="h4"
                  className="font-bold text-primary-500 mb-6"
                >
                  kamakura-travelについて
                </Typography>
                <Typography className="text-gray-700 leading-relaxed mb-6">
                  観光ガイドには載っていない、地元の人だけが知る鎌倉の隠れたスポットを発見できるアプリです。古い路地の奥にある小さな神社、絶景が楽しめる秘密の展望台、地元民に愛される老舗の甘味処など、本当の鎌倉の魅力を体験できます。
                </Typography>
                <Grid container spacing={2} className="text-center">
                  <Grid item xs={4}>
                    <Box className="flex flex-col items-center">
                      <LocationOn className="text-4xl text-primary-500 mb-2" />
                      <Typography variant="body2" className="font-medium">
                        隠れスポット
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={4}>
                    <Box className="flex flex-col items-center">
                      <Favorite className="text-4xl text-primary-500 mb-2" />
                      <Typography variant="body2" className="font-medium">
                        お気に入り
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={4}>
                    <Box className="flex flex-col items-center">
                      <People className="text-4xl text-primary-500 mb-2" />
                      <Typography variant="body2" className="font-medium">
                        コミュニティ
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* 右下：使い方ガイド */}
          <Grid item xs={12} lg={6}>
            <Card className="h-full shadow-lg">
              <CardContent className="p-8">
                <Typography
                  variant="h4"
                  className="font-bold text-primary-500 mb-6"
                >
                  使い方ガイド
                </Typography>
                <Box className="space-y-6">
                  <Box className="flex items-start gap-4">
                    <Box className="bg-accent-500 text-accent-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold">
                      1
                    </Box>
                    <Box>
                      <Typography variant="h6" className="font-semibold mb-2">
                        スポットを検索
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        地図やキーワードで気になるエリアの隠れたスポットを検索します
                      </Typography>
                    </Box>
                  </Box>

                  <Box className="flex items-start gap-4">
                    <Box className="bg-accent-500 text-accent-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold">
                      2
                    </Box>
                    <Box>
                      <Typography variant="h6" className="font-semibold mb-2">
                        詳細を確認
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        写真、アクセス方法、おすすめポイントなどの詳細情報をチェック
                      </Typography>
                    </Box>
                  </Box>

                  <Box className="flex items-start gap-4">
                    <Box className="bg-accent-500 text-accent-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold">
                      3
                    </Box>
                    <Box>
                      <Typography variant="h6" className="font-semibold mb-2">
                        体験を共有
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        訪れた感想やいいねで、他のユーザーと鎌倉の魅力を共有しよう
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Button
                  variant="contained"
                  fullWidth
                  component={Link}
                  href="/auth"
                  className="mt-8"
                >
                  アカウントを作成
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
