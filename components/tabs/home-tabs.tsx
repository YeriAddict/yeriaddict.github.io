import { Tab, Tabs } from "@nextui-org/tabs";

import { SkillsTab } from "./tab/home/skills-tab";
import { HobbiesTab } from "./tab/home/hobbies-tab";
import { FactsTab } from "./tab/home/facts-tab";

export const HomeTabs = () => {
  return (
    <>
      <div className="flex w-full flex-col">
        <Tabs
          fullWidth
          aria-label="Options"
          color="primary"
          placement="top"
          variant="bordered"
        >
          <Tab
            key="skills"
            title={
              <div className="flex items-center space-x-2">
                <p>🧠 Skills</p>
              </div>
            }
          >
            <SkillsTab />
          </Tab>
          <Tab
            key="hobbies"
            title={
              <div className="flex items-center space-x-2">
                <p>🕹️ Hobbies</p>
              </div>
            }
          >
            <HobbiesTab />
          </Tab>
          <Tab
            key="fun_facts"
            title={
              <div className="flex items-center space-x-2">
                <p>🫢 Fun Facts</p>
              </div>
            }
          >
            <FactsTab />
          </Tab>
        </Tabs>
      </div>
    </>
  );
};
