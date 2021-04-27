import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import HomeIcon from "@material-ui/icons/Home"
import { Link } from "gatsby"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

export default function ButtonAppBar({ siteTitle }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => console.log("take to home")}
              aria-label="close"
            >
              <HomeIcon />
            </IconButton>

            <Typography variant="h6" className={classes.title}>
              {siteTitle}
            </Typography>
          </Toolbar>
        </Link>
      </AppBar>
    </div>
  )
}
