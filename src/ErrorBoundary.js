import React, { Component } from 'react';
import ErrorImg from './logo.svg';

class ErrorBoundary extends Component {

    constructor(props){
        super(props)
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log('error', error)
        console.log('errorInfo', errorInfo)
        this.setState({
            hasError: true
        })
    }
    
    render() {
        if(this.state.hasError) {
            return <img width="500px" height="500px" src={ErrorImg} />
        }
        return this.props.children
    }
}

export default ErrorBoundary