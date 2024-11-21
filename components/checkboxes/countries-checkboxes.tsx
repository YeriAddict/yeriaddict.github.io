import { Checkbox, CheckboxGroup } from "@nextui-org/checkbox";
import { Image } from "@nextui-org/image";

interface Props {
  label: string;
}

export const CountriesCheckboxes = ({ label }: Props) => {
  return (
    <>
      <CheckboxGroup
        isReadOnly
        color="secondary"
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
            <Image
              height={18}
              radius="sm"
              src={encodeURI("https://flagcdn.com/24x18/fr.png")}
              width={24}
            />
          </div>
        </Checkbox>
        <Checkbox className="cursor-default" value="cambodia">
          <div className="flex flex-row gap-2">
            <p>Cambodia</p>
            <Image
              height={18}
              radius="sm"
              src={encodeURI("https://flagcdn.com/24x18/kh.png")}
              width={24}
            />
          </div>
        </Checkbox>
        <Checkbox className="cursor-default" value="united_kingdom">
          <div className="flex flex-row gap-2">
            <p>United Kingdom</p>
            <Image
              height={18}
              radius="sm"
              src={encodeURI("https://flagcdn.com/24x18/gb.png")}
              width={24}
            />
          </div>
        </Checkbox>
        <Checkbox className="cursor-default" value="united_states_of_america">
          <div className="flex flex-row gap-2">
            <p>United States</p>
            <Image
              height={18}
              radius="sm"
              src={encodeURI("https://flagcdn.com/24x18/us.png")}
              width={24}
            />
          </div>
        </Checkbox>
        <Checkbox className="cursor-default" value="germany">
          <div className="flex flex-row gap-2">
            <p>Germany</p>
            <Image
              height={18}
              radius="sm"
              src={encodeURI("https://flagcdn.com/24x18/de.png")}
              width={24}
            />
          </div>
        </Checkbox>
        <Checkbox className="cursor-default" value="switzerland">
          <div className="flex flex-row gap-2">
            <p>Switzerland</p>
            <Image
              height={18}
              radius="sm"
              src={encodeURI("https://flagcdn.com/24x18/ch.png")}
              width={24}
            />
          </div>
        </Checkbox>
        <Checkbox className="cursor-default" value="austria">
          <div className="flex flex-row gap-2">
            <p>Austria</p>
            <Image
              height={18}
              radius="sm"
              src={encodeURI("https://flagcdn.com/24x18/at.png")}
              width={24}
            />
          </div>
        </Checkbox>
        <Checkbox className="cursor-default" value="liechtenstein">
          <div className="flex flex-row gap-2">
            <p>Liechtenstein</p>
            <Image
              height={18}
              radius="sm"
              src={encodeURI("https://flagcdn.com/24x18/li.png")}
              width={24}
            />
          </div>
        </Checkbox>
      </CheckboxGroup>
    </>
  );
};
