import Image from "next/image";

type Props = {
  name: string;
  bio: string;
  avatar: string;
};

export default function ProfileHeader({ name, bio, avatar }: Props) {
  return (
    <header className="flex flex-col items-center text-center">
      <Image
        src={avatar}
        alt={`${name} 프로필 사진`}
        width={192}
        height={192}
        priority
        unoptimized={avatar.endsWith(".svg")}
        className="size-40 rounded-full object-cover ring-4 ring-foreground/10 sm:size-48"
      />
      <h1 className="mt-8 text-2xl font-bold">{name}</h1>
      <p className="mt-2 text-foreground/70">{bio}</p>
    </header>
  );
}
