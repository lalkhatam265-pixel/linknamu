"use client";

import type { LinkItem } from "@/data/profile";

export default function LinkCard({ link }: { link: LinkItem }) {
  const recordClick = () => {
    // sendBeacon은 페이지를 떠나는 중에도 요청을 보장합니다.
    navigator.sendBeacon(`/api/links/${link.id}/click`);
  };

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={recordClick}
      className="block w-full rounded-2xl border-2 border-foreground/80 bg-card px-5 py-4 text-center font-medium transition hover:-translate-y-0.5 hover:bg-foreground hover:text-background active:translate-y-0"
    >
      {link.title}
    </a>
  );
}
