import React, {  Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false
  }
  

  // Search Github Users
searchUsers = async text =>{

  this.setState({ loading:true });

  const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
  {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

  this.setState({ users: res.data.items, loading: false });
};

// clear Users from state
clearUsers= () => this.setState({ users: [], loading: false });

  
  render(){

    const { users, loading } = this.state;

    return (
      <div className="App"> 
        <Navbar />
        <div className="container">
          <Search 
          searchUsers={this.searchUsers} 
          clearUsers={this.clearUsers} 
          showClear={users.legnth > 0 ? true:false} />
        <Users loading={loading} users={users}/>
        </div>
      </div>
    );
  } 
}

export default App;

// Study notes:

 // <Fragment> or just using <> </> can replace needing to use parent elements to render
      //   <h1>Hello from React</h1>
      //   <h2>Goodbye</h2>
      // </Fragment>

      // {loading ? <h4>Loading...</h4> : <h1>Hello {name}</h1>} ? if and : else conditions

      // <h1>Hello {showName && name}</h1> similar to the above, the && means return only if this is true

      // Example code layout:
//    class App extends Component {
//   foo = () => 'Bars';
//   render(){
     
//     const name= 'John Doe';
//     const loading = false;
//     const showName = true;

//     // if(loading){
//     //   return <h4>loading....</h4>
//     // }

//     return (
//       <div className="App">
//         {loading ? <h4>Loading...</h4> : <h1>Hello {showName ? name: null}</h1>}
//         {/* <h1>Hello {this.foo()}</h1> */}
//         <h1>Hello {name}</h1>
//       </div>
    
//     );
//   }
  
// }

// export default App;

// Original display axios call
// Lifecycle method
// async componentDidMount(){
//   // console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);
//   this.setState({ loading: true });



//   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
//   {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

//   this.setState({ users: res.data, loading: false });
  
// }

