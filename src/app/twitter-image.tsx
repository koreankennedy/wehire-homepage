import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "WeHire - AI 기반 의료 전문직 채용 플랫폼";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1A2B45 0%, #2a3b55 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "40px",
          }}
        >
          <span
            style={{
              fontSize: "72px",
              fontWeight: "bold",
              color: "#FFFFFF",
            }}
          >
            We
          </span>
          <span
            style={{
              fontSize: "72px",
              fontWeight: "bold",
              color: "#48CBB0",
            }}
          >
            Hire
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "42px",
            fontWeight: "bold",
            color: "#FFFFFF",
            textAlign: "center",
            marginBottom: "24px",
          }}
        >
          AI 기반 의료 전문직 채용 플랫폼
        </div>

        {/* Stats */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              background: "rgba(72, 203, 176, 0.2)",
              padding: "12px 24px",
              borderRadius: "50px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span style={{ fontSize: "24px", color: "#48CBB0" }}>✓</span>
            <span style={{ fontSize: "24px", color: "#FFFFFF" }}>
              전국 104,664개 병원 데이터
            </span>
          </div>
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: "28px",
            color: "rgba(255, 255, 255, 0.8)",
            textAlign: "center",
            maxWidth: "800px",
          }}
        >
          채용의 모든 과정, AI로 주도하는 혁신의 시작
        </div>

        {/* Bottom decoration */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            display: "flex",
            gap: "24px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: "#48CBB0",
            }}
          />
          <span style={{ fontSize: "20px", color: "rgba(255, 255, 255, 0.6)" }}>
            wehire.co.kr
          </span>
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: "#D4AF37",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
