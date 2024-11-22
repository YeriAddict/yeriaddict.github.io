import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Spacer } from "@nextui-org/spacer";

export const FactsTab = () => {
  return (
    <>
      <Card className="bg-primary-900">
        <CardBody>
          <div className="flex flex-col items-center justify-center">
            <Card className="bg-primary-700 border-primary-600 w-full">
              <CardHeader>
                <p className="text-md font-bold">The ones I am proud of:</p>
              </CardHeader>
              <Divider className="bg-primary-500" />
              <CardBody>
                <ul className="list-disc list-inside space-y-2">
                  <li>I was born in the Year of the Rabbit 🐰</li>
                  <li>Bubble tea always fixes everything for me 🧋</li>
                  <li>I always go for a walk to refresh my mind 🚶‍♂️</li>
                  <li>I love Vietnamese food 🍜</li>
                </ul>
              </CardBody>
            </Card>

            <Spacer y={4} />
            <Card className="bg-primary-700 border-primary-600 w-full">
              <CardHeader>
                <p className="text-md font-bold">The ones I am not proud of:</p>
              </CardHeader>
              <Divider className="bg-primary-500" />
              <CardBody>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    When I was 4, I sneaked away to play DOOM (a violent
                    shooting game) 🥷
                  </li>
                  <li>
                    I accidentally broke someone&apos;s finger while playing
                    handball ⛹️‍♂️
                  </li>
                  <li>
                    I had a pretty bad reflex syncope (loss of consciousness),
                    which made my loved ones worry about me 🤕
                  </li>
                </ul>
              </CardBody>
            </Card>
          </div>
        </CardBody>
      </Card>
    </>
  );
};
