import { Component } from "react";
import logo from './logo.svg';
import '../../css/master.css';

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
            <div className="test-container">
                <header className="test-header">
                    <img src={logo} className="test-logo" alt="logo" />
                    <p>
                        <code>{this.state.apiResponse.message || 'API not working'}</code>
                    </p>

                </header>
            </div>
        );
    }
}
