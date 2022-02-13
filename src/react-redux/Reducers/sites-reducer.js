import {SET_CURRENT_SITES, SET_SITES, setSites} from "../Actions/sites-action";
import {sitesApi} from "../../api";

let initialState = {
    sites: [],
    currentSites: [],
}

const sitesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SITES: {
            return {
                ...state,
                sites: action.sites
            }
        }
        case SET_CURRENT_SITES: {
            return {
                ...state,
                currentSites: action.currentSites
            }
        }
        default:
            return state
    }
}
export const getAllSites = () => (dispatch) => {
    sitesApi.getSites().then(response => {
        dispatch(setSites(response))
    })
}
export default sitesReducer;