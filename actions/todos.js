/**
 * Created by Lyfing on 15/10/2016.
 */

let nextTodoId = 2;
export const addTodo = (task) => {
    return {
        type: 'ADD_TODO',
        payload: {
            id: nextTodoId++,
            task
        }
    }
};

export const toggleTodo = (id) => {
  return {
      type: 'TOGGLE_TODO',
      payload: {id}
  }
};

export const deleteTodo = (id) => {
    return {
        type: 'DELETE_TODO',
        payload: {id}
    }
};

export const saveTodo = (id, task) => {
    return {
        type: 'SAVE_TODO',
        payload: {id, task}
    }
};


