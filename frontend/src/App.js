import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";

import SignUp from '../src/components/Signup/signUp.js';


class App extends Component {
    constructor() {
        super();

    }

    render() {
        return (
            <div>
                <SignUp />
            </div>
        );
    }
}


export default App;