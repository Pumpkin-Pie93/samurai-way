import {applyMiddleware, combineReducers, createStore as legacy_createStore} from "redux";
import {dialogReducer} from "./Dialog-reducer";
import {profileReducer} from "./Profile-reducer";
import {sidebarReducer} from "./Sidebar-reducer";
import {userReducer} from "./usres-reducer";
import {authReducer} from "./auth-reducer";
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form'

let rootReducer = combineReducers({
    postsPage:profileReducer,
    dialogsPage: dialogReducer,
    sidebar:sidebarReducer,
    usersPage: userReducer,
    auth: authReducer,
    form: formReducer
})

export type rootReducerType = typeof rootReducer
export type AppStateType = ReturnType<rootReducerType>

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))

// console.log(store.getState())