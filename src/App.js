import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import User from './User'

class App extends Component {
  render() {
    return (
      <div>
        <User render={({ name }) => <p>Logged in as {name}</p>} />
        <User
          render={({ favouriteColour }) => (
            <p>My favorite color is {favouriteColour}</p>
          )}
        />
      </div>
    )
  }
}

export default App
