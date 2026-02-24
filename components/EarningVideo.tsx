"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

const videos = ["/clips/btc-m1.mp4", "/clips/btc-m2.mp4"];
// const videos = ["/clips/btc-m1.mp4", "/clips/btc-m2.mp4", "/clips/btc-m3.mp4"];

export default function ReelsMobile() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [muted, setMuted] = useState(true);

  const startY = useRef(0);
  const deltaY = useRef(0);

  const [showPlayUI, setShowPlayUI] = useState(false);
  const playTimeout = useRef<NodeJS.Timeout | null>(null);

  /* ---------- PLAY CURRENT ONLY ---------- */
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;

      video.muted = muted;

      if (i === current) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });

    setIsPlaying(true);

    const t = setTimeout(() => setIsAnimating(false), 350);
    return () => clearTimeout(t);
  }, [current, muted]);

  /* ---------- CHANGE SLIDE (INFINITE LOOP) ---------- */
  const changeSlide = (next: number) => {
    if (isAnimating) return;
    setIsAnimating(true);

    if (next >= videos.length) {
      setCurrent(0);
      return;
    }

    if (next < 0) {
      setCurrent(videos.length - 1);
      return;
    }

    setCurrent(next);
  };

  /* ---------- TOUCH ---------- */
  const onTouchStart = (e: React.TouchEvent) => {
    startY.current = e.touches[0].clientY;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    deltaY.current = e.touches[0].clientY - startY.current;
  };

  const onTouchEnd = () => {
    if (deltaY.current < -80) changeSlide(current + 1);
    if (deltaY.current > 80) changeSlide(current - 1);
    deltaY.current = 0;
  };

  /* ---------- MOUSE WHEEL ---------- */
  const onWheel = (e: React.WheelEvent) => {
    e.preventDefault(); // 🚫 stop page scroll
    if (isAnimating) return;

    if (e.deltaY > 60) changeSlide(current + 1);
    if (e.deltaY < -60) changeSlide(current - 1);
  };

  const isMouseDown = useRef(false);
  const mouseStartY = useRef(0);
  const mouseDeltaY = useRef(0);

  /* ---------- PLAY / PAUSE ---------- */
  const togglePlay = () => {
    const video = videoRefs.current[current];
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }

    // show UI briefly
    setShowPlayUI(true);

    if (playTimeout.current) {
      clearTimeout(playTimeout.current);
    }

    playTimeout.current = setTimeout(() => {
      setShowPlayUI(false);
    }, 1000);
  };

  /* ---------- MUTE ---------- */
  const toggleMute = () => {
    setMuted((prev) => !prev);
  };

  const onMouseDown = (e: React.MouseEvent) => {
    isMouseDown.current = true;
    mouseStartY.current = e.clientY;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown.current) return;
    mouseDeltaY.current = e.clientY - mouseStartY.current;
  };

  const onMouseUp = () => {
    if (!isMouseDown.current) return;

    if (mouseDeltaY.current < -80) changeSlide(current + 1);
    if (mouseDeltaY.current > 80) changeSlide(current - 1);

    isMouseDown.current = false;
    mouseDeltaY.current = 0;
  };

  const onMouseLeave = () => {
    isMouseDown.current = false;
    mouseDeltaY.current = 0;
  };

  return (
    <section className="min-h-screen bg-black text-white flex items-center">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid gap-12 md:grid-cols-2 items-center justify-items-center md:justify-items-stretch text-center md:text-left">

        <div>
          <h1 className="text-4xl md:text-5xl font-bold uppercase text-brand-accent">
            Monthly Earnings Proof
          </h1>
          <div className="mt-4 h-1 w-16 bg-brand-accent rounded-full" />
          <p className="mt-6 text-brand-muted text-lg">
            Swipe on mobile · Use mouse scroll on desktop
          </p>
        </div>
        <div
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onWheel={onWheel}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
          className="
    relative flex justify-center 
    w-[300px] md:w-[360px]
    h-[600px] md:h-[720px]
    rounded-[1.5rem]
    overflow-hidden
    border-6 border-gray-600
    bg-black
    touch-none
    select-none
    overscroll-contain
    cursor-grab active:cursor-grabbing"
        >
          {/* speaker */}
          <div
            className="absolute top-[-1.5] left-1/2 -translate-x-1/2
                            w-20 h-1.5 bg-black rounded-b-lg z-100"
          />

          {/* NOTCH */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2
                            w-5 h-4 bg-black rounded-b-lg z-5"
          />

          {/* SLIDER */}
          <div
            className="absolute top-0 left-0 w-full h-full transition-transform duration-300 ease-out"
            style={{ transform: `translateY(-${current * 100}%)` }}
          >
            {videos.map((src, i) => (
              <div key={i} className="w-full h-full relative">
                <video
                  ref={(el) => {
                    videoRefs.current[i] = el;
                  }}
                  src={src}
                  className="w-full h-full object-cover"
                  playsInline
                  preload="metadata"
                  onEnded={() => changeSlide(i + 1)}
                />

                {/* TAP ZONE */}
                {i === current && (
                  <button
                    onClick={togglePlay}
                    className="absolute inset-0 z-10"
                  />
                )}

                {/* PLAY / PAUSE UI (TEMPORARY) */}
                {i === current && showPlayUI && (
                  <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                    <div className="bg-black/60 p-4 rounded-full">
                      {isPlaying ? (
                        <Pause size={36} className="text-white" />
                      ) : (
                        <Play size={36} className="text-white" />
                      )}
                    </div>
                  </div>
                )}

                {/* MUTE BUTTON */}
                {i === current && (
                  <button
                    onClick={toggleMute}
                    className="absolute bottom-4 right-4 z-20 bg-black/60 p-2 rounded-full text-white"
                  >
                    {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
