import { Card, CardBody } from "@nextui-org/card";

import { SkillsAccordion } from "@/components/accordions/skills-accordion";
import { SkillsAccordionContent } from "@/components/accordions/skills/skills-accordion-content";

export const SkillsTab = () => {
  return (
    <>
      <Card>
        <CardBody>
          <SkillsAccordion skillsContent={SkillsAccordionContent} />
        </CardBody>
      </Card>
    </>
  );
};