import { all, takeEvery, AllEffect } from "redux-saga/effects";

import { UserActionType } from "actions/userActions";
import { fetchUsers } from "./userSagas";

export function* rootSaga(): IterableIterator<AllEffect<any>> {
    yield all([
        takeEvery(UserActionType.USER_FETCH_LIST, fetchUsers),
    ]);
}
