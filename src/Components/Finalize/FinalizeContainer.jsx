import {connect} from "react-redux";
import {getCurrentTests} from "../../react-redux/Reducers/task-reducer";
import Finalize from "./Finalize";

const mapStateToProps = (state) => {
    return {
        currentName: state.test.currentName
    }
}
export default connect(mapStateToProps, {getCurrentTests})(Finalize)