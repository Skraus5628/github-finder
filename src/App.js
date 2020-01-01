import React, {  Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/Pages/About';
import axios from 'axios';

import GithubState from './Context/Github/githubState';
import './App.css';

const App = () =>{
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  

  // Search Github Users


// Get single Github user
const getUser = async username =>{
  setLoading(true);

  const res = await axios.get(
  `https://api.github.com/users/${username}?client_id=${
    process.env.REACT_APP_GITHUB_CLIENT_ID
  }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  );

  setUser(res.data);
  setLoading(false);
}

// Get users repos

const getUserRepos = async username =>{
  setLoading(true);

  const res = await axios.get(
  `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${
    process.env.REACT_APP_GITHUB_CLIENT_ID
  }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  );

  setRepos(res.data);
  setLoading(false);
}


// clear Users from state
const clearUsers= () => {
setUsers([]);
setLoading(false);
};

// Set Alert
const showAlert = (msg, type) =>{
    
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 5000);
};
  

    return (
      <GithubState>
      <Router>
      <div className="App"> 
        <Navbar />
        <div className='container'>
          <Alert alert={alert}/>
          <Switch>
            <Route exact path='/' render={props => (
              <Fragment>
                <Search  
          clearUsers={clearUsers} 
          showClear={users.legnth > 0 ? true : false}
          setAlert={showAlert} />
        <Users loading={loading} users={users}/>
              </Fragment>
            )}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/user/:login' render={props =>(
              <User 
              { ...props } 
              getUser={getUser}
              getUserRepos={getUserRepos}  
              user={user} 
              repos={repos}
              loading={loading}
              />
            )} 
            />
          </Switch>
          
        </div>
      </div>
      </Router>
      </GithubState>
    );
  
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

