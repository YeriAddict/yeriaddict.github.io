import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Spacer } from "@nextui-org/spacer";

import { HobbyModal } from "../modals/hobby-modal";

interface Props {
  title: string;
  cardBody: JSX.Element;
  modalBody: JSX.Element;
}

export const HobbyCard = ({ title, cardBody, modalBody }: Props) => {
  return (
    <>
      <Card className="flex-1">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
          <h1 className="font-bold text-large">{title}</h1>
          <Spacer y={2} />
        </CardHeader>
        <Divider />
        <CardBody className="overflow-visible w-[400px] h-[350px]">
          {cardBody}
        </CardBody>
        <HobbyModal modalBody={modalBody} />
      </Card>
    </>
  );
};