import { useQuery } from 'react-query';

import { Backend } from 'src/modules/backend.module';
import { DictionaryTerm } from 'src/flashpub-types';

const getDictionary = async (dictionaryId: string) => {
  return Backend.DB.collection('dictionary')
    .where('ancestors', 'array-contains', dictionaryId)
    .orderBy('metrics.pubCount', 'desc')
    .get()
    .then((querySnapshot) => {
      const terms = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        terms.push(doc.data());
      });
      return terms as DictionaryTerm[];
    });
};

export function useDictionary(dictionaryId: string, run: boolean) {
  return useQuery<DictionaryTerm[], Error>(
    'dictionary',
    () => getDictionary(dictionaryId),
    {
      enabled: run,
    },
  );
}
