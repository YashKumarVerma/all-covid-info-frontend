// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
// import Seo from "../components/seo"

/** */
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { FunctionalChip } from "../components/chip"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}))

/** */
const IndexPage = () => (
  <Layout>
    <FunctionalChip title="oxygen1" />
    <FunctionalChip title="oxygen2" />
    <FunctionalChip title="oxygen3" />
    <FunctionalChip title="oxygen4" />
    <FunctionalChip title="oxygen5" />
    <FunctionalChip title="oxygen6" />
    <FunctionalChip title="oxygen7" />
    <FunctionalChip title="oxygen8" />
  </Layout>
)

export default IndexPage
