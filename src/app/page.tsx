import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-[26rem] flex-1 flex-col px-6 pt-16 pb-20 sm:pt-24">
      <ProfileHeader name={profile.name} bio={profile.bio} avatar={profile.avatar} />

      <ul className="mt-12 flex flex-col gap-4 sm:mt-14">
        {profile.links.map((link) => (
          <li key={link.id}>
            <LinkCard link={link} />
          </li>
        ))}
      </ul>
    </main>
  );
}
