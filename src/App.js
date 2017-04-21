import React, {Component} from 'react';
import {Button, FormControl, Col, Alert, Row, Checkbox} from 'react-bootstrap'
import $ from 'jquery'
import './App.css';

class Flags extends Component {
  render() {
    return (
      <div>
        {!this.props.mainPage ? <hr/> : null}
        flags
      </div>
    )
  }
}

class Header extends Component {
  render() {
    return (
      <div>
        header
        <hr/>
      </div>
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
    // console.log(totalDays)
    for (var i = 1; i <= totalDays; i++) {
      days.push(<option  key={i} value={i}>{i}</option>)
    }
    return days
  }
  months() {
    const listOfMonths = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    let months = listOfMonths.map((month, index) => {
      return <option key={month} value={index+1}>{month}</option>
    })
    return months
  }
  years() {
    let years = []
    for (var i = 1935; i <= 2010; i++) {
      years.push(<option key={i} value={i}>{i}</option>)
    }
    return years
  }
  ageCategories() {
    const categories = [{id:"24-",name:"24-"},{id:"25-49",name:"25-49"},{id:"50-74",name:"50-74"},{id:"75+",name:"75+"}]
    let ageCategories = categories.map((category) => {
      return <option key={category.id} value={category.id}>{category.name}</option>
    })
    return ageCategories
  }
  residences() {
    const countries = [{id:"france",name:"France"},{id:"usa",name:"United States"}]
    let residence = countries.map((country) => {
      return <option key={country.id} value={country.id}>{country.name}</option>
    })
    return residence
  }
  relationships() {
    const relations = [{id: "relative", name:"Relative"},{id:"friend",name:"Friend"},{id:"coworker",name:"Coworker"}]
    let relationships = relations.map((relation) => {
      return <option key={relation.id} value={relation.id}>{relation.name}</option>
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
            <Col smOffset={4} sm={4}>
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
                checked={this.props.hideBirthday}
                bsSize="large"
                className="margin-bottom"
                onChange={this.props.storeData}
              />      
            </Col>        
        </Row>
        <Col sm={6}>
          <FormControl
            name="country"
            value={this.props.country}
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
                <svg viewBox="0 -10 570 210">
                    {/* mushroom 1 */}
                    {/* hat */}
                    <circle cx="110" cy="100" r="100" clipPath="url(#cut-off-bottom-mushroom1)" fill="red" stroke="black" strokeWidth="3"></circle>
                    <clipPath id="cut-off-bottom-mushroom1"><rect x="0" y="-10" width="220" height="100" /></clipPath>
                    {/* spots on the hat */}
                    <circle cx="30" cy="35" r="18" fill="white" stroke="none"></circle>
                    <circle cx="75" cy="65" r="15" fill="white" stroke="none"></circle>
                    <circle cx="122" cy="21" r="12" fill="white" stroke="none"></circle>
                    <circle cx="145" cy="75" r="18" fill="white" stroke="none"></circle>
                    <circle cx="190" cy="50" r="13" fill="white" stroke="none"></circle>
                    {/* close the circle */}
                    <circle cx="110" cy="100" r="100" clipPath="url(#cut-off-bottom-mushroom1)" fill="none" stroke="black" strokeWidth="3"></circle>
                    <line x1="9.15" y1="90" x2="210.85" y2="90" stroke="black" strokeWidth="3"></line>
                    {/* body */}
                    <rect width="120" height="100" x="50" y="90" rx="2" ry="2" fill="none" stroke="black" strokeWidth="3"></rect>
                    {/* eyes */}
                    <line x1="95" y1="110" x2="95" y2="140" stroke="black" strokeWidth="4"></line>
                    <line x1="125" y1="110" x2="125" y2="140" stroke="black" strokeWidth="4"></line>
                    {/* mouth */}
                    <circle cx="110" cy="145" r="30" clipPath="url(#cut-off-top-mushroom1)" fill="none" stroke="black" strokeWidth="3"></circle>
                    <clipPath id="cut-off-top-mushroom1"><rect x="0" y="145" width="220" height="100" /></clipPath>

                    {/* mushroom 2 */}
                    {/* hat */}
                    <circle cx="285" cy="150" r="65" clipPath="url(#cut-off-bottom-mushroom2)" fill="lightgreen" stroke="black" strokeWidth="3"></circle>
                    <clipPath id="cut-off-bottom-mushroom2"><rect x="110" y="" width="245" height="145" /></clipPath>
                    {/* spots on the hat */}
                    <circle cx="230" cy="125" r="11" fill="white" stroke="none"></circle>
                    <circle cx="265" cy="140" r="7" fill="white" stroke="none"></circle>
                    <circle cx="295" cy="105" r="12" fill="white" stroke="none"></circle>
                    <circle cx="326" cy="126" r="9" fill="white" stroke="none"></circle>
                    {/* close the circle */}
                    <circle cx="285" cy="150" r="65" clipPath="url(#cut-off-bottom-mushroom2)" fill="none" stroke="black" strokeWidth="3"></circle>
                    <line x1="219.15" y1="145" x2="350.85" y2="145" stroke="black" strokeWidth="3"></line>
                    {/* body */}
                    <rect width="70" height="50" x="250" y="145" rx="2" ry="2" fill="none" stroke="black" strokeWidth="3"></rect>
                    {/* eyes */}
                    <line x1="263" y1="165" x2="273" y2="155" stroke="black" strokeWidth="4"></line>
                    <line x1="271" y1="155" x2="281" y2="165" stroke="black" strokeWidth="4"></line>
                    <line x1="288" y1="165" x2="298" y2="155" stroke="black" strokeWidth="4"></line>
                    <line x1="296" y1="155" x2="306" y2="165" stroke="black" strokeWidth="4"></line>
                    {/* mouth */}
                    <line x1="276" y1="175" x2="286" y2="185" stroke="black" strokeWidth="4"></line>
                    <line x1="284" y1="185" x2="294" y2="175" stroke="black" strokeWidth="4"></line>
                    
                    {/* mushroom 3 */}
                    {/* hat */}
                    <circle cx="460" cy="100" r="100" clipPath="url(#cut-off-bottom-mushroom3)" fill="orange" stroke="black" strokeWidth="3"></circle>
                    <clipPath id="cut-off-bottom-mushroom3"><rect x="100" y="-10" width="470" height="100" /></clipPath>
                    {/* spots on the hat */}
                    <circle cx="390" cy="70" r="13" fill="white" stroke="none"></circle>
                    <circle cx="430" cy="25" r="19" fill="white" stroke="none"></circle>
                    <circle cx="475" cy="65" r="15" fill="white" stroke="none"></circle>
                    <circle cx="522" cy="21" r="12" fill="white" stroke="none"></circle>
                    <circle cx="548" cy="77" r="18" fill="white" stroke="none"></circle>
                    {/* close the circle */}
                    <circle cx="460" cy="100" r="100" clipPath="url(#cut-off-bottom-mushroom3)" fill="none" stroke="black" strokeWidth="3"></circle>
                    <line x1="359.15" y1="90" x2="560.85" y2="90" stroke="black" strokeWidth="3"></line>
                    {/* body */}
                    <rect width="120" height="100" x="400" y="90" rx="2" ry="2" fill="none" stroke="black" strokeWidth="3"></rect>
                    {/* eyes */}
                    <line x1="445" y1="110" x2="445" y2="140" stroke="black" strokeWidth="4"></line>
                    <line x1="475" y1="110" x2="475" y2="140" stroke="black" strokeWidth="4"></line>
                    {/* mouth */}
                    <circle cx="460" cy="145" r="30" clipPath="url(#cut-off-top-mushroom3)" fill="none" stroke="black" strokeWidth="3"></circle>
                    <clipPath id="cut-off-top-mushroom3"><rect x="400" y="145" width="220" height="100" /></clipPath>
                </svg>
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
            name="email"
            type="email"
            bsSize="large"
            className="margin-bottom"
            onChange={this.props.storeData}
          />
          {
            !this.props.errors.email ?
            null :
            <Alert
            bsStyle="danger">
            {this.props.errors.email}
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
      email: "",
      password: "",
      gender: "F",
      name: "",
      day: 1,
      month: 1,
      year: 1960,
      "age-category": "50-74",
      relationship: "relative",
      country: "france",
      errors: {},
      ready: true,
      langage: "en",
      hideBirthday: false,
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
    if (this.state.email.length === 0) {
      error = true
      errorMessages["email"] = "Please enter your email address."
    }
    else if (!/^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/.test(this.state.email)) {
      error = true
      errorMessages["email"] = "Please enter a valid email address."      
    }
    else {
      errorMessages["email"] = ""
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
      this.setState({errors: errorMessages})
    }
    // API call
    else {
      this.api(
        "login",
        {email: this.state.email, password: this.state.password}
      ) 
    }
  }
  goToNewProfilePage() {
    this.api(
      "goToCreateProfile",
      {email: this.state.email},
      false
    )
    this.setState({currentPage: "createProfile"})
  }
  submitProfile() {
    let error = false
    let errorMessages = this.state.errors

    // validates user's name
    if (this.state.name.length === 0) {
      error = true
      errorMessages["name"] = "Please enter your name."
    }
    else {
      errorMessages["name"] = ""
    }

    if (error) {
      this.setState({errors: errorMessages})
    }
    // API call
    else {
      var birthday = this.state.year + "/" + this.state.month + "/" + this.state.day
      var ageCategory = "null"
      if (this.state.hideBirthday) {
        birthday = "null"
        ageCategory = this.state["age-category"]
      }
      this.api(
        "createUser",
        {
          email: this.state.email,
          gender: this.state.gender,
          name: this.state.name,
          birthday: birthday,
          "age-category": ageCategory,
          country: this.state.country,
          relationship: this.state.relationship,
        }
      ) 
    }
  }
  submitAnswers() {

  }
  fetchSurvey() {

  }
  // programatically generated API calls
  api(request,data,spinner = true) {
    // validates request
    if (typeof data === 'object' && typeof request === "string") {
        if (request.length && typeof data === "object") {
        data["request"] = request
        console.log("Request sent.","\nData: ",data)
        if (spinner) {
          this.setState({ready:false})
        }
        $.ajax({
          url: "https://bu67qviz40.execute-api.us-west-2.amazonaws.com/prod",
          data: data,
          contentType: 'application/json',
          dataType: 'json',
          context: this,
          header: {'Access-Control-Allow-Origin':'*'},
          success: function(response) {
            this.setState({ready:true})
            if (response != null && typeof response === "object") {
              // saves response in the state
              this.setState(response)
              // toggles hide birthday checkbox
              if (typeof response["age-category"] !== "undefined" && response["age-category"] !== "null") {
                this.setState({hideBirthday: true})
              }
              // parses birthday into year, month, and day
              else if (typeof response["birthday"] !== "undefined" && response["birthday"] !== "null") {
                // TODO
              }
              // no error
              if (typeof response.errorMessage === "undefined") {
                this.setState({errorMessage: null})
                console.log(
                  "Request succeeded.",
                  "\nOriginal request:", request,
                  "\nResponse:", response
                )
              }
              // log request error (error details if any)
              else {
                var errorDetails = "No details were provided."
                if (typeof response.errorDetails !== "undefined") {
                  errorDetails = response.errorDetails
                }
                console.error(
                  "Request failed.",
                  "\nData sent:",data,
                  "\nError message:", JSON.stringify(response.errorMessage),
                  "\nError details:", errorDetails,
                )
              }
            }
            // response is not an object
            else {
              console.warn(
                "Request did not return an object.",
                "\nOriginal request:", request,
                "\nResponse:",response,
              )
            }
          }
        })
      }
      else {
        console.error("Request could not be sent: The arguments passed to the API are invalid. Data or request can not be empty.")
        this.setState({errorMessage: "Sorry, an error occurred."})
      }
    }
    else {
      console.error("Request could not be sent: The arguments passed to the API are invalid. Data must be a flat object and request must be a string.")
      this.setState({errorMessage: "Sorry, an error occurred."})
    }
  }
  storeData(input) {
    let state = this.state
    // console.log(input.target)
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
            email={this.state.email}
            day={this.state.day}
            month={this.state.month}
            year={this.state.year}
            hideBirthday={this.state.hideBirthday}
            age-category={this.state["age-category"]}
            country={this.state.country}
            relationship={this.state.relationship}
            gender={this.state.gender}
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
        {this.state.errorMessage ? <Alert bsStyle="danger">{this.state.errorMessage}</Alert> : null}
        {currentPage}
        {showFlags ? <Flags/> : null}
      </Col>
    )
  }
}

export default PageSelector