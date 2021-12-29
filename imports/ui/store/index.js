import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const authenticated = atom({
    key: "authenticated-state",
    default: {
        check: false,
        user: [],
    },
    effects_UNSTABLE: [persistAtom],
});

const counterIndex = atom({
    key: "counter-index", // unique ID (with respect to other atoms/selectors)
    default: {
        counter: 0,
        totalSoal : 0,
        data : [],
    }, 
});

export {authenticated, counterIndex}