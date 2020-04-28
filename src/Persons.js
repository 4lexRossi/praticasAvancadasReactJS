import React, { Component } from 'react';

class Persons extends Component {

    state= {
        person: 'title'
    }
    
    componentDidMount() {
        const { posts, loading } = this.props
        console.log('componentDidMount', posts)
        console.log('componentDidMount: loading', loading)
    }

    componentDidUpdate(prevProps) {
        const { loading } = this.props
        if (this.props.loading !== prevProps.loading) {
            console.log('componentDidUpdate: loading', loading)  
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount: Pessoa Removida')
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.person !== nextState.person
    }

    person = () => {
        this.setState({
            person: true
        })
    }

    render () {
        const { posts } = this.props
        console.log('render', posts)
        return (
        <div>
            <button onClick={this.person}>Re-render</button>
            teste
        </div>
        )
    }
}
export default Persons