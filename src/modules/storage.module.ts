import { devtools } from 'valtio/utils';
import { proxy, useSnapshot, subscribe } from 'valtio';
import {
  Certificate,
  Community,
  CommunityContentType,
  DictionaryTerm,
  StateStatus,
} from 'src/flashpub-types';

const stateStatus = <T = unknown>(data: T): StateStatus<T> => ({
  data,
  status: 'idle',
  redirect: undefined,
});

const store = proxy({
  community: stateStatus<Community>(undefined),
  certificate: stateStatus<Certificate>(undefined),
  dictionary: stateStatus<DictionaryTerm[]>(undefined),
  selectedTerm: stateStatus<DictionaryTerm>(undefined),
  selectedContent: stateStatus<CommunityContentType>(undefined),
});

const Store = {
  ...store,
  sub: subscribe,
  react: useSnapshot,
};
devtools(store, 'Store');

export { Store };
