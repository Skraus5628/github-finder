import React from 'react';
import PropTypes from 'prop-types';


const Navbar =({icon, title}) => {
    return (
        <nav className="navbar bg-primary">
        <h1>
            <i className={icon} />  {title}
        </h1>
        </nav>
        )
}

 Navbar.defaultProps={
    title: 'Github Finder',
    icon: 'fab fa-github'
};
// if new props are passed in in place of the default, the default will be overwritten. These are like placeholders.

Navbar.propTypes={
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};
export default Navbar


// study reference:


    // exapmle of class component setup:



// export class Navbar extends Component {
//     static defaultProps={
//         title: 'Github Finder',
//         icon: 'fab fa-github'
//     };
// // if new props are passed in in place of the default, the default will be overwritten. These are like placeholders.

//     static propTypes={
//         title: PropTypes.string.isRequired,
//         icon: PropTypes.string.isRequired
//     };
// // way to check for errors related to specific prop types desired

//     render() {
//         return (
//             <nav className="navbar bg-primary">
//             <h1>
//                 <i className={this.props.icon} />  {this.props.title}
//             </h1>
//             </nav>
//         )
//     }
// }

// export default Navbar
