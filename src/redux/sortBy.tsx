export function popularity() {
  return {
    type: "BY_POPULARITY"
  }
}

export function votes() {
  return {
    type: "BY_VOTES"
  }
}

export function date() {
  return {
    type: "BY_DATE"
  }
}

const initialSortBy = {
  url: 'popularity.desc',
  type: 'popularity'
}

function sortByReducer(sortBy = initialSortBy, action) {
  switch (action.type) {
    case "BY_POPULARITY":
      return {
        url: 'popularity.desc',
        type: 'popularity'
      }
    case "BY_VOTES":
      return {
        url: "vote_average.desc",
        type: 'votes'
      }

    case "BY_DATE":
      return {
        url: "first_air_date.asc",
        type: "date"
      }
    default:
      return sortBy
  }
}

export default sortByReducer