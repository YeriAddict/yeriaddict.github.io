import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Textarea } from "@nextui-org/input";
import { Link } from "@nextui-org/link";
import { Spacer } from "@nextui-org/spacer";

import { LinkIcon } from "../icons/general-icons";
import {
  SwitzerlandIcon,
  UnitedStatesOfAmericaIcon,
} from "../icons/countries-icons";

import { CompanyType, ImageType } from "@/types";

interface Props {
  title: string;
  company: CompanyType;
  date: string;
  location: string;
  technologies: string[];
  image: ImageType;
}

export const ExperienceCard = ({
  title,
  company,
  date,
  location,
  technologies,
  image,
}: Props) => {
  return (
    <>
      <Card
        isHoverable
        isPressable
        className="bg-primary-700"
        onPress={() => window.open(company.src, "_blank")}
      >
        <CardBody className="hover:bg-primary-500">
          <div className="flex flex-row items-start gap-6">
            <div className="flex-shrink-0">
              <Image
                alt={image.alt}
                className="object-cover rounded-md"
                height={200}
                shadow="md"
                src={image.src}
                width={200}
              />
            </div>
            <div className="flex flex-col flex-grow">
              <div className="flex flex-col gap-2">
                <h1 className="text-large font-md">{title}</h1>
                <div className="flex items-center">
                  <h3 className="font-semibold text-foreground/90">
                    {company.name}
                  </h3>
                  <Link
                    isExternal
                    showAnchorIcon
                    anchorIcon={<LinkIcon />}
                    className="ml-2"
                    href={company.src}
                  />
                </div>
                <p className="text-small text-foreground/80">{date}</p>
                <div className="flex flex-row items-center text-small text-foreground/80">
                  {location?.split(", ").pop()?.trim() === "USA" ? (
                    <>
                      <span>{location}</span>
                      <Spacer x={2} />
                      <UnitedStatesOfAmericaIcon height={18} width={24} />
                    </>
                  ) : (
                    <>
                      <span>{location}</span>
                      <Spacer x={2} />
                      <SwitzerlandIcon height={18} width={24} />
                    </>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="flex justify-center items-center w-full"
                  >
                    <Textarea
                      isDisabled
                      classNames={{
                        input: "text-center font-bold text-m text-primary-200",
                      }}
                      color="primary"
                      defaultValue={tech}
                      maxRows={1}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};
