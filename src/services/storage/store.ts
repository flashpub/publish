import { proxy, useSnapshot } from 'valtio';
import { devtools } from 'valtio/utils';

const stateStatus = <T = unknown>(data: T): IState<T> => ({
  data,
  status: { type: 'idle' },
});

const communityState = stateStatus<CommunityDefinition | null>(null);
const contentType = stateStatus<CommunityContentType | null>(null);

const store = {
  community: proxy(communityState),
  contentType: proxy(contentType),
};

const operator = {
  ...store,
  watch: useSnapshot,
};

if (process.env.NODE_ENV === 'development') devtools(proxy(store), 'store');

export default operator;
