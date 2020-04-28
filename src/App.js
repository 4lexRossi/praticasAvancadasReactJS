import React, { Component } from 'react';
import Persons from './Persons';

class App extends Component {

  state ={
    loading: false
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: true,
        actived: true
      })
    }, 3000)
  }

  onRemove = () => {
    this.setState({
      actived: false
    })
  }
 
  render () {

    const posts = [{
      person: 'Alex',
      age: '34',
      gender: 'male'
    },{
      person: 'Elis',
      age: '32',
      gender: 'female'
    }]

    return (
      <div>
        <button onClick={this.onRemove}>Remover Component</button>
        {this.state.actived && (
        <Persons posts={posts} loading={this.state.loading} />
        )}
      </div>
    )
  }
}

export default App
