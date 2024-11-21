import { Card, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Spacer } from "@nextui-org/spacer";

interface Props {
  title: string;
  alt: string;
  src: string;
}

export const TravelImageCard = ({ title, alt, src }: Props) => {
  return (
    <Card className="flex-1">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
        <h1 className="font-bold text-large">{title}</h1>
        <Spacer y={2} />
      </CardHeader>
      <Image
        alt={alt}
        className="object-cover"
        height={300}
        src={src}
        width={300}
      />
    </Card>
  );
};
