import { useQuery } from 'react-query';
import { Community } from 'src/flashpub-types';
import { Backend } from 'src/modules/backend.module';

const getCommunity = async (community: string) => {
  return Backend.DB.collection('communities')
    .doc(community)
    .get()
    .then((doc) => {
      if (doc.exists) return doc.data() as Community;
      else return null;
    });
};

export function useCommunity(community: string, run: boolean) {
  return useQuery<Community, Error>(
    'community',
    () => getCommunity(community),
    { enabled: run },
  );
}
