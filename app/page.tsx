import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";

import { title, subtitle } from "@/components/primitives";

export default function Home() {
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <span>Hi there! I am Denis. Current work in progress: 60%</span>
        <span
          style={{
            display: "inline-block",
            animationName: "wave",
            animationDuration: "2.5s",
            animationIterationCount: "infinite",
            transformOrigin: "70% 70%",
            fontSize: "50px",
          }}
        >
          🤚
        </span>

        {/* Inline CSS for animation */}
        <style>
          {`
            @keyframes wave {
              0% { transform: rotate(0deg); }
              15% { transform: rotate(14deg); }
              30% { transform: rotate(-8deg); }
              40% { transform: rotate(14deg); }
              50% { transform: rotate(-4deg); }
              60% { transform: rotate(10deg); }
              100% { transform: rotate(0deg); }
            }
          `}
        </style>
      </div>
    </>
  );
}