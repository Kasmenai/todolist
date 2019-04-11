import React, { useContext } from 'react'
import Store from '../context'
import uniqid from 'uniqid'

export default function TodoForm() {
  const {
    state: { currentTodo },
    dispatch,
  } = useContext(Store)
  const { name, description, isEditing } = currentTodo

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
    <div className="row">
      <div className="col-md-12">
        <br />
        <div className="input-group">
          <form action="" onSubmit={handleTodoAdd}>
            <input
              className="form-control"
              value={name}
              onChange={handleInputChange}
              name="name"
              required
            />
            <input
              className="form-control"
              value={description}
              onChange={handleInputChange}
              name="description"
            />
            <div className="input-group-append">
              <button className="btn btn-primary" type="submit">
                Add
              </button>
              <button
                className="btn btn-primary"
                type="reset"
                onClick={handleCancel}
              >
                cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
