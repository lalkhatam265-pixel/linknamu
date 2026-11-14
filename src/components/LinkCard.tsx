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
      className="glass-card block w-full rounded-[1.375rem] px-6 py-[1.125rem] text-center text-[0.9688rem] font-semibold tracking-[-0.01em] transition-[background-color,transform] duration-300 ease-out motion-safe:hover:-translate-y-px active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground/60"
    >
      {link.title}
    </a>
  );
}
