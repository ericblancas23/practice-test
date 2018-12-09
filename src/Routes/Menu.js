import React, { Component } from 'react'

export class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: "",
            Email: "",
            Guests: 0,
            Phone: ""
        }
    }
  render() {
    return (
      <div>
        <h1>Menu</h1>
      </div>
    )
  }
}

export default Menu
