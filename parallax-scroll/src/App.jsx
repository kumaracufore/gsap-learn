import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const textRef = useRef(null);
  const spacerRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;
    const spacer = spacerRef.current;
    const frame = frameRef.current;

    // Clear any existing ScrollTrigger instances
    ScrollTrigger.getAll().forEach((st) => st.kill());

    // Set initial state
    gsap.set(text, {
      fontSize:
        window.innerWidth > 768
          ? "5rem"
          : window.innerWidth > 480
          ? "3.5rem"
          : "2.5rem",
      opacity: 1,
      y: "-20%",
      scale: 1,
    });

    // Create the scroll animation
    gsap.to(text, {
      fontSize:
        window.innerWidth > 768
          ? "2.5rem"
          : window.innerWidth > 480
          ? "2rem"
          : "1.5rem",
      opacity: 0.9,
      y: "20%",
      scale: 0.9,
      ease: "none",
      scrollTrigger: {
        trigger: frame,
        start: "top top",
        end: "+=50vh",
        scrub: 2,
        pin: false,
        markers: false,
      },
    });

    // Handle window resize
    const handleResize = () => {
      ScrollTrigger.refresh(true);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="app">
      <div className="painting-frame" ref={frameRef}>
        <div className="hero">
          <div className="container">
            <h1 ref={textRef} className="scaling-text">
              Welcome
              <br />
              to
              <br />
              Parallax
              <br />
              Scrolling
            </h1>
          </div>
        </div>
      </div>
      <div ref={spacerRef} className="spacer"></div>
    </div>
  );
}

export default App;
