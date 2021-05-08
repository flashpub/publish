import React from 'react';
import Select from 'react-select';
import { useRouter } from 'next/router';
import kebabCase from 'lodash/kebabCase';

import { Store } from 'src/modules/storage.module';
import { useCommunity } from 'src/hooks/use-community';
import { Certify } from 'src/modules/certificate/certificate.service';
import { Loading } from 'src/ui/Loading';
import { Logo } from 'src/ui/Logo';
import { Button } from 'src/ui/Button';

export default function Publish() {
  const router = useRouter();

  const cert = Store.react(Store.certificate);
  const selectedContent = Store.react(Store.selectedContent);

  React.useEffect(() => {
    if (cert.redirect) {
      router.push(cert.redirect[0], cert.redirect[1]);
    }
  }, [cert.redirect, router]);

  React.useEffect(() => {
    if (cert.data) Certify.verifyOnRemote(cert.data.uid);
  }, [cert.data]);

  const onSelect = (e) => (Store.selectedContent.data = e.content);
  const onStart = () => {
    if (selectedContent.data) {
      const contentType = kebabCase(selectedContent.data.contentTypeLabel);
      router.push(`${router.asPath}/${contentType}`);
    }
  };

  const community = useCommunity('outbreak', !!cert.data);

  React.useEffect(() => {
    if (community.data) Store.community.data = community.data;
  }, [community.data]);

  const contentTypes = () => {
    const contents = [];
    Object.values(community.data.contentTypes).map((content) => {
      contents.push({
        content,
        label: content.contentTypeLabel,
        value: kebabCase(content.contentTypeLabel),
      });
    });
    return contents;
  };

  if (!community.data || !cert.data || cert.status === 'loading') {
    return <Loading />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h3 className="mb-4 text-xl">Publish in:</h3>
      <div className="flex flex-col items-center mb-4 border-2 border-blue-300 h-44 w-44 justify-center rounded-2xl bg-blue-100 hover:cursor-pointer">
        <Logo symbol="dx" />
        Oubtreak
      </div>
      <div className="flex flex-col items-center">
        Select content to publish:
        <Select
          options={contentTypes()}
          className="w-80 mb-8 hover:cursor-pointer"
          onChange={onSelect}
        />
        <Button
          disabled={!selectedContent.data}
          onClick={onStart}
          label="Start publishing"
        />
      </div>
    </div>
  );
}
