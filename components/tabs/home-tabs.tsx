import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Card, CardBody } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import { LinkIcon } from "@nextui-org/link";
import { Spacer } from "@nextui-org/spacer";
import { Tab, Tabs } from "@nextui-org/tabs";

export default function HomeTabs() {
  return (
    <>
      <div className="flex w-full flex-col">
        <Tabs
          aria-label="Options"
          color="primary"
          placement="top"
          variant="bordered"
        >
          <Tab
            key="photos"
            title={
              <div className="flex items-center space-x-2">
                <LinkIcon />
                <span>Skills</span>
              </div>
            }
          >
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
                    title="Areas of interest"
                  >
                    Software Development, Data Science, and Machine Learning. I
                    love coding!
                  </AccordionItem>

                  <AccordionItem
                    key="2"
                    aria-label="Technical Skills"
                    title="Technical Skills"
                  >
                    <p>
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
                    </p>
                    <Spacer y={2} />
                    <p>
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
                    </p>
                  </AccordionItem>

                  <AccordionItem
                    key="3"
                    aria-label="Soft Skills"
                    title="Soft Skills"
                  >
                    <p>
                      I am a native{" "}
                      <Chip color="success" size="sm" variant="flat">
                        French
                      </Chip>
                      and{" "}
                      <Chip color="success" size="sm" variant="flat">
                        Khmer
                      </Chip>{" "}
                      speaker and I can fully communicate in{" "}
                      <Chip color="success" size="sm" variant="flat">
                        English
                      </Chip>
                      .
                    </p>
                    <Spacer y={2} />
                    <p>
                      I can also speak broken{" "}
                      <Chip color="warning" size="sm" variant="flat">
                        German
                      </Chip>
                      and read{" "}
                      <Chip color="warning" size="sm" variant="flat">
                        Russian
                      </Chip>
                      . Да да да...
                    </p>
                  </AccordionItem>
                </Accordion>
              </CardBody>
            </Card>
          </Tab>
          <Tab
            key="music"
            title={
              <div className="flex items-center space-x-2">
                <LinkIcon />
                <span>Hobbies</span>
              </div>
            }
          >
            <Card>
              <CardBody>Lorem ipsum doasdsadaasdadconsequat.</CardBody>
            </Card>
          </Tab>
          <Tab
            key="videos"
            title={
              <div className="flex items-center space-x-2">
                <LinkIcon />
                <span>Fun Facts</span>
              </div>
            }
          >
            <Card>
              <CardBody>Lorem ipasrazeazezansequat.</CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}
