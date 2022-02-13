export const SET_SITES = 'SET_SITES'
export const SET_CURRENT_SITES = 'SET_CURRENT_SITES'

export const setSites = (sites) => {
    return {
        type: SET_SITES,
        sites
    }
}
export const setCurrentSites = (sites) => {
    return {
        type: SET_CURRENT_SITES,
        sites
    }
}