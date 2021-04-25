import React from "react"
import clsx from "clsx"
import Card from "@material-ui/core/Card"
import { red } from "@material-ui/core/colors"
import ShareIcon from "@material-ui/icons/Share"
import Collapse from "@material-ui/core/Collapse"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton"
import CardHeader from "@material-ui/core/CardHeader"
import FavoriteIcon from "@material-ui/icons/Favorite"
import CardContent from "@material-ui/core/CardContent"
import CardActions from "@material-ui/core/CardActions"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
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
  avatar: {
    backgroundColor: red[500],
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
  } = data
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card className={classes.root}>
      <CardHeader title={title} subheader={timestamp} />
      <CardMedia className={classes.media} image={image} title={title} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
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
