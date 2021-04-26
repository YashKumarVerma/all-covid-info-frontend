export const dateToHumanFormat = timestamp => {
  const x = new Date(timestamp)
  const month = x.toLocaleString("default", { month: "long" })
  return `${month} ${x.getDate()}`
}
