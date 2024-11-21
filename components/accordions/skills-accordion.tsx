import { Accordion, AccordionItem } from "@nextui-org/accordion";

interface Props {
  skillsContent: { title: string; body: React.JSX.Element }[];
}

export const SkillsAccordion = ({ skillsContent }: Props) => {
  return (
    <>
      <Accordion
        defaultExpandedKeys={["0", "1", "2"]}
        selectionMode="multiple"
        variant="bordered"
      >
        {skillsContent.map((item, index) => (
          <AccordionItem
            key={index}
            aria-label={item.title}
            classNames={{ title: "font-bold" }}
            title={item.title}
          >
            {item.body}
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};
