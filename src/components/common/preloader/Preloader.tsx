import React from 'react';
import s from "../../users/Users.module.css";
import loader from "../../../assets/loader/loader2.svg";

export const Preloader = (props:any) => {
    return (
        <div>
            <img className={s.loader} src={loader}/>
        </div>
    );
};

