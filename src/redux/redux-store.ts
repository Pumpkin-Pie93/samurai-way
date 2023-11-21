import {combineReducers, createStore} from "redux";
import {dialogReducer} from "./Dialog-reducer";
import {profileReducer} from "./Profile-reducer";
import {sidebarReducer} from "./Sidebar-reducer";

let reducers = combineReducers({
    postsPage:profileReducer,
    dialogsPage: dialogReducer,
    sidebar:sidebarReducer
})

export type ReducersType = typeof reducers
export type AppStateType = ReturnType<ReducersType>

export let store = createStore(reducers)