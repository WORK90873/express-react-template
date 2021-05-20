import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./css/master.css";

// importing the test component
import { Test } from "./test/Test.js";

function App() {
    return (
        <Router>
            <Route path="/test" component={Test} />
        </Router>
    );
}

export default App;
