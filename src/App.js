import React, {Component} from 'react';
import './App.css';
import { Container } from 'semantic-ui-react'

import BugsContainer from './containers/BugsContainer'
import FishContainer from './containers/FishContainer'
import SeaCreaturesContainer from './containers/SeaCreaturesContainer'

import NavBar from './containers/NavBar'
import Profile from './components/Profile'
import LoginForm from './components/LoginForm'
import RegistrationForm from './components/RegistrationForm'


class App extends Component {

  state = {
    bugs: [],
    fish: [],
    seaCreatures: [],
    searchTerm: "",
    username: "",
    password: "",
    hemisphere: "",
    filter: ""
  }

  componentDidMount() {
    fetch(`http://localhost:3000/critters/bugs`)
      .then(resp => resp.json())
      .then(json => this.setState({
        bugs: json
      }))
    
      fetch(`http://localhost:3000/critters/fish`)
      .then(resp => resp.json())
      .then(json => this.setState({
        fish: json
      }))
    
      fetch(`http://localhost:3000/critters/sea-creatures`)
      .then(resp => resp.json())
      .then(json => this.setState({
        seaCreatures: json
      }))
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleLogin = () => {

  }

  handleRegister = () => {
    
  }

  renderBugsContainer = () => {
    return <BugsContainer bugs={this.state.bugs} searchTerm={this.state.searchTerm} handleChange={this.handleChange} />
  }

  renderFishContainer = () => {
    return <FishContainer fish={this.state.fish} searchTerm={this.state.searchTerm} handleChange={this.handleChange} />
  }

  renderSeaCreaturesContainer = () => {
    return <SeaCreaturesContainer seaCreatures={this.state.seaCreatures} searchTerm={this.state.searchTerm} handleChange={this.handleChange} />
  }

  renderLoginForm = () => {
    return <LoginForm username={this.state.username} password={this.state.password} handleChange={this.handleChange} handleLogin={this.handleLogin} />
  }

  renderRegistrationForm = () => {
    return <RegistrationForm username={this.state.username} password={this.state.password} handleChange={this.handleChange} handleRegister={this.handleRegister}/>
  }

  render() { 
    return ( 
<<<<<<< HEAD
      <Fragment>
        <NavBar />
        <Route path="/login" render={this.renderLoginForm} />
        <Route path="/register" render={this.renderRegistrationForm}/> 
        <Route path="/profile" component={Profile} />
        <Route path="/critters/bugs" render={this.renderBugsContainer} />
        <Route path="/critters/fish" render={this.renderFishContainer} />
        <Route path="/critters/sea-creatures" render={this.renderSeaCreaturesContainer} />
        
      </Fragment>
     );
=======
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
>>>>>>> urgen
  }
}
 
export default App;