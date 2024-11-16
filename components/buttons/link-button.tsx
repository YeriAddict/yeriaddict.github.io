import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';

interface Props {
  href: string;
  icon: React.ReactNode;
  text: string;
}

export default function LinkButton({ href, icon, text }: Props) {
  return (
    <>
      <Button
        href={href}
        as={Link}
        startContent={icon}
        color="primary"
        variant="ghost"
        className="hover:bg-primary-700"
      >
        {text}
      </Button>
    </>
  );
}
