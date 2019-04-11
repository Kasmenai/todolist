import React from 'react'

const Store = React.createContext({
  todos: [
    {
      id: 1,
      name: 'Проверка диска',
      description: 'Проверить свободное место в /var/log',
      status: 'Выполняется',
    },
    {
      id: 2,
      name: 'Список замечаний',
      description: 'Составить список замечаний',
      status: 'На потом',
    },
  ],
  currentTodo: {
    id: '',
    name: '',
    description: '',
    status: '',
    isEditing: false,
  },
  isOpen: false,
})

export default Store
