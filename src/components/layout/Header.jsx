"use client";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  AppBar, Toolbar, Container, Box, Stack,
  Typography, Button, IconButton, Drawer, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, useMediaQuery
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NorthEastRounded from "@mui/icons-material/NorthEastRounded";
import HomeRounded from "@mui/icons-material/HomeRounded";
import StorefrontRounded from "@mui/icons-material/StorefrontRounded";
import Groups2Rounded from "@mui/icons-material/Groups2Rounded";
import HandymanRounded from "@mui/icons-material/HandymanRounded";
import NewspaperRounded from "@mui/icons-material/NewspaperRounded";
import InfoRounded from "@mui/icons-material/InfoRounded";
import { usePathname } from "next/navigation";

const TOKENS = {
  lime: "#CAE28E",
  limeHover: "#B8E454",
};

const NAV_ITEMS = [
  { label: "Home",      href: "/",           icon: <HomeRounded fontSize="small" /> },
  { label: "Franchise", href: "/franchise",  icon: <StorefrontRounded fontSize="small" /> },
  { label: "Investors", href: "/investors",  icon: <Groups2Rounded fontSize="small" /> },
  { label: "Services",  href: "/services",   icon: <HandymanRounded fontSize="small" /> },
  { label: "News",      href: "/news",       icon: <NewspaperRounded fontSize="small" /> },
  { label: "About",     href: "/about",      icon: <InfoRounded fontSize="small" /> },
];

function NavItem({ href, icon, label, active }) {
  return (
    <Stack
      component={Link}
      href={href}
      prefetch={false}
      direction="row"
      alignItems="center"
      spacing={0.9}
      aria-current={active ? "page" : undefined}
      sx={{
        color: active ? "#fff" : "rgba(255,255,255,0.84)",
        textDecoration: "none",
        fontWeight: 700,
        fontSize: { xs: 13, md: 14 },
        px: 0.5,
        py: 0.25,
        borderBottom: active ? "2px solid #CAE28E" : "2px solid transparent",
        transition: "color .15s, border-color .15s",
        "&:hover": { color: "#fff", borderBottomColor: "rgba(202,226,142,.7)" },
      }}
    >
      <Box sx={{ display: "grid", placeItems: "center", color: "inherit" }}>{icon}</Box>
      <Typography component="span" sx={{ color: "inherit" }}>
        {label}
      </Typography>
    </Stack>
  );
}

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const isMdUp = useMediaQuery("(min-width:900px)");
  const pathname = usePathname();
  const labels = {
    "/franchise": "Apply Now",
    "/investors": "Invest With Us",
  };

  const buttonText = labels[pathname] || "Get A Free Demo";

  return (
    <AppBar
      elevation={0}
      position="absolute"
      sx={{
        background: "transparent",
        boxShadow: "none",
        zIndex: (t) => t.zIndex.appBar,
      }}
    >
      <Toolbar sx={{ backdropFilter: "blur(0px)" }}>
        <Container sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {/* Logo */}
          <Box component={Link} href="/" sx={{ display: "inline-flex", alignItems: "center", gap: 1.25 }}>
            <Image src="/EEI SERVICES LOGO 1.png" alt="EEI Services" width={70} height={70} priority />
          </Box>

          {/* --- MENU ON THE LEFT (right after logo) --- */}
          {isMdUp ? (
            <>
              <Stack direction="row" spacing={2.5} alignItems="center" sx={{ ml: { md: 1 } }}>
                {NAV_ITEMS.map((item) => (
                  <NavItem
                    key={item.href}
                    href={item.href}
                    icon={item.icon}
                    label={item.label}
                    active={pathname === item.href}
                  />
                ))}
              </Stack>

              <Box sx={{ flex: 1 }} /> {/* spacer pushes CTA to far right */}

              <Button
                component={Link}
                href="/contact"      // change to your demo/lead route
                prefetch={false}
                variant="contained"
                endIcon={
                  <Box sx={{
                    bgcolor: "#0B0B0B", color: "#fff",
                    width: 28, height: 28, borderRadius: "50%",
                    display: "grid", placeItems: "center", ml: 0.5,
                  }}>
                    <NorthEastRounded fontSize="small" />
                  </Box>
                }
                sx={{
                  bgcolor: TOKENS.lime,
                  color: "#0B0B0B",
                  fontWeight: 700,
                  borderRadius: 999,
                  px: 3,
                  py: 1.4,
                  fontSize: 16,
                  "&:hover": { bgcolor: TOKENS.limeHover },
                }}
              >
                {buttonText}
              </Button>
            </>
          ) : (
            <>
              <Box sx={{ flex: 1 }} />
              <IconButton onClick={() => setOpen(true)} sx={{ color: "#fff" }}>
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={open}
                onClose={() => setOpen(false)}
                PaperProps={{ sx: { bgcolor: "#0E0E0E", width: 320 } }}
              >
                <Box sx={{ p: 2 }}>
                  <Typography variant="subtitle1" sx={{ px: 1, pb: 1, color: "#fff" }}>
                    Menu
                  </Typography>
                  <Divider sx={{ borderColor: "rgba(255,255,255,0.12)" }} />
                  <List>
                    {NAV_ITEMS.map((item) => {
                      const active = pathname === item.href;
                      return (
                        <ListItem key={item.href} disablePadding>
                          <ListItemButton
                            component={Link}
                            href={item.href}
                            prefetch={false}
                            onClick={() => setOpen(false)}
                            sx={{
                              color: active ? "#fff" : "rgba(255,255,255,0.84)",
                              "&:hover": { color: "#fff" },
                            }}
                          >
                            <ListItemIcon sx={{ minWidth: 40, color: "inherit" }}>
                              {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.label} />
                          </ListItemButton>
                        </ListItem>
                      );
                    })}
                  </List>

                  <Button
                    component={Link}
                    href="/contact"
                    prefetch={false}
                    fullWidth
                    variant="contained"
                    endIcon={
                      <Box sx={{
                        bgcolor: "#0B0B0B", color: "#fff",
                        width: 28, height: 28, borderRadius: "50%",
                        display: "grid", placeItems: "center", ml: 0.5,
                      }}>
                        <NorthEastRounded fontSize="small" />
                      </Box>
                    }
                    sx={{
                      mt: 1.5,
                      bgcolor: TOKENS.lime,
                      color: "#0B0B0B",
                      fontWeight: 700,
                      borderRadius: 999,
                      px: 3,
                      py: 1.4,
                      fontSize: 16,
                      "&:hover": { bgcolor: TOKENS.limeHover },
                    }}
                  >
                   {buttonText}
                  </Button>
                </Box>
              </Drawer>
            </>
          )}
        </Container>
      </Toolbar>
    </AppBar>
  );
}
