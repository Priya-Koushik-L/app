import React, { Component } from 'react';
import './App.css';
import User from './components/User';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            items: []
        };
    }

    onChange = (event) => {
        this.setState({ term: event.target.value });
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            term: '',
            items: [...this.state.items, this.state.term]
        });
    };
    deleteUser = (index, e) => {
        //const users = [...this.state.users];
        const items = Object.assign([], this.state.items);
        items.splice(index, 1);
        this.setState({items:items});
    };
    render() {
        return (
            <div>
                <form className="App" onSubmit={this.onSubmit}>
                    <input value={this.state.term} onChange={this.onChange} />
                    <button>Submit</button>
                </form>
                {this.state.items.map((item, index) =>
                <User items={this.state.items}
                      item={item}
                      index={index}
                      delEvent={this.deleteUser.bind(this, index)}
                />)

                }
            </div>
        );
    }
}