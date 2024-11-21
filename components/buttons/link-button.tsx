import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

interface Props {
  href: string;
  icon: React.ReactNode;
  text: string;
}

export const LinkButton = ({ href, icon, text }: Props) => {
  return (
    <>
      <Button
        as={Link}
        className="hover:bg-primary-700"
        color="primary"
        href={href}
        startContent={icon}
        variant="ghost"
      >
        {text}
      </Button>
    </>
  );
};
