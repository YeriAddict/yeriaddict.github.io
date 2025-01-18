import { Link } from "@heroui/link";
import { Image } from "@heroui/image";
import { Spacer } from "@heroui/spacer";

export const GamesCardContent = {
  title: "🎮 Video Games",
  cardBody: (
    <>
      <div className="flex flex-col">
        <p>🏆 I am a competitive player!</p>
        <Spacer y={6} />
        <p>
          🤺 I love being challenged and improving my skills in games. My
          favorite genre is strategy games, but I enjoy any game with a good
          story.
        </p>
        <Spacer y={6} />
        <p>
          ⌛ In fact, when I am not traveling or spending time outdoors, gaming
          allows me to explore many different worlds.
        </p>
        <Spacer y={6} />
        <p>⚔️ I absolutely love playing games!</p>
      </div>
    </>
  ),
  modalBody: (
    <>
      <p className="text-md font-bold">My favorite games:</p>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row">
          <Image
            height={36}
            radius="sm"
            src={"/images/hobbies_images/games_images/dota2.png"}
            width={36}
          />
          <Spacer x={2} />
          <Link
            className="text-primary-200"
            href="https://www.dota2.com/home"
            underline="focus"
          >
            Dota 2
          </Link>
        </div>
        <div className="flex flex-row">
          <Image
            height={36}
            radius="sm"
            src={"/images/hobbies_images/games_images/lol.png"}
            width={36}
          />
          <Spacer x={2} />
          <Link
            className="text-primary-200"
            href="https://www.dota2.com/home"
            underline="focus"
          >
            League of Legends
          </Link>
        </div>
        <div className="flex flex-row">
          <Image
            height={36}
            radius="sm"
            src={"/images/hobbies_images/games_images/warcraft3.png"}
            width={36}
          />
          <Spacer x={2} />
          <Link
            className="text-primary-200"
            href="https://warcraft3.blizzard.com/en-us/"
            underline="focus"
          >
            Warcraft III
          </Link>
        </div>
        <div className="flex flex-row">
          <Image
            height={36}
            radius="sm"
            src={"/images/hobbies_images/games_images/dark_souls.png"}
            width={36}
          />
          <Spacer x={2} />
          <Link
            className="text-primary-200"
            href="https://en.bandainamcoent.eu/dark-souls/dark-souls"
            underline="focus"
          >
            Dark Souls
          </Link>
        </div>
        <div className="flex flex-row">
          <Image
            height={36}
            radius="sm"
            src={"/images/hobbies_images/games_images/metro.png"}
            width={36}
          />
          <Spacer x={2} />
          <Link
            className="text-primary-200"
            href="https://www.4a-games.com.mt/our-games"
            underline="focus"
          >
            Metro
          </Link>
        </div>
        <div className="flex flex-row">
          <Image
            height={36}
            radius="sm"
            src={"/images/hobbies_images/games_images/witcher.png"}
            width={36}
          />
          <Spacer x={2} />
          <Link
            className="text-primary-200"
            href="https://www.thewitcher.com/us/en"
            underline="focus"
          >
            The Witcher
          </Link>
        </div>
      </div>
      <p>and so many more...</p>

      <p className="text-md font-bold">
        Honorable mention (read if you play Dota):
      </p>
      <div className="flex flex-row">
        <Image
          height={128}
          radius="sm"
          src={"/images/hobbies_images/games_images/dota2_rank.jpg"}
          width={128}
        />
        <Spacer x={6} />
        <div className="flex flex-col gap-2">
          <p>
            <strong>Peak Rank</strong>: Immortal ~2000th (top 0.01%)
          </p>
          <p>
            <strong>Main role</strong>: Position 4
          </p>
          <p>
            <strong>Favorite heroes</strong>: Mirana, Barathrum, Nyx
          </p>
          <p>
            <strong>MMR (2021)</strong>: ~7k
          </p>
        </div>
      </div>
      <p>
        Sadly, I stopped playing to focus on my studies... I am probably rusty
        now 😔
      </p>
    </>
  ),
};
