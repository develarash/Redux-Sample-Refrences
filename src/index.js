import store from "./store";
import * as actions from "./action";

store.subscribe(() => {
  console.log("store changed!");
});
store.dispatch(actions.bugAdded("bug 1"));
store.dispatch(actions.bugAdded("bug 2"));
store.dispatch(actions.bugAdded("bug 3"));
store.dispatch(actions.bugResolved(1));

console.log(store.getState());
