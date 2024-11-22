import { Card, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Spacer } from "@nextui-org/spacer";

import { FranceIcon, SwitzerlandIcon } from "../icons/countries-icons";

interface Props {
  title: string;
  alt: string;
  src: string;
}

export const TravelImageCard = ({ title, alt, src }: Props) => {
  return (
    <Card className="flex-1 bg-primary-600 border-primary-500 overflow-auto">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
        <div className="flex flex-row items-center">
          {title?.split(", ").pop()?.trim() === "Switzerland" ? (
            <>
              <h1 className="text-md font-bold">{title}</h1>
              <Spacer x={2} />
              <SwitzerlandIcon height={18} width={24} />
            </>
          ) : (
            <>
              <h1 className="text-md font-bold">{title}</h1>
              <Spacer x={2} />
              <FranceIcon height={18} width={24} />
            </>
          )}
        </div>
        <Spacer y={2} />
      </CardHeader>
      <Image
        isZoomed
        alt={alt}
        className="object-cover"
        height={300}
        src={src}
        width={300}
      />
    </Card>
  );
};
