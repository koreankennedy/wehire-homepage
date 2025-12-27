import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: "#1A2B45",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "6px",
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
