import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // The main container div, styled to match your Logo component.
      // It uses a linear gradient, has rounded corners, and a subtle border.
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "1000px", // Approximates your rounded-(--radius)
          border: "1px solid rgba(0, 0, 0, 0.1)", // Simulates ring-1 ring-black/10
          background: "linear-gradient(to bottom, #86efac, #2563eb)", // from-green-300 to-blue-600
        }}
      ></div>
    ),
    // ImageResponse options, using the size defined above.
    {
      ...size,
    }
  );
}
