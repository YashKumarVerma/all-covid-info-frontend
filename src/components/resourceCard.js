import React from "react"
import clsx from "clsx"
import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton"
import CardHeader from "@material-ui/core/CardHeader"
import CardContent from "@material-ui/core/CardContent"
import CardActions from "@material-ui/core/CardActions"
import Divider from "@material-ui/core/Divider"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import Slide from "@material-ui/core/Slide"
import Container from "@material-ui/core/Container"
import ButtonGroup from "@material-ui/core/ButtonGroup"

import CloseIcon from "@material-ui/icons/Close"
import LaunchIcon from "@material-ui/icons/Launch"
import ShareIcon from "@material-ui/icons/Share"
import { dateToHumanFormat } from "../util/dateParser"
import Chip from "@material-ui/core/Chip"
import Link from "@material-ui/core/Link"
import Tooltip from "@material-ui/core/Tooltip"

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 400,
    marginBottom: 10,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    marginLeft: "auto",
  },
}))

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

export const ResourceCard = ({ data }) => {
  const {
    title,
    timestamp,
    description,
    credits,
    volunteer,
    tags,
    image,
    reference,
  } = data
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)
  const [open, setOpen] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Card className={classes.root}>
      <div onClick={() => setOpen(true)} style={{ cursor: "pointer" }}>
        <CardHeader
          title={title}
          subheader={dateToHumanFormat(timestamp)}
          titleTypographyProps={{ variant: "subtitle1" }}
          subheaderTypographyProps={{ variant: "subtitle2" }}
        />
        {image ? (
          <CardMedia className={classes.media} image={image} title={title} />
        ) : (
          true
        )}
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </div>

      <CardActions disableSpacing>
        <Button
          variant="outlined"
          color="primary"
          size="small"
          onClick={() => setOpen(true)}
        >
          Read More
        </Button>

        {/** buttons at bottom of card, disabled until next update */}
        <Tooltip title="Coming Soon, Help us build it!">
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            {reference ? (
              <IconButton aria-label="share" disabled={true}>
                <LaunchIcon />
              </IconButton>
            ) : (
              true
            )}
            <IconButton aria-label="share" disabled={true}>
              <ShareIcon />
            </IconButton>
            {/** <FullscreenIcon /> */}
          </IconButton>
        </Tooltip>
      </CardActions>

      {/** pop over item to show on full screen */}
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {title}
            </Typography>
          </Toolbar>
        </AppBar>
        <div style={{ marginTop: "4em" }}>
          <Container>
            {/** listing all tags */}
            <div style={{ marginTop: 5, marginBottom: 5 }}>
              {tags.map(tag => (
                <Chip
                  size="small"
                  label={tag}
                  style={{ padding: 4, margin: 6 }}
                  readOnly={true}
                />
              ))}
            </div>

            {/** main description body of the resource */}
            <Typography paragraph>{description}</Typography>

            {/** button group to download or forward items */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: 4,
                flexDirection: "column",
              }}
            >
              <ButtonGroup
                color="primary"
                aria-label="outlined primary button group"
                variant="text"
              >
                {reference ? (
                  <Link href={reference} target="_BLANK" noopener noreferrer>
                    <Button variant="outlined" color="primary">
                      Visit Attached Link
                    </Button>
                  </Link>
                ) : (
                  true
                )}
              </ButtonGroup>
            </div>
            {image ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: 4,
                  flexDirection: "column",
                  margin: 20,
                }}
              >
                <img src={image} alt={title} />
              </div>
            ) : (
              true
            )}
            <Divider />
          </Container>
        </div>
      </Dialog>
    </Card>
  )
}
