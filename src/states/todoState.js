import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { v1 } from 'uuid';

const { persistAtom } = recoilPersist();

export const todoState = atom({
	key: `todo/${v1()}`,
	default: [],
	storage: localStorage,
	effects_UNSTABLE: [persistAtom],
});
