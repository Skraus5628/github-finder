import React  from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


 const UserItem = ({user: {login, avatar_url, html_url }}) =>{
        return (
        <div className="card text-center">
            <img src={avatar_url} 
            alt="" 
            className="round-img" 
            style={{ width:'60px'}}
             />
             <h3>{login}</h3>
             <div>
                 <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
                     More
                </Link>
             </div>
        </div>
        );
}

UserItem.propTypes={

    user: PropTypes.object.isRequired, 
    // ptor auto generates this ^ ptar gives an array, pta gives an array that isn't required
};

export default UserItem;



// study notes:




//  all you need for component level state is just state = and object values
    // state={
    //     id: 'id',
    //     login: 'mojombo',
    //     avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
    //     html_url: 'https://github.com/mojombo'
    //     }
    // Now that we are passing the information as props, we do not need this state


    // to destructure, you can pull values from the state and store them, saves you from
    // having to say this.state every time
    // const { login, avatar_url, html_url } =props.user
    // change this.state to this.props.user to reflect prop change
    // change from this.props.user to props.user when refactoring to a function. props becomes
    // passable in the function itself
        // change this.state to this.props.user to reflect prop change
        // change from this.props.user to props.user when refactoring to a function. props becomes
        // passable in the function itself




// Example of using constructor function for component level state
// constructor() {
//     super();
//     this.state={
//         id: 'id',
//         login: 'mojombo',
//         avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
//         html_url: 'https://github.com/mojombo'
//     }
// }

// const { login, avatar_url, html_url } =props.user
// can be instead changed to: 
// const UserItem = ({user: {login, avatar_url, html_url }}) =>{}

