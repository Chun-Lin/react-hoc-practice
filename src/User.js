import React, { Component } from 'react'

class User extends Component {
  state = {
    name: 'ChunLin',
    favouriteColour: 'blue',
  }

  render() {
    return <div>{this.props.render(this.state)}</div>
  }
}

export default User
