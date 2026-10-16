import { ImageResponse } from "next/og";

export const alt = "Chouksey Transport Packers & Movers – Sagar, MP";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
// Edge runtime: next/og is designed for it, and it avoids the Node build-time
// prerender crash (TypeError: Invalid URL) in @vercel/og on Windows hosts.
export const runtime = "edge";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg,#0B2545,#1E3A8A)",
          color: "white",
        }}
      >
        <div style={{ fontSize: 30, color: "#F97316", fontWeight: 700 }}>
          SAGAR · MADHYA PRADESH · ALL INDIA
        </div>
        <div style={{ fontSize: 78, fontWeight: 800, lineHeight: 1.1, marginTop: 20 }}>
          Chouksey Transport Packers &amp; Movers
        </div>
        <div style={{ fontSize: 36, marginTop: 28, opacity: 0.9 }}>
          Safe, Fast &amp; Budget-Friendly Shifting · Truck Rental
        </div>
        <div
          style={{
            marginTop: 44,
            display: "flex",
            alignSelf: "flex-start",
            background: "#F97316",
            padding: "16px 36px",
            borderRadius: 16,
            fontSize: 38,
            fontWeight: 800,
          }}
        >
          Call Now for Instant Quote
        </div>
      </div>
    ),
    size
  );
}
