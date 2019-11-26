import React from 'react';
import logo from '../../assets/logo.svg'

class Content extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        };
    }
    render() {
        return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </header>
        );
      }
}
export default Content;