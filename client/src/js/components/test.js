import { Component } from "react";
import logo from '../../logo.svg';
import '../../css/App.css';

export class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiResponse: null
        };
    }
    callAPI() {
        fetch("http://localhost:3001/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }
    
    componentWillMount() {
        this.callAPI();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        <code>{this.state.apiResponse}</code>
                    </p>
                    
                </header>
            </div>
        );
    }
}
