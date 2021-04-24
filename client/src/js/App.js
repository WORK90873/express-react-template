import { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Test } from "./components/test/test";

class App extends Component {
    render() {
        return (
            <Router>
                <Route path="/test" component={Test} />
            </Router>
        )
    }
}

export default App;
