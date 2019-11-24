import { all, takeEvery, AllEffect } from "redux-saga/effects";

import { UserActionType } from "actions/userActions";
import {
    fetchUsers,
    addUser,
    updateUser,
    removeUser
} from "./userSagas";

export function* rootSaga(): IterableIterator<AllEffect<any>> {
    yield all([
        takeEvery(UserActionType.USER_FETCH_LIST, fetchUsers),
        takeEvery(UserActionType.USER_ADD, addUser),
        takeEvery(UserActionType.USER_UPDATE, updateUser),
        takeEvery(UserActionType.USER_REMOVE, removeUser),
    ]);
}
