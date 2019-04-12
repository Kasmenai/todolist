import React, { useContext, useReducer } from 'react'
import ReactDOM from 'react-dom'
import Store from './context'
import reducer from './reducer'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import TodoHeader from './components/TodoHeader'
import Drawer from '@material-ui/core/Drawer'
import './style.css'

function App() {
  const globalStore = useContext(Store)
  const [state, dispatch] = useReducer(reducer, globalStore)

  return (
    <Store.Provider value={{ state, dispatch }}>
      <TodoHeader />
      <Drawer
        anchor="right"
        open={state.isOpen}
        onClose={() => dispatch({ type: 'TOGGLE_DRAWER' })}
      >
        <TodoForm />
      </Drawer>
      <TodoList />
    </Store.Provider>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
