import { ImageResponse } from "next/og";

export const alt = "Build AI From Here — practical AI, one small win at a time";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Mirrors app/opengraph-image.tsx so X/Twitter cards match share cards. */
export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px",
          backgroundColor: "#0D1838",
          color: "#FFF7E8",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            color: "#F97316",
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          <div style={{ width: 18, height: 18, backgroundColor: "#F97316" }} />
          Charlotte, North Carolina
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 92,
            fontWeight: 800,
            lineHeight: 1.05,
          }}
        >
          Build AI From Here
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 36,
            lineHeight: 1.35,
            color: "#FBBF24",
          }}
        >
          No coding. No overwhelm. Just practical AI, one small win at a time.
        </div>
      </div>
    ),
    size,
  );
}
