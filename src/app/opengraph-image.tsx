import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          padding: "80px",
          background: "#fdf2f8",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ fontSize: 30, fontWeight: 800, textTransform: "uppercase", color: "#0f0a0c" }}>
          Vértice
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 72,
            fontWeight: 800,
            textTransform: "uppercase",
            color: "#0f0a0c",
            lineHeight: 1.05,
            display: "flex",
          }}
        >
          Design que <span style={{ color: "#ec4899", marginLeft: 20 }}>incomoda.</span>
        </div>
        <div style={{ marginTop: 28, fontSize: 28, color: "#0f0a0c", opacity: 0.7, display: "flex" }}>
          Branding, motion e produto pra marca impossível de ignorar
        </div>
      </div>
    ),
    { ...size }
  );
}
