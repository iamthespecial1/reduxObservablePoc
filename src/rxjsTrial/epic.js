import * as trialAction from './action'
import { Observable } from 'rxjs/Observable';
import Axios from "axios"
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mapTo';
import { ajax } from 'rxjs/ajax';
import { mergeMap, map } from 'rxjs/operators';
import { ofType } from 'redux-observable';
export const getDetailsEpic = action$ => action$.pipe(
    ofType(trialAction.GET_DETAILS),
    mergeMap(action =>
        ajax.getJSON(`https://jsonplaceholder.typicode.com/photos`).pipe(
            map(response => trialAction.detailsSuccess(response))
        )
    )
);

export const deleteUserEpic = action$ => action$.pipe(
    ofType(trialAction.DELETE_USER),
    mergeMap(action =>
        ajax.delete(`https://jsonplaceholder.typicode.com/posts/${action.id}`).pipe(
            map(response => trialAction.deleteSuccess(response))
        )
    )
);

