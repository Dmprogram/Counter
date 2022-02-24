import React, {Component} from 'react';
import './app-buttons.css';

export default class AppButtons extends Component {

    buttons = [
        {name: 'decrease', label: 'Decrease'},
        {name: 'reset', label: 'Reset'},
        {name: 'increase', label: 'Increase'}

    ];
    render() {
        const {toDoCount} = this.props;

        const buttons = this.buttons.map(({name, label}) => {
            return (
                <button type="button"
                    className='button'
                    key = {name}
                    onClick={() => toDoCount(name)} >
                    {label}
                </button>
            );
        });
        return (
            <div className="app-buttons">
              {buttons}
            </div>
        );
    }   
}

