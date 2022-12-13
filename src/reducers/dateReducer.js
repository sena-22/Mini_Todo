import { HANDLEDATE } from "./actions";

const initialState = {
  date: new Date(),
};

export const dateReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLEDATE:
      return (state.date = action.date);
    default:
      return state;
  }
};
