import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import LongMenu from './LongMenu'

const TodoItem = ({ todo, editTodo, deleteTodo, id }) => {
  return (
    <TableRow key={todo.id}>
      <TableCell>{id}</TableCell>
      <TableCell>
        {todo.status}
        <LongMenu id={todo.id} currentStatus={todo.status} />
      </TableCell>
      <TableCell>{todo.name}</TableCell>
      <TableCell>{todo.description}</TableCell>
      <TableCell>{todo.date}</TableCell>
      <TableCell>{todo.tag}</TableCell>
      <TableCell>
        <IconButton aria-label="Delete" onClick={() => deleteTodo(todo.id)}>
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="Edit" onClick={() => editTodo(todo)}>
          <EditIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  )
}

export default TodoItem
