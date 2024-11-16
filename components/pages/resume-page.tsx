import DownloadButton from '@/components/buttons/download-button';
import { Card } from '@nextui-org/card';
import { Spacer } from '@nextui-org/spacer';
import Image from 'next/image';

export default function ResumePageComponent() {
  return (
    <>
      <div className="flex flex-col items-center">
        <Card radius="none">
          <Image
            alt="Resume"
            className="object-cover"
            src="resume/resume.png"
            height={700}
            width={700}
          />
        </Card>
        <Spacer y={5} />
        <DownloadButton href="/resume/resume.pdf" download="Denis_Leang_Resume.pdf" text="Download" />
        <Spacer y={5} />
      </div>
    </>
  );
}
