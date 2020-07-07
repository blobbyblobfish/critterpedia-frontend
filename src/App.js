import React, {Component, Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import BugsContainer from './containers/BugsContainer'
import FishContainer from './containers/FishContainer'
import SeaCreaturesContainer from './containers/SeaCreaturesContainer'
import NavBar from './containers/NavBar'
import Profile from './containers/Profile'
import SearchFilter from './containers/SearchFilter'
import AccountForm from './components/AccountForm'


class App extends Component {

  render() { 
    return ( 
    <Fragment>
      <NavBar />

      <AccountForm /> 
      <Profile />
      <SearchFilter />
      <BugsContainer />
      <FishContainer />
      <SeaCreaturesContainer />
        
    </Fragment>
     );
  }
}
 
export default App;