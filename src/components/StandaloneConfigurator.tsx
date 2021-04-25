import * as React from 'react';
import tw from 'twin.macro';
import { useRouter } from 'next/router';
import kebabCase from 'lodash/kebabCase';

import Input from '@components/Input';
import Button from '@components/Button';
import Select from '@components/Select';
import { store } from '@services/storage';

const Styled = {
  Container: tw.div`flex items-center justify-center h-screen w-screen`,
  Wrapper: tw.div`flex flex-col items-center justify-center border-2 border-fp-grey-light rounded-lg p-10 text-sm`,
};

type SelectOption = {
  value: string;
  label: string;
  contentType: CommunityContentType;
};

const StandaloneConfigurator: React.FC = () => {
  const router = useRouter();
  const community = store.watch(store.community);
  const storedContentType = store.watch(store.contentType);

  const [apiKey, setApiKey] = React.useState('');
  const [contentType, setContentType] = React.useState('');

  const contentTypeOptions = React.useMemo(
    () =>
      community.data
        ? Object.values(community.data.contentTypes).reduce((acc, val) => {
            acc.push({
              value: kebabCase(val.contentTypeLabel),
              label: val.contentTypeLabel,
              contentType: val,
            });
            return acc;
          }, [] as SelectOption[])
        : [],
    [community.data],
  );

  const selectOption = (props: any) => {
    const { value, contentType } = props as SelectOption;
    store.contentType.data = contentType;
    setContentType(value);
  };

  const inputApiKey = (e: any) => {
    setApiKey(e.target.value);
  };

  const onContinue = () => {
    if (apiKey && contentType) {
      router.push(`/publish/${contentType}`);
      // window.location.assign(`/publish/${contentType}`);
    }
  };

  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Input placeholder="api key" onChange={inputApiKey} />
        <Select
          id="content-type"
          inputId="content-type"
          instanceId="content-type"
          onChange={selectOption}
          options={contentTypeOptions}
          placeholder="select content to publish"
        />
        <Button title="dupa" onClick={onContinue} />
      </Styled.Wrapper>
    </Styled.Container>
  );
};

export default StandaloneConfigurator;
