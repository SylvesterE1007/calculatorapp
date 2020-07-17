import React, { Component, useState, useEffect } from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { createTodo } from './graphql/mutations'
import { listTodos } from './graphql/queries'
import { onCreateTodo } from './graphql/subscriptions';

import './App.css';
import NumberButton from './NumberButton.js';

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const App = () => {
    const [currentValue, setCurrentValue] = useState(0);
    const [history, setHistory] = useState([]);

    useEffect(() => {
        fetchHistory()
    },[])
    
    

    function buttonPress(newValue) {

        setCurrentValue(newValue);
        addQuery({ name: "new", description: newValue });
    }

    async function addQuery(historyData) {
        setHistory([...history, historyData])
        await API.graphql(graphqlOperation(createTodo, { input: historyData }));
    }

    async function fetchHistory() {
        try {
            const todoData = await API.graphql(graphqlOperation(listTodos))
            const history = todoData.data.listTodos.items
            setHistory(history);

          
            
        } catch (err) { console.log('error fetching todos') }
    }

    function multiply() {
        return 8;
    }

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Demo Calculator
                    </p>
            </header>
            <div class="ButtonGrid">
                <NumberButton value={1} onClick={() => buttonPress(1)} />
                <NumberButton value={2} onClick={() => buttonPress(2)} />
                <NumberButton value={3} onClick={() => buttonPress(3)} />
                <NumberButton value={4} onClick={() => buttonPress(4)} />
                <NumberButton value={5} onClick={() => buttonPress(5)} />
                <NumberButton value={6} onClick={() => buttonPress(6)} />
                <NumberButton value={7} onClick={() => buttonPress(7)} />
                <NumberButton value={8} onClick={() => buttonPress(8)} />
                <NumberButton value={9} onClick={() => buttonPress(9)} />
                <NumberButton value={0} onClick={() => buttonPress(0)} />
            </div>

            <div>{currentValue}</div>
            {
                history.map((todo, index) => (
                    <div key={todo.id ? todo.id : index} >
                        <p> {todo.name} , {todo.description}</p>
                    </div>
                ))
            }

        </div>
    )

}

export default App;
