export function greek() {
  return {
    type: "GREEK"
  }
}

export function english() {
  return {
    type: "ENGLISH"
  }
}

function languageReducer(language = "en", action) {
  switch (action.type) {
    case "GREEK":
      return "el"
    case "ENGLISH":
      return "en"
    default:
      return language
  }
}

export default languageReducer