import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Textarea } from "@nextui-org/input";
import { Link } from "@nextui-org/link";

import { LinkIcon } from "../icons";

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
        onPress={() => window.open(company.src, "_blank")}
      >
        <CardBody>
          <div className="grid grid-cols-6 md:grid-cols-10 gap-6 md:gap-4 items-center justify-center">
            <div className="relative col-span-6 md:col-span-2">
              <Image
                alt={image.alt}
                className="object-cover"
                height={200}
                shadow="md"
                src={image.src}
                width="100%"
              />
            </div>
            <div className="flex flex-col col-span-6 md:col-span-8 h-full">
              <div className="flex flex-col gap-0">
                <h1 className="text-large font-medium mt-2">{title}</h1>
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
                <p className="text-small text-foreground/80">
                  {date} | {location}
                </p>
              </div>
              <div className="flex flex-col mt-3 gap-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="flex justify-center items-center w-full"
                    >
                      <Textarea
                        isDisabled
                        classNames={{
                          input:
                            "text-center font-bold text-m text-primary-200",
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
          </div>
        </CardBody>
      </Card>
    </>
  );
};
