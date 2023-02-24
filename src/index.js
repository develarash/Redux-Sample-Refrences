import store from "./store";
import { bugAdded } from "./action";
// state = reducer (state , action)

store.dispatch(bugAdded("Bug 111"));

console.log(store.getState());
