import React from "react"
import clsx from "clsx"
import Card from "@material-ui/core/Card"
import ShareIcon from "@material-ui/icons/Share"
import Collapse from "@material-ui/core/Collapse"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton"
import CardHeader from "@material-ui/core/CardHeader"
import CardContent from "@material-ui/core/CardContent"
import CardActions from "@material-ui/core/CardActions"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import LaunchIcon from "@material-ui/icons/Launch"

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
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}))

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

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        title={title}
        subheader={timestamp}
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
      <CardActions disableSpacing>
        {reference ? (
          <IconButton aria-label="share">
            <LaunchIcon />
          </IconButton>
        ) : (
          true
        )}
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Credits: {credits}</Typography>
          <Typography paragraph>Submitted by: {volunteer}</Typography>
          <Typography paragraph>Tags: {tags}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}
