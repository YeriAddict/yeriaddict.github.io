import { Card } from "@nextui-org/card";
import { Spacer } from "@nextui-org/spacer";
import Image from "next/image";

import DownloadButton from "@/components/buttons/download-button";

export default function ResumePageComponent() {
  return (
    <>
      <div className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
        <div className="flex flex-col items-center">
          <Card radius="none">
            <Image
              alt="Resume"
              className="object-cover"
              height={700}
              src="resume/resume.png"
              width={700}
            />
          </Card>
          <Spacer y={5} />
          <DownloadButton
            download="Denis_Leang_Resume.pdf"
            href="/resume/resume.pdf"
            text="Download"
          />
          <Spacer y={5} />
        </div>
      </div>
    </>
  );
}
