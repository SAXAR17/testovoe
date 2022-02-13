import React from 'react';
import s from './TestsList.module.css'
import {NavLink} from "react-router-dom";

const TestsList = (props) => {
    let borderStyle = {borderLeft: 'green'};
    let statusStyle = {color: 'yellow'}
    let site = props.sites.map(site => {
        if (site.id === props.siteId) {
            let currentSite = site.url.replace(/(^\w+:|^)\/\/?(www.)?/, '');
            props.setCurrentSites(currentSite)
            switch (currentSite) {
                case 'delivery.company.com':
                    borderStyle = {borderLeft: '4px solid rgba(194, 194, 255, 1)'}
                    break
                case 'games.company.com':
                    borderStyle = {borderLeft: '4px solid rgba(134, 134, 255, 1)'}
                    break
                case 'market.company.com':
                    borderStyle = {borderLeft: '4px solid rgba(225, 65, 101, 1)'}
                    break
            }
            return currentSite
        }
    })
    switch (props.status) {
        case 'ONLINE':
            statusStyle = {color: 'rgba(27, 218, 157, 1)'}
            break
        case 'PAUSED':
            statusStyle = {color: 'rgba(255, 131, 70, 1)'}
            break
        case 'STOPPED':
            statusStyle = {color: 'rgba(254, 72, 72, 1)'}
            break
        case 'DRAFT':
            statusStyle = {color: 'rgba(92, 92, 92, 1)'}
            break

    }
    let status = (props.status).toLowerCase()
    let type = props.type
    if (props.type.length >= 4) {
        type = (props.type).toLowerCase()
    }
    let finalize = ''
    let finalizeStyle = {}
    if (props.status === 'DRAFT') {
        finalizeStyle = {background: '#7D7D7D'}
        finalize = <NavLink to={`/finalize/${props.id}`}>
            <span className={s.link}>Finalize</span>
        </NavLink>
    } else {
        finalizeStyle = {background: "#2EE5AC"}
        finalize = <NavLink to={`/results/${props.id}`}>
            <span className={s.link}>Results</span>
        </NavLink>
    }

    return (
        <li className={s.test__item} style={borderStyle}>
            <div className={s.test__name}>{props.name}</div>
            <div className={s.test__type}>{type[0].toUpperCase() + type.slice(1)}</div>
            <div className={s.test__status} style={statusStyle}>{status[0].toUpperCase() + status.slice(1)}</div>
            <div className={s.test__site}>{site}</div>
            <button className={s.test__button} style={finalizeStyle}>{finalize}</button>
        </li>
    );
};

export default TestsList;