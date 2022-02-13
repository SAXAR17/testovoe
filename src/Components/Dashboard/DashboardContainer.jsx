import Dashboard from "./Dashboard";
import {connect} from "react-redux";
import {getAllTasks} from "../../react-redux/Reducers/task-reducer";
import {
    findTest,
    resetFindInput,
    sortName,
    sortSite,
    sortStatus, sortType,
    updateValue
} from "../../react-redux/Actions/test-action";
import {getAllSites} from "../../react-redux/Reducers/sites-reducer";
import {setCurrentSites} from "../../react-redux/Actions/sites-action";

const mapStateToProps = (state) => {
    return {
        tests: state.test.tests,
        text: state.test.textInputTests,
        notFound: state.test.notFound,
        name: state.test.name,
        type: state.test.type,
        status: state.test.status,
        site: state.test.site,
        sites: state.sites.sites,
        currentCites: state.sites.currentCites,
    }
}
export default connect(mapStateToProps, {
    getAllTasks,
    updateValue,
    findTest,
    resetFindInput,
    getAllSites,
    sortName,
    setCurrentSites,
    sortType,
    sortSite,
    sortStatus
})(Dashboard)