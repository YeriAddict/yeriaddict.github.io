"use client";
import { ReactTyped } from "react-typed";

export default function HomePageComponent() {
  return (
    <>
      <div className="container mx-auto max-w-7xl pt-16 flex-grow">
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <span>Hi there! I am </span>
          <ReactTyped loop backSpeed={50} strings={["Denis"]} typeSpeed={60} />
          <span>.Current work in progress: 75%</span>
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
      </div>
    </>
  );
}

// export default function HomePageComponent() {
//   return (
//     <>
//       <div className="slider-container">
//         <section className="slide" id="section1">
//           <h1>Section 1</h1>
//         </section>
//         <section className="slide" id="section2">
//           <h1>Section 2</h1>
//         </section>
//       </div>

//       <style>
//         {`
//           /* Container styles */
//           .slider-container {
//             scroll-snap-type: y mandatory;
//             overflow-y: scroll;
//             height: 100vh;
//           }

//           /* Individual slide styles */
//           .slide {
//             scroll-snap-align: start;
//             height: 100vh;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             font-size: 2rem;
//             background: linear-gradient(to bottom, #a8edea, #fed6e3);
//             padding: 1rem;
//             text-align: center;
//           }

//           /* Section-specific styling */
//           #section1 {
//             background: linear-gradient(to right, #ff9a9e, #fad0c4);
//           }

//           #section2 {
//             background: linear-gradient(to right, #a18cd1, #fbc2eb);
//           }
//         `}
//       </style>
//     </>
//   );
// }
