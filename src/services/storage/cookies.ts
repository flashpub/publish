import Cookies, { CookieAttributes } from 'js-cookie';

const extendKey = (key: string) => `FLASHPUB_${key}`;

type Val = string | Record<string, unknown>;

export default {
  get: <T = Val>(key: string): T => <any>Cookies.get(extendKey(key)),
  set: (key: string, value: Val, attr?: CookieAttributes) => {
    Cookies.set(extendKey(key), value, attr);
  },
  remove: (key: string, attr?: CookieAttributes) => {
    Cookies.remove(extendKey(key), attr);
  },
};
