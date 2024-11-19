import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Card, CardBody } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import { Spacer } from "@nextui-org/spacer";

export default function SkillsTab() {
  return (
    <>
      <Card>
        <CardBody>
          <Accordion
            defaultExpandedKeys={["1", "2", "3"]}
            selectionMode="multiple"
            variant="bordered"
          >
            <AccordionItem
              key="1"
              aria-label="Areas of interest"
              classNames={{ title: "font-bold" }}
              title="Areas of interest"
            >
              <div>
                Software Development, Data Science, and Machine Learning. I love
                coding!
              </div>
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Technical Skills"
              classNames={{ title: "font-bold" }}
              title="Technical Skills"
            >
              <div>
                I am mostly comfortable with{" "}
                <Chip color="success" size="sm" variant="flat">
                  Python
                </Chip>
                ,{" "}
                <Chip color="success" size="sm" variant="flat">
                  SQL
                </Chip>
                , and{" "}
                <Chip color="success" size="sm" variant="flat">
                  TypeScript
                </Chip>
                .
              </div>
              <Spacer y={2} />
              <div>
                I have in the past studied or worked in{" "}
                <Chip color="warning" size="sm" variant="flat">
                  Java
                </Chip>
                ,{" "}
                <Chip color="warning" size="sm" variant="flat">
                  C#/.NET
                </Chip>
                ,{" "}
                <Chip color="warning" size="sm" variant="flat">
                  Dart/Flutter
                </Chip>
                , and{" "}
                <Chip color="warning" size="sm" variant="flat">
                  C++
                </Chip>
                .
              </div>
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label="Soft Skills"
              classNames={{ title: "font-bold" }}
              title="Soft Skills"
            >
              <div>
                I am a native{" "}
                <Chip color="success" size="sm" variant="flat">
                  French
                </Chip>{" "}
                and{" "}
                <Chip color="success" size="sm" variant="flat">
                  Khmer
                </Chip>{" "}
                speaker and I can fully communicate in{" "}
                <Chip color="success" size="sm" variant="flat">
                  English
                </Chip>
                .
              </div>
              <Spacer y={2} />
              <div>
                I can also speak broken{" "}
                <Chip color="warning" size="sm" variant="flat">
                  German
                </Chip>{" "}
                and read{" "}
                <Chip color="warning" size="sm" variant="flat">
                  Russian
                </Chip>{" "}
                alphabet. Да да да...
              </div>
            </AccordionItem>
          </Accordion>
        </CardBody>
      </Card>
    </>
  );
}
