/**
 * utility to handle data filters
 */

let filters = []

const AddFilter = filter => {
  if (!filters.includes(filter)) {
    filters.push(filter)
  }
}

const RemoveFilter = filter => {
  filters = filters.filter(val => val != filter)
}

export { filters, AddFilter, RemoveFilter }
