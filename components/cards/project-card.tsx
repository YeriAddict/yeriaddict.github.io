import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Image } from "@nextui-org/image";
import { Textarea } from "@nextui-org/input";

import { GithubIcon } from "../icons";
import { WebsiteIcon } from "../icons";
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
      <Card isHoverable className="max-w-[400px]">
        <CardHeader className="justify-center">
          <p>
            <strong>{header}</strong>
          </p>
        </CardHeader>
        <Divider />
        <CardBody className="flex flex-col items-center justify-center gap-4">
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
          <p className="h-[70px]">{body}</p>
        </CardBody>
        <Divider />
        <CardFooter className="justify-center gap-6">
          <LinkButton href={githubLink} icon={<GithubIcon />} text="Code" />
          {websiteLink && (
            <LinkButton href={websiteLink} icon={<WebsiteIcon />} text="Demo" />
          )}
        </CardFooter>
      </Card>
    </>
  );
};
