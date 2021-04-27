const { get } = require("axios")
const fs = require("fs")
const path = require("path")

/**
 * get latest data from API
 */
const getGoogleFormData = () =>
  new Promise(async resolve => {
    const response1 = await get("https://data.all-covid-info.me/resource")
    const raw = await response1.data
    const response2 = await get("https://data.all-covid-info.me/resource/tags")
    const tags = await response2.data
    resolve({ raw: raw.payload, tags: tags.payload })
  })

/**
 * Function to save incoming data to disk
 * @param {Array<row>} data array of items to be shown on site
 */
const writeToFile = data =>
  new Promise(async resolve => {
    await fs.writeFileSync(
      path.join(__dirname, "./src/storage/raw.json"),
      JSON.stringify(data.raw)
    )

    await fs.writeFileSync(
      path.join(__dirname, "./src/storage/tag.json"),
      JSON.stringify(data.tags)
    )
    resolve(true)
  })

/**
 * Finally calling all methods
 */
getGoogleFormData()
  .then(writeToFile)
  .then(() => console.log("data written to src/storage"))
