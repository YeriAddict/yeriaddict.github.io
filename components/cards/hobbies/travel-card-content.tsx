import { Spacer } from "@nextui-org/spacer";

import TravelImageCard from "../travel-image-card";

import CountriesCheckboxes from "@/components/checkboxes/countries-checkboxes";

export const TravelCardContent = {
  title: "⛱️ Travel",
  cardBody: (
    <>
      <div className="flex flex-col">
        <p>I am passionate about history and culture.</p>
        <Spacer y={2} />
        <p>
          I have been deeply engaged in studying civilizations and their
          histories, particularly in the European and Mediterranean regions, as
          I was born in France and have lived there ever since.
        </p>
        <Spacer y={2} />
        <p>
          Traveling allows me to fuel my passion for exploring, learning, and
          discovering new cultures and traditions.
        </p>
        <Spacer y={2} />
        <p>I look forward to my next adventure!</p>
      </div>
    </>
  ),
  modalBody: (
    <>
      <CountriesCheckboxes />
      <p>Honorable mentions:</p>
      <div className="flex flex-row flex-wrap justify-evenly gap-6">
        <TravelImageCard
          alt="Thun"
          src="/hobbies_images/travel_images/thun.jpg"
          title="Thun, Bern, Switzerland"
        />
        <TravelImageCard
          alt="Yvoire"
          src="/hobbies_images/travel_images/yvoire.jpg"
          title="Yvoire, Haute-Savoie, France"
        />
        <TravelImageCard
          alt="Annecy"
          src="/hobbies_images/travel_images/annecy.jpg"
          title="Annecy, Haute-Savoie, France"
        />
      </div>
    </>
  ),
};
