let lastId = 0;

function reducer(state = [], action) {
  switch (action.type) {
    case "bugAdded":
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolve: false,
        },
      ];
    case "bugRemoved":
      return state.fliter((bug) => bug.id !== action.payload.id);
    default:
      state;
  }
}