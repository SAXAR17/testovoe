import React, {useEffect} from 'react';
import s from "../Finalize/Finalize.module.css";
import {NavLink, useParams} from "react-router-dom";
import arrow from './../../img/arrow-icon.png'

const Finalize = (props) => {
    const {testsId} = useParams()
    useEffect(() => {
        props.getCurrentTests(testsId)
    }, [props.currentName])
    return (
        <div>
            <h3 className={s.title}>Results {testsId}</h3>
            <h3 className={s.subtitle}>{props.currentName}</h3>
            <NavLink to={`/`}>
                <div className={s.back}>
                    <img src={arrow} alt=""/>
                    <span className={s.span}>Back</span>
                </div>
            </NavLink>
        </div>
    );
};

export default Finalize;