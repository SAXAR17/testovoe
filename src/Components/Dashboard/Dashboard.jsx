import React, {useEffect, useState} from 'react';
import s from './Dashboard.module.css'
import find from './../../img/find-icon.png'
import arrow from './../../img/arrow-icon.png'
import TestsList from "../TestsList/TestsList";

const Dashboard = React.memo((props) => {
        let [tests, setTests] = useState([])

        useEffect(() => {
            props.getAllTasks()
            props.getAllSites()
            setTests(props.tests)
        }, [props.notFound])

        useEffect(() => {
            setTests(props.tests)
        }, [props.tests])

        const sortName = () => {
            if (props.name) {
                props.sortName(false)
            } else {
                props.sortName(true)
            }
            let newTests = [...props.tests].sort((a, b) => {
                if (a.name > b.name) {
                    return 1;
                }
                if (a.name < b.name) {
                    return -1
                }
                return 0
            })
            if (!props.name) {
                setTests(newTests)
            } else {
                setTests(newTests.reverse())
            }
        }
        const sortType = () => {
            if (props.type) {
                props.sortType(false)
            } else {
                props.sortType(true)
            }
            let newTests = [...props.tests].sort((a, b) => {
                if (a.type > b.type) {
                    return 1;
                }
                if (a.type < b.type) {
                    return -1
                }
                return 0
            })
            if (!props.type) {
                setTests(newTests)
            } else {
                setTests(newTests.reverse())
            }
        }
        const sortStatus = () => {
            if (props.status) {
                props.sortStatus(false)
            } else {
                props.sortStatus(true)
            }
            let newTests = [...props.tests].sort((a, b) => {
                if (a.status === 'DRAFT' && b.status === 'ONLINE') {
                    return 1
                }
                if (a.status === 'DRAFT' && b.status === 'PAUSED') {
                    return 1
                }
                if (a.status === 'DRAFT' && b.status === 'STOPPED') {
                    return 1
                }
                if (a.status === 'ONLINE' && b.status === 'DRAFT') {
                    return -1
                }
                if (a.status === 'STOPPED' && b.status === 'DRAFT') {
                    return -1
                }
                if (a.status === 'PAUSED' && b.status === 'DRAFT') {
                    return -1
                }
                if (a.status > b.status) {
                    return 1;
                }
                if (a.status < b.status) {
                    return -1
                }
                return 0
            })
            if (!props.status) {
                setTests(newTests)
            } else {
                setTests(newTests.reverse())
            }
        }
        const sortSite = () => {
            if (props.site) {
                props.sortSite(false)
            } else {
                props.sortSite(true)
            }
            let newTests = [...props.tests].sort((a, b) => {
                if (a.siteId === 1 && b.siteId === 2) {
                    return 1
                }
                if (a.siteId === 1 && b.siteId === 3) {
                    return 1
                }
                if (a.siteId === 3 && b.siteId === 1) {
                    return -1
                }
                if (a.siteId === 2 && b.siteId === 1) {
                    return -1
                }
                if (a.siteId > b.siteId) {
                    return 1;
                }
                if (a.siteId < b.siteId) {
                    return -1
                }
                return 0
            })
            if (!props.site) {
                setTests(newTests)
            } else {
                setTests(newTests.reverse())
            }
        }
        if (props.notFound) {
            return (
                <div className={s.noResult}>
                    <h3 className={s.title}>Dashboard</h3>
                    <div className={s.input__container}>
                        <img src={find} alt="" onClick={props.findTest}/>
                        <input
                            value={props.text}
                            onChange={e => props.updateValue(e.target.value)}
                            className={s.input}
                            type="text"
                            placeholder="What test are you looking for?"/>
                        <button onClick={props.findTest} className={s.button}>find</button>
                        <span className={s.span__length}>{`0 tests`}</span>
                    </div>

                    <span>Your search did not match any results.</span>
                    <button onClick={props.resetFindInput}>Reset</button>
                </div>
            )
        }
        return (
            <div className={s.wrapped}>
                <h3 className={s.title}>Dashboard</h3>
                <div className={s.input__container}>
                    <img src={find} alt="" onClick={props.findTest}/>
                    <input
                        value={props.text}
                        onChange={e => props.updateValue(e.target.value)}
                        className={s.input}
                        type="text"
                        placeholder="What test are you looking for?"/>
                    <button className={s.button} onClick={props.findTest}>></button>
                    <span className={s.span__length}>{`${props.tests.length} tests`}</span>
                </div>

                <div className={s.tools__list}>
                    <div className={s.tools__items}>
                        <div className={s.tools__title} onClick={() => sortName()}>
                            NAME
                            <img src={arrow} alt=""/>
                        </div>
                        <div className={s.tools__type} onClick={() => sortType()}>
                            TYPE
                            <img src={arrow} alt=""/>
                        </div>
                        <div className={s.tools__status} onClick={() => sortStatus()}>
                            STATUS
                            <img src={arrow} alt=""/>
                        </div>
                        <div className={s.tools__site} onClick={() => sortSite()}>
                            SITE
                            <img src={arrow} alt=""/>
                        </div>
                    </div>
                    <div className={s.test__list}>
                        {tests.map((test) => (
                            <TestsList key={test.id} id={test.id} name={test.name} type={test.type} status={test.status}
                                       siteId={test.siteId} sites={props.sites} setCurrentSites={props.setCurrentSites}/>)
                        )}
                    </div>
                </div>
            </div>
        );
    }
)
export default Dashboard;