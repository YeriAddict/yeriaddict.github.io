import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

import { DownloadIcon } from "../icons/general-icons";

interface Props {
  href: string;
  download: string;
  text: string;
}

export const DownloadButton = ({ href, download, text }: Props) => {
  return (
    <>
      <Button
        as={Link}
        className="bg-primary-400 hover:bg-primary-200 text-foreground"
        download={download}
        href={href}
        size="lg"
        startContent={<DownloadIcon />}
        variant="shadow"
      >
        {text}
      </Button>
    </>
  );
};
