import React, {Component} from 'react';
import './App.css';
import { Container } from 'semantic-ui-react'

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
    <div>
      <Container>
        <NavBar />
        <AccountForm /> 
        <Profile />
        <SearchFilter />
        <BugsContainer />
        <FishContainer />
        <SeaCreaturesContainer />
      </Container>
    </div>
     )
  }
}
 
export default App;