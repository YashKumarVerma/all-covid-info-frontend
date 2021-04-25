import React, { useState } from "react"
import { AddFilter, RemoveFilter, filters } from "../storage/filters"
import Chip from "@material-ui/core/Chip"
import DoneIcon from "@material-ui/icons/Done"

export const FunctionalChip = ({ title }) => {
  const [active, setActive] = useState(false)
  return (
    <Chip
      label={title}
      clickable
      style={{ margin: 2 }}
      color={active === true ? "primary" : "gray"}
      onClick={() => {
        if (active) {
          RemoveFilter(title)
          setActive(false)
        } else {
          AddFilter(title)
          setActive(true)
        }
        console.log(filters)
      }}
      deleteIcon={<DoneIcon />}
    />
  )
}
