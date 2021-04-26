import React, { useState } from "react"
import Chip from "@material-ui/core/Chip"
import DoneIcon from "@material-ui/icons/Done"

export const FunctionalChip = ({
  title,
  addFilter,
  removeFilter,
  readOnly,
}) => {
  const [active, setActive] = useState(false)
  return (
    <Chip
      label={title}
      clickable
      style={{ margin: 2 }}
      color={active === true ? "secondary" : "primary"}
      onClick={() => {
        if (readOnly === true) {
          return
        }
        if (active) {
          removeFilter(title)
          setActive(false)
          console.log("setting to inactive")
        } else {
          addFilter(title)
          setActive(true)
          console.log("setting to active")
        }
      }}
      deleteIcon={<DoneIcon />}
    />
  )
}
