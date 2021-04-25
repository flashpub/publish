import * as React from 'react';
import tw from 'twin.macro';
import { useDocument } from '@nandorojo/swr-firestore';

import { store } from '@services/storage';

const StyledDiv = tw.div`flex flex-col items-center justify-center min-h-screen py-2`;

type Props = {
  community: FlashpubCommunity;
  loader?: JSX.Element;
  error?: JSX.Element;
};
const PublishContainer: React.FC<Props> = ({
  children,
  community,
  loader,
  error,
}) => {
  const storedCommunity = store.watch(store.community);
  const remoteCommunity = useDocument<CommunityDefinition>(
    !storedCommunity.data ? `communities/${community.name}` : null,
  );

  React.useEffect(() => {
    if (!storedCommunity.data) {
      if (remoteCommunity.data && !remoteCommunity.loading) {
        store.community.data = remoteCommunity.data;
        store.community.status.type = 'success';
      } else {
        store.community.status.type = 'loading';
      }
    }
    if (remoteCommunity.error) {
      store.community.status.type = 'error';
      store.community.status.msg = remoteCommunity.error;
    }
  }, [storedCommunity, remoteCommunity]);

  if (storedCommunity.status.type === 'loading') {
    return <>{loader}</>;
  }

  if (storedCommunity.status.type === 'error') {
    return <>{error}</>;
  }

  return <>{children}</>;
};

export default PublishContainer;
