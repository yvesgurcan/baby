import React, {Component} from 'react';
import {Button, FormControl, Col, Grid, PageHeader, Clearfix, Alert, Row, Checkbox} from 'react-bootstrap'
import $ from 'jquery'
import './App.css';

/* SVGs */

class FrenchFlag extends Component {
  render() {
    return (
      <svg
        id="fr"
        width={this.props.mainPage ? "200" : "50"}
        height={this.props.mainPage ? "100" : "25"}
        viewBox="0 0 45 26"
      >
        <rect width="14" height="26"  x="1" fill="darkblue"></rect>
        <rect width="14" height="26"  x="15" fill="white"></rect>
        <rect width="14" height="26"  x="29" fill="red"></rect>
        <rect width="42" height="26"  x="1" fill="transparent" stroke="darkgray"></rect>
      </svg>
    )
  }
}

class AmericanFlag extends Component {
  render() {
    return (
                        <svg
                          id="en"
                          width={this.props.mainPage ? "200" : "50"}
                          height={this.props.mainPage ? "100" : "25"}
                          viewBox="0 0 43 26"
                        >
                            <rect width="42" height="2"  fill="crimson"></rect>
                            <rect width="42" height="2"  y="4" fill="crimson"></rect>
                            <rect width="42" height="2"  y="8" fill="crimson"></rect>
                            <rect width="42" height="2"  y="12" fill="crimson"></rect>
                            <rect width="42" height="2"  y="16" fill="crimson"></rect>
                            <rect width="42" height="2"  y="20" fill="crimson"></rect>
                            <rect width="42" height="2"  y="24" fill="crimson"></rect>
                            <rect width="14" height="14" fill="darkblue"></rect>
                            <rect width="42" height="26" fill="transparent" stroke="darkgray"></rect>
                            <rect width="1" height="1" x="0.75" y="0.75" fill="white"></rect>
                            <rect width="1" height="1" x="2.75" y="0.75" fill="white"></rect>
                            <rect width="1" height="1" x="4.75" y="0.75" fill="white"></rect>
                            <rect width="1" height="1" x="6.75" y="0.75" fill="white"></rect>
                            <rect width="1" height="1" x="8.75" y="0.75" fill="white"></rect>
                            <rect width="1" height="1" x="10.75" y="0.75" fill="white"></rect>
                            <rect width="1" height="1" x="12.75" y="0.75" fill="white"></rect>
                            <rect width="1" height="1" x="0.75" y="2.75" fill="white"></rect>
                            <rect width="1" height="1" x="2.75" y="2.75" fill="white"></rect>
                            <rect width="1" height="1" x="4.75" y="2.75" fill="white"></rect>
                            <rect width="1" height="1" x="6.75" y="2.75" fill="white"></rect>
                            <rect width="1" height="1" x="8.75" y="2.75" fill="white"></rect>
                            <rect width="1" height="1" x="10.75" y="2.75" fill="white"></rect>
                            <rect width="1" height="1" x="12.75" y="2.75" fill="white"></rect>
                            <rect width="1" height="1" x="0.75" y="4.75" fill="white"></rect>
                            <rect width="1" height="1" x="2.75" y="4.75" fill="white"></rect>
                            <rect width="1" height="1" x="4.75" y="4.75" fill="white"></rect>
                            <rect width="1" height="1" x="6.75" y="4.75" fill="white"></rect>
                            <rect width="1" height="1" x="8.75" y="4.75" fill="white"></rect>
                            <rect width="1" height="1" x="10.75" y="4.75" fill="white"></rect>
                            <rect width="1" height="1" x="12.75" y="4.75" fill="white"></rect>
                            <rect width="1" height="1" x="0.75" y="6.75" fill="white"></rect>
                            <rect width="1" height="1" x="2.75" y="6.75" fill="white"></rect>
                            <rect width="1" height="1" x="4.75" y="6.75" fill="white"></rect>
                            <rect width="1" height="1" x="6.75" y="6.75" fill="white"></rect>
                            <rect width="1" height="1" x="8.75" y="6.75" fill="white"></rect>
                            <rect width="1" height="1" x="10.75" y="6.75" fill="white"></rect>
                            <rect width="1" height="1" x="12.75" y="6.75" fill="white"></rect>
                            <rect width="1" height="1" x="0.75" y="8.75" fill="white"></rect>
                            <rect width="1" height="1" x="2.75" y="8.75" fill="white"></rect>
                            <rect width="1" height="1" x="4.75" y="8.75" fill="white"></rect>
                            <rect width="1" height="1" x="6.75" y="8.75" fill="white"></rect>
                            <rect width="1" height="1" x="8.75" y="8.75" fill="white"></rect>
                            <rect width="1" height="1" x="10.75" y="8.75" fill="white"></rect>
                            <rect width="1" height="1" x="12.75" y="8.75" fill="white"></rect>
                            <rect width="1" height="1" x="0.75" y="10.75" fill="white"></rect>
                            <rect width="1" height="1" x="2.75" y="10.75" fill="white"></rect>
                            <rect width="1" height="1" x="4.75" y="10.75" fill="white"></rect>
                            <rect width="1" height="1" x="6.75" y="10.75" fill="white"></rect>
                            <rect width="1" height="1" x="8.75" y="10.75" fill="white"></rect>
                            <rect width="1" height="1" x="10.75" y="10.75" fill="white"></rect>
                            <rect width="1" height="1" x="12.75" y="10.75" fill="white"></rect>
                            <rect width="1" height="1" x="0.75" y="12.75" fill="white"></rect>
                            <rect width="1" height="1" x="2.75" y="12.75" fill="white"></rect>
                            <rect width="1" height="1" x="4.75" y="12.75" fill="white"></rect>
                            <rect width="1" height="1" x="6.75" y="12.75" fill="white"></rect>
                            <rect width="1" height="1" x="8.75" y="12.75" fill="white"></rect>
                            <rect width="1" height="1" x="10.75" y="12.75" fill="white"></rect>
                            <rect width="1" height="1" x="12.75" y="12.75" fill="white"></rect>
                        </svg>
    )
  }
}

class RedMushroom extends Component {
  render() {
    return (
                  <svg viewBox="0 -10 570 220">
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
                  </svg>
    )
  }
}

class GreenMushroom extends Component {
  render() {
    return (
                  <svg height={this.props.header ? "60" : null} width={this.props.header ? "60" : null} viewBox={this.props.header ? "215 80 140 160" : "0 0 570 220"}>
                    {/* mushroom 2 */}
                    {/* hat */}
                    <circle cx="285" cy="150" r="65" clipPath="url(#cut-off-bottom-mushroom2)" fill="lightgreen" stroke="black" strokeWidth="3"></circle>
                    <clipPath id="cut-off-bottom-mushroom2"><rect x="110" y="0" width="245" height="145" /></clipPath>
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
                  </svg>
    )
  }
}

class OrangeMushroom extends Component {
  render() {
    return (
                  <svg viewBox="0 -10 570 220">
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
    )
  }
}

/* page layout */

class Header extends Component {
  render() {
    return (
      <div>
        <Col xs={2} style={{marginTop: "5px", marginLeft: "-25px",padding: "0px"}} >
            <GreenMushroom header/>
        </Col>
        <Col xs={8} style={{marginTop: "10px"}} className="text-center">
          <div className="override-default"><PageHeader>{this.props.headerMessage}</PageHeader></div>
        </Col>
        <Col xs={2}  style={{marginTop: "22.5px", paddingRight: "0px"}} className="text-right">
          <a className="logout" hidden={!this.props.authenticated} onClick={this.props.logout}>Logout</a>
        </Col>
        <Clearfix/>
        <hr className="header"/>
      </div>
    )
  }
}

class Footer extends Component {
  render() {
    return (
      <Flags
        switchLanguage={this.props.switchLanguage}
        submitLanguageShift={this.props.submitLanguageShift}
      />
    )
  }
}

/* pages main content */

class ShowBabyNameStats extends Component {
  render() {
    return (
      <div>show survey</div>
    )
  }
}

class ChooseBabyNames extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    //
    let babyNames = null
    if (this.props.babyNames) {
      babyNames = this.props.babyNames.map(babyName => {
        return (
          <Button
            key={babyName.name}
            name={babyName.name}
            bsSize="large"
            bsStyle="success"
            className="margin-bottom margin-right"
            active={this.props.selectedBabyNames.indexOf(babyName.name) > -1 ? true : false}
            onClick={this.props.selectBabyName}
          >
            {babyName.name}
          </Button>)
      })
    }
    return (
      <div>
        <Col sm={12}>
          <Col sm={12}>
            {babyNames}
          </Col>
          <Clearfix/>
          {
            !this.props.warnings.selectedBabyNames ?
            null :
            <Alert
              bsStyle="info"
              className={this.props.confirmBabyNamesSubmit ? "warning" : null}
            >
              {this.props.warnings.selectedBabyNames}
            </Alert>
          }
        </Col>
        <Clearfix/>
        <hr/>
        <Col sm={12}>
          <Col sm={4}>
            <FormControl
              name="newBabyName1"
              value={this.props.newBabyName1}
              bsSize="large"
              className="margin-bottom"
              onChange={this.props.storeData}
            />
            {
              !this.props.errors.newBabyName1 ?
              null :
              <Alert
              bsStyle="danger">
              {this.props.errors.newBabyName1}
              </Alert>
            }
          </Col>
          <Col sm={4}>
            <FormControl
              name="newBabyName2"
              value={this.props.newBabyName2}
              bsSize="large"
              className="margin-bottom"
              onChange={this.props.storeData}
            />
            {
              !this.props.errors.newBabyName2 ?
              null :
              <Alert
              bsStyle="danger">
              {this.props.errors.newBabyName2}
              </Alert>
            }
          </Col>
          <Col sm={4}>
            <FormControl
              name="newBabyName3"
              value={this.props.newBabyName3}
              bsSize="large"
              className="margin-bottom"
              onChange={this.props.storeData}
            />
            {
              !this.props.errors.newBabyName3 ?
              null :
              <Alert
                bsStyle="danger"
              >
              {this.props.errors.newBabyName3}
              </Alert>
            }
          </Col>
          <Clearfix/>
          {
            !this.props.warnings.newBabyNames ?
            null :
            <Alert
              bsStyle="info"
            >
              {this.props.warnings.newBabyNames}
            </Alert>
          }
        </Col>
        <hr/>
        <Col sm={12}>
          <Button
            block
            bsSize="large"
            bsStyle="primary"
            onClick={this.props.confirmBabyNamesSubmit ? this.props.overrideBabyNameWarning: this.props.submitBabyNames}
          >Submit Names</Button>
      </Col>
    </div>
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
        <div className="spacer-top-large"/>
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

        <Col sm={12}>
          <Button
            block
            bsSize="large"
            bsStyle="primary"
            onClick={this.props.submitProfile}
          >Create Profile</Button>
        </Col>
        <div className="spacer-bottom-large"/>
        <div className="spacer-bottom-large"/>
      </div>
    )
  }
}

class Announcement extends Component {
  render() {
    return (
      <Col sm={12}>
        <div className="spacer-top"/>
        <svg viewBox="0 -10 570 220">
          <RedMushroom/>
          <GreenMushroom/>
          <OrangeMushroom/>
        </svg>
        <Button
          block
          bsSize="large"
          bsStyle="primary"
          onClick={this.props.goToNewProfilePage}
        >Yes!</Button>
        <div className="spacer-bottom"/>
        <div className="spacer-bottom"/>
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
          <div className="spacer-top"/>
          <FormControl
            name="email"
            type="email"
            value={this.props.email}
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
            value={this.props.password}
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
            onClick={this.props.login}
          >Enter</Button>
          <div className="spacer-bottom"/>
          <div className="spacer-bottom"/>
        </Col>
    )
  }
}

// Flags is the footer of most pages and also the main content component of the default landing page
class Flags extends Component {
  constructor (props) {
    super(props)
    // functions
    this.translation = this.translation.bind(this)
    this.switchLanguage = this.switchLanguage.bind(this)
  }
  translation() {
    return {
      fr: {title: "Choisissez une langue"},
      en: {title: "Choose your language"}
    }
  }
  switchLanguage(input) {
    // the onMouseOver event does not go any further when user hovers on inner elements of a SVG (because they do not have an id, which would trigger an error in the prop function)
    if (input.target.id !== "") {
      // selected language comes from the id attribute of the SVG tag
      this.props.switchLanguage(input.target.id)
    }
  }
  render() {
    let translation = this.translation()[this.props.language]
    return (
      <div>
        {this.props.mainPage ? <div className="spacer-top"/> : null}
        <Clearfix/>
          {!this.props.mainPage ? <hr/> : null}
          <div className="text-center">
            {this.props.mainPage ? <PageHeader>{translation.title}</PageHeader> : null}
            <Clearfix/>
            <span
              onMouseOver={this.switchLanguage} 
              onClick={this.props.submitLanguageShift ? this.props.submitLanguageShift : this.props.goToLogin}
            >
              <AmericanFlag mainPage={this.props.mainPage} />
            </span>
            <span
              onMouseOver={this.switchLanguage}
              onClick={this.props.submitLanguageShift ? this.props.submitLanguageShift : this.props.goToLogin}
            >
              <FrenchFlag mainPage={this.props.mainPage}/>
            </span>            
        </div>
      </div>
    )
  }
}

/* page wrapper */

/*
  This is where the state of the whole App lives
  All the other components are stateless
  French and English translations live in the main page content components
*/
class PageSelector extends Component {
  constructor (props) {
    super(props)

    this.URLfragments = this.URLfragments.bind(this)
    this.switchLanguage = this.switchLanguage.bind(this)
    this.submitLanguageShift = this.submitLanguageShift.bind(this)
    this.goToLogin = this.goToLogin.bind(this)
    this.goToNewProfilePage = this.goToNewProfilePage.bind(this)
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
    this.submitProfile = this.submitProfile.bind(this)
    this.getBabyNames = this.getBabyNames.bind(this)
    this.selectBabyName = this.selectBabyName.bind(this)
    this.overrideBabyNameWarning = this.overrideBabyNameWarning.bind(this)
    this.submitBabyNames = this.submitBabyNames.bind(this)
    this.storeData = this.storeData.bind(this)
    this.api = this.api.bind(this)    

    const URLfragments = this.URLfragments()

    // default state
    this.state = {
      language: URLfragments.language === "fr" ? "fr" : "en",
      email: URLfragments.email ? URLfragments.email : "",
      name: URLfragments.name ? URLfragments.name : "",
      currentPage: URLfragments.language ? "login" : null,
      password: "",
      gender: "F",
      day: 1,
      month: 1,
      year: 1960,
      hideBirthday: false,
      "age-category": "50-74",
      country: "france",
      relationship: "relative",
      newBabyName1: "",
      newBabyName2: "",
      newBabyName3: "",
      selectedBabyNames: "",
      errors: {},
      warnings: {},
      ready: true,
    }

  }

  componentDidMount() {
    const URLfragments = this.URLfragments()
    this.api("auto-login", {email: URLfragments.email ? URLfragments.email : this.state.email}, false)
  }

  /* get optional user language, email, and name from URL when component mounts */
  URLfragments() {
    // get current URL path
    let pathname = window.location.pathname
    let urlFragments = pathname.split("/")

    // this filter catches any URL fragment that strictly matches "fr" or "en"
    // eg, www.yvesgurcan.com/someFolder/babyApp/fr will return "fr"
    let language = urlFragments.filter(urlFragment => {
      return urlFragment === "en" || urlFragment === "fr"
    })[0]

    // this filter catches any URL fragment that is a valid email address
    // eg, www.yvesgurcan.com/someFolder/babyApp/myemail@test.com will return "myemail@test.com"
    let email = urlFragments.filter(urlFragment => {
      return /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/.test(urlFragment)
    })[0]

    // this filter catches the last URL fragment (because the previous ones probably are the actual URL path) that is not empty, "en", "fr", or a valid email address.
    // eg, www.yvesgurcan.com/someFolder/babyApp/Yves will return "Yves"
    let name = decodeURI(urlFragments.filter(urlFragment => {
      return urlFragment !== "" && urlFragment !== "en" && urlFragment !== "fr" && !/^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/.test(urlFragment)
    })).split(",")
    let resultCount = name.length > 1 ? name.length : 1
    name = resultCount !== 1 ? name[resultCount-1] : ""

    // the above filters are cumulative
    // eg, www.yvesgurcan.com/someFolder/babyApp/en/Richard/useremail@test.net will return {language: "en", name: "Richard", email: "useremail@test.net"}

    return {
      language: language,
      email: email,
      name: name,
    }
  }

  /* used on Flags component */
  switchLanguage(language) {
    this.setState({language: language})
  }
  submitLanguageShift() {
    this.api(
      "switchLanguage",
      {
        email: this.state.email,
        language: this.state.language,
      },
      false
    )
  }

  // used on Flags page
  goToLogin() {
    this.setState({currentPage: "login"})
  }

  // used on Announcement page
  goToNewProfilePage() {
    this.api(
      "goToCreateProfile",
      {email: this.state.email},
      false
    )
    this.setState({currentPage: "createProfile", refresh: ++this.state.refresh})
  }

  // used on Login page
  login() {
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
        {email: this.state.email, password: this.state.password, language: this.state.language}
      )
      this.getBabyNames() 
    }
  }

  // used in the Header 
  logout() {
    this.setState({currentPage: "login"})
    this.api(
      "logout",
      {email: this.state.email},
      false
    )
    this.setState({authenticated: false})   
  }

  // used on the CreateProfile page
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

  // used on the ChooseBabyNames and ShowBabyNameStats pages
  getBabyNames() {
    this.api(
      "showBabyNames",
      {email: this.state.email},
      true,
    )
  }

  /* used on the ChooseBabyNames */
  selectBabyName(input) {
    let selectedBabyNames = this.state.selectedBabyNames
    if (selectedBabyNames.indexOf(input.target.name) === -1) {
      selectedBabyNames += input.target.name + ","
    }
    else {
      selectedBabyNames = selectedBabyNames.replace(input.target.name + ",","")
    }
    this.setState({selectedBabyNames: selectedBabyNames})
  }
  overrideBabyNameWarning() {
    this.submitBabyNames(true)
  }
  submitBabyNames(overrideBabyNameWarning) {
    overrideBabyNameWarning = overrideBabyNameWarning === true ? true : false
    let warning = false
    let warningMessages = this.state.warnings
    let error = false
    let errorMessages = this.state.errors
    
    // handle vote errors for existing names
    let selectedBabyNames = this.state.selectedBabyNames.split(",")
    if (selectedBabyNames.length > 5) {
      errorMessages["selectedBabyNames"] = "Please do not select more than 5 names."
      error = true
    }
    else {
      errorMessages["selectedBabyNames"] = ""
    }

    // handle new name errors
    if (/[^A-Za-z-]/.test(this.state.newBabyName1) && this.state.newBabyName1 !== "") {
      errorMessages["newBabyName1"] = "Please enter a valid name."
      error = true
    }
    else if (String(this.state.babyNameList).indexOf(this.state.newBabyName1) > -1) {
      errorMessages["newBabyName1"] = "This name has already been submitted."
    }
    else {
      errorMessages["newBabyName1"] = ""
    }
    if (/[^A-Za-z-]/.test(this.state.newBabyName2) && this.state.newBabyName2 !== "") {
      errorMessages["newBabyName2"] = "Please enter a valid name."
      error = true
    }
    else if (String(this.state.babyNameList).indexOf(this.state.newBabyName1) > -1) {
      errorMessages["newBabyName2"] = "This name has already been submitted."
    }
    else {
      errorMessages["newBabyName2"] = ""
    }
    if (/[^A-Za-z-]/.test(this.state.newBabyName3) && this.state.newBabyName3 !== "") {
      errorMessages["newBabyName3"] = "Please enter a valid name."
      error = true
    }
    else if (String(this.state.babyNameList).indexOf(this.state.newBabyName1) > -1) {
      errorMessages["newBabyName3"] = "This name has already been submitted."
    }
    else {
      errorMessages["newBabyName3"] = ""
    }

    let submit = ""
    // handle warnings for selected baby names
    if ((!overrideBabyNameWarning || error) && selectedBabyNames.length < 5) {
      submit = !error ? "Are you sure you want to continue? Click on submit again to confirm." : ""
      warningMessages["selectedBabyNames"] = "You can select up to 5 names. " + submit
      warning = true
    }
    else {
      warningMessages["selectedBabyNames"] = ""
    }

    // handle warnings for new baby names
    if ((!overrideBabyNameWarning || error) && (this.state.newBabyName1 === "" || this.state.newBabyName2 === "" || this.state.newBabyName3 === "")) {
      submit = !error ? "Are you sure you want to continue? Click on submit again to confirm." : ""
      warningMessages["newBabyNames"] = "You can add up to 3 names to the list. " + submit
      warning = true
    }
    else {
      warningMessages["newBabyNames"] = "" 
    }

    if (error || (!overrideBabyNameWarning && warning)) {
      this.setState({errors: errorMessages, warning: warningMessages, confirmBabyNamesSubmit: error ? false : true})
    }
    else {
      this.api(
        "addBabyNames",
        {
          newBabyName1: this.state.newBabyName1,
          newBabyName2: this.state.newBabyName2,
          newBabyName3: this.state.newBabyName3,
          selectedBabyNames: this.state.selectedBabyNames,
          gender: this.state.gender,
          country: this.state.country,
          relationship: this.state.relationship,
        }
        ,
        false
      )
    }
  }

  // used by forms
  storeData(input) {
    let state = this.state
    // console.log(input.target)
    if (input.target.type === "checkbox") {
      state[input.target.name] = input.target.checked
    }
    else {
      let value = input.target.value
      if (input.target.name.indexOf("newBabyName") > -1) {
        value = value.charAt(0).toUpperCase() + value.slice(1)
      }
      state[input.target.name] = value
    }
    this.setState(state)
  }

  // API calls
  api(request, data, spinner = true) {
    // validate request
    if (typeof data === 'object' && typeof request === "string") {
        if (request.length && typeof data === "object") {
        data.request = request
        console.log("Request sent.","\nData: ",data)
        // trigger spinner
        if (spinner) {
          this.setState({ready:false})
        }
        // clear errors
        this.setState({errors: {}})
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
              else if (typeof response.birthday !== "undefined" && response.birthday !== "null") {
                // TODO
              }
              else if (typeof response.babyNames !== "undefined") {
                let babyNameList = response.babyNames.map(babyNameData => {
                  return babyNameData.name
                })
                this.setState({babyNameList: babyNameList})
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

  render() {
    let showHeader = true
    let showFooter = true
    let currentPage = null
    let headerMessage = ""
    // chooses appropriate page to show
    switch (this.state.currentPage) {
      default:
        showHeader = false
        showFooter = false
        currentPage = (
          <Flags
            mainPage
            language={this.state.language}
            switchLanguage={this.switchLanguage}
            goToLogin={this.goToLogin}
          />
        )
        break
      case "login":
        currentPage = (
          <Login
            language={this.state.language}
            email={this.state.email}
            password={this.state.password}
            storeData={this.storeData}
            errors={this.state.errors}
            login={this.login}
          />
        )
        break
      case "announcement":
        currentPage = (
          <Announcement
            language={this.state.language}
            goToNewProfilePage={this.goToNewProfilePage} />
        )
        break
      case "createProfile":
        currentPage = (
          <CreateProfile
            language={this.state.language}
            gender={this.state.gender}
            name={this.state.name}
            email={this.state.email}
            day={this.state.day}
            month={this.state.month}
            year={this.state.year}
            hideBirthday={this.state.hideBirthday}
            age-category={this.state["age-category"]}
            country={this.state.country}
            relationship={this.state.relationship}
            storeData={this.storeData}
            errors={this.state.errors}
            submitProfile={this.submitProfile}
          />
        )
        break
      case "chooseBabyNames":
        currentPage = (
          <ChooseBabyNames
            language={this.state.language}
            email={this.state.email}
            getBabyNames={this.getBabyNames}
            babyNames={this.state.babyNames}
            newBabyName1={this.state.newBabyName1}
            newBabyName2={this.state.newBabyName2}
            newBabyName3={this.state.newBabyName3}
            selectBabyName={this.selectBabyName}
            selectedBabyNames={this.state.selectedBabyNames}
            storeData={this.storeData}
            warnings={this.state.warnings}
            errors={this.state.errors}
            confirmBabyNamesSubmit={this.state.confirmBabyNamesSubmit}
            overrideBabyNameWarning={this.overrideBabyNameWarning}
            submitBabyNames={this.submitBabyNames}
          />
        )
        break
      case "showBabyNameStats":
        currentPage = (
          <ShowBabyNameStats
            language={this.state.language}
            babyNames={this.state.babyNames}
          />
        )
        break
    }

    // spinner
    if (!this.state.ready) {
      currentPage = (
        <Col className="text-center">
          <div className="spacer-top"/>
          <div className="spacer-top"/>
            <i className="fa fa-spinner fa-spin" style={{fontSize: "50px"}}/>
         <div className="spacer-bottom"/>
         <div className="spacer-bottom"/>
        </Col>
      )
    }

    return (
      <Grid>
        <Col
        className="fill"
          lg={6} lgOffset={3}
          md={8} mdOffset={2}
          sm={10} smOffset={1}
        >
          {/* header */}
          {!showHeader ? null :
            <Header
              authenticated={this.state.authenticated}
              logout={this.logout}
              headerMessage={headerMessage}
            />
          }
          {/* API error feedback */}
          {!this.state.errorMessage ? null :
            <Alert bsStyle="danger">{this.state.errorMessage}</Alert>
          }
          {/* page main content */}
          
        <div  className="content">
          {currentPage}
        </div>
          {/* footer */}
          {!showFooter ? null :
            <Footer
              switchLanguage={this.switchLanguage}
              submitLanguageShift={this.submitLanguageShift}
            />
          }
        </Col>
      </Grid>
    )
  }
}

export default PageSelector