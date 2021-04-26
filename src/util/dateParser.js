export const dateToHumanFormat = timestamp => {
  const x = new Date(timestamp)
  const month = x.toLocaleString("default", { month: "long" })
  return `${month} ${x.getDate()}`
}

export const toPreciseDateFormat = timeStamp => {
  const x = new Date(timeStamp)
  return x.toLocaleDateString()
}
