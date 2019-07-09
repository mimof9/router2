import React, { Component } from 'react'
import { Link, IndexLink } from 'react-router'

export default class App extends Component {
    render() {
        return (
            <div>
                <ul role="nav">
                    <li><IndexLink to='/' activeStyle={{color: 'red'}}>Home</IndexLink></li>
                    <li><Link to="/about" activeStyle={{color: 'red'}}>About</Link></li>
                    <li><Link to="/repos" activeStyle={{color: 'red'}}>Repos</Link></li>
                </ul>
                {/*{this.props.children || <Home></Home>}*/}
                {this.props.children}
            </div>
        )
    }
}
