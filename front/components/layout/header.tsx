'use client'

import {
  LocationOn,
  Person,
  Favorite,
  Search,
  Menu as MenuIcon,
} from '@mui/icons-material'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  useMediaQuery,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigationItems = [
    { label: 'スポット検索', href: '/spots', icon: <Search /> },
    { label: 'いいね一覧', href: '/likes', icon: <Favorite /> },
    { label: 'マイページ', href: '/profile', icon: <Person /> },
  ]

  return (
    <>
      <AppBar position="static" className="bg-primary-500 shadow-md">
        <Toolbar className="container mx-auto px-4">
          <Link
            href="/"
            className="flex items-center gap-2 no-underline text-white"
          >
            <LocationOn className="text-3xl" />
            <Typography variant="h6" component="div" className="font-bold">
              kamakura-travel
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1 }} />

          {!isMobile ? (
            <Box className="flex items-center gap-6">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white hover:text-accent-300 transition-colors no-underline"
                >
                  <Typography variant="body1">{item.label}</Typography>
                </Link>
              ))}
              <Button
                variant="outlined"
                size="small"
                component={Link}
                href="/#"
                color="inherit"
                className="border border-white ml-4"
                sx={{
                  color: '#fff',
                  borderColor: '#fff',
                  '&:hover': {
                    bgcolor: '#fff',
                    color: 'primary.main',
                    borderColor: '#fff',
                  },
                }}
              >
                ログイン
              </Button>
              <Button
                variant="contained"
                size="small"
                color="secondary"
                component={Link}
                href="/#"
                className="bg-accent-500 text-accent-foreground hover:bg-accent-600"
              >
                新規登録
              </Button>
            </Box>
          ) : (
            <IconButton color="inherit" onClick={() => setMobileMenuOpen(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* モバイルドロワー */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      >
        <Box sx={{ width: 250 }} role="presentation">
          <List>
            {navigationItems.map((item) => (
              <ListItem
                key={item.href}
                component={Link}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Box className="flex items-center gap-3">
                  {item.icon}
                  <ListItemText primary={item.label} />
                </Box>
              </ListItem>
            ))}
            <ListItem
              component={Link}
              href="/auth"
              onClick={() => setMobileMenuOpen(false)}
            >
              <ListItemText primary="ログイン" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  )
}
