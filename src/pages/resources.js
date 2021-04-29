import React from "react"
import Layout from "../components/layout"
import ControlledOpenSelect from "../components/dropdown"
import { FunctionalChip } from "../components/chip"
import {
  loadFilterTags,
  loadResourceDataset,
  loadStateNames,
} from "../scripts/loadData"
import CircularProgress from "@material-ui/core/CircularProgress"
import MenuItem from "@material-ui/core/MenuItem"
import { ResourceCard } from "../components/resourceCard"
import { MasonryGrid } from "../components/masonry"

/** main index page */
class IndexPage extends React.Component {
  constructor() {
    super()

    this.state = {
      tags: [],
      resource: [],
      state: [],
      loading: false,
      filters: [],
      totalResources: -1,
      processedResources: -1,
      animate: false,
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

    loadStateNames().then(state => {
      this.setState({ state })
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
      this.setState({ filters: [...this.state.filters, filter] }, () => {
        // console.log("adding new filter", this.state.filters)
      })
    }
  }

  /** to remove an existing filter from resource */
  removeFilter(filter) {
    this.setState(
      { filters: this.state.filters.filter(val => val !== filter) },
      () => {
        // console.log("removing filter", this.state.filters)
      }
    )
  }

  /** throw up on user */
  render() {
    const { tags, state } = this.state
    return (
      <Layout>
        <ControlledOpenSelect
          addFilter={this.addFilter}
          removeFilter={this.removeFilter}
          menuItem={state.map(state => (
            <MenuItem key={state.code} value={state.name}>
              {state.name}
            </MenuItem>
          ))}
        />
        {/** show tags to filter data */}
        <div
          style={{
            display: "flex",
            margin: 10,
            width: "100%",
            overflowY: "scroll",
          }}
        >
          {tags.map(tag => (
            <FunctionalChip
              key={tag}
              title={tag}
              addFilter={this.addFilter}
              removeFilter={this.removeFilter}
              readOnly={false}
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
          {this.state.resource.map(resource => {
            if (this.state.filters.every(x => resource.tags.includes(x))) {
              return <ResourceCard data={resource} />
            }
          })}
        </MasonryGrid>
      </Layout>
    )
  }
}

export default IndexPage
