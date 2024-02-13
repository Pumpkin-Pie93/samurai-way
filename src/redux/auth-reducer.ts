import {Dispatch} from "redux";
import {authApi, usersApi} from "../api/api";


const initialAuthState: AuthStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}
type AuthStateType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}

export const authReducer = (state = initialAuthState, action: AuthActionsType):AuthStateType => {
    switch (action.type) {
        case "SET-AUTH":{
            return {...state,...action.data, isAuth: true}
        }
        default:
            return state
    }
}

// actions

export const getAuth = (id:number,email:string,login:string) => {
    return {type: 'SET-AUTH',data:{id,email,login}} as const
}
//thunks
export const authMe = () => (dispatch: Dispatch) => {
    authApi.me()
        .then((res: any) => {
            if (res.data.resultCode === 0) {
                let {id, email, login} = res.data.data
                dispatch(getAuth(id, email, login))
            }
        })
}

// types
type AuthActionsType = ReturnType<typeof getAuth>

