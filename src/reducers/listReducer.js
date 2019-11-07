const initState = {
  serviceList: [],
  loading: false,
  error: null
}

export default function listReducer(state = initState, action) {
  if (action.type === 'GET_SERVICE_LIST') {
    return { ...state, loading: true }
  }

  if (action.type === 'SET_LIST') {
    return { ...state, loading: false, serviceList: action.payload, error:null }
  }

  if (action.type === 'SET_ERROR') {
    return { ...state, loading: false, error: action.payload }
  }

  return state
}