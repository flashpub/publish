import React from 'react';
import Select from 'react-select';

import { Store } from 'src/modules/storage.module';
import { useDictionary } from 'src/hooks/use-dictionary';

export const ContentClaim: React.FC<any> = ({ claim }) => {
  const cert = Store.react(Store.certificate);

  const dictionary = useDictionary(
    '962d873c-e0b6-4231-9ee2-80c792d36016',
    !!cert.data,
  );

  React.useEffect(() => {
    if (dictionary.data) Store.dictionary.data = dictionary.data;
  }, [dictionary.data]);

  const dictionaryTerms = () => {
    const contents = [];
    dictionary.data.map((content) => {
      contents.push({
        content,
        value: content.name,
        label: content.longName,
      });
    });
    return contents;
  };

  const onSelect = (props) => {
    Store.selectedTerm.data = props.content;
  };

  if (!dictionary.data || !cert.data || cert.status === 'loading') {
    return <div>LOADING</div>;
  }
  return (
    <div className="flex flex-col items-center w-full m-4 h-auto">
      <p className="mb-4">{claim.item1.label}</p>
      <Select
        options={dictionaryTerms()}
        className="w-full"
        menuPosition="fixed"
        onChange={onSelect}
      />
    </div>
  );
};
