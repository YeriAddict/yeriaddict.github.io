import { Card, CardBody, CardHeader } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Spacer } from "@heroui/spacer";

import { HobbyModal } from "../modals/hobby-modal";

interface Props {
  title: string;
  cardBody: JSX.Element;
  modalBody: JSX.Element;
}

export const HobbyCard = ({ title, cardBody, modalBody }: Props) => {
  return (
    <>
      <Card className="bg-primary-700 border-primary-600 flex-1 overflow-auto">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
          <h1 className="font-bold text-large">{title}</h1>
          <Spacer y={2} />
        </CardHeader>
        <Divider className="bg-primary-500" />
        <CardBody className="overflow-visible w-[400px] h-[350px]">
          {cardBody}
        </CardBody>
        <HobbyModal modalBody={modalBody} />
      </Card>
    </>
  );
};
