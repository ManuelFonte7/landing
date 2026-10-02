"use client";

import { useEffect, useRef } from "react";

type Props = {
  src: string;
  poster: string;
  title: string;
};

// Video che parte da solo (muto, in loop) quando è visibile a schermo
// e si mette in pausa quando esce: così la pagina resta leggera.
export default function VideoCard({ src, poster, title }: Props) {
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = video.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // play() restituisce una Promise: ignoriamo l'eventuale rifiuto
          // (alcuni browser bloccano l'autoplay in certe condizioni)
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.5 } // parte quando almeno il 50% è visibile
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={video}
      className="aspect-video w-full rounded-2xl bg-[var(--surface)] object-cover"
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-label={title}
    />
  );
}
