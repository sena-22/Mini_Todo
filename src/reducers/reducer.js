import { ADD, DELETE, COMPLETE, EDIT } from "./actions";

const initialState = {
  todos: [
    {
      id: 1,
      title: "TODO 1",
      isDone: true,
      date: 1670915349752,
    },
    {
      id: 2,
      title: "TODO 2",
      isDone: false,
      date: 1670915349753,
    },
    {
      id: 3,
      title: "TODO 3",
      isDone: false,
      date: 1670997349755,
    },
    {
      id: 4,
      title: "TODO 4",
      isDone: false,
      date: 1670997349755,
    },
  ],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return Object.assign({}, state, {
        todos: [action.todo, ...state.todos],
      });
    case DELETE:
      return Object.assign({}, state, {
        todos: state.todos.filter((todo) => todo.id !== action.todo.id),
      });
    case COMPLETE:
      let idx = state.todos.findIndex((el) => el.id === action.todo.id);
      return Object.assign({}, state, {
        todos: [
          ...state.todos.slice(0, idx),
          action.todo,
          ...state.todos.slice(idx + 1),
        ],
      });
    case EDIT:
      let idx2 = state.todos.findIndex((el) => el.id === action.todo.id);
      return Object.assign({}, state, {
        todos: [
          ...state.todos.slice(0, idx2),
          action.todo,
          ...state.todos.slice(idx2 + 1),
        ],
      });

    default:
      return state;
  }
};
