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
import Radio from '@material-ui/core/Radio'

import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'

import Autocomplete from './Autocomplete'

export default function TodoForm() {
  const {
    state: { currentTodo },
    dispatch,
  } = useContext(Store)

  const {
    name,
    description,
    status,
    isEditing,
    tag,
    date,
    importance,
  } = currentTodo

  const handleInputChange = e => {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    dispatch({ type: 'EDIT_FIELD', payload: { [name]: value } })
  }

  function handleTagChange(value) {
    dispatch({
      type: 'EDIT_FIELD',
      payload: { id: currentTodo.id, tag: value },
    })
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
          <Typography component="h2" variant="h3" gutterBottom>
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
            multiline
          />
          <TextField
            onChange={handleInputChange}
            value={date}
            id="date"
            label="Дата выполнения"
            type="date"
            name="date"
            InputLabelProps={{
              shrink: true,
            }}
          />
          {date && (
            <RadioGroup
              aria-label="importance"
              name="importance"
              value={importance}
              onChange={handleInputChange}
            >
              <FormControlLabel
                value="Срочная важная задача"
                control={<Radio />}
                label="Срочная важная задача"
              />
              <FormControlLabel
                value="Срочная неважная задача"
                control={<Radio />}
                label="Срочная неважная задача"
              />
              <FormControlLabel
                value="Не срочная важная задача"
                control={<Radio />}
                label="Не срочная важная задача"
              />
              <FormControlLabel
                value="Не срочная неважная задача"
                control={<Radio />}
                label="Не срочная неважная задача"
              />
            </RadioGroup>
          )}
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
          <Autocomplete onTagChange={handleTagChange} tagValue={tag} />
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
