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
    filterAvailable: "All",
    filterCaught: "All",
    user: {
      id: 0,
      username: "",
      hemisphere: "",
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

  handleCatch = (userCritter) => {
    this.setState((prevState) => {
      const userCritters = [...prevState.user.userCritters, userCritter]
      const user = {...prevState.user, userCritters}

      return { user: user }
    })
  }

  handleRelease = (userCritter) => {
    this.setState((prevState) => {
      return {
      user: {
        userCritters: prevState.user.userCritters.filter(critter => critter.critter.name !== userCritter.critter.name)
      }
    }})
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
      .then(this.handleLoginResponse)
  }

  handleLogout = () => {
    localStorage.token = ""
    this.props.history.push("/")

    if (this.props.history.location.pathname === "/") {window.location.reload(true)}
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
    if (resp.user) {
      localStorage.token = resp.token

      this.setState({
        user: {
          id: resp.user.id,
          username: resp.user.username,
          hemisphere: resp.user.hemisphere,
          userCritters: resp.user.user_critters
        }
      }
      )
    }
    else {
      alert(resp.error)
    }
  }

  handleLoginResponse = (resp) => {
    if (resp.user) {
      localStorage.token = resp.token

      this.setState({
        user: {
          username: resp.user.username,
          hemisphere: resp.user.hemisphere,
          userCritters: resp.user.user_critters
        }
      }, () => this.props.history.push("/profile")
      )
    }
    else {
      alert(resp.error)
    }
  }

  handlePatchUser = (user) => {
    this.setState({
      user: user
    })
  }

  renderBugsContainer = () => {
    const userBugs = this.state.user.userCritters.filter(critterObj => {return critterObj.critter.category === "bug"})
    return <BugsContainer bugs={this.state.bugs} userBugs={userBugs}
      searchTerm={this.state.searchTerm} handleChange={this.handleChange}
      userId={this.state.user.id} hemisphere={this.state.user.hemisphere}
      handleCatch={this.handleCatch} handleRelease={this.handleRelease}
      filterAvailable={this.state.filterAvailable} filterCaught={this.state.filterCaught}
    />
  }

  renderFishContainer = () => {
    const userFish = this.state.user.userCritters.filter(critterObj => {return critterObj.critter.category === "fish"})
    return <FishContainer fish={this.state.fish} userFish={userFish}
      searchTerm={this.state.searchTerm} handleChange={this.handleChange} 
      userId={this.state.user.id} hemisphere={this.state.user.hemisphere}
      handleCatch={this.handleCatch} handleRelease={this.handleRelease}
      filterAvailable={this.state.filterAvailable} filterCaught={this.state.filterCaught}
    />
  }

  renderSeaCreaturesContainer = () => {
    const userSeaCreatures = this.state.user.userCritters.filter(critterObj => {return critterObj.critter.category === "sea_creature"})
    return <SeaCreaturesContainer seaCreatures={this.state.seaCreatures} userSeaCreatures={userSeaCreatures}
      searchTerm={this.state.searchTerm} handleChange={this.handleChange} 
      userId={this.state.user.id} hemisphere={this.state.user.hemisphere}
      handleCatch={this.handleCatch} handleRelease={this.handleRelease}
      filterAvailable={this.state.filterAvailable} filterCaught={this.state.filterCaught}
    />
  }

  renderLoginForm = () => {
    return <LoginForm handleLogin={this.handleLogin}/>
  }

  renderRegistrationForm = () => {
    return <RegistrationForm handleRegister={this.handleRegister}/>
  }

  renderProfile = () => {
    return localStorage.token ?
      <Profile user={this.state.user} handleLogout={this.handleLogout} handlePatchUser={this.handlePatchUser}/>
      : this.props.history.push("/login")
  }

  render() { 
    return ( 
      <Container>
        <NavBar token={localStorage.token}/>
        <Route path="/login" render={this.renderLoginForm} />
        <Route path="/register" render={this.renderRegistrationForm} /> 
        <Route path="/profile" render={this.renderProfile} />
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
