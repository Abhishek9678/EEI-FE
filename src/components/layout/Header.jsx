"use client";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  AppBar, Toolbar, Container, Box, Stack,
  Typography, Button, IconButton, Drawer, Divider, List, ListItem, ListItemButton, ListItemText, useMediaQuery
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowOutwardRounded from "@mui/icons-material/ArrowOutwardRounded";

const COLORS = { border: "rgba(255,255,255,0.14)", lime: "#C9F269", limeHover: "#B8E454" };

function NavLink({ href, children }) {
  return (
    <Typography
      component={Link}
      href={href}
      sx={{
        color: (t) => t.palette.text.secondary,
        fontWeight: 700,
        fontSize: { xs: 13, md: 14 },
        textDecoration: "none",
        letterSpacing: 0.2,
        "&:hover": { color: (t) => t.palette.text.primary },
      }}
    >
      {children}
    </Typography>
  );
}

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const isMdUp = useMediaQuery("(min-width:900px)");

  return (
    <AppBar
      elevation={0}
      position="fixed"
      sx={{
        background: "transparent",  // truly transparent
        boxShadow: "none",
        zIndex: (t) => t.zIndex.appBar, // keep on top of video/gradient
      }}
    >
      <Toolbar
        sx={{
          borderBottom: `1px solid ${COLORS.border}`, // subtle line for readability
          backdropFilter: "blur(0px)",                // totally clear; set blur(6px) if you want frosted
        }}
      >
        <Container sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {/* Logo */}
          <Box
            component={Link}
            href="#"
            sx={{ display: "inline-flex", alignItems: "center", gap: 1.25 }}
          >
            <Image
              src="/EEI SERVICES LOGO 1.png"
              alt="EEI Services"
              width={40}
              height={40}
              priority
            />
          </Box>

          <Box sx={{ flex: 1 }} />

          {isMdUp ? (
            <Stack direction="row" spacing={3} alignItems="center">
              {/* If your design has more items, just add them here to match screenshot */}
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#franchise">Franchise</NavLink>
              <NavLink href="#investors">Investors</NavLink>
              <NavLink href="#services">Services</NavLink>
              <NavLink href="#news">News</NavLink>
              <NavLink href="#about">About</NavLink>

              <Button
                variant="contained"
                color="primary"
                endIcon={<ArrowOutwardRounded />}
                sx={{
                  bgcolor: COLORS.lime,
                  "&:hover": { bgcolor: COLORS.limeHover },
                  color: "#0B0B0B",
                  fontWeight: 800,
                  borderRadius: 1.5,
                }}
              >
                Get A Free Demo
              </Button>
            </Stack>
          ) : (
            <>
              <IconButton onClick={() => setOpen(true)} sx={{ color: "text.primary" }}>
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={open}
                onClose={() => setOpen(false)}
                PaperProps={{ sx: { bgcolor: "#0E0E0E" } }}
              >
                <Box sx={{ width: 300, p: 2 }}>
                  <Typography variant="subtitle1" sx={{ px: 1, pb: 1 }}>
                    Menu
                  </Typography>
                  <Divider />
                  <List>
                    {["Home", "Franchise", "Investors", "Services", "News", "About"].map((t) => (
                      <ListItem key={t} disablePadding>
                        <ListItemButton
                          component={Link}
                          href={`#${t.toLowerCase()}`}
                          onClick={() => setOpen(false)}
                        >
                          <ListItemText primary={t} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                  <Button
                    fullWidth
                    size="large"
                    variant="contained"
                    endIcon={<ArrowOutwardRounded />}
                    sx={{
                      mt: 1,
                      bgcolor: COLORS.lime,
                      "&:hover": { bgcolor: COLORS.limeHover },
                      color: "#0B0B0B",
                    }}
                  >
                    Get A Free Demo
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
