import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Link } from "@nextui-org/link";
import { Divider } from "@nextui-org/divider";
import { Image } from "@nextui-org/image";
import { GithubIcon } from "../icons";
import { WebsiteIcon } from "../icons";
import { ImageType } from "@/types";
import { Textarea } from "@nextui-org/input";

interface Props {
  header: string;
  body: string;
  technologies: string[];
  image: ImageType;
  githubLink: string;
  websiteLink?: string;
}

export const ProjectCard = ({ header, body, technologies, image, githubLink, websiteLink }: Props) => {
  return (
    <>
      <Card className="max-w-[400px]" isHoverable>
        <CardHeader className="justify-center">
          <p><strong>{header}</strong></p>
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
                  defaultValue={tech}
                  maxRows={1}
                  color="primary"
                  classNames={{ input: "text-center font-bold text-m text-primary-200" }}
                />
              </div>
            ))}
          </div>
          <Image
            isZoomed
            alt={image.alt}
            className="object-cover w-[400px] h-[300px]"
            src={image.src}
          />
          <p className="h-[70px]">{body}</p>
        </CardBody>
        <Divider />
        <CardFooter className="justify-center gap-6">
          <Link isExternal aria-label="GitHub" href={githubLink}>
            <GithubIcon className="text-default-500" />
          </Link>
          {websiteLink && (
            <Link isExternal aria-label="Website" href={websiteLink}>
              <WebsiteIcon className="text-default-500" />
            </Link>
          )}
        </CardFooter>
      </Card>
    </>
  );
};
