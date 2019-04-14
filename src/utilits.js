import _ from 'lodash'

function customizer(objValue, othValue, key) {
  if (key === 'isEditing') {
    return true
  }
}

export const getTodoById = (todos, id) => {
  const index = todos.findIndex(item => item.id === id)
  return todos[index]
}

export const isEmptyTodo = currentTodo => {
  for (let key in currentTodo) {
    if (currentTodo[key]) {
      return
    }
  }
  return true
}

export const isEqualTodos = (previousTodo, currentTodo) =>
  _.isEqualWith(currentTodo, previousTodo, customizer)

export const hasChanges = (todos, isEditing, currentTodo) => {
  if (isEditing) {
    const previousTodo = getTodoById(todos, currentTodo.id)
    return !isEqualTodos(previousTodo, currentTodo)
  } else {
    return !isEmptyTodo(currentTodo)
  }
}
