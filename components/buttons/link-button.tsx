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
        className="bg-primary-400 hover:bg-primary-200 text-foreground"
        color="primary"
        href={href}
        startContent={icon}
        variant="shadow"
      >
        {text}
      </Button>
    </>
  );
};
