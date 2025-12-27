import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 100,
          background: "linear-gradient(135deg, #1A2B45 0%, #2a3b55 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "36px",
        }}
      >
        <span style={{ color: "#FFFFFF", fontWeight: "bold" }}>W</span>
        <span style={{ color: "#48CBB0", fontWeight: "bold" }}>H</span>
      </div>
    ),
    {
      ...size,
    }
  );
}
