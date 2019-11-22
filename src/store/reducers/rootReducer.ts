import { combineReducers } from "redux";

import { IUserReducerState, userReducer } from "./userReducer";

export interface IStoreState {
    userReducer: IUserReducerState;
}

export const rootReducer = combineReducers<IStoreState>({
    userReducer
});
