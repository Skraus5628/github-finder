import React, { Component } from 'react'

 class UserItem extends Component {
    //  all you need for component level state is just state = and object values
    // state={
    //     id: 'id',
    //     login: 'mojombo',
    //     avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
    //     html_url: 'https://github.com/mojombo'
    //     }
    // Now that we are passing the information as props, we do not need this state
    render() {
        // to destructure, you can pull values from the state and store them, saves you from
        // having to say this.state every time
        const { login, avatar_url, html_url } =this.props.user; 
        // change this.state to this.props.user to reflect prop change

        return <div className="card text-center">
            <img src={avatar_url} 
            alt="" 
            className="round-img" 
            style={{ width:'60px'}}
             />
             <h3>{login}</h3>
             <div>
                 <a href= {html_url} className="btn btn-dark btn-sm my-1">
                     More
                </a>
             </div>
        </div>;
    }
}

export default UserItem

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