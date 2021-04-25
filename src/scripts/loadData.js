import axios from "axios"
import { AddFilter } from "../storage/filters"
import { server } from "./server"

/** to load all data about all resources */
export const loadResourceDataset = async () => {
  const response = await axios.get(`${server.url}/resource`)
  const data = await response.data
  console.log(response)
}

/**
 * to load just name of filters
 *
 * these can be computed on client side but can have performance issues
 * if processing of large chunks of data relied on client side
 *
 **/
export const loadFilterTags = () =>
  new Promise(async resolve => {
    const response = await axios.get(`${server.url}/resource/tags`)
    const data = await response.data
    resolve(data.payload)
  })
