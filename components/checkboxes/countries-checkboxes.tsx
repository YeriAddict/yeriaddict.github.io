import { Checkbox, CheckboxGroup } from "@heroui/checkbox";

import {
  AustriaIcon,
  CambodiaIcon,
  FranceIcon,
  GermanyIcon,
  LiechtensteinIcon,
  SwitzerlandIcon,
  UnitedKingdomIcon,
  UnitedStatesOfAmericaIcon,
} from "../icons/countries-icons";

interface Props {
  label: string;
}

export const CountriesCheckboxes = ({ label }: Props) => {
  return (
    <>
      <CheckboxGroup
        isReadOnly
        classNames={{ label: "text-md font-bold" }}
        color="success"
        defaultValue={[
          "france",
          "cambodia",
          "united_kingdom",
          "united_states_of_america",
          "germany",
          "switzerland",
          "austria",
          "liechtenstein",
        ]}
        label={label}
      >
        <Checkbox className="cursor-default" value="france">
          <div className="flex flex-row gap-2">
            <p>France</p>
            <FranceIcon height={18} width={24} />
          </div>
        </Checkbox>
        <Checkbox className="cursor-default" value="cambodia">
          <div className="flex flex-row gap-2">
            <p>Cambodia</p>
            <CambodiaIcon height={18} width={24} />
          </div>
        </Checkbox>
        <Checkbox className="cursor-default" value="united_kingdom">
          <div className="flex flex-row gap-2">
            <p>United Kingdom</p>
            <UnitedKingdomIcon height={18} width={24} />
          </div>
        </Checkbox>
        <Checkbox className="cursor-default" value="united_states_of_america">
          <div className="flex flex-row gap-2">
            <p>United States</p>
            <UnitedStatesOfAmericaIcon height={18} width={24} />
          </div>
        </Checkbox>
        <Checkbox className="cursor-default" value="germany">
          <div className="flex flex-row gap-2">
            <p>Germany</p>
            <GermanyIcon height={18} width={24} />
          </div>
        </Checkbox>
        <Checkbox className="cursor-default" value="switzerland">
          <div className="flex flex-row gap-2">
            <p>Switzerland</p>
            <SwitzerlandIcon height={18} width={24} />
          </div>
        </Checkbox>
        <Checkbox className="cursor-default" value="austria">
          <div className="flex flex-row gap-2">
            <p>Austria</p>
            <AustriaIcon height={18} width={24} />
          </div>
        </Checkbox>
        <Checkbox className="cursor-default" value="liechtenstein">
          <div className="flex flex-row gap-2">
            <p>Liechtenstein</p>
            <LiechtensteinIcon height={18} width={24} />
          </div>
        </Checkbox>
      </CheckboxGroup>
    </>
  );
};
