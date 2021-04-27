import Layout from "../components/layout"
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"
import LanguageIcon from "@material-ui/icons/Language"
import MailOutlineIcon from "@material-ui/icons/MailOutline"
import Link from "@material-ui/core/Link"
import CallIcon from "@material-ui/icons/Call"
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 400,
  },
})

export default function MediaCard() {
  const classes = useStyles()

  return (
    <Layout>
      <Typography style={{ margin: 20 }} variant="h6">
        Our Team
      </Typography>
      <div
        style={{
          marginTop: 30,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://i.imgur.com/UDmC0hI.png"
              title="Yash Kumar Verma"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Yash Kumar Verma
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Hello there, I build this project so that people have the access
                all the resources they need at a single place.
                <br />
                <br />
                I'm a second year University Student from Dehradun, Uttarakhand.
                I build projects that try to ease lives of people.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Link href="https://github.com/yashkumarverma" target="_BLANK">
              <Button size="small" color="primary">
                <GitHubIcon />
              </Button>
            </Link>
            <Link href="https://yashkumarverma.github.io/" target="_BLANK">
              <Button size="small" color="primary">
                <LanguageIcon />
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/yash-kumar-verma/"
              target="_BLANK"
            >
              <Button size="small" color="primary">
                <LinkedInIcon />
              </Button>
            </Link>
          </CardActions>
        </Card>
        <Card
          className={classes.root}
          style={{ marginLeft: 10, marginRight: 10 }}
        >
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Appeal
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                I have built this project single handedly till now, to get it up
                and working as soon as possible. There is a severe need of
                manpower keep it up and fix the bugs that are encountered.
                <br />
                <br />
                <b>Dear Technical Folks :</b> It does not matter how experienced
                you are, or inexperienced for the matter, there is place on the
                project for you. We have got a chance to help people with
                skills, make good use of it.
                <br />
                <br />
                <b>Dear Non Technical Folks :</b> We need people to help us with
                keeping our data up to date, designing posters and sharable
                content that can be sent around, or curating top resources on
                site. If you wish to help in the same, drop me an email or call
                me using the links given below.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Link href="tel:+918864813176" style={{ textDecoration: "none" }}>
              <Button size="small" color="primary">
                <CallIcon /> Call
              </Button>
            </Link>
            <Link
              href="mailto:yk.verma2000@gmail.com"
              style={{ textDecoration: "none" }}
            >
              <Button size="small" color="primary">
                <MailOutlineIcon /> Write to me
              </Button>
            </Link>
          </CardActions>
        </Card>
      </div>
      <div
        style={{
          marginTop: 30,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ul>
          <li>Thanks to : Utsav Deep for registering the domain name.</li>
        </ul>
      </div>
    </Layout>
  )
}
