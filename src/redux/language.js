export function greek() {
  return {
    type: 'GREEK'
  }
}

export function english() {
  return {
    type: 'ENGLISH'
  }
}

function languageReducer(language = 'en-US', action) {
  switch (action.type) {
    case 'GREEK':
      return 'el-GR'
    case 'ENGLISH':
      return 'en-US'
    default:
      return language
  }
}

export default languageReducer