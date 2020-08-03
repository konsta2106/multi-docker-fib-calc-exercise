import React, { Component } from 'react';
import axios from 'axios';

class Counter extends Component {
    state = {
        counter: ''
    }

    async componentDidMount() {
        let response = await axios.get('/api/')
        this.setState({
            counter: response.data.counter
        })
    }

    render() {
        return (
            <div>
               Counter: {this.state.counter}
            </div>
        )
    }
}

export default Counter