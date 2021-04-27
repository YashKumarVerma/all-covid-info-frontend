import React from "react"
import Layout from "../components/layout"
import {
  Container,
  Card,
  CardContent,
  CardActions,
  Typography,
  Divider,
} from "@material-ui/core"
import MaterialLink from "@material-ui/core/Link"
import Button from "@material-ui/core/Button"
import PostAddIcon from "@material-ui/icons/PostAdd"
import Fab from "@material-ui/core/Fab"
import GroupOutlinedIcon from "@material-ui/icons/GroupOutlined"
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck"
import StarBorderIcon from "@material-ui/icons/StarBorder"
import Tooltip from "@material-ui/core/Tooltip"
import SEO from "../components/seo"

import { Link } from "gatsby"
import { Helmet } from "react-helmet"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Listing of all COVID related information " />
      <Container style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 10 }}>
        <Card>
          <CardContent>
            <div>
              <Typography variant="h5" component="h2">
                All COVID Info
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                This portal lists all the resources that can help people
                fighting against COVID. If you come across any resource, like
                other sites listing resources, social media posts about diet,
                exercise, self care, precautions, government announcements,
                government resources, details of doctors providing assistance,
                free food services, ambulance services, NGOs, pet sitters or any
                service that can be helpful to anyone, please use the add
                resource button to add them.
              </Typography>
            </div>
          </CardContent>
          <CardActions
            style={{
              display: "flex",
            }}
          >
            <Link to="/resources" style={{ textDecoration: "none" }}>
              <Button size="small" variant="outlined" color="primary">
                <PlaylistAddCheckIcon /> View Resources
              </Button>
            </Link>
            <MaterialLink
              href="https://docs.google.com/forms/d/e/1FAIpQLSczHw8P4cjnZF37H9JpUpX2SOWCDiaTqDFS-yCMAKT0bqJocA/viewform"
              style={{ textDecoration: "none" }}
              target="_BLANK"
            >
              <Button size="small" variant="outlined" color="primary">
                <PostAddIcon /> Add Resources
              </Button>
            </MaterialLink>
            <Tooltip title="Coming Soon">
              <span>
                <Button size="small" variant="outlined" disabled>
                  <StarBorderIcon /> Top Resources
                </Button>
              </span>
            </Tooltip>
          </CardActions>
        </Card>
      </Container>
      <Container style={{ paddingLeft: 20, paddingRight: 20, marginTop: 20 }}>
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Appeal
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              I have built this project single handedly till now, to get it up
              and working as soon as possible. There is a severe need of
              manpower keep it up and fix the bugs that are encountered. We also
              need regular inputs for new resources to keep the site up to date.
              <br />
              <br />
              <b>Dear Technical Folks :</b> It does not matter how experienced
              you are, or inexperienced for the matter, there is place on the
              project for you. We have got a chance to help people with our
              skills, make good use of it.
              <br />
              <br />
              <b>Dear Non Technical Folks :</b> We need people to help us with
              keeping our data up to date, designing posters and sharable
              content that can be sent around, or curating top resources on
              site. If you wish to help in the same, drop me an email or call me
              using the links given below.
            </Typography>
          </CardContent>
          <CardActions
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Link to="/team" style={{ textDecoration: "none" }}>
              <Button size="small" variant="outlined" color="primary">
                <GroupOutlinedIcon /> Meet the Team
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Container>
    </Layout>
  )
}
export default IndexPage
