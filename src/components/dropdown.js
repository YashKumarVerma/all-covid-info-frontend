import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import { loadStateNames } from "../scripts/loadData"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles(theme => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}))

export default function ControlledOpenSelect(props) {
  const classes = useStyles()
  const [state, setState] = React.useState("")
  const [open, setOpen] = React.useState(false)

  const handleChange = event => {
    setState(event.target.value)
    if (event.target.value !== "All states") props.addFilter(event.target.value)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  return (
    <div>
      <Button className={classes.button} onClick={handleOpen}>
        Select your State
      </Button>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">States</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={state}
          onChange={handleChange}
        >
          {props.menuItem}
        </Select>
      </FormControl>
    </div>
  )
}
