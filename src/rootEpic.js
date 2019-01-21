import { combineEpics } from 'redux-observable';
import { getDetailsEpic, deleteUserEpic } from './rxjsTrial/epic'

export const rootEpic = combineEpics(
    getDetailsEpic,
    deleteUserEpic
);

