import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {authMe} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component<any, any> {

    componentDidMount() {
        this.props.authMe()
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

export default connect(mapStateToProps, {authMe})(HeaderContainer)


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