import { Button } from "@heroui/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/modal";

interface Props {
  modalBody: JSX.Element;
}

export const HobbyModal = ({ modalBody }: Props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        className="bg-primary-400 hover:bg-primary-200 text-foreground w-full h-[40px]"
        radius="sm"
        onPress={onOpen}
      >
        See More
      </Button>
      <Modal
        backdrop="opaque"
        classNames={{
          body: "py-6",
          backdrop: "bg-primary-900/50 backdrop-opacity-40",
          base: "bg-primary-700 border-primary-600 text-foreground",
          header: "border-primary-500 border-b-[1px]",
          footer: "border-primary-500 border-t-[1px]",
          closeButton: "hover:bg-primary-200 active:bg-primary-300",
        }}
        isOpen={isOpen}
        radius="lg"
        scrollBehavior="outside"
        size="5xl"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <p className="text-lg">More details!</p>
              </ModalHeader>
              <ModalBody className="overflow-auto">{modalBody}</ModalBody>
              <ModalFooter className="flex-col items-center justify-center">
                <Button
                  className="bg-primary-400 hover:bg-primary-200 text-foreground w-[20%]"
                  radius="sm"
                  variant="shadow"
                  onPress={onClose}
                >
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
