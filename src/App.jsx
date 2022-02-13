import React from 'react';
import './App.css'
import DashboardContainer from "./Components/Dashboard/DashboardContainer";
import {Route, Routes} from "react-router-dom";
import ResultsContainer from "./Components/Results/ResultsContainer";
import FinalizeContainer from "./Components/Finalize/FinalizeContainer";

const App = () => {
    return (
        <div className="app__wrapped">
            <Routes>
                <Route path="/" element={<DashboardContainer/>}/>
                <Route path="/results" element={<ResultsContainer/>}/>
                <Route path="/results/:testsId" element={<ResultsContainer/>}/>
                <Route path="/finalize" element={<FinalizeContainer/>}/>
                <Route path="/finalize/:testsId" element={<FinalizeContainer/>}/>
            </Routes>
        </div>
    );
};

export default App;