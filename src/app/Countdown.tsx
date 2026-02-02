"use client";

import { useEffect, useState } from "react";

const EVENT_DATE = new Date("2026-03-08T17:00:00+00:00"); // 8 March 2026, 5pm GMT

function getTimeLeft() {
  const now = new Date();
  const diff = EVENT_DATE.getTime() - now.getTime();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
  }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
    done: false,
  };
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const t = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(t);
  }, []);

  if (timeLeft.done) {
    return (
      <p className="text-center text-[var(--accent)] font-medium">
        DharmaFest 2026 has arrived — see you there!
      </p>
    );
  }

  const units = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <div className="grid grid-cols-4 gap-3 sm:gap-6">
      {units.map(({ value, label }) => (
        <div
          key={label}
          className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] px-4 py-5 text-center"
        >
          <div className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-white sm:text-3xl tabular-nums">
            {String(value).padStart(2, "0")}
          </div>
          <div className="mt-1 text-xs font-medium uppercase tracking-wider text-[var(--fg-subtle)]">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
