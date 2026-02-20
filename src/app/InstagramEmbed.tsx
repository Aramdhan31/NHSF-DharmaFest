"use client";

import { useEffect, useRef } from "react";

interface InstagramEmbedProps {
  url: string;
  className?: string;
}

export default function InstagramEmbed({ url, className = "" }: InstagramEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.defer = true;
    
    // Check if script already exists
    if (!document.querySelector('script[src="https://www.instagram.com/embed.js"]')) {
      document.body.appendChild(script);
    }

    // Process embeds after script loads
    script.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };

    // Also process if script was already loaded
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }

    return () => {
      // Cleanup if needed
    };
  }, [url]);

  // Extract post ID from URL
  const getPostId = (url: string) => {
    const match = url.match(/\/reel\/([^/?]+)/) || url.match(/\/p\/([^/?]+)/);
    return match ? match[1] : null;
  };

  const postId = getPostId(url);
  if (!postId) {
    return (
      <div className={`rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-6 text-center ${className}`}>
        <p className="text-[var(--fg-muted)]">Invalid Instagram URL</p>
      </div>
    );
  }

  return (
    <div className={`instagram-embed-wrapper ${className}`}>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: "0",
          borderRadius: "1rem",
          margin: "1px",
          maxWidth: "540px",
          minWidth: "326px",
          padding: "0",
          width: "calc(100% - 2px)",
        }}
        ref={containerRef}
      >
        <div style={{ padding: "16px" }}>
          <a
            href={url}
            style={{
              background: "#FFFFFF",
              lineHeight: 0,
              padding: "0 0",
              textAlign: "center",
              textDecoration: "none",
              width: "100%",
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              <div
                style={{
                  backgroundColor: "#F4F4F4",
                  borderRadius: "50%",
                  flexGrow: 0,
                  height: "40px",
                  marginRight: "14px",
                  width: "40px",
                }}
              />
              <div style={{ display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "center" }}>
                <div
                  style={{
                    backgroundColor: "#F4F4F4",
                    borderRadius: "4px",
                    flexGrow: 0,
                    height: "14px",
                    marginBottom: "6px",
                    width: "100px",
                  }}
                />
                <div
                  style={{
                    backgroundColor: "#F4F4F4",
                    borderRadius: "4px",
                    flexGrow: 0,
                    height: "14px",
                    width: "60px",
                  }}
                />
              </div>
            </div>
            <div style={{ padding: "19% 0" }} />
            <div style={{ display: "flex", flexDirection: "row", marginBottom: "14px", alignItems: "center" }}>
              <div
                style={{
                  backgroundColor: "#F4F4F4",
                  borderRadius: "50%",
                  height: "16px",
                  width: "16px",
                  marginRight: "6px",
                }}
              />
              <div
                style={{
                  backgroundColor: "#F4F4F4",
                  borderRadius: "4px",
                  flexGrow: 0,
                  height: "16px",
                  width: "224px",
                  marginRight: "6px",
                }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "row", marginBottom: "14px" }}>
              <div
                style={{
                  backgroundColor: "#F4F4F4",
                  borderRadius: "4px",
                  flexGrow: 0,
                  height: "16px",
                  marginRight: "8px",
                  width: "100px",
                }}
              />
              <div
                style={{
                  backgroundColor: "#F4F4F4",
                  borderRadius: "4px",
                  flexGrow: 0,
                  height: "16px",
                  width: "70px",
                }}
              />
            </div>
          </a>
          <p
            style={{
              color: "#c9c8cd",
              fontFamily: "Arial,sans-serif",
              fontSize: "14px",
              lineHeight: "17px",
              marginBottom: 0,
              marginTop: "8px",
              overflow: "hidden",
              padding: "8px 0 7px",
              textAlign: "center",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            <a
              href={url}
              style={{
                color: "#c9c8cd",
                fontFamily: "Arial,sans-serif",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "normal",
                lineHeight: "17px",
                textDecoration: "none",
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              View this post on Instagram
            </a>
          </p>
        </div>
      </blockquote>
    </div>
  );
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}
