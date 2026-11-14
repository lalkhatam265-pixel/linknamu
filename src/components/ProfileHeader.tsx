import Image from "next/image";

type Props = {
  name: string;
  bio: string;
  avatar: string;
};

export default function ProfileHeader({ name, bio, avatar }: Props) {
  return (
    <header className="flex flex-col items-center text-center">
      <div className="relative">
        {/* 사진 뒤로 번지는 따뜻한 빛 */}
        <div
          aria-hidden
          className="absolute -inset-6 rounded-full bg-[radial-gradient(closest-side,var(--glow),transparent)] blur-xl"
        />
        <Image
          src={avatar}
          alt={`${name} 프로필 사진`}
          width={256}
          height={256}
          priority
          unoptimized={avatar.endsWith(".svg")}
          className="relative size-32 rounded-full object-cover ring-4 ring-white/80 shadow-[0_18px_40px_-14px_rgb(120_60_45/0.45),0_4px_10px_-4px_rgb(120_60_45/0.25)] sm:size-36 dark:ring-white/15"
        />
      </div>
      <h1 className="mt-7 text-[1.75rem] leading-tight font-bold tracking-[-0.02em]">{name}</h1>
      <p className="mt-2.5 max-w-[22rem] text-[0.9375rem] leading-relaxed text-muted">{bio}</p>
    </header>
  );
}
