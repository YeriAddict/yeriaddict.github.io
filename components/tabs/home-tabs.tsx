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
          className="bg-primary-900"
          color="primary"
          placement="top"
          variant="light"
        >
          <Tab
            key="skills"
            title={
              <div className="flex items-center space-x-2">
                <p className="text-foreground font-bold">🧠 Skills</p>
              </div>
            }
          >
            <SkillsTab />
          </Tab>
          <Tab
            key="hobbies"
            title={
              <div className="flex items-center space-x-2">
                <p className="text-foreground font-bold">🕹️ Hobbies</p>
              </div>
            }
          >
            <HobbiesTab />
          </Tab>
          <Tab
            key="fun_facts"
            title={
              <div className="flex items-center space-x-2">
                <p className="text-foreground font-bold">🫢 Fun Facts</p>
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
