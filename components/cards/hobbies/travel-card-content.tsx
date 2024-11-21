import { Spacer } from "@nextui-org/spacer";

import { TravelImageCard } from "../travel-image-card";

import { CountriesCheckboxes } from "@/components/checkboxes/countries-checkboxes";

export const TravelCardContent = {
  title: "⛱️ Travel",
  cardBody: (
    <>
      <div className="flex flex-col">
        <p>📖 I am passionate about history!</p>
        <Spacer y={6} />
        <p>
          🎠 I enjoy reading about civilizations and their histories,
          particularly in the European region where I am from.
        </p>
        <Spacer y={6} />
        <p>
          🧳 Traveling fuels my passion for exploring, learning, and discovering
          new cultures and traditions.
        </p>
        <Spacer y={6} />
        <p>🚀 I am looking forward to my next adventure!</p>
      </div>
    </>
  ),
  modalBody: (
    <>
      <CountriesCheckboxes label={"Countries I have visited:"} />
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