

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

// types

type AuthActionsType = ReturnType<typeof getAuth>

