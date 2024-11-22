import { Card, CardBody } from "@nextui-org/card";
import { Spacer } from "@nextui-org/spacer";

import { HobbyCard } from "@/components/cards/hobby-card";
import { TravelCardContent } from "@/components/cards/hobbies/travel-card-content";
import { GamesCardContent } from "@/components/cards/hobbies/games-card-content";
import { MusicCardContent } from "@/components/cards/hobbies/music-card-content";

export const HobbiesTab = () => {
  return (
    <>
      <Card className="bg-primary-900">
        <CardBody>
          <div className="flex flex-row flex-wrap justify-evenly">
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
        </CardBody>
      </Card>
    </>
  );
};
