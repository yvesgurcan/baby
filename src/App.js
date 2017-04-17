import React, {Component} from 'react';
import {Button, FormControl, FormGroup, Col, Alert} from 'react-bootstrap'
import './App.css';

class Flags extends Component {
  render() {
    console.log("test")
    return (
      <div>flags</div>
    )
  }
}

class Header extends Component {
  render() {
    return (
      <div>header</div>
    )
  }
}

class Login extends Component {
  constructor (props) {
    super(props)
    this.storeLoginData = this.storeLoginData.bind(this)
  }
  storeLoginData(input) {
    this.props.storeLoginData(input)
  }
  render() {
    return (
      <div>
        <Col lg={4} md={3} sm={3} xs={2}/>
        <Col lg={4} md={6} sm={6} xs={8}>
          <FormControl
            name="user"
            type="email"
            bsSize="large"
            className="margin-bottom"
            onChange={this.storeLoginData}
          />
          {
            !this.props.errors.user ?
            null :
            <Alert
            bsStyle="danger">
            {this.props.errors.user}
            </Alert>
          }
          <FormControl
            name="password"
            type="password"
            bsSize="large"
            className="margin-bottom"
            onChange={this.storeLoginData}
          />
          {
            !this.props.errors.password ?
            null :
            <Alert
            bsStyle="danger">
            {this.props.errors.password}
            </Alert>
          }
          <Button
            bsStyle="primary"
            bsSize="large"
            block
            className="margin-bottom"
            onClick={this.props.submitLogin}
          >Enter</Button>
        </Col>
        <Col lg={4} md={3} sm={3} xs={2}/>
      </div>
    )
  }
}

class Announcement extends Component {
  render() {
    return (
      <div>announcement</div>
    )
  }
}

class CreateProfile extends Component {
  render() {
    return (
      <div>create profile</div>
    )
  }
}

class Questions extends Component {
  render() {
    return (
      <div>questions</div>
    )
  }
}

class ShowSurvey extends Component {
  render() {
    return (
      <div>show survey</div>
    )
  }
}

function mockAPI(method,endpoint,data) {
  if (endpoint === "login") {
    return {authorized: true, currentPage: "announcement"}
  }
}
 
class PageSelector extends Component {
  constructor (props) {
    super(props)
    // state
    this.state = {
      response: {currentPage: "login"},
      user: "",
      password: "",
      errors: {},
    }
    // functions
    this.storeLoginData = this.storeLoginData.bind(this)
    this.submitLogin = this.submitLogin.bind(this)
    this.goToNewProfilePage = this.goToNewProfilePage.bind(this)
    this.storeProfileData = this.storeProfileData.bind(this)
    this.submitProfile = this.submitProfile.bind(this)
    this.storeAnswersData = this.storeAnswersData.bind(this)
    this.submitAnswers = this.submitAnswers.bind(this)
    this.fetchSurvey = this.fetchSurvey.bind(this)
    this.api = this.api.bind(this)
  }
  storeLoginData(input) {
    let state = this.state
    // console.log(input.target)
    state[input.target.name] = input.target.value
    this.setState({state})
  }
  submitLogin() {
    let error = false
    let errorMessages = this.state.errors
    
    // validates user's email
    if (this.state.user.length === 0) {
      error = true
      errorMessages["user"] = "Please enter your email address."
    }
    else if (!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(this.state.user)) {
      error = true
      errorMessages["user"] = "Please enter a valid email address."      
    }
    else {
      errorMessages["user"] = ""
    }

    // validates password
    if (this.state.password.length === 0) {
      error = true
      errorMessages["password"] = "Please enter the password."
    }
    else {
      errorMessages["password"] = ""
    }

    if (error) {
      this.setState({errorMessages})
    }
    else {
      this.api(
        "get",
        "login",
        {user: this.state.user, password: this.state.password}
      ) 
    }
  }
  goToNewProfilePage() {
  }
  storeProfileData() {

  }
  submitProfile() {

  }
  storeAnswersData() {

  }
  submitAnswers() {

  }
  fetchSurvey() {

  }
  api(method,endpoint,data) {
    console.log(method, endpoint, data)
    let response = mockAPI(method,endpoint,data)
    console.log(response)
    this.setState({response})
  }
  render() {
    // chooses appropriate page to show
    let showFlags = true
    let currentPage = null
    switch (this.state.response.currentPage) {
      default:
        currentPage = <Flags mainPage/>
        showFlags = false
        break
      case "login":
        currentPage = (
          <Login
            storeLoginData={this.storeLoginData}
            submitLogin={this.submitLogin}
            errors={this.state.errors}
          />
        )
        showFlags = false
        break
      case "announcement":
        currentPage = (
          <Announcement
          />
        )
        break
      case "createProfile":
        currentPage = (
          <CreateProfile
          />
        )
        break
      case "questions":
        currentPage = (
          <Questions
          />
        )
        break
      case "showSurvey":
        currentPage = (
          <ShowSurvey
          />
        )
        break
    }
    return (
      <div>
        <Header/>
        {currentPage}
        {showFlags ? <Flags/> : null}
      </div>
    )
  }
}

export default PageSelector