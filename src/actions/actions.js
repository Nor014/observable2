export function getList() {
  return {
    type: 'GET_SERVICE_LIST'
  }
}

export function setList(data) {
  return {
    type: 'SET_LIST',
    payload: data
  }
}

export function setError(error) {
  return {
    type: 'SET_ERROR',
    payload: error
  }
}

export function getDetails(id) {
  return {
    type: 'GET_DETAILS',
    payload: id
  }
}

export function setDetails(data) {
  return {
    type: 'SET_DETAILS',
    payload: data
  }
}

export function setDetailsError(error) {
  return {
    type: 'SET_DETAILS_ERROR',
    payload: error
  }
}