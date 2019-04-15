import React, { useContext, useState } from 'react'
import Store from '../context'
import TodoItem from './TodoItem'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Loader from './Loader'
import CustomCell from './CustomCell'

export default function TodoList() {
  const { state, dispatch } = useContext(Store)
  const [loading, setLoading] = useState(false)

  const editTodo = todo =>
    dispatch({ type: 'EDIT_FIELD', payload: { ...todo, isEditing: true } })

  const deleteTodo = id => {
    setLoading(true)
    setTimeout(() => {
      dispatch({ type: 'DELETE_TODO', payload: id })
      setLoading(false)
    }, 2000)
  }

  return (
    <Paper classes={{ root: 'paper' }}>
      {loading && <Loader />}
      <Table>
        <TableHead>
          <TableRow>
            <CustomCell>Id</CustomCell>
            <CustomCell>Статус</CustomCell>
            <CustomCell>Название</CustomCell>
            <CustomCell>Описание</CustomCell>
            <CustomCell>Дата</CustomCell>
            <CustomCell>Важность</CustomCell>
            <CustomCell>Тег</CustomCell>
            <CustomCell>Действие</CustomCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state.todos.map((t, i) => (
            <TodoItem
              key={t.id}
              id={i + 1}
              todo={t}
              editTodo={editTodo}
              deleteTodo={deleteTodo}
            />
          ))}
        </TableBody>
      </Table>
    </Paper>
  )
}
