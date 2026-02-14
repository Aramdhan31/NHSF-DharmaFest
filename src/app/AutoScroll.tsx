"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const SCROLL_SPEED = 7.5; // pixels per frame

export default function AutoScroll() {
  const [isPaused, setIsPaused] = useState(false);
  const rafRef = useRef<number>(0);
  const userScrollRef = useRef(false);

  const tick = useCallback(() => {
    const doc = document.documentElement;
    const maxScroll = doc.scrollHeight - window.innerHeight;
    if (maxScroll <= 0) return;

    const next = window.scrollY + SCROLL_SPEED;
    if (next >= maxScroll) {
      window.scrollTo({ top: maxScroll, behavior: "auto" });
      setIsPaused(true);
      return;
    }
    window.scrollTo({ top: next, behavior: "auto" });
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    if (isPaused) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      return;
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isPaused, tick]);

  // Pause when user scrolls (wheel, touch, or keyboard)
  useEffect(() => {
    const pause = () => {
      userScrollRef.current = true;
      setIsPaused(true);
    };

    const opts = { passive: true };
    window.addEventListener("wheel", pause, opts);
    window.addEventListener("touchmove", pause, opts);
    window.addEventListener("keydown", (e) => {
      if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Space"].includes(e.key)) pause();
    });

    return () => {
      window.removeEventListener("wheel", pause);
      window.removeEventListener("touchmove", pause);
    };
  }, []);

  const toggle = () => setIsPaused((p) => !p);

  return (
    <div className="fixed bottom-6 right-6 z-40" aria-label="Auto-scroll control">
      <button
        type="button"
        onClick={toggle}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg-elevated)]/95 text-[var(--fg-muted)] shadow-lg backdrop-blur transition hover:border-[var(--accent-border)] hover:bg-[var(--accent-dim)] hover:text-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--bg)]"
        aria-label={isPaused ? "Resume auto-scroll" : "Pause auto-scroll"}
        title={isPaused ? "Resume auto-scroll" : "Pause to read"}
      >
        {isPaused ? (
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path d="M8 5v14l11-7L8 5z" />
          </svg>
        ) : (
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        )}
      </button>
      <p className="mt-2 text-center text-xs text-[var(--fg-subtle)]">
        {isPaused ? "Click to scroll" : "Pause to read"}
      </p>
    </div>
  );
}
