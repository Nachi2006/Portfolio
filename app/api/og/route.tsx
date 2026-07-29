import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(_req: NextRequest) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0f1117",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(16,185,129,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.06) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "700px",
            height: "300px",
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse, rgba(16,185,129,0.12) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        <div style={{ position: "relative", zIndex: 10 }}>
          {/* Monospace label */}
          <p
            style={{
              fontFamily: "monospace",
              fontSize: "16px",
              color: "#484f58",
              marginBottom: "24px",
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            &gt; hello-world.py
          </p>

          {/* Name */}
          <h1
            style={{
              fontSize: "72px",
              fontWeight: 700,
              lineHeight: 1.05,
              marginBottom: "20px",
              color: "#f0f6fc",
            }}
          >
            S Adithya{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #10b981 0%, #34d399 50%, #6ee7b7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Nachiyappan
            </span>
          </h1>

          {/* Role */}
          <p
            style={{
              fontSize: "28px",
              color: "#8b949e",
              marginBottom: "36px",
            }}
          >
            Machine Learning Engineer &amp; Software Developer
          </p>

          {/* Badges */}
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {[
              "Computer Vision",
              "Deepfake Detection",
              "RAG Pipelines",
              "PyTorch · TensorFlow",
            ].map((tag) => (
              <span
                key={tag}
                style={{
                  padding: "6px 14px",
                  borderRadius: "9999px",
                  fontSize: "14px",
                  fontFamily: "monospace",
                  background: "rgba(16,185,129,0.12)",
                  border: "1px solid rgba(16,185,129,0.3)",
                  color: "#34d399",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
