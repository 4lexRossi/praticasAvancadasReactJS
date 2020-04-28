import React, { Component } from 'react';
import Persons from './Persons';

class App extends Component {

  state ={
    loading: false,
    actived: true
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: true,
      })
    }, 3000)
  }

  onRemove = () => {
    this.setState({
      actived: false
    })
  }
 
  render () {

    const addPersons = [{
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
        <Persons addPersons={addPersons} loading={this.state.loading} />
        )}
      </div>
    )
  }
}

export default App
