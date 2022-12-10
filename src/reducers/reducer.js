import { ADD, DELETE, COMPLETE, EDIT } from "./actions";

const initialState = {
  todos: [
    {
      id: 1,
      title: "TODO 1",
      isDone: true,
    },
    {
      id: 2,
      title: "TODO 2",
      isDone: false,
    },
    {
      id: 3,
      title: "TODO 3",
      isDone: false,
    },
    {
      id: 4,
      title: "TODO 4",
      isDone: false,
    },
  ],
};

export const reducer = (state = initialState, action) => {
  let newState = [];
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
