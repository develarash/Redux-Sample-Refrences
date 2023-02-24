import store from "./store";
import * as actions from "./action";

store.subscribe(() => {
  console.log("store changed!");
});
store.dispatch(actions.bugAdded("bug first"));

console.log(store.getState());
