import store from "./customStore";
import * as actions from "./action";
store.dispatch(actions.bugAdded("bug first"));

console.log(store.getState());
