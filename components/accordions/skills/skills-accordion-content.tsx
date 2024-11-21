import { Chip } from "@nextui-org/chip";
import { Spacer } from "@nextui-org/spacer";

export const SkillsAccordionContent = [
  {
    title: "Areas of interest",
    body: (
      <>
        <div>
          Software Development, Data Science, and Machine Learning. I love
          coding!
        </div>
      </>
    ),
  },
  {
    title: "Technical Skills",
    body: (
      <>
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
      </>
    ),
  },
  {
    title: "Soft Skills",
    body: (
      <>
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
      </>
    ),
  },
];
