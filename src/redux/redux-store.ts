import {combineReducers, createStore as legacy_createStore} from "redux";
import {dialogReducer} from "./Dialog-reducer";
import {profileReducer} from "./Profile-reducer";
import {sidebarReducer} from "./Sidebar-reducer";
import {userReducer} from "./usres-reducer";
import {authReducer} from "./auth-reducer";

let rootReducer = combineReducers({
    postsPage:profileReducer,
    dialogsPage: dialogReducer,
    sidebar:sidebarReducer,
    usersPage: userReducer,
    auth: authReducer
})

export type rootReducerType = typeof rootReducer
export type AppStateType = ReturnType<rootReducerType>


export let store = legacy_createStore(rootReducer)

// window.store = store
