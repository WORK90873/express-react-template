import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./test.css";

export function Test(props) {
    const [apiResponse, setApiResponse] = useState("");

    const callAPI = () => {
        fetch("http://localhost:3001/testAPI")
            .then((res) => res.text())
            .then((res) => {
                setApiResponse(res);
            });
    };

    useEffect(() => {
        callAPI();
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />

                <code>{apiResponse || "API not working"}</code>
            </header>
        </div>
    );
}
