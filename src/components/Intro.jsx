import { useEffect, useRef } from "react";
import "./Intro.css";

export default function Intro({ onComplete }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const handleEnded = () => {
      onComplete?.();
    };

    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, [onComplete]);

  return (
    <section className="intro">
      <video
        ref={videoRef}
        className="intro-video"
        src="/src/assets/intro.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
      />

      <div className="intro-overlay" />
    </section>
  );
}