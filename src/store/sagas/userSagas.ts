import { call, put, Effect } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { toast } from "react-toastify";

import { client } from "httpClient/client";
import * as UserActions from "actions/userActions";
import { IUserRequestAction } from "actions/userActions";

export function* fetchUsers(action: IUserRequestAction): IterableIterator<Effect> {
    try {
        let response: AxiosResponse<{data: any}> = yield call(() => client.get("/", {
            params: {
                ...action.payload
            }
        }));

        if (response) {
            toast.success('User list successfully received!');
            action.promise.resolve();
            return yield put(UserActions.actionUsersFetchComplete(response.data));
        } else {
            action.promise.reject();
            return yield put(UserActions.actionUserError());
        }
    } catch (e) {
        toast.error(e.toString());
        action.promise.reject();
        return yield put(UserActions.actionUserError(e));
    }
}
