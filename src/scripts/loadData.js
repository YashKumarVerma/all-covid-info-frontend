// import axios from "axios"
// import { server } from "./server"
import rawData from "../storage/raw.json"
import tags from "../storage/tag.json"
import states from "../storage/states.json"

/** to load all data about all resources */
export const loadResourceDataset = () =>
  new Promise(async resolve => {
    // const response = await axios.get(`${server.url}/resource`)
    // const data = await response.data
    const data = rawData
    resolve(data)
  })

/**
 * to load just name of filters
 *
 * these can be computed on client side but can have performance issues
 * if processing of large chunks of data relied on client side
 *
 **/
export const loadFilterTags = () =>
  new Promise(async resolve => {
    // const response = await axios.get(`${server.url}/resource/tags`)
    const data = tags
    resolve(data)
  })

export const loadStateNames = () =>
  new Promise(async resolve => {
    const data = states
    resolve(data)
  })
