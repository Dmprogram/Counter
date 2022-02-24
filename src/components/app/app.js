import React, {Component} from "react";
import AppButtons from "../app-buttons";
import AppHeader from "../app-header";
import Value from "../value";


import './app.css';

export default class App extends Component {

    state = {
        counter: 0
    }

    toDoCount = (name) => {
        if (name === 'increase') {
            this.setState(() => {
                return {
                    counter : this.state.counter + 1
                };
            });
        } else if (name === 'decrease' && this.state.counter > 0) {
            this.setState(() => {
                return {
                    counter : this.state.counter -1
                };
            });
        } else {
            this.setState(() => {
                return {
                    counter : 0
                };
            });
        }
    }

    render() {

        const {counter} = this.state;
        return (
            <div className="counter-app">
                <AppHeader />
                <Value toCount={counter} />
                <AppButtons toDoCount={this.toDoCount} />
            </div>
        )
    }
}