export function name(input) {
  return {
    type: 'NAME',
    data: input
  }
}

export function email(input) {
  return {
    type: 'EMAIL',
    data: input
  }
}

export function message(input) {
  return {
    type: 'MESSAGE',
    data: input
  }
}

export function setValidation(language) {
  return {
    type: 'SET_VALIDATION',
    data: language
  }
}

export function removeValidation() {
  return {
    type: 'REMOVE_VALIDATION',
  }
}

const initialFormState = {
  name: '',
  email: '',
  message: '',
  validation: ''
}

function formReducer(formState = initialFormState, action) {
  switch (action.type) {
    case 'NAME':
      return { ...formState, name: action.data }
    case 'EMAIL':
      return { ...formState, email: action.data }
    case 'MESSAGE':
      return { ...formState, message: action.data }
    case 'SET_VALIDATION':
      if (action.data === 'en-US') {
        return { ...formState, validation: 'Your message sent succesfully! Anything else to add?' }
      } else {
        return { ...formState, validation: 'To μήνυμα σας στάλθηκε με επιτυχία! Θέλετε να μας πείτε κάτι ακόμα;' }
      }
    case 'REMOVE_VALIDATION':
      return { ...formState, validation: '' }
    default:
      return formState
  }
}

export default formReducer