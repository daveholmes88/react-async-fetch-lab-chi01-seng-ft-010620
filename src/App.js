// create your App component here
import React from 'react'

export default class App extends React.Component {

    state = {
        spacePeople: []
    }
  
    render() {
      return (
        <div>
          {this.state.spacePeople.map(person => <h1>{person.name}</h1>)}
        </div>
      )
    }
  
    componentDidMount() {
      fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(({people}) => this.setState({ spacePeople: people }))
  
    }
  

}