import React, { useContext } from 'react'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Store from '../context'

const options = ['Выполняется', 'На потом', 'Выполнена']

const ITEM_HEIGHT = 48

function LongMenu(props) {
  const { dispatch } = useContext(Store)
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  function handleClick(event) {
    setAnchorEl(event.currentTarget)
  }

  function handleClose() {
    setAnchorEl(null)
  }

  function handleMenuItemClick(e, id) {
    const value = e.target.textContent
    dispatch({
      type: 'UPDATE_TODO',
      payload: { id, status: value },
    })
    setAnchorEl(null)
  }

  return (
    <span>
      <IconButton
        aria-label="More"
        aria-owns={open ? 'long-menu' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: 200,
          },
        }}
      >
        {options.map(option => (
          <MenuItem
            key={option}
            selected={option === props.currentStatus}
            onClick={e => handleMenuItemClick(e, props.id)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </span>
  )
}

export default LongMenu
