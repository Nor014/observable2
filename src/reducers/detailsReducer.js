const initState = {
  details: {},
  loading: false,
  error: null
}

export default function detailsReducer(state = initState, action) {
  if (action.type === 'GET_DETAILS') {
    return { ...state, loading: true, error: null }
  }

  if (action.type === 'SET_DETAILS') {
    return { ...state, loading: false, details: action.payload, error: null }
  }

  if (action.type === 'SET_DETAILS_ERROR') {
    return { ...state, loading: false, error: action.payload }
  }


  return state
}