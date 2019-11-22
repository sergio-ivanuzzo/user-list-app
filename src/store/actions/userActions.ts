import { AnyAction } from "redux";

import { IPromiseMethod } from "helpers";

export enum UserActionType {
    USER_FETCH_LIST = "USER_FETCH_LIST",
    USER_FETCH_LIST_COMPLETE = "USER_FETCH_LIST_COMPLETE",
    USER_FETCH = "USER_FETCH",
    USER_FETCH_COMPLETE = "USER_FETCH_COMPLETE",
    USER_ADD = "USER_ADD",
    USER_ADD_COMPLETE = "USER_ADD_COMPLETE",
    USER_UPDATE = "USER_UPDATE",
    USER_UPDATE_COMPLETE = "USER_UPDATE_COMPLETE",
    USER_REMOVE = "USER_REMOVE",
    USER_REMOVE_COMPLETE = "USER_REMOVE_COMPLETE",
    USER_ERROR = "USER_ERROR",
}

export interface IUserAction {
    readonly Request: {
        type: string;
        payload: any;
        promise: {
            resolve: IPromiseMethod;
            reject: IPromiseMethod;
        }
    }

    readonly Response: {
        payload: any;
    }
}

export interface IUserRequestAction extends AnyAction {
    payload: any;
    promise: {
        resolve: IPromiseMethod;
        reject: IPromiseMethod;
    }
}

export interface IUserResponseAction extends AnyAction {
    payload: any;
}

export function actionUsersFetch(payload: any, resolve: IPromiseMethod, reject: IPromiseMethod): AnyAction {
    return <IUserRequestAction>{
        payload,
        type: UserActionType.USER_FETCH_LIST,
        promise: {
            resolve,
            reject
        }
    }
}

export function actionUsersFetchComplete(payload: any): AnyAction {
    return <IUserResponseAction>{
        payload,
        type: UserActionType.USER_FETCH_LIST_COMPLETE
    }
}

export function actionUserFetch(payload: any, resolve: IPromiseMethod, reject: IPromiseMethod): AnyAction {
    return <IUserRequestAction>{
        payload,
        type: UserActionType.USER_FETCH,
        promise: {
            resolve,
            reject
        }
    }
}

export function actionUserFetchComplete(payload: any): AnyAction {
    return <IUserResponseAction>{
        payload,
        type: UserActionType.USER_FETCH_COMPLETE
    }
}

export function actionUserAdd(payload: any, resolve: IPromiseMethod, reject: IPromiseMethod): AnyAction {
    return <IUserRequestAction>{
        payload,
        type: UserActionType.USER_ADD,
        promise: {
            resolve,
            reject
        }
    }
}

export function actionUserAddComplete(payload: any): AnyAction {
    return <IUserResponseAction>{
        payload,
        type: UserActionType.USER_ADD_COMPLETE
    }
}

export function actionUserUpdate(payload: any, resolve: IPromiseMethod, reject: IPromiseMethod): AnyAction {
    return <IUserRequestAction>{
        payload,
        type: UserActionType.USER_UPDATE,
        promise: {
            resolve,
            reject
        }
    }
}

export function actionUserUpdateComplete(payload: any): AnyAction {
    return <IUserResponseAction>{
        payload,
        type: UserActionType.USER_UPDATE_COMPLETE
    }
}

export function actionUserRemove(payload: any, resolve: IPromiseMethod, reject: IPromiseMethod): AnyAction {
    return <IUserRequestAction>{
        payload,
        type: UserActionType.USER_REMOVE,
        promise: {
            resolve,
            reject
        }
    }
}

export function actionUserRemoveComplete(payload: any): AnyAction {
    return <IUserResponseAction>{
        payload,
        type: UserActionType.USER_REMOVE_COMPLETE
    }
}

export function actionUserError(error?: Error) {
    return {
        type: UserActionType.USER_ERROR
    }
}
