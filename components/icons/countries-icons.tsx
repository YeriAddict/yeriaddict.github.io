import { Image } from "@nextui-org/image";

interface Props {
  width: number;
  height: number;
}

export const FranceIcon = ({ width, height }: Props) => {
  return (
    <>
      <Image
        height={height}
        radius="sm"
        src={encodeURI("https://flagcdn.com/24x18/fr.png")}
        width={width}
      />
    </>
  );
};

export const CambodiaIcon = ({ width, height }: Props) => {
  return (
    <>
      <Image
        height={height}
        radius="sm"
        src={encodeURI("https://flagcdn.com/24x18/kh.png")}
        width={width}
      />
    </>
  );
};

export const UnitedKingdomIcon = ({ width, height }: Props) => {
  return (
    <>
      <Image
        height={height}
        radius="sm"
        src={encodeURI("https://flagcdn.com/24x18/gb.png")}
        width={width}
      />
    </>
  );
};

export const UnitedStatesOfAmericaIcon = ({ width, height }: Props) => {
  return (
    <>
      <Image
        height={height}
        radius="sm"
        src={encodeURI("https://flagcdn.com/24x18/us.png")}
        width={width}
      />
    </>
  );
};

export const GermanyIcon = ({ width, height }: Props) => {
  return (
    <>
      <Image
        height={height}
        radius="sm"
        src={encodeURI("https://flagcdn.com/24x18/de.png")}
        width={width}
      />
    </>
  );
};

export const SwitzerlandIcon = ({ width, height }: Props) => {
  return (
    <>
      <Image
        height={height}
        radius="sm"
        src={encodeURI("https://flagcdn.com/24x18/ch.png")}
        width={width}
      />
    </>
  );
};

export const AustriaIcon = ({ width, height }: Props) => {
  return (
    <>
      <Image
        height={height}
        radius="sm"
        src={encodeURI("https://flagcdn.com/24x18/at.png")}
        width={width}
      />
    </>
  );
};

export const LiechtensteinIcon = ({ width, height }: Props) => {
  return (
    <>
      <Image
        height={height}
        radius="sm"
        src={encodeURI("https://flagcdn.com/24x18/li.png")}
        width={width}
      />
    </>
  );
};
