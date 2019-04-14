import React from 'react'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

function SimpleSnackbar(props) {
  const { open, setOpen, handleSnackClose } = props

  function hideSnack(event, reason) {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={open}
      autoHideDuration={6000}
      onClose={hideSnack}
      ContentProps={{
        'aria-describedby': 'message-id',
      }}
      message={<span id="message-id">Данные не были сохранены</span>}
      action={[
        <Button key="undo" color="secondary" size="small" onClick={hideSnack}>
          вернуться и сохранить
        </Button>,
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          onClick={handleSnackClose}
        >
          <CloseIcon />
        </IconButton>,
      ]}
    />
  )
}

export default SimpleSnackbar
