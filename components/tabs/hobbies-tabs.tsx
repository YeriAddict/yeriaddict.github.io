import { Tab, Tabs } from "@nextui-org/tabs";

import { HobbyCard } from "../cards/hobby-card";

import { HobbyCardType } from "@/types";

interface Props {
  TravelCardContent: HobbyCardType;
  GamesCardContent: HobbyCardType;
  MusicCardContent: HobbyCardType;
}

export const HobbiesTabs = ({
  TravelCardContent,
  GamesCardContent,
  MusicCardContent,
}: Props) => {
  return (
    <>
      <div className="flex w-full flex-col">
        <Tabs
          fullWidth
          aria-label="Options"
          className="bg-primary-900"
          color="primary"
          placement="top"
          variant="light"
        >
          <Tab
            key="travel"
            title={
              <div className="flex items-center space-x-2">
                <p className="text-foreground font-bold">
                  {TravelCardContent.title}
                </p>
              </div>
            }
          >
            <HobbyCard
              cardBody={TravelCardContent.cardBody}
              modalBody={TravelCardContent.modalBody}
              title={TravelCardContent.title}
            />
          </Tab>
          <Tab
            key="games"
            title={
              <div className="flex items-center space-x-2">
                <p className="text-foreground font-bold">
                  {GamesCardContent.title}
                </p>
              </div>
            }
          >
            <HobbyCard
              cardBody={GamesCardContent.cardBody}
              modalBody={GamesCardContent.modalBody}
              title={GamesCardContent.title}
            />
          </Tab>
          <Tab
            key="music"
            title={
              <div className="flex items-center space-x-2">
                <p className="text-foreground font-bold">
                  {MusicCardContent.title}
                </p>
              </div>
            }
          >
            <HobbyCard
              cardBody={MusicCardContent.cardBody}
              modalBody={MusicCardContent.modalBody}
              title={MusicCardContent.title}
            />
          </Tab>
        </Tabs>
      </div>
    </>
  );
};
