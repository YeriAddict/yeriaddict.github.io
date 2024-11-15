import { Link } from "@nextui-org/link";
import { GithubIcon, LinkedInIcon } from "../icons";
import { siteConfig } from "@/config/site";

export const Footer = () => {
  return (
    <>
      <footer className="h-10 flex items-center justify-center">
        <div className="flex gap-6">
          <Link isExternal aria-label="GitHub" href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="LinkedIn" href={siteConfig.links.linkedin}>
            <LinkedInIcon className="text-default-500" />
          </Link>
        </div>
      </footer>
    </>
  );
};