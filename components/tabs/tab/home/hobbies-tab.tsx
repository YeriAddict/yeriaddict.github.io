import { Card, CardBody } from "@heroui/card";
import { Spacer } from "@heroui/spacer";

import { HobbiesTabs } from "../../hobbies-tabs";

import { HobbyCard } from "@/components/cards/hobby-card";
import { TravelCardContent } from "@/components/cards/hobbies/travel-card-content";
import { GamesCardContent } from "@/components/cards/hobbies/games-card-content";
import { MusicCardContent } from "@/components/cards/hobbies/music-card-content";

export const HobbiesTab = () => {
  return (
    <>
      <Card className="bg-primary-900">
        <CardBody>
          <div className="hidden lg:flex flex-row flex-wrap justify-evenly">
            <HobbyCard
              cardBody={TravelCardContent.cardBody}
              modalBody={TravelCardContent.modalBody}
              title={TravelCardContent.title}
            />
            <Spacer x={4} />
            <HobbyCard
              cardBody={GamesCardContent.cardBody}
              modalBody={GamesCardContent.modalBody}
              title={GamesCardContent.title}
            />
            <Spacer x={4} />
            <HobbyCard
              cardBody={MusicCardContent.cardBody}
              modalBody={MusicCardContent.modalBody}
              title={MusicCardContent.title}
            />
          </div>

          <div className="block lg:hidden">
            <HobbiesTabs
              GamesCardContent={GamesCardContent}
              MusicCardContent={MusicCardContent}
              TravelCardContent={TravelCardContent}
            />
          </div>
        </CardBody>
      </Card>
    </>
  );
};
