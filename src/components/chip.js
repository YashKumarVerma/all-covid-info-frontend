import React, { useState } from "react"
import Chip from "@material-ui/core/Chip"
import DoneIcon from "@material-ui/icons/Done"

export const FunctionalChip = ({ title, addFilter, removeFilter }) => {
  const [active, setActive] = useState(false)
  return (
    <Chip
      label={title}
      clickable
      style={{ margin: 2 }}
      color={active === true ? "secondary" : "primary"}
      onClick={() => {
        if (active) {
          removeFilter(title)
          setActive(false)
        } else {
          addFilter(title)
          setActive(true)
        }
      }}
      deleteIcon={<DoneIcon />}
    />
  )
}
