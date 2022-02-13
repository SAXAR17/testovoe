export const FIND_TEST = 'FIND_TEST'
export const SET_TESTS = 'SET_TESTS'
export const UPDATE_TEXT = 'UPDATE_TEXT'
export const RESET_TEXT = 'RESET_TEXT'
export const SORT_NAME = 'SORT_NAME'
export const SORT_TYPE = 'SORT_TYPE'
export const SORT_STATUS = 'SORT_STATUS'
export const SORT_SITE = 'SORT_SITE'
export const SET_CURRENT_NAME = 'SET_CURRENT_NAME'

export const setAllTests = (tests) => {
    return {
        type: SET_TESTS,
        tests,
    }
}
export const updateValue = (text) => {
    return {
        type: UPDATE_TEXT,
        text,
    }
}
export const findTest = () => {
    return {
        type: FIND_TEST,
    }
}
export const resetFindInput = () => {
    return {
        type: RESET_TEXT,
    }
}
export const sortName = (check) => {
    return {
        type: SORT_NAME,
        check
    }
}
export const sortType = (check) => {
    return {
        type: SORT_TYPE,
        check
    }
}
export const sortStatus = (check) => {
    return {
        type: SORT_STATUS,
        check
    }
}
export const sortSite = (check) => {
    return {
        type: SORT_SITE,
        check
    }
}
export const setCurrentName = (test) => {
    return {
        type: SET_CURRENT_NAME,
        test,
    }
}