import React, { useContext } from 'react'
import Store from '../context'
import uniqid from 'uniqid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'

export default function TodoForm() {
  const {
    state: { currentTodo },
    dispatch,
  } = useContext(Store)
  const { name, description, status, isEditing } = currentTodo

  const handleInputChange = e => {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    dispatch({ type: 'EDIT_FIELD', payload: { [name]: value } })
  }

  const handleTodoAdd = e => {
    e.preventDefault()
    if (isEditing) {
      dispatch({ type: 'UPDATE_TODO', payload: currentTodo })
    } else {
      dispatch({ type: 'ADD_TODO', payload: { ...currentTodo, id: uniqid() } })
    }
  }
  const handleCancel = () => {
    dispatch({ type: 'TOGGLE_DRAWER' })
  }

  return (
    <div className="sidebar">
      <form onSubmit={handleTodoAdd} className="sidebar__form form">
        <div className="form__header">
          <Typography component="h1" variant="h2" gutterBottom>
            Новая задача
          </Typography>
        </div>
        <div className="form__fields">
          <TextField
            label="Название задачи"
            value={name}
            onChange={handleInputChange}
            name="name"
            required
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Описание задачи"
            value={description}
            onChange={handleInputChange}
            name="description"
            margin="normal"
            variant="outlined"
          />
          <FormControl classes={{ root: 'form-control' }}>
            <InputLabel htmlFor="status">Статус</InputLabel>
            <Select
              value={status}
              onChange={handleInputChange}
              inputProps={{
                name: 'status',
                id: 'status',
              }}
            >
              <MenuItem value="Выполняется">Выполняется</MenuItem>
              <MenuItem value="На потом">На потом</MenuItem>
              <MenuItem value="Выполнена">Выполнена</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="form__footer">
          <Button type="submit" color="primary" variant="contained">
            Сохранить
          </Button>
          <Button color="secondary" variant="outlined" onClick={handleCancel}>
            Отменить
          </Button>
        </div>
      </form>
    </div>
  )
}
