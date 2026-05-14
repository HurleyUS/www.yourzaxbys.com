"use client";

import { useState, useEffect } from "react";

/**
 * Hook to get the current date on the client side only.
 * Returns null during SSR to prevent hydration mismatches.
 */
export function useDate() {
  const [date, setDate] = useState<Date | null>(null);

  useEffect(() => {
    setDate(new Date());
  }, []);

  return date;
}

/**
 * Hook to format a date on the client side only.
 * Returns empty string during SSR to prevent hydration mismatches.
 */
export function useFormattedDate(
  date: Date | string | number | null | undefined,
  options?: Intl.DateTimeFormatOptions,
) {
  const [formatted, setFormatted] = useState<string>("");

  useEffect(() => {
    if (date) {
      const d =
        typeof date === "string" || typeof date === "number"
          ? new Date(date)
          : date;
      setFormatted(
        d.toLocaleDateString(
          undefined,
          options ?? {
            year: "numeric",
            month: "long",
            day: "numeric",
          },
        ),
      );
    }
  }, [date, options]);

  return formatted;
}

/**
 * Hook to get the current time on the client side only.
 * Updates every second.
 */
export function useTime() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return time;
}
