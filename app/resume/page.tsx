import { Button } from '@nextui-org/button';
import { Card, CardBody } from '@nextui-org/card';
import { Link } from '@nextui-org/link';
import { Spacer } from '@nextui-org/spacer';
import Image from 'next/image';

export default function ResumePage() {
  return (
    <div className="flex flex-col items-center gap-5">
      <Card
        isFooterBlurred
        radius="none"
        className="border-none"
      >
        <Image
          alt="Woman listing to music"
          className="object-cover"
          src="resume/resume.png"
          height={700}
          width={700}
        />

      </Card>

      <Button
        as={Link}
        href="/resume/resume.pdf"
        download="Resume.pdf"
        color="primary"
        variant="solid"
        style={{ width: '200px', textAlign: 'center' }}
      >
        Download
      </Button>

      <Spacer y={1} />
    </div>
  );
}
