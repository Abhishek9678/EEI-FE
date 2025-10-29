"use client";
import * as React from "react";
import { Box, Container, Grid2, Typography } from "@mui/material";

const TOKENS = {
    pageBg: "#FFFF",        // your section bg tone
    panelBg: "#F2F8F5",       // inner rounded panel
    surface: "#FFFFFF",       // card bg
    border: "#E6EDE3",        // soft card border
    textMain: "#0F172A",
    textSub: "#475569",
    
    stepBg: "#CAE28E",
    stepText: "#FFFF",      // circle number + month text
    line: "#CFE4BF",          // connecting line color
    shadow: "0 10px 24px rgba(0,0,0,0.06)",
};

function MonthCard({ step, month, title, desc }) {
    return (
        <Box
            sx={{
                position: "relative",
                bgcolor: TOKENS.surface,
                border: `1px solid ${TOKENS.border}`,
                borderRadius: 3,
                p: { xs: 2.5, md: 4 },
                pt: { xs: 6, md: 7 },
                px:{xs:2, md:4}     ,       // ↑ was 4.5 / 5.5
                boxShadow: "0 1px 0 rgba(0,0,0,0.03)",
                height: "100%",
                textAlign: "center",
            }}
        >
            {/* Floating numbered circle */}
            <Box
                sx={{
                    position: "absolute",
                    left: "50%",
                    top: 18,                        // ↓ was 0 (pulls badge inside the card)
                    transform: "translateX(-50%)",  // ↓ only X, no upward shift
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    bgcolor: TOKENS.stepBg,
                    display: "grid",                // ↓ was "Grid2"
                    placeItems: "center",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.06)",
                    zIndex: 2,
                }}
                aria-hidden
            >
                <Typography sx={{ fontWeight: 800, color: TOKENS.stepText, fontSize: 18 }}>
                    {step}
                </Typography>
            </Box>

            {/* Month label */}
            <Box sx={{pt:4}}>
            <Typography
                sx={{
                    color: "#CAE28E",
                    fontWeight: 800,
                    fontSize: 14,
                    mb: 1,
                }}
            >
                {month}
            </Typography>

            {/* Title */}
            <Typography
                sx={{
                    color: TOKENS.textMain,
                    fontWeight: 800,
                    fontSize: 18,
                    lineHeight: 1.35,
                    mb: 1,
                }}
            >
                {title}
            </Typography>

            {/* Description */}
            <Typography sx={{ color: TOKENS.textSub, fontSize: 14.5, lineHeight: 1.6 }}>
                {desc}
            </Typography>
            </Box>
        </Box>
    );
}

export default function FirstThreeMonths() {
    return (
        <Box component="section" sx={{ bgcolor: TOKENS.pageBg, py: { xs: 8, md: 10 } }}>
            <Container maxWidth="lg">
                {/* Heading */}
                <Typography
                    component="h2"
                    sx={{
                        textAlign: "center",
                        fontWeight: 900,
                        fontSize: { xs: 28, md: 36 },
                        lineHeight: 1.15,
                        color: TOKENS.textMain,
                        mb: 1.5,
                    }}
                >
                    How We Support You in the First 3 Months
                </Typography>

                {/* Rounded panel */}
                <Box
                    sx={{
                        position: "relative",
                        mt: { xs: 3, md: 4 },
                        bgcolor: TOKENS.panelBg,
                        borderRadius: 4,
                        px: { xs: 2, md: 4 },
                        py: { xs: 5, md: 6 },
                        boxShadow: TOKENS.shadow,
                        overflow: "hidden",
                    }}
                >
                    {/* Connecting line behind cards */}
                    <Box
                        sx={{
                            position: "absolute",
                            left: { xs: 24, md: 56 },
                            right: { xs: 24, md: 56 },
                            top: { xs: 84, md: 96 }, // aligns with badge center
                            height: 3,
                            bgcolor: TOKENS.line,
                            borderRadius: 3,
                            zIndex: 0,
                            display: { xs: "none", md: "block" }, // hide on small screens
                        }}
                    />

                    <Grid2
                        container
                        spacing={{ xs: 2.5, md: 3.5 }}
                        sx={{ position: "relative", zIndex: 1 }}
                    >
                        <Grid2 item size={3}>
                            <MonthCard
                                step="1"
                                month="Month 0–1"
                                title="Recruitment& Setup"
                                desc="Vehicle allocation, hub setup, initial team hiring"
                            />
                        </Grid2>
                        <Grid2 item size={3}>
                            <MonthCard
                                step="2"
                                month="Month 1–2"
                                title="Onboarding Clients"
                                desc="Contract activation, route planning, client integration"
                            />
                        </Grid2>
                        <Grid2 size={3}>
                            <MonthCard
                                step="3"
                                month="Month 2–3"
                                title="Operations SOPs"
                                desc="Training completion, process optimization, quality checks"
                            />
                        </Grid2>
                        <Grid2 size={3}>
                            <MonthCard
                                step="4"
                                month="Month 3+"
                                title="Dashboard Training"
                                desc="Full tech enablement, autonomous operations, scaling"
                            />
                        </Grid2>
                    </Grid2>
                </Box>
            </Container>
        </Box>
    );
}
