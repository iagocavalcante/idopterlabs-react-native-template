import { RN_ENV, RN_BASE_URL } from '@env';

const _envs = new Map();

_envs.set('RN_ENV', RN_ENV);
_envs.set('BASE_URL', RN_BASE_URL);

const envs = {
  get(key) {
    const value = _envs.get(key);
    console.log(key, value);
    if (!value) {
      throw new Error(`Missing value for the ${key}!`);
    }
    return value;
  },
};

export default envs;
