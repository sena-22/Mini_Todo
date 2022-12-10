//action
export const ADD = "ADD_TODO";
export const DELETE = "DELETE_TODO";
export const COMPLETE = "COMPLETE_TODO";
export const EDIT = "EDIT_TODO";

export const add_todo = (todo) => {
  return {
    type: ADD,
    todo: {
      id: todo.id,
      title: todo.title,
      isDone: todo.isDone,
    },
  };
};

export const complete = (todo) => {
  return {
    type: COMPLETE,
    todo: {
      id: todo.id,
      title: todo.title,
      isDone: !todo.isDone,
    },
  };
};

export const edit_todo = (id, title, isDone) => {
  return {
    type: EDIT,
    todo: {
      id,
      title,
      isDone,
    },
  };
};

export const delete_todo = (todo) => {
  return {
    type: DELETE,
    todo: {
      id: todo.id,
    },
  };
};
