import React, {  Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false
  }
  // Lifecycle method
async componentDidMount(){
  this.setState({ loading: true });



  const res = await axios.get('https://api.github.com/users');

  this.setState({ users: res.data, loading: false });
  
}
  
  render(){
    return (
      <div className="App"> 
        <Navbar />
        <div className="container">
        <Users loading={this.state.loading} users={this.state.users}/>
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