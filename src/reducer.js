const updateTodos = (todos, newTodo) => {
  const index = todos.findIndex(item => item.id === newTodo.id)
  return todos.map((item, i) => (i === index ? { ...item, ...newTodo } : item))
}
// const updateTodos = (todos, newTodo) => {
//   const index = todos.findIndex(item => item.id === newTodo.id)
//   return todos.map((item, i) => (i === index ? newTodo : item))
// }

const emptyTodo = {
  id: '',
  name: '',
  description: '',
  status: '',
  date: '',
  isEditing: false,
}

export default function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload],
        currentTodo: emptyTodo,
        isOpen: false,
      }
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(t => t.id !== action.payload),
      }
    case 'UPDATE_TODO':
      return {
        ...state,
        todos: updateTodos(state.todos, action.payload),
        currentTodo: emptyTodo,
        isOpen: false,
      }
    case 'EDIT_FIELD':
      return {
        ...state,
        currentTodo: { ...state.currentTodo, ...action.payload },
        isOpen: true,
      }
    case 'TOGGLE_DRAWER':
      return {
        ...state,
        currentTodo: emptyTodo,
        isOpen: !state.isOpen,
      }
    default:
      return state
  }
}
