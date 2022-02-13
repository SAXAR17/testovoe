import {
    FIND_TEST,
    RESET_TEXT, SET_CURRENT_NAME,
    SET_TESTS,
    setAllTests, setCurrentName,
    SORT_NAME,
    SORT_SITE,
    SORT_STATUS, SORT_TYPE,
    UPDATE_TEXT
} from "../Actions/test-action";
import {testsApi} from "../../api";

let initialState = {
    tests: [],
    textInputTests: '',
    notFound: false,
    name: false,
    type: false,
    status: false,
    site: false,
    currentName: '',
}

const testsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_TEST: {
            if (state.textInputTests !== "") {
                let listTests = state.tests.filter((test) => test.name === state.textInputTests)
                if (listTests.length !== 0) {
                    return {
                        ...state,
                        tests: listTests,
                        notFound: false,
                    };
                } else {
                    return {
                        ...state,
                        tests: [],
                        notFound: true,
                    }
                }
            }
            return {
                ...state,
            };
        }
        case SET_TESTS: {
            return {
                ...state,
                tests: action.tests

            }
        }
        case UPDATE_TEXT: {
            return {
                ...state,
                textInputTests: action.text
            }
        }
        case RESET_TEXT: {
            return {
                ...state,
                textInputTests: '',
                notFound: false,
            }
        }
        case SORT_NAME: {
            return {
                ...state,
                name: action.check
            }
        }
        case SORT_SITE: {
            return {
                ...state,
                site: action.check
            }
        }
        case SORT_STATUS: {
            return {
                ...state,
                status: action.check
            }
        }
        case SORT_TYPE: {
            return {
                ...state,
                type: action.check
            }
        }
        case SET_CURRENT_NAME: {
            return {
                ...state,
                currentName: action.test
            }
        }

        default:
            return state
    }
}

export const getAllTasks = () => (dispatch) => {
    testsApi.getTests().then(response => {
        dispatch(setAllTests(response))
    })
}
export const getCurrentTests = (testsId) => (dispatch) => {
    testsApi.getTestId(testsId).then(response => {
        dispatch(setCurrentName(response.name))
    })
}
export default testsReducer;