import React from 'react';
import s from './Header.module.css'
import {NavLink, RouteComponentProps} from "react-router-dom";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getAuth} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component<any, any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then((res: any) => {
                if (res.data.resultCode === 0) {
                    let {id, email, login} = res.data.data
                    this.props.getAuth(id, email, login)
                }
            })
    }

    render() {
        return <Header {...this.props}/>
    }
};

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {getAuth})(HeaderContainer)


type AuthMeResponseType = {
    resultCode: number
    messages: [],
    data: {
        id: number,
        email: string,
        login: string
    }
}

type mapStateToPropsType = {}

type mapDispatchToPropsType = {
    getAuth: (userId: number, email: string, login: string) => void
}

type MapPropsType = mapStateToPropsType & mapDispatchToPropsType