import {combineReducers, legacy_createStore} from "redux";
import {dialogReducer} from "./Dialog-reducer";
import {profileReducer} from "./Profile-reducer";
import {sidebarReducer} from "./Sidebar-reducer";

let rootReducer = combineReducers({
    postsPage:profileReducer,
    dialogsPage: dialogReducer,
    sidebar:sidebarReducer
})

export type rootReducerType = typeof rootReducer
export type AppStateType = ReturnType<rootReducerType>


export let store = legacy_createStore(rootReducer)

// window.store = store
