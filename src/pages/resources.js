import React from "react"
import Layout from "../components/layout"
import { FunctionalChip } from "../components/chip"
import { loadFilterTags, loadResourceDataset } from "../scripts/loadData"
import CircularProgress from "@material-ui/core/CircularProgress"
import { ResourceCard } from "../components/resourceCard"
import { MasonryGrid } from "../components/masonry"

/** main index page */
class IndexPage extends React.Component {
  constructor() {
    super()

    this.state = {
      tags: [],
      resource: [],
      loading: false,
      filters: [],
      totalResources: -1,
      processedResources: -1,
    }

    this.addFilter = this.addFilter.bind(this)
    this.removeFilter = this.removeFilter.bind(this)
  }

  /** load tag list and make request for entire site data if not already downloaded */
  componentDidMount() {
    loadFilterTags().then(tags => {
      this.setState({ tags })
    })

    loadResourceDataset().then(resource => {
      this.setState({
        resource,
        totalResources: resource.length,
        processedResources: 0,
      })
    })
  }

  /**
   * handlers for filters
   *
   * any change in filters causes the resource listing to re-render.
   * The filters are programmed to run over an AND operation.
   *
   * For example, selecting a "Doctor" and "Free" would render results
   * which have both the tags, i.e. Doctor and Free
   * */
  /** to add a new filter to resources */
  addFilter(filter) {
    if (!this.state.filters.includes(filter)) {
      this.setState({ filters: [...this.state.filters, filter] })
    }
  }

  /** to remove an existing filter from resource */
  removeFilter(filter) {
    this.setState({ filters: this.state.filters.filter(val => val !== filter) })
  }

  /** throw up on user */
  render() {
    const { tags } = this.state
    return (
      <Layout>
        {/** show tags to filter data */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: 10,
          }}
        >
          {tags.map(tag => (
            <FunctionalChip
              key={tag}
              title={tag}
              addFilter={this.addFilter}
              removeFilter={this.removeFilter}
            />
          ))}
        </div>

        {/** spinner to show data loading */}
        {this.state.loading ? (
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
        ) : (
          true
        )}

        {/** display filtered items */}
        <MasonryGrid>
          {this.state.resource.map(resource => (
            <ResourceCard data={resource} />
          ))}
        </MasonryGrid>
      </Layout>
    )
  }
}

export default IndexPage
