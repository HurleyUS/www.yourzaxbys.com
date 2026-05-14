"use client";

import { useEffect } from "react";

interface AccessibilityWrapperProps {
  children: React.ReactNode;
}

export function AccessibilityWrapper({ children }: AccessibilityWrapperProps) {
  useEffect(() => {
    // Focus management for accessibility
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content with Tab key
      if (event.key === "Tab" && event.shiftKey === false) {
        const skipLink = document.getElementById("skip-to-main");
        if (skipLink && document.activeElement === document.body) {
          skipLink.focus();
        }
      }
    };

    // Add keyboard navigation support
    document.addEventListener("keydown", handleKeyDown);

    // Cleanup
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      {/* Skip to main content link for screen readers */}
      <a
        id="skip-to-main"
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded focus:shadow-lg"
        tabIndex={0}
      >
        Skip to main content
      </a>
      {children}
    </>
  );
}
