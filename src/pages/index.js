import React from "react"
import Layout from "../components/layout"
import { FunctionalChip } from "../components/chip"
import { loadFilterTags } from "../scripts/loadData"
import CircularProgress from "@material-ui/core/CircularProgress"

/** main index page */
class IndexPage extends React.Component {
  constructor() {
    super()

    this.state = {
      tags: [],
      resource: [],
      loading: false,
    }
  }

  /** load tag list and make request for entire site data if not already downloaded */
  componentDidMount() {
    loadFilterTags().then(tags => {
      this.setState({ tags })
    })
  }

  /** throw up on user */
  render() {
    const { tags } = this.state
    return (
      <Layout>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: 10,
          }}
        >
          {tags.map(tag => (
            <FunctionalChip key={tag} title={tag} />
          ))}
        </div>

        <div
          style={{
            margin: 20,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <CircularProgress />
          <small>Loading Resources</small>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
