import React from 'react';
import { useRouter } from 'next/router';

import { Store } from 'src/modules/storage.module';
import { CommunityContentType } from 'src/flashpub-types';
import { ContentPanel } from 'src/ui/Panel';
import { ContentClaim } from 'src/ui/Claim';

const ContentContainer: React.FC<{ content: CommunityContentType }> = ({
  content,
}) => {
  const [steps, setSteps] = React.useState<string[]>(['introduction']);

  const addStep = (step: string) => setSteps((prev) => [...prev, step]);
  const onStep = (step: string) => steps.includes(step);
  const removeStep = (step: string) =>
    setSteps((prev) => prev.filter((st) => st !== step));

  return (
    <div className="flex flex-col items-center h-screen max-w-screen-sm">
      <ContentPanel
        panel="introduction"
        addStep={addStep}
        onStep={onStep}
        nextPanel="claim"
        removeStep={removeStep}
      >
        <h2 className="text-center my-4 text-xl">{content.info.title}</h2>
        <div className="text-justify">{content.info.description}</div>
      </ContentPanel>
      <ContentPanel
        panel="claim"
        addStep={addStep}
        onStep={onStep}
        nextPanel="publication"
        removeStep={removeStep}
      >
        {/* <p>{content.claim}</p> */}
        <ContentClaim claim={content.claim} />
      </ContentPanel>
    </div>
  );
};

export default function ContentType() {
  const router = useRouter();
  const cert = Store.react(Store.certificate);
  const community = Store.react(Store.community);
  const selectedContent = Store.react(Store.selectedContent);

  React.useEffect(() => {
    if (!community.data) router.push('/publish');
    if (!cert.data) router.push('/signin');
  }, [cert.data, community.data, router]);

  if (!community.data) return null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <ContentContainer content={selectedContent.data} />
    </div>
  );
}
