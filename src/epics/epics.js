import { ofType } from 'redux-observable';
import { of, from } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, filter, debounceTime, switchMap, catchError, retry } from 'rxjs/operators';
import { getList, setList, setError, setDetails, setDetailsError } from '../actions/actions'

export const getListEpic = (action$) => action$.pipe(
  ofType('GET_SERVICE_LIST', 'GET_DETAILS'),
  switchMap((action) => {
    if (action.payload !== undefined) {
      return ajax.getJSON(`http://localhost:7070/api/services/${action.payload}`).pipe(
        map(data => setDetails(data)),
        catchError(error => of(setDetailsError(error.message)))
      )
    } else {
      return ajax.getJSON('http://localhost:7070/api/services').pipe(
        map(data => setList(data)),
        catchError(error => of(setError(error.message)))
      )
    }
  })
)



