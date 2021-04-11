import { proxy, useSnapshot } from 'valtio';
import { devtools } from 'valtio/utils';

const stateStatus = <T = unknown>(data: T): IState<T> => ({
  data,
  status: { type: 'idle' },
});

const communityState = stateStatus<CommunityDefinition | null>(null);

const store = {
  community: proxy(communityState),
};

type S = typeof store;
type Comm = (data: S['community']['data']) => void;

const operator = {
  get: store as S,
  set: {
    status: (key: keyof S, type: IStatus['type'], msg?: IStatus['msg']) => {
      store[key].status = { type, msg };
    },
    community: (update: Comm) => update(store.community.data),
  },
  use: useSnapshot,
};

devtools(proxy(store), 'store');

export default operator;
