import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

import { DownloadIcon } from "../icons";

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
        className="hover:bg-primary-700"
        color="primary"
        download={download}
        href={href}
        size="lg"
        startContent={<DownloadIcon />}
        variant="ghost"
      >
        {text}
      </Button>
    </>
  );
};
