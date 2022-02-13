import {connect} from "react-redux";
import {getCurrentTests} from "../../react-redux/Reducers/task-reducer";
import Results from "./Results";

const mapStateToProps = (state) => {
    return {
        currentName: state.test.currentName
    }
}
export default connect(mapStateToProps, {getCurrentTests})(Results)