import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="nav navbar-expand-lg navbar-dark bg-primary">
            <h1 className="navbar-brand" style={{ color: 'black'}}>Welcome!</h1>
            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto" style={{ display: 'inline-flex'}}>
                    <li className="navbar-nav mr-auto">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/Menu">Menu</Link>
                    </li>
                </ul>
            </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
