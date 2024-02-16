import React, {ComponentType} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";

const mapStateAuthToProps = (state:AppStateType):mapStateAuthToPropsType => {
  return {
      isAuth: state.auth.isAuth
  }
}

type mapStateAuthToPropsType = {
    isAuth: boolean
}

export function WithAuthRedirect<T>(Component: ComponentType<T>)  {
    function RedirectComponent(props: mapStateAuthToPropsType) {
        let {isAuth, ...restProps} = props
        if (!isAuth) {
            return <Redirect to={'/login'}/>
        } else
        return <Component {...restProps as T}/>
    }

    let ConnectedRedirectComponent = connect(mapStateAuthToProps)(RedirectComponent)


    return  ConnectedRedirectComponent
};

