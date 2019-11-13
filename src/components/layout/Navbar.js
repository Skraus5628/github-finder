import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class Navbar extends Component {
    static defaultProps={
        title: 'Github Finder',
        icon: 'fab fa-github'
    };
// if new props are passed in in place of the default, the default will be overwritten. These are like placeholders.

    static propTypes={
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    };
// way to check for errors related to specific prop types desired

    render() {
        return (
            <nav className="navbar bg-primary">
            <h1>
                <i className={this.props.icon} />  {this.props.title}
            </h1>
            </nav>
        )
    }
}

export default Navbar
