import React from 'react'

const Store = React.createContext({
  todos: [
    {
      id: 1,
      name: 'Проверка диска',
      description: 'Проверить свободное место в /var/log',
      status: 'Выполняется',
      tag: 'тег0',
      date: '2019-07-22',
    },
    {
      id: 2,
      name: 'Список замечаний',
      description: 'Составить список замечаний',
      status: 'На потом',
      tag: 'тег2',
      date: '2019-08-01',
    },
  ],
  currentTodo: {
    id: '',
    name: '',
    description: '',
    status: '',
    isEditing: false,
    tag: '',
    date: '',
  },
  isOpen: false,
})

export default Store
