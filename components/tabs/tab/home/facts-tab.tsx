import { Card, CardBody } from "@nextui-org/card";

export const FactsTab = () => {
  return (
    <>
      <Card>
        <CardBody>
          <h4 className="text-lg font-bold mb-4">The ones I am proud of:</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>I was born in the Year of the Rabbit 🐰</li>
            <li>Bubble tea always fixes everything for me 🧋</li>
            <li>I always go for a walk to refresh my mind 🚶‍♂️</li>
            <li>I love Vietnamese food 🍜</li>
          </ul>

          <h4 className="text-lg font-bold mt-6 mb-4">
            The ones I am not proud of:
          </h4>
          <ul className="list-disc list-inside space-y-2">
            <li>
              When I was 4, I sneaked away to play DOOM (a violent shooting
              game) 🥷
            </li>
            <li>
              I accidentally broke someone&apos;s finger while playing handball
              ⛹️‍♂️
            </li>
            <li>
              I had a pretty bad reflex syncope (loss of consciousness), which
              made my loved ones worry about me 🤕
            </li>
          </ul>
        </CardBody>
      </Card>
    </>
  );
};
