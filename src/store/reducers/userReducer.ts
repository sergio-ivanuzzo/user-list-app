import { AnyAction } from "redux";

import { UserActionType } from "actions/userActions";

export interface IUser {
    id: number;
    first_name: string;
    last_name: string;
    birth_date: string;
    gender: string;
    job: string;
    biography: string;
    is_active: boolean;
}

export interface IUserReducerState {
    users: Array<IUser>;
    currentUser: IUser;
}

export const initialState: IUserReducerState = {
    users: [],
    currentUser: undefined
};

export const userReducer = (state = initialState, action: AnyAction): IUserReducerState => {
    switch (action.type) {
        case UserActionType.USER_FETCH_LIST_COMPLETE: {
            return {
                ...state,
                users: action.payload
            };
        }
        case UserActionType.USER_FETCH_COMPLETE: {
            return {
                ...state,
                currentUser: action.payload
            };
        }
        case UserActionType.USER_ADD_COMPLETE: {
            return {
                ...state,
                users: [...state.users, action.payload]
            };
        }
        case UserActionType.USER_UPDATE_COMPLETE: {
            const index = state.users.findIndex((user) => user.id === action.payload.id);

            if (index === -1) {
                return state;
            }

            return {
                ...state,
                users: [
                    ...state.users.slice(0, index),
                    action.payload,
                    ...state.users.slice(index + 1)
                ]
            };
        }
        default: {
            return state;
        }
    }
};
