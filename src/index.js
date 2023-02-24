import store from "./store";
import { bugAdded, bugResolved } from "./action";
// state = reducer (state , action)

store.dispatch(bugAdded("Bug 111"));
store.dispatch(bugResolved(1));

console.log(store.getState());
