import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import TableRow from '@material-ui/core/TableRow'
import LongMenu from './LongMenu'
import CustomCell from './CustomCell'

const TodoItem = ({ todo, editTodo, deleteTodo, id }) => {
  return (
    <TableRow key={todo.id}>
      <CustomCell>{id}</CustomCell>
      <CustomCell>
        <span className="status">
          {todo.status}
          <LongMenu id={todo.id} currentStatus={todo.status} />
        </span>
      </CustomCell>
      <CustomCell>{todo.name}</CustomCell>
      <CustomCell>{todo.description}</CustomCell>
      <CustomCell>{todo.date}</CustomCell>
      <CustomCell>{todo.tag}</CustomCell>
      <CustomCell>{todo.importance}</CustomCell>
      <CustomCell className="controls">
        <IconButton aria-label="Delete" onClick={() => deleteTodo(todo.id)}>
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="Edit" onClick={() => editTodo(todo)}>
          <EditIcon />
        </IconButton>
      </CustomCell>
    </TableRow>
  )
}

export default TodoItem
