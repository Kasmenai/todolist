import React from 'react'
import Downshift from 'downshift'
import { makeStyles } from '@material-ui/styles'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import MenuItem from '@material-ui/core/MenuItem'

const suggestions = [
  { label: 'тег0' },
  { label: 'тег1' },
  { label: 'тег2' },
  { label: 'тег3' },
]

function renderInput(inputProps) {
  const { InputProps, classes, ref, ...other } = inputProps

  return (
    <TextField
      InputProps={{
        inputRef: ref,
        classes: {
          root: classes.inputRoot,
          input: classes.inputInput,
        },
        ...InputProps,
      }}
      {...other}
    />
  )
}

function renderSuggestion({
  suggestion,
  index,
  itemProps,
  highlightedIndex,
  selectedItem,
}) {
  const isHighlighted = highlightedIndex === index
  const isSelected = (selectedItem || '').indexOf(suggestion.label) > -1

  return (
    <MenuItem
      {...itemProps}
      key={suggestion.label}
      selected={isHighlighted}
      component="div"
      style={{
        fontWeight: isSelected ? 500 : 400,
      }}
    >
      {suggestion.label}
    </MenuItem>
  )
}

function getSuggestions(value) {
  const inputValue = value.trim().toLowerCase()
  const inputLength = inputValue.length
  let count = 0

  return inputLength === 0
    ? []
    : suggestions.filter(suggestion => {
        const keep =
          count < 5 &&
          suggestion.label.slice(0, inputLength).toLowerCase() === inputValue
        if (keep) {
          count += 1
        }
        return keep
      })
}

const useStyles = makeStyles(theme => ({
  container: {
    flexGrow: 1,
    position: 'relative',
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
  },
  chip: {
    margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`,
  },
  inputRoot: {
    flexWrap: 'wrap',
  },
  inputInput: {
    width: 'auto',
    flexGrow: 1,
  },
  divider: {
    height: theme.spacing.unit * 2,
  },
}))

function Autocomplete(props) {
  const classes = useStyles()
  return (
    <Downshift initialInputValue={props.tagValue} onChange={props.onTagChange}>
      {({
        getInputProps,
        getItemProps,
        getMenuProps,
        highlightedIndex,
        inputValue,
        isOpen,
        selectedItem,
      }) => (
        <div className={classes.container}>
          {renderInput({
            fullWidth: true,
            classes,
            InputProps: getInputProps({
              placeholder: 'введите т..',
            }),
          })}
          <div {...getMenuProps()}>
            {isOpen ? (
              <Paper className={classes.paper} square>
                {getSuggestions(inputValue).map((suggestion, index) =>
                  renderSuggestion({
                    suggestion,
                    index,
                    itemProps: getItemProps({ item: suggestion.label }),
                    highlightedIndex,
                    selectedItem,
                  })
                )}
              </Paper>
            ) : null}
          </div>
        </div>
      )}
    </Downshift>
  )
}

export default Autocomplete
