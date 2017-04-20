import React, {Component} from 'react';
import {Button, FormControl, Col, Alert, Row, Checkbox} from 'react-bootstrap'
import $ from 'jquery'
import './App.css';

class Flags extends Component {
  render() {
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

class ShowSurvey extends Component {
  render() {
    return (
      <div>show survey</div>
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

class CreateProfile extends Component {
  daysOfTheMonth() {
    let days = []
    const totalDays = new Date(this.props.year, this.props.month, 0).getDate()
    console.log(totalDays)
    for (var i = 1; i <= totalDays; i++) {
      days.push(<option value={i}>{i}</option>)
    }
    return days
  }
  months() {
    const listOfMonths = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    let months = listOfMonths.map((month, index) => {
      return <option value={index+1}>{month}</option>
    })
    return months
  }
  years() {
    let years = []
    for (var i = 1935; i <= 2010; i++) {
      years.push(<option value={i}>{i}</option>)
    }
    return years
  }
  ageCategories() {
    const categories = [{id:"24+",name:"24 -"},{id:"25-49",name:"25-49"},{id:"50-74",name:"50-74"},{id:"75+",name:"75+"}]
    let ageCategories = categories.map((category) => {
      return <option value={category.id}>{category.name}</option>
    })
    return ageCategories
  }
  residences() {
    const countries = [{id:"france",name:"France"},{id:"usa",name:"United States"}]
    let residence = countries.map((country) => {
      return <option value={country.id}>{country.name}</option>
    })
    return residence
  }
  relationships() {
    const relations = [{id: "relative", name:"Relative"},{id:"friend",name:"Friend"},{id:"coworker",name:"Coworker"}]
    let relationships = relations.map((relation) => {
      return <option value={relation.id}>{relation.name}</option>
    })
    return relationships
  }
  render() {
    return (
      <div>
        <Col sm={2}>
          <FormControl
            name="gender"
            value={this.props.gender}
            componentClass="select"
            bsSize="large"
            className="margin-bottom"
            onChange={this.props.storeData}
          >
            <option value="F">F</option>
            <option value="M">M</option>
          </FormControl>
        </Col>
        <Col sm={5}>
          <FormControl
            name="name"
            value={this.props.name}
            bsSize="large"
            className="margin-bottom"
            onChange={this.props.storeData}
          />
          {
            !this.props.errors.name ?
            null :
            <Alert
            bsStyle="danger">
            {this.props.errors.name}
            </Alert>
          }
        </Col>
        <Col sm={5}>
          <FormControl
            disabled={true}
            value={this.props.email}
            bsSize="large"
            className="margin-bottom"
          />
        </Col>
        <Row>
          {!this.props.hideBirthday ? <Col sm={11}>
            <Col smOffset={2} sm={2}>
              <FormControl
                name="day"
                value={this.props.day}
                componentClass="select"
                bsSize="large"
                className="margin-bottom"
                onChange={this.props.storeData}
              >
                {this.daysOfTheMonth()}
              </FormControl>
            </Col>
            <Col sm={4}>
              <FormControl
                name="month"
                value={this.props.month}
                componentClass="select"
                bsSize="large"
                className="margin-bottom"
                onChange={this.props.storeData}
              >
                {this.months()}
              </FormControl>
            </Col>
            <Col sm={3}>
              <FormControl
                name="year"
                value={this.props.year}
                componentClass="select"
                bsSize="large"
                className="margin-bottom"
                onChange={this.props.storeData}
              >
                {this.years()}
              </FormControl>
            </Col>
          </Col>
          :
          <Col sm={11}>
            <Col smOffset={3} sm={4}>
              <FormControl
                name="age-category"
                value={this.props["age-category"]}
                componentClass="select"
                bsSize="large"
                className="margin-bottom"
                onChange={this.props.storeData}
              >
                {this.ageCategories()}
              </FormControl>
              </Col>
          </Col>
          }
        </Row>
        <Row className="text-center">
            <Col>
              <Checkbox
                name="hideBirthday"
                value={this.props.hideBirthday}
                bsSize="large"
                className="margin-bottom"
                onChange={this.props.storeData}
              />      
            </Col>        
        </Row>
        <Col sm={6}>
          <FormControl
            name="residence"
            value={this.props.residence}
            componentClass="select"
            bsSize="large"
            className="margin-bottom"
            onChange={this.props.storeData}
          >
            {this.residences()}
          </FormControl>
        </Col>
        <Col sm={6}>
          <FormControl
            name="relationship"
            value={this.props.relationship}
            componentClass="select"
            bsSize="large"
            className="margin-bottom"
            onChange={this.props.storeData}
          >
            {this.relationships()}
          </FormControl>
        </Col>
        <Button
          block
          bsSize="large"
          bsStyle="primary"
          onClick={this.props.submitProfile}
        >Create Profile</Button>
      </div>
    )
  }
}

class Announcement extends Component {
  render() {
    return (
      <Col xs={12}>
        the picture
        <Button
          block
          bsSize="large"
          bsStyle="primary"
          onClick={this.props.goToNewProfilePage}
        >Yes!</Button>
      </Col>
    )
  }
}

class Login extends Component {
  render() {
    return (
        <Col
          lgOffset={2} mdOffset={3} smOffset={2} xsOffset={1}
          lg={8} md={6} sm={8} xs={10}
          >
          <FormControl
            name="user"
            type="email"
            bsSize="large"
            className="margin-bottom"
            onChange={this.props.storeData}
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
            onChange={this.props.storeData}
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
            block
            bsStyle="primary"
            bsSize="large"
            className="margin-bottom"
            onClick={this.props.submitLogin}
          >Enter</Button>
        </Col>
    )
  }
}
 
class PageSelector extends Component {
  constructor (props) {
    super(props)
    // state
    this.state = {
      currentPage: "login",
      user: "",
      password: "",
      gender: "F",
      name: "",
      day: 1,
      month: 1,
      year: 1960,
      "age-category": "50-74",
      relationship: "relative",
      residence: "france",
      errors: {},
      ready: true,
      langage: "en"
    }
    // functions
    this.storeData = this.storeData.bind(this)
    this.submitLogin = this.submitLogin.bind(this)
    this.goToNewProfilePage = this.goToNewProfilePage.bind(this)
    this.submitProfile = this.submitProfile.bind(this)
    this.submitAnswers = this.submitAnswers.bind(this)
    this.fetchSurvey = this.fetchSurvey.bind(this)
    this.api = this.api.bind(this)
  }
  submitLogin() {
    let error = false
    let errorMessages = this.state.errors
    
    // validates user's email
    if (this.state.user.length === 0) {
      error = true
      errorMessages["user"] = "Please enter your email address."
    }
    else if (!/^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/.test(this.state.user)) {
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
      this.setState(errorMessages)
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
    this.setState({currentPage: "createProfile"})
  }
  submitProfile() {
    let error = false
    let errorMessages = this.state.errors

    // validates user's email
    if (this.state.name.length === 0) {
      error = true
      errorMessages["name"] = "Please enter your name."
    }

    if (error) {
      this.setState(errorMessages)
    }
    else {
      this.api(
        "get",
        "createUser",
        {}
      ) 
    }
  }
  submitAnswers() {

  }
  fetchSurvey() {

  }
  api(method,endpoint,data) {
    console.log(method, endpoint, data)
    var urlPath = "";
    if (endpoint === "login") {
      urlPath = "https://bu67qviz40.execute-api.us-west-2.amazonaws.com/prod"
    }

    this.setState({ready:false})
    $.ajax({
      type: method,
      url: urlPath,
      data: data,
      contentType: 'application/json',
      dataType: 'json',
      context: this,
      header: {
        'Access-Control-Allow-Origin':'*',
      },
      success: function(response) {
        console.log(response)
        this.setState(response,)
        this.setState({ready:true})
      },
      error: function(error) {
        console.log(error)
        this.setState({ready:true})
      },
    })
  }
  storeData(input) {
    let state = this.state
    console.log(input.target)
    if (input.target.type === "checkbox") {
      state[input.target.name] = input.target.checked
    }
    else {
      state[input.target.name] = input.target.value
    }
    this.setState(state)
  }
  render() {
    // chooses appropriate page to show
    let showFlags = true
    let currentPage = null
    switch (this.state.currentPage) {
      default:
        currentPage = <Flags mainPage/>
        showFlags = false
        break
      case "login":
        currentPage = (
          <Login
            storeData={this.storeData}
            submitLogin={this.submitLogin}
            errors={this.state.errors}
          />
        )
        showFlags = false
        break
      case "announcement":
        currentPage = (
          <Announcement
            goToNewProfilePage={this.goToNewProfilePage}
          />
        )
        break
      case "createProfile":
        currentPage = (
          <CreateProfile
            storeData={this.storeData}
            submitProfile={this.submitProfile}
            errors={this.state.errors}
            name={this.state.name}
            email={this.state.user}
            day={this.state.day}
            month={this.state.month}
            year={this.state.year}
            hideBirthday={this.state.hideBirthday}
            ageCategory={this.state.ageCategory}
            residence={this.state.residence}
            relationship={this.state.relationship}
          />
        )
        break
      case "questions":
        currentPage = (
          <Questions
            storeData={this.storeData}
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

    if (!this.state.ready) {
      currentPage = (
        <div className="text-center">
          <i className="fa fa-spinner fa-spin" style={{fontSize: "50px"}}></i>
        </div>
      )
    }

    return (
      <Col
        lgOffset={3} mdOffset={2} smOffset={1}
        lg={6} md={8} sm={10}
      >
        <Header/>
        {currentPage}
        {showFlags ? <Flags/> : null}
      </Col>
    )
  }
}

export default PageSelector