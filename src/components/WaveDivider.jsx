// src/components/WaveDivider.jsx
import React from "react";

export default function WaveDivider({ flip = false, from = "#040404", to = "#0b0f25" }) {
  const id = Math.random().toString(36).slice(2, 9);
  const transform = flip ? "rotate(180 0 0)" : undefined;

  return (
    <div className="w-full overflow-hidden" aria-hidden="true">
      <svg
        viewBox="0 0 1200 160"
        preserveAspectRatio="none"
        className="w-full h-[120px] block"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`g-${id}`} x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor={from} stopOpacity="1">
              <animate
                attributeName="stop-color"
                values="#040404; #0b0f25; #040404"
                dur="6s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="50%" stopColor="#0e1333" stopOpacity="1">
              <animate
                attributeName="stop-color"
                values="#0e1333; #131a40; #0e1333"
                dur="6s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor={to} stopOpacity="1">
              <animate
                attributeName="stop-color"
                values="#0b0f25; #040404; #0b0f25"
                dur="6s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
        </defs>

        <path
          d="M0,60 C200,120 400,0 600,50 C800,100 1000,40 1200,90 L1200,160 L0,160 Z"
          fill={`url(#g-${id})`}
          transform={transform}
          style={{
            filter: "drop-shadow(0px -4px 8px rgba(0, 255, 255, 0.12))",
          }}
        />
      </svg>
    </div>
  );
}
