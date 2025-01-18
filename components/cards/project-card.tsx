import { Card, CardBody } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Image } from "@heroui/image";
import { Textarea } from "@heroui/input";

import { GithubIcon } from "../icons/general-icons";
import { WebsiteIcon } from "../icons/general-icons";
import { LinkButton } from "../buttons/link-button";

import { ImageType } from "@/types";

interface Props {
  header: string;
  body: string;
  technologies: string[];
  image: ImageType;
  githubLink: string;
  websiteLink?: string;
}

export const ProjectCard = ({
  header,
  body,
  technologies,
  image,
  githubLink,
  websiteLink,
}: Props) => {
  return (
    <>
      <Card
        isHoverable
        className="bg-primary-700 border-primary-600 max-w-[400px]"
      >
        <CardBody className="hover:bg-primary-500 flex flex-col items-center justify-center gap-4">
          <div className="flex flex-col items-center gap-4">
            <div className="justify-center">
              <p>
                <strong>{header}</strong>
              </p>
            </div>
            <Divider className="bg-primary-500" />
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
            <Image
              isZoomed
              alt={image.alt}
              height={300}
              src={image.src}
              width={400}
            />
            <div>
              <p className="h-[70px]">{body}</p>
            </div>
          </div>
          <Divider className="bg-primary-500" />
          <div className="flex flex-row justify-center gap-6">
            <LinkButton href={githubLink} icon={<GithubIcon />} text="Code" />
            {websiteLink && (
              <LinkButton
                href={websiteLink}
                icon={<WebsiteIcon />}
                text="Demo"
              />
            )}
          </div>
        </CardBody>
      </Card>
    </>
  );
};
