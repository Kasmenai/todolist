import React, { useContext } from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import Store from '../context'

export default function TodoHeader() {
  const { dispatch } = useContext(Store)
  const toggleDrawer = () => dispatch({ type: 'TOGGLE_DRAWER' })
  return (
    <React.Fragment>
      <Typography component="h1" variant="h2" gutterBottom>
        Список задач
      </Typography>
      <Button variant="contained" color="primary" onClick={toggleDrawer}>
        Добавить задачу
      </Button>
    </React.Fragment>
  )
}
