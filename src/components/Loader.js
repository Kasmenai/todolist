import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'

const styles = theme => ({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
  },
})

function CircularIndeterminate(props) {
  const { classes } = props
  return <CircularProgress className={classes.root} />
}

export default withStyles(styles)(CircularIndeterminate)
