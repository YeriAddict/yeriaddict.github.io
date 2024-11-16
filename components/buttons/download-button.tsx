import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import { DownloadIcon } from '../icons';

interface Props {
  href: string;
  download: string;
  text: string;
}

export default function DownloadButton({ href, download, text }: Props) {
  return (
    <>
      <Button
        href={href}
        as={Link}
        startContent={<DownloadIcon />}
        download={download}
        color="primary"
        variant="ghost"
        className="hover:bg-primary-700"
        size="lg"
      >
        {text}
      </Button>
    </>
  );
}
