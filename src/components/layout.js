/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import Fab from "@material-ui/core/Fab"
import PostAddIcon from "@material-ui/icons/PostAdd"
import Link from "@material-ui/core/Link"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header siteTitle="All Covid Info" />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1160,
          minWidth: 200,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
      <Link
        target="_BLANK"
        variant="inherit"
        href="https://docs.google.com/forms/d/e/1FAIpQLSczHw8P4cjnZF37H9JpUpX2SOWCDiaTqDFS-yCMAKT0bqJocA/viewform"
      >
        <Fab
          variant="extended"
          color="secondary"
          size="large"
          area-label="Add Resources"
          style={{
            margin: 0,
            top: "auto",
            right: 30,
            bottom: 30,
            left: "auto",
            position: "fixed",
          }}
        >
          <PostAddIcon /> Add Resources
        </Fab>
      </Link>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
