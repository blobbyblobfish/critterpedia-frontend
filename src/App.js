import React, {Component} from 'react';
import './App.css';
import { Container } from 'semantic-ui-react'
import {Route, withRouter} from 'react-router-dom'

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
    filter: "",
    user: {
      id: [],
      username: [],
      password: [],
      userCritters: []
    }
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
    
    if (localStorage.token) {
      fetch("http://localhost:3000/users/stay_logged_in",{
        headers: {
          "Authorization": localStorage.token
        }
      })
      .then(resp => resp.json())
      .then(this.handleResponse)
      }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleLogin = (userInfo) => {
    fetch("http://localhost:3000/users/login", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
      .then(r => r.json())
      .then(this.handleResponse)
  }

  handleLogout = () => {
    localStorage.token = ""
    this.props.history.push("/")
  }

  handleRegister = (userInfo) => {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
      .then(r => r.json())
      .then(this.handleResponse)
  }

  handleResponse = (resp) => {
    console.log(resp)

    if (resp.user) {
      localStorage.token = resp.token
      this.setState(resp, () => {
        this.props.history.push("/profile")
      })
    }
    else {
      alert(resp.error)
    }
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
    return <LoginForm handleLogin={this.handleLogin}/>
  }

  renderRegistrationForm = () => {
    return <RegistrationForm handleRegister={this.handleRegister}/>
  }

  renderProfile = () => {
    {return localStorage.token ? <Profile user={this.state.user} handleLogout={this.handleLogout}/> : this.props.history.push("/login")}
  }

  render() { 
    console.log(localStorage)

    return ( 
      <Container>
        <NavBar token={localStorage.token}/>
        <Route path="/login" render={this.renderLoginForm} />
        <Route path="/register" render={this.renderRegistrationForm}/> 
        <Route path="/profile" render={this.renderProfile}/>
        <Route path="/logout" render={this.handleLogout} />
        <Route path="/critters/bugs" render={this.renderBugsContainer} />
        <Route path="/critters/fish" render={this.renderFishContainer} />
        <Route path="/critters/sea-creatures" render={this.renderSeaCreaturesContainer} />
      </Container>
     );
  }
}
 

const AppWithRouter = withRouter(App)
export default AppWithRouter;