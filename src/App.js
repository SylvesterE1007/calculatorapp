import React, { Component } from 'react';
import './App.css';
import NumberButton from './NumberButton.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentValue: 0,
        };
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p>
                        Demo Calculator
                     </p>
                 </header>
                <div class="ButtonGrid">
                    <NumberButton value={1} onClick={() => this.setState({ currentValue: 1 })} />
                    <NumberButton value={2} />
                    <NumberButton value={3} />
                    <NumberButton value={4} />
                    <NumberButton value={5} />
                    <NumberButton value={6} />
                    <NumberButton value={7} />
                    <NumberButton value={8} />
                    <NumberButton value={9} />
                    <NumberButton value={0} />
                </div>

                <div>{this.state.currentValue}</div>
            </div>
        );
    }

    buttonPress(newValue) {
        this.setState({
            currentValue: newValue
        });
    }

    multiply() {
        return 8;
    }
}

export default App;
