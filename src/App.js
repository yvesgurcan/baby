import React, {Component} from 'react';
import {Button, FormControl, Col, Grid, PageHeader, Clearfix, Alert, Row, Checkbox} from 'react-bootstrap'
import $ from 'jquery'
import './App.css';

/* default state */

const currentYear = new Date().getFullYear()

// all these values can be modified at will, the App should handle gracefully any unexpected or weird value
const defaultState = {
  language: "fr",
  languageChoices: ["en","fr"],
  gender: "M",
  genderChoices: ["F","M"],
  day: 1,
  month: 1,
  year: 1960,
  minYear: Math.floor((currentYear - 80) / 5) * 5,
  maxYear: Math.ceil((currentYear - 15) / 5) * 5,
  hideBirthday: false,
  "age-category": "50-74",
  ageCategoryChoices: ["24-","25-49","50-74","75+"],
  country: "usa",
  countryChoices: ["usa","france"],
  relationship: "relative",
  relationshipChoices: ["relative","friend","coworker"],
  maxNewBabyNames: 3,
  maxSelectableBabyNames: 5,
  minBabyNameSize: 4,
  maxBabyNameSize: 18,
}

const defaultBabyNameNumbers = {}

/* spinners */

class LocalSpinner extends Component {
  render () {
    return (
      <Col className="text-center">
          <i className="fa fa-spinner fa-spin" style={{fontSize: "50px"}}/>
      </Col>
    )
  }
}

class PageSpinner extends Component {
  render () {
    return (
      <Col className="text-center">
        <div className="spacer-top"/>
        <div className="spacer-top"/>
          <i className="fa fa-spinner fa-spin" style={{fontSize: "50px"}}/>
        <div className="spacer-bottom"/>
        <div className="spacer-bottom"/>
      </Col>
    )
  }
}

/* SVGs */
/* flags */

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
        <rect width="42" height="2" fill="crimson"></rect>
        <rect width="42" height="2" y="4" fill="crimson"></rect>
        <rect width="42" height="2" y="8" fill="crimson"></rect>
        <rect width="42" height="2" y="12" fill="crimson"></rect>
        <rect width="42" height="2" y="16" fill="crimson"></rect>
        <rect width="42" height="2" y="20" fill="crimson"></rect>
        <rect width="42" height="2" y="24" fill="crimson"></rect>
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

/* mushrooms */

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
  constructor(props) {
    super(props)

    this.translation = this.translation.bind(this)
  }
  translation() {
    return {
      fr: {
        welcome: "Bienvenue !",
        announcement: "Annonce",
        createProfile: "Profil",
        chooseBabyNames: "Prénoms de bébé",
        logout: "Se déconnecter",
      },
      en: {
        welcome: "Welcome!",
        announcement: "Announcement",
        createProfile: "Profile",
        chooseBabyNames: "Baby Names",
        logout: "Logout",
      }
    }
  }
  render() {
    let showNav = this.props.currentPage !== null && this.props.currentPage !== "login"
    let translation = this.translation()[this.props.language]
    return (
      <div>
        <Col xs={2} style={{marginTop: "5px", marginLeft: "-25px",padding: "0px"}} >
            <GreenMushroom header/>
        </Col>
        {this.props.currentPage !== "login"
        ? null
        :
        <Col xs={8} style={{marginTop: "10px"}} className="text-center">
          <div className="override-default">
            <PageHeader>{translation.welcome}</PageHeader>
          </div>
        </Col>
        }
        {!showNav ? null :
        <Col xs={10}  style={{marginTop: "22.5px", paddingRight: "0px"}} className="text-right">
          <span><a id="announcement" className="menu-link" onClick={this.props.switchCurrentPage}>{translation.announcement}</a> | </span>
          {
            ((!this.props.firstLogin || this.props.profileComplete || this.props.currentPage === "createProfile") || this.props.admin === true)
              ? <span><a id="createProfile" className="menu-link" onClick={this.props.switchCurrentPage}>{translation.createProfile}</a> | </span>
              : null
          }
          {
            ((this.props.profileComplete && !this.props.voted) && this.props.admin !== true)
            ? <span><a id="chooseBabyNames" className="menu-link" onClick={this.props.switchCurrentPage}>{translation.chooseBabyNames}</a> | </span>
            : null
          }
          {
            (this.props.admin === true)
            ? <span><a id="chooseBabyNames" className="menu-link" onClick={this.props.switchCurrentPage}>Votes</a> | </span>
            : null
          }
          {
            ((this.props.profileComplete && this.props.voted) || this.props.admin === true)
            ? <span><a id="showBabyNameStats" className="menu-link" onClick={this.props.switchCurrentPage}>{translation.chooseBabyNames}</a> | </span>
            : null
          }
          <span><a className="menu-link" onClick={this.props.logout}>{translation.logout}</a></span>
        </Col>
        }
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
        loginSwitchLanguage={this.props.loginSwitchLanguage}
      />
    )
  }
}

/* page main content */

class ShowBabyNameStats extends Component {
  translation() {
    return {
      fr: {
        F: "Femmes",
        M: "Hommes",
        allGender: "Tous",
        france: "France",
        usa: "Etats-Unis",
        allCountries: "Tous",
        relative: "Famille",
        friend: "Amis",
        coworker: "Collègues",
        allRelationships: "Tous",
        "24-": "24-",
        "25-49": "25-49 ans",
        "50-74": "50-74 ans",
        "75+": "74+",
        allAgeCategories: "Tous",
      },
      en: {
        F: "Women",
        M: "Men",
        allGender: "All",
        france: "France",
        usa: "United States",
        allCountries: "All",
        relative: "Relatives",
        friend: "Friends",
        coworker: "Coworkers",
        allRelationships: "All",
        "24-": "24-",
        "25-49": "25-49",
        "50-74": "50-74",
        "75+": "74+",
        allAgeCategories: "All",

      },
    }
  }
  render() {

    if (!this.props.backgroundQueryReady) {
      return <LocalSpinner/>
    }
    else if (this.props.babyNames.length === 0) {
      return null
    }

    let translation = this.translation()[this.props.language]

    let genders = this.props.genderChoices.map(gender => {
      return (
        <Col key={gender} xs={12} sm={Number(Number(12 / this.props.genderChoices.length).toFixed(0))}>
          <Button
            id="selectedGender"
            name={gender}
            bsSize="large"
            bsStyle="warning"
            block
            active={this.props.selectedGender === gender}
            className="margin-bottom"
            onClick={this.props.selectParameter}
          >
            {translation[gender]}
          </Button>
        </Col>
      )
    })

    let countries = this.props.countryChoices.map(country => {
      return (
        <Col key={country} xs={12} sm={Number(Number(12 / this.props.countryChoices.length).toFixed(0))}>
          <Button
            id="selectedCountry"
            name={country}
            bsSize="large"
            bsStyle="warning"
            block
            active={this.props.selectedCountry === country}
            className="margin-bottom"
            onClick={this.props.selectParameter}
          >
            {translation[country]}
          </Button>
        </Col>
      )
    })

    let relationships = this.props.relationshipChoices.map(relationship => {
      return (
        <Col key={relationship} xs={12} sm={Number(Number(12 / this.props.relationshipChoices.length).toFixed(0))}>
          <Button
            id="selectedRelationship"
            name={relationship}
            bsSize="large"
            bsStyle="warning"
            block
            active={this.props.selectedRelationship === relationship}
            className="margin-bottom"
            onClick={this.props.selectParameter}
          >
            {translation[relationship]}
          </Button>
        </Col>
      )
    })

    let ageCategories = this.props.ageCategoryChoices.map(ageCategory => {
      let modifier = ageCategory === "25-49" || ageCategory === "50-74" ? 1 : 0
      return (
        <Col key={ageCategory} xs={12} sm={Number(Number(12 / this.props.ageCategoryChoices.length).toFixed(0)) + Number(modifier)}>
          <Button
            id="selectedAgeCategory"
            name={ageCategory}
            bsSize="large"
            bsStyle="warning"
            block
            className="margin-bottom"
            active={this.props.selectedAgeCategory === ageCategory}
            onClick={this.props.selectParameter}
          >
            {translation[ageCategory]}
          </Button>
        </Col>
      )
    })

    let totalVotes = 0
    let babyNameVotes = []
    for (var i = 0; i < this.props.babyNames.length; i++) {
      let babyName = this.props.babyNames[i]
      let selectedGender = babyName[this.props.selectedGender] ? Number(babyName[this.props.selectedGender]) : 0
      let selectedAgeCategory = babyName[this.props.selectedAgeCategory] ? Number(babyName[this.props.selectedAgeCategory]) : 0
      let selectedRelationship = babyName[this.props.selectedRelationship] ? Number(babyName[this.props.selectedRelationship]) : 0
      let selectedCountry = babyName[this.props.selectedCountry] ? Number(babyName[this.props.selectedCountry]) : 0

      let babyNameTotal = Number(selectedGender) + Number(selectedAgeCategory) + Number(selectedRelationship) + Number(selectedCountry)
      babyNameVotes.push(babyNameTotal)
      totalVotes = Number(totalVotes) + Number(babyNameTotal)
      /*console.log(
        "name",babyName.name,
        "total",babyNameTotal,
        "selectedGender",selectedGender,
        "selectedAgeCategory",selectedAgeCategory,
        "selectedRelationship",selectedRelationship,
        "selectedCountry",selectedCountry,
      )*/
    }
    let maxPopularity = babyNameVotes.reduce(function(a, b) {
        return Math.max(a, b);
    })
    let minPopularity = babyNameVotes.reduce(function(a, b) {
        return Math.min(a, b);
    })


    let sortedBabyNames = this.props.babyNames.map((babyName, index) => {
      let popularityRatio = (babyNameVotes[index] - minPopularity) / (maxPopularity - minPopularity)
      let paddingVertical = (popularityRatio * (this.props.maxBabyNameSize - this.props.minBabyNameSize)) + this.props.minBabyNameSize
      let paddingHorizontal = ((popularityRatio * (this.props.maxBabyNameSize - this.props.minBabyNameSize)) + this.props.minBabyNameSize) * 3
      console.log(
        "name:",babyName.name,
        "votes:",babyNameVotes[index],
        "popularityRatio:",popularityRatio,
        /*
        "paddingVertical:",paddingVertical,
        "paddingHorizontal:",paddingHorizontal
        */
      )
      return (
          <Button
            style={{
              paddingTop: paddingVertical + "px",
              paddingBottom: paddingVertical + "px",
              paddingLeft: paddingHorizontal + "px",
              paddingRight: paddingHorizontal + "px",
              lineHeight: "1",
            }}
            key={babyName.name}
            bsSize="large"
            bsStyle="success"
            className="margin-bottom margin-right"
          >
            {babyName.name}
            <small><small><small>
              <br/>{babyNameVotes[index]} votes
            </small></small></small>
          </Button>
      )
    })
    console.log("-----")
    return (
      <div>
          {countries}
        <Clearfix/>
          {relationships}
        <Clearfix/>
          {genders}
        <Clearfix/>
          {ageCategories}
        <Clearfix/>
        <hr/>
        <Col>
        {sortedBabyNames}
        </Col>
      </div>
    )
  }
}

class ChooseBabyNames extends Component {
  translation() {
    return {
      fr: {
          deleteButton: "Supprimer les noms"
        },
      en: {
        deleteButton: "Delete Names"
      }
    }
  }
  render() {

    let translation = this.translation()[this.props.language]

    let babyNames = null
    if (!this.props.backgroundQueryReady) {
      babyNames = <LocalSpinner/>
    }
    else if (this.props.babyNames) {
      babyNames = this.props.babyNames.map(babyName => {
        let selected = false
        if (this.props.selectedBabyNames) {
          this.props.selectedBabyNames.split(",").map(selectedBabyName => {
            if (selectedBabyName === babyName.name) {
              selected = true
            }
            return null
          })
        }
        return (
          <Button
            key={babyName.name}
            name={babyName.name}
            bsSize="large"
            bsStyle="success"
            className="margin-bottom margin-right"
            active={selected}
            onClick={this.props.selectBabyName}
            disabled={this.props.voted && this.props.admin !== true ? true : false}
          >
            {babyName.name}
          </Button>
        )
      })
    }
    let newBabyNameInput = []
    const numberOfCols =
      this.props.maxNewBabyNames % 3 === 0 ? 4 : 6
    for (var i = 1; i <= this.props.maxNewBabyNames; i++) {
      newBabyNameInput.push(
          <Col key={"newBabyName" + i} sm={numberOfCols}>
            <FormControl
              name={"newBabyName" + i}
              value={this.props.newBabyNames["newBabyName" + i]}
              bsSize="large"
              className="margin-bottom"
              onChange={this.props.storeData}
              disabled={this.props.voted && this.props.admin !== true ? true : false}
            />
            {
              !this.props.errors["newBabyName" + i] ?
              null :
              <Alert
              bsStyle="danger">
              {this.props.errors["newBabyName" + i]}
              </Alert>
            }
          </Col>
      )
    }
    return (
      <div>
        <Col sm={12}>
          <Col sm={12}>
            {babyNames}
          </Col>
          <Clearfix/>
          {
            !this.props.errors.selectedBabyNames ?
            null :
            <Alert
              bsStyle="danger"
            >
              {this.props.errors.selectedBabyNames}
            </Alert>
          }
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
        {this.props.maxNewBabyNames > 0 ? <hr/> : null}
        <Col sm={12}>
          {newBabyNameInput}
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
        {this.props.voted && this.props.admin !== true ? null :
        <Col sm={12}>
          <Button
            block
            bsSize="large"
            bsStyle="primary"
            className="margin-bottom"
            onClick={this.props.confirmBabyNamesSubmit ? this.props.overrideBabyNameWarning: this.props.submitBabyNames}
          >Submit Names</Button>
        </Col>
        }
        {this.props.admin !== true ? null :
        <Col sm={12}>
          <Button
            block
            bsSize="large"
            bsStyle="danger"
            className="margin-bottom"
            onClick={this.props.deleteBabyNames}
          >{translation.deleteButton}</Button>
        </Col>
        }
    </div>
    )
  }
}

class CreateProfile extends Component {
  translation() {
    return {
      fr: {
        title: "Crééez votre profile",
        formLabel: "Veuillez créer votre profil. Cela ne prendra que quelques secondes.",
        gender: "Sexe",
        firstname: "Prénom",
        email: "E-mail",
        birthday: "Anniversaire",
        birthdayLabel: {M: "Quand êtes-vous né ?", F:"Quand êtes-vous née ?"},
        hideBirthday: "Je ne souhaite pas révéler la date de mon anniversaire.",
        ageCategory: "Tranche d'âge",
        ageCategoryLabel: "Pourriez-vous indiquer à quelle tranche d'âge vous appartenez ?",
        country: "Pays",
        countryLabel: "Dans quel pays résidez-vous ?",
        relationship: "Relation",
        relationshipLabel: "Quel est votre lien avec Yves et Ashlee ?",
        createProfile: "Créer votre profil",
        deleteProfileButton: "Supprimer le profil",
        adminUpdateProfile: "Mettre le profil à jour",
        adminNewProfile: "Créer un nouveau profil",
      },
      en: {
        title: "Create your profile",
        formLabel: "Please take a few seconds to create your profile.",
        gender: "Gender",
        firstname: "Firstname",
        email: "Email",
        birthday: "Birthday",
        birthdayLabel:  {M: "When were you born?", F:"When were you born?"},
        hideBirthday: "I do not want to disclose my birthday.",
        ageCategory: "Age Interval",
        ageCategoryLabel: "Please let us know which age category you belong to.",
        country: "Country",
        countryLabel: "Where do you live?",
        relationship: "Relationship",
        relationshipLabel: "How do you know Ashlee and Yves?",
        createProfile: "Create Profile",
        deleteProfileButton: "Delete Profile",
        adminUpdateProfile: "Update Profile",
        adminNewProfile: "Create New Profile",
      },
    }
  }
  autoSubmitForm(input) {
    if(input.key === "Enter") {
      this.props.submitProfile()
    }
  }
  gender() {
    const genderArray = ["F","M"]
    const gender = {
      fr: ["F","Femme","H","Homme"],
      en: ["F","Female","M","Male"],
    }
    let genderOptionsSmall = genderArray.map((g,i) => {
      return <option key={g} value={g} className="visible-xs">{gender[this.props.language][(i*2)+1]}</option>
    })
    let genderOptionsLarge = genderArray.map((g,i) => {
      return <option key={g} value={g} className="hidden-xs">{gender[this.props.language][(i*2)]}</option>
    })
    return {small: genderOptionsSmall, large: genderOptionsLarge}
  }
  daysOfTheMonth() {
    let days = []
    const totalDays = new Date(this.props.year, this.props.month, 0).getDate()
    // console.log(totalDays)
    for (var i = 1; i <= totalDays; i++) {
      let number = i
      if (this.props.language === "fr") {
        number = i === 1 ? "1er" : i
      }
      days.push(<option  key={i} value={i}>{number}</option>)
    }
    return days
  }
  months() {
    const listOfMonths = {
      fr: ["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],
      en: ["January","February","March","April","May","June","July","August","September","October","November","December"],
    }
    let months = listOfMonths.en.map((month, index) => {
      return <option key={month} value={index+1}>{listOfMonths[this.props.language][index]}</option>
    })
    return months
  }
  years() {
    let years = []
    if (this.props.minYear <= this.props.maxYear) {
      for (var i = this.props.minYear; i <= this.props.maxYear; i++) {
        years.push(<option key={i} value={i}>{i}</option>)
      }
    }
    else {
      for (var x = this.props.minYear; x >= this.props.maxYear; x--) {
        years.push(<option key={x} value={x}>{x}</option>)
      }
    }
    return years
  }
  ageCategories() {
    const categories = {
      fr: [{id:"24-",name:"24 et moins"},{name:"entre 25 ans et 49 ans",id:"25-49"},{id:"50-74",name:"entre 50 et 74 ans"},{id:"75+",name:"75 ans et plus"}],
      en: [{id:"24-",name:"24 or younger"},{id:"25-49",name:"between 25 and 49"},{id:"50-74",name:"between 50 and 74"},{id:"75+",name:"75 or older"}],
    }
    let ageCategories = this.props.ageCategoryChoices.map((category,index) => {
      if (categories[this.props.language][index]) {
        return <option key={category} value={category}>{categories[this.props.language][index].name}</option>
      }
      else {
        return null
      }
    })
    return ageCategories
  }
  residences() {
    const countries = {
      fr: {"france":"France","usa":"Etats-Unis"},
      en: {"france":"France","usa":"United States"},
    }
    let residence = this.props.countryChoices.map((country) => {
      return <option key={country} value={country}>{countries[this.props.language][country]}</option>
    })
    return residence
  }
  relationships() {
    const relations = {
      fr: {"relative":"Famille","friend":"Ami","coworker":"Collègue de travail"},
      en: {"relative":"Relative","friend":"Friend","coworker":"Coworker"},
    }
    let relationships = this.props.relationshipChoices.map((relation) => {
      return <option key={relation} value={relation}>{relations[this.props.language][relation]}</option>
    })
    return relationships
  }
  render() {
    let translation = this.translation()[this.props.language]
    // reverse order of day and month depending on language
    let box1, box2
    let dayDropdown = (
            <Col sm={3}>
              <FormControl
                name="day"
                value={this.props.day}
                componentClass="select"
                bsSize="large"
                className="margin-bottom"
                onChange={this.props.storeData}
                disabled={this.props.profileComplete && this.props.admin !== true ? true : false}
              >
                {this.daysOfTheMonth()}
              </FormControl>
            </Col>
    )
    let monthDropdown = (
            <Col sm={4}>
              <FormControl
                name="month"
                value={this.props.month}
                componentClass="select"
                bsSize="large"
                className="margin-bottom"
                onChange={this.props.storeData}
                disabled={this.props.profileComplete && this.props.admin !== true ? true : false}
              >
                {this.months()}
              </FormControl>
            </Col>
    )
    if (this.props.language === "fr") {
      box1 = dayDropdown
      box2 = monthDropdown
    }
    else {
      box1 = monthDropdown
      box2 = dayDropdown
    }

    let dropdownListOfProfiles = null
    if (this.props.admin === true && this.props.backgroundQueryReady && this.props.userProfiles) {
      // console.log(this.props.userProfiles)
      dropdownListOfProfiles = this.props.userProfiles.map((user, index) => {
        // console.log(user)
        return <option key={user.email + index} value={index}>{user.name} ({user.email})</option>
      })
    }

    return (
      <div>
        <div className="spacer-top-large"/>
        {
          this.props.admin !== true ? null
          : !this.props.backgroundQueryReady ? <LocalSpinner/> :
          <Col>
            <Col sm={2} xs={12}>
              <label style={{paddingTop: "12.5px"}}>User Profile: </label>
            </Col>
            <Col sm={10} xs={12}>
              <FormControl
                name="profiles"
                value={this.props.selectedProfile}
                componentClass="select"
                bsSize="large"
                className="margin-bottom"
                onChange={this.props.switchProfile}
                /*onKeyPress={this.autoSubmitForm}*/
                disabled={this.props.admin !== true ? true : false}
              >
              {dropdownListOfProfiles}
              </FormControl>
            </Col>
            <Clearfix/>
            <hr/>
          </Col>
        }
        {
          this.props.admin !== true ? null :
          <Col>
            <Col sm={4} xs={12}>
              <label>Created:&nbsp;</label>{this.props.created}
            </Col>
            <Col sm={5} xs={12}>
              <label>Last login:&nbsp;</label>{this.props.lastLogin} {this.props.lastSession && this.props.lastSession !== " " ? <span>({this.props.lastSession.replace("minutes","min")})</span> : null}
            </Col>
            <Col sm={3} xs={12}>
              <Checkbox
                  inline
                  name="userAuthenticated"
                  checked={this.props.userAuthenticated}
                  bsSize="large"
                  onChange={this.props.storeData}
                  onKeyPress={this.autoSubmitForm}
                  disabled={this.props.admin !== true ? true : false}
                />
              <label>Logged in</label>
            </Col>
            <Clearfix/>
            <Col sm={4} xs={12}>
              <label>Page:&nbsp;</label>{this.props.userCurrentPage}
            </Col>
            <Col sm={2} xs={12}>
              <Checkbox
                  inline
                  name="firstLogin"
                  checked={this.props.firstLogin}
                  bsSize="large"
                  onChange={this.props.storeData}
                  onKeyPress={this.autoSubmitForm}
                  disabled={this.props.admin !== true ? true : false}
                />
              <label>1st login</label>
            </Col>
            <Col sm={3} xs={12}>
              <Checkbox
                  inline
                  name="profileComplete"
                  checked={this.props.profileComplete}
                  bsSize="large"
                  onChange={this.props.storeData}
                  onKeyPress={this.autoSubmitForm}
                  disabled={this.props.admin !== true ? true : false}
                />
              <label>Profile Complete</label>
            </Col>
            <Col sm={2} xs={12}>
              <Checkbox
                  inline
                  name="voted"
                  checked={this.props.voted}
                  bsSize="large"
                  onChange={this.props.storeData}
                  onKeyPress={this.autoSubmitForm}
                  disabled={this.props.admin !== true ? true : false}
                />
              <label>Voted</label>
            </Col>
            <Col sm={6} xs={12}>
              <label>Suggested Names:&nbsp;</label>{this.props.suggestedBabyNames}
            </Col>
            <Col sm={6} xs={12}>
              <label>Favorite Names:&nbsp;</label>{this.props.babyNameVotes}
            </Col>
            <hr/>
          </Col>
        }
        <Clearfix/>
        <hr/>
        <Col sm={2}>
          <span className="hidden-xs">
            <FormControl
              name="gender"
              value={this.props.gender}
              componentClass="select"
              bsSize="large"
              className="margin-bottom"
              onChange={this.props.storeData}
              onKeyPress={this.autoSubmitForm}
              disabled={this.props.profileComplete && this.props.admin !== true ? true : false}
            >
            {this.gender().large}
            </FormControl>
          </span>
          <span className="visible-xs">
            <FormControl
              name="gender"
              value={this.props.gender}
              componentClass="select"
              bsSize="large"
              className="margin-bottom"
              onChange={this.props.storeData}
              onKeyPress={this.autoSubmitForm}
              disabled={this.props.profileComplete && this.props.admin !== true ? true : false}
            >
            {this.gender().small}
            </FormControl>
          </span>
        </Col>
        <Col sm={5}>
          <FormControl
            name="name"
            value={this.props.name}
            bsSize="large"
            className="margin-bottom"
            onChange={this.props.storeData}
            onKeyPress={this.autoSubmitForm}
            disabled={this.props.profileComplete && this.props.admin !== true ? true : false}
          />
          {
            !this.props.errors.name ?
            null :
            <Alert
            bsStyle="danger">
            {this.props.errors.name[this.props.language]}
            </Alert>
          }
        </Col>
        <Col sm={5}>
          <FormControl
            name="email"
            disabled={this.props.admin !== true ? true : false}
            value={this.props.email ? this.props.email : ""}
            bsSize="large"
            className="margin-bottom"
            onChange={this.props.storeData}
            onKeyPress={this.autoSubmitForm}
          />
        </Col>
        <Row>
          {this.props.hideBirthday ? null :
          <Col sm={11}>
            <Col sm={1}></Col>
            {box1}
            {box2}
            <Col sm={3}>
              <FormControl
                name="year"
                value={this.props.year}
                componentClass="select"
                bsSize="large"
                className="margin-bottom"
                onChange={this.props.storeData}
                onKeyPress={this.autoSubmitForm}
                disabled={this.props.profileComplete && this.props.admin !== true ? true : false}
              >
                {this.years()}
              </FormControl>
            </Col>
          </Col>
          }
          {!this.props.hideBirthday  ? null :
          <Col sm={11}>
            <Col smOffset={3} sm={6}>
              <FormControl
                name="age-category"
                value={this.props["age-category"]}
                componentClass="select"
                bsSize="large"
                className="margin-bottom"
                onChange={this.props.storeData}
                onKeyPress={this.autoSubmitForm}
                disabled={this.props.profileComplete && this.props.admin !== true ? true : false}
              >
                {this.ageCategories()}
              </FormControl>
              </Col>
          </Col>
          }
        </Row>
        <Row className="text-center">
            <Col>
              <label>
                <Checkbox
                  inline
                  name="hideBirthday"
                  checked={this.props.hideBirthday}
                  bsSize="large"
                  className="margin-bottom"
                  onChange={this.props.storeData}
                  onKeyPress={this.autoSubmitForm}
                  disabled={this.props.profileComplete && this.props.admin !== true ? true : false}
                />
                {translation.hideBirthday}
              </label>
            </Col>      
        </Row> 
        <Clearfix/> 
        <Col sm={6}>
          <FormControl
            name="country"
            value={this.props.country}
            componentClass="select"
            bsSize="large"
            className="margin-bottom"
            onChange={this.props.storeData}
            onKeyPress={this.autoSubmitForm}
            disabled={this.props.profileComplete && this.props.admin !== true ? true : false}
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
            onKeyPress={this.autoSubmitForm}
            disabled={this.props.profileComplete && this.props.admin !== true ? true : false}
          >
            {this.relationships()}
          </FormControl>
        </Col>
        {
          this.props.profileComplete && this.props.admin !== true
          ? null
          : 
          <Col sm={12}>
            <Button
              block
              bsSize="large"
              bsStyle="primary"
              className="margin-bottom"
              onClick={this.props.admin === true ? this.props.adminUpdateProfile : this.props.submitProfile}
            >
              {
                this.props.admin === true      
                  ? !this.props.originalEmail || this.props.originalEmail === this.props.email
                    ? translation.adminUpdateProfile
                    : translation.adminNewProfile
                  : translation.createProfile
              }
            </Button>
        </Col>
        }
        {this.props.admin !== true ? null :
        <Col sm={12}>
          <Button
            block
            bsSize="large"
            bsStyle="danger"
            className="margin-bottom"
            onClick={this.props.deleteProfile}
          >{translation.deleteProfileButton}</Button>
        </Col>
        }
        <div className="spacer-bottom-large"/>
        <div className="spacer-bottom-large"/>
      </div>
    )
  }
}

class Announcement extends Component {
  constructor(props) {
    super(props)
    this.translation = this.translation.bind(this)
  }
  translation() {
    return {
      fr: {next: "Wouhou !"},
      en: {next: "Woohoo!"},
    }
  }
  render() {
    let translation = this.translation()[this.props.language]
    return (
      <Col sm={12}>
        <div className="spacer-top"/>
        <svg viewBox="0 -10 570 220">
          <RedMushroom/>
          <GreenMushroom/>
          <OrangeMushroom/>
        </svg>
        {!this.props.firstLogin ? null :
          <Button
            block
            bsSize="large"
            bsStyle="primary"
            onClick={this.props.goToNewProfilePage}
          >{translation.next}</Button>
        }
        <div className="spacer-bottom"/>
        <div className="spacer-bottom"/>
      </Col>
    )
  }
}

class Login extends Component {
  constructor(props) {
    super(props)
    this.autoSubmitForm = this.autoSubmitForm.bind(this)
    this.login = this.login.bind(this)
    this.translation = this.translation.bind(this)
  }
  translation() {
    return {
      fr: {login: "Connexion"},
      en: {login: "Log in"},
    }
  }
  login() {
    this.props.login($("[name=password]").val())
  }
  autoSubmitForm(input) {
    if (input.key === "Enter") {
      this.props.login($("[name=password]").val())
    }
  }
  render() {
    let translation = this.translation()[this.props.language]
    return (
        <Col
          lg={8} lgOffset={2} 
          md={8} mdOffset={2} 
          sm={8} smOffset={2} 
          xs={10} xsOffset={1}
          >
          <div className="spacer-top"/>
          <FormControl
            name="email"
            type="email"
            value={this.props.email ? this.props.email : ""}
            bsSize="large"
            className="margin-bottom"
            onChange={this.props.storeData}
            onKeyPress={this.autoSubmitForm}
          />
          {
            !this.props.errors.email ?
            null :
            <Alert
            bsStyle="danger">
            {this.props.errors.email[this.props.language]}
            </Alert>
          }
          <FormControl
            name="password"
            type="password"
            bsSize="large"
            className="margin-bottom"
            onKeyPress={this.autoSubmitForm}
          />
          {
            !this.props.errors.password ?
            null :
            <Alert
            bsStyle="danger">
            {this.props.errors.password[this.props.language]}
            </Alert>
          }
          <Button
            block
            bsStyle="primary"
            bsSize="large"
            className="margin-bottom"
            onClick={this.login}
          >
            {translation.login}
          </Button>
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
              onClick={this.props.loginSwitchLanguage ? this.props.loginSwitchLanguage : this.props.submitLanguageShift ? this.props.submitLanguageShift : this.props.goToLogin}
            >
              <AmericanFlag mainPage={this.props.mainPage} />
            </span>
            <span
              onMouseOver={this.switchLanguage}
              onClick={this.props.loginSwitchLanguage ? this.props.loginSwitchLanguage : this.props.submitLanguageShift ? this.props.submitLanguageShift : this.props.goToLogin}
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
    this.translation = this.translation.bind(this)
    this.switchLanguage = this.switchLanguage.bind(this)
    this.loginSwitchLanguage = this.loginSwitchLanguage.bind(this)
    this.submitLanguageShift = this.submitLanguageShift.bind(this)
    this.goToLogin = this.goToLogin.bind(this)
    this.goToNewProfilePage = this.goToNewProfilePage.bind(this)
    this.switchCurrentPage = this.switchCurrentPage.bind(this)
    this.setUserInfoMessage = this.setUserInfoMessage.bind(this)
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
    this.submitProfile = this.submitProfile.bind(this)
    this.switchProfile = this.switchProfile.bind(this)
    this.adminUpdateProfile = this.adminUpdateProfile.bind(this)
    this.deleteProfile = this.deleteProfile.bind(this)
    this.getBabyNames = this.getBabyNames.bind(this)
    this.reloadApp = this.reloadApp.bind(this)
    this.selectBabyName = this.selectBabyName.bind(this)
    this.overrideBabyNameWarning = this.overrideBabyNameWarning.bind(this)
    this.submitBabyNames = this.submitBabyNames.bind(this)
    this.deleteBabyNames = this.deleteBabyNames.bind(this)
    this.selectParameter = this.selectParameter.bind(this)
    this.storeData = this.storeData.bind(this)
    this.api = this.api.bind(this)    

    const URLfragments = this.URLfragments()

    // check language in URL
    let language = URLfragments.language 
    if (!language) {
      language = defaultState.languageChoices[0]
      console.log("No supported language was found in the URL. Language was set to '" + language + "' (default language).")
    }

    // built-in start state
    // you should probably not change these values
    // see top of this page to customize the state of the App
    let defaultUserState = defaultState
    defaultUserState.language = language
    defaultUserState.currentPage = URLfragments.language ? "login" : null
    defaultUserState.email = URLfragments.email ? URLfragments.email : null
    defaultUserState.name = URLfragments.name ? URLfragments.name : ""
    defaultUserState.selectedBabyNames = ""
    defaultUserState.babyNames = []
    defaultUserState.genderChoices.push("allGender")
    defaultUserState.ageCategoryChoices.push("allAgeCategories")
    defaultUserState.countryChoices.push("allCountries")
    defaultUserState.relationshipChoices.push("allRelationships")
    defaultUserState.errors = {}
    defaultUserState.warnings =  {}
    defaultUserState.ready = true
    defaultUserState.backgroundQueryReady = true

    // set window title
    document.title = this.translation()[defaultUserState.language].windowTitle

    // check default max number of new baby names
    const arbitraryMaxNewBabyNames = 3

    if (isNaN(defaultState.maxNewBabyNames)) {console.warn("Invalid maxNewBabyNames '" + defaultState.maxNewBabyNames + "' was replaced by fallback '" + arbitraryMaxNewBabyNames + "'.")}

    defaultUserState.maxNewBabyNames =
      !isNaN(defaultState.maxNewBabyNames)
      ? defaultState.maxNewBabyNames
      : arbitraryMaxNewBabyNames

    defaultBabyNameNumbers.defaultUserStateMaxNewBabyNames = defaultUserState.maxNewBabyNames

    // check default max number of selectable baby names
    const arbitraryMaxSelectableBabyNames = 3

    if (isNaN(defaultState.maxNewBabyNames)) {console.log("Invalid maxSelectableBabyNames '" + defaultState.maxSelectableBabyNames + "' was replaced by fallback '" + arbitraryMaxNewBabyNames + "'.")}

    defaultUserState.maxSelectableBabyNames =
      !isNaN(defaultState.maxNewBabyNames)
      ? defaultState.maxSelectableBabyNames
      : arbitraryMaxSelectableBabyNames
    
    defaultBabyNameNumbers.defaultUserStateMaxSelectableBabyNames = defaultUserState.maxSelectableBabyNames

    for (var i = 1; i <= defaultUserState.maxNewBabyNames; i++) {
      defaultUserState["newBabyName" + i] = ""
    }

    this.state = defaultUserState

  }

  /* get optional user language, email, and name from URL when component mounts */
  URLfragments() {
    // get current URL path
    let pathname = window.location.pathname
    let urlFragments = pathname.split("/")

    // this filter catches any URL fragment that strictly matches "fr" or "en"
    // eg, www.yvesgurcan.com/someFolder/babyApp/fr will return "fr"
    let language = urlFragments.filter(urlFragment => {
      return urlFragment !== "" && String(defaultState.languageChoices).indexOf(urlFragment) > -1
    })[0]

    // this filter catches any URL fragment that is a valid email address
    // eg, www.yvesgurcan.com/someFolder/babyApp/myemail@test.com will return "myemail@test.com"
    let email = urlFragments.filter(urlFragment => {
      return /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/.test(urlFragment)
    })[0]

    // this filter catches the last URL fragment (because the previous ones probably are the actual URL path) that is not empty, a language, or a valid email address.
    // eg, www.yvesgurcan.com/someFolder/babyApp/Yves will return "Yves"
    let name = decodeURI(urlFragments.filter(urlFragment => {
      return urlFragment !== "" && String(defaultState.languageChoices).indexOf(urlFragment) > -1 && !/^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/.test(urlFragment)
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

  // try to maintain user session if still authenticated and load baby names silently
  // get email from URL or from the state
  componentDidMount() {
    if (this.state.currentPage === "login" && this.state.email !== null) {
      const URLfragments = this.URLfragments()
      let that = this
      // wait a very small amount of time to receive auto-fill input from the user's browser
      setTimeout(
        function() {
          that.api(
            "auto-login",
            {email: URLfragments.email ? URLfragments.email : that.state.email},
            true,
            false,
            true)
          that.state.email !== "" ? that.getBabyNames() : null
        },
        100)
    }
    // trigge the state check manually
    this.componentDidUpdate()
  }

  // catch any weird change to the state when it changes
  componentDidUpdate(prevProps,prevState) {
    var fallback = null

    // check language
    if (String(defaultState.languageChoices).indexOf(this.state.language) === -1) {
      fallback = defaultState.languageChoices[0]
      this.storeRawData({language: fallback})
      console.warn("Unsupported language '" + this.state.language + "'. Language set to fallback '" + fallback + "'.")
    }

    // check current page is valid
    if (this.state.currentPage !== "login"
    && this.state.currentPage !=="announcement"
    && this.state.currentPage !=="createProfile"
    && this.state.currentPage !=="chooseBabyNames"
    && this.state.currentPage !=="showBabyNameStats"
    && this.state.currentPage !== null) {
      if (this.state.authenticated) {
        fallback = "announcement"
      }
      else {
        fallback = "login"
      }
      console.log(prevState.currentPage,this.state.currentPage)
      this.storeRawData({currentPage: fallback})
      console.warn("Incorrect page '" + this.state.currentPage + "' was replaced by fallback '" + fallback + "'.")
    }

    // check gender
    if (this.state.gender !== "M" && this.state.gender !== "F") {
      fallback = "F"
      this.storeRawData({gender: fallback})
      console.warn("Incorrect gender '" + this.state.gender + "' was replaced by fallback '" + fallback + "'.")
    }

    // check year range
    let minYear = this.state.minYear
    let maxYear = this.state.maxYear
    if (minYear > maxYear) {
      this.storeRawData({minYear: maxYear, maxYear: minYear})
      console.warn("Incorrect year range (min: " + this.state.minYear + ", max: " + this.state.maxYear + ") was reversed.")
      minYear = maxYear
      maxYear = minYear
    }

    // check year
    if (this.state.year > maxYear) {
      fallback = maxYear
      this.storeRawData({year: fallback})
      console.warn("Out of range year '" + this.state.year + "' was replaced by maximum year fallback '" + fallback + "'.")
    }
    else if (this.state.year < minYear) {
      fallback = minYear
      this.storeRawData({year: fallback})
      console.warn("Out of range year '" + this.state.year + "' was replaced by minimum year fallback '" + fallback + "'.")

    }

    // check month
    const month = {"January":1,"February":2,"March":3,"April":4,"May":5,"June":6,"July":7,"August":8,"September":9,"October":10,"November":11,"December":12}
    const monthShort = {"Jan":1,"Feb":2,"Mar":3,"Apr":4,"May":5,"Jun":6,"Jul":7,"Aug":8,"Sep":9,"Oct":10,"Nov":11,"Dec":12}
    if (typeof month[this.props.month] !== "undefined") {
      fallback = month[this.state.month]
      this.storeRawData({month: fallback})
      console.warn("String '" + this.state.month + "' was replaced by numeric '" + fallback + "'.")
    }
    else if (typeof monthShort[this.props.month] !== "undefined") {
      fallback = monthShort[this.state.month]
      this.storeRawData({month: fallback})
      console.warn("String '" + this.state.month + "' was replaced by numeric '" + fallback + "'.")
    }
    else if (isNaN(this.state.month) || this.state.month < 0 || this.state.month > 12) {
      fallback = 1
      this.storeRawData({month: fallback})
      console.warn("Invalid month '" + this.state.month + "' was replaced by fallback '" + fallback + "'.")
    }

    // check day
    let totalDaysInCurrentMonth = new Date(this.state.year, this.state.month, 0).getDate()
    if (isNaN(this.state.day) || this.state.day < 0 || this.state.day > totalDaysInCurrentMonth) {
      fallback = 1
      this.storeRawData({day: fallback})
      console.warn("Invalid day '" + this.state.day + "' was replaced by fallback '" + fallback + "'.")
    }

    // check hideBirthday
    if (this.state.hideBirthday !== true && this.state.hideBirthday !== false) {
      fallback = true
      this.storeRawData({hideBirthday: fallback})
      console.warn("Invalid hideBirthday '" + this.state.hideBirthday + "' was replaced by fallback '" + fallback + "'.")
    }

    // check age-category
    if (this.state.ageCategoryChoices.indexOf(this.state["age-category"]) === -1) {
      fallback = this.state.ageCategoryChoices[0]
      this.storeRawData({"age-category": fallback})
      console.warn("Invalid age-category '" + this.state["age-category"] + "' was replaced by fallback '" + fallback + "'.")
    }

    // check country
    if (this.state.countryChoices.indexOf(this.state.country) === -1) {
      fallback = this.state.countryChoices[0]
      this.storeRawData({country: fallback})
      console.warn("Invalid country '" + this.state.country + "' was replaced by fallback '" + fallback + "'.")
    }

    // check relationship
    if (this.state.relationshipChoices.indexOf(this.state.relationship) === -1) {
      fallback = this.state.relationshipChoices[0]
      this.storeRawData({relationship: fallback})
      console.warn("Invalid relationship '" + this.state.relationship + "' was replaced by fallback '" + fallback + "'.")
    }

    // prevent user to browse beyond login page if not authenticated
    // note: this is not a very secure method, as setting the state of authenticated to true manually would let the user set the state of currentPage to any valid page
    if (!this.state.authenticated && this.state.currentPage !== "login" && this.state.currentPage !== null) {
      this.storeRawData({currentPage: "login"})
    }

    // prevent changes on maxBabyNames
    if (this.state.maxNewBabyNames !== defaultBabyNameNumbers.defaultUserStateMaxNewBabyNames) {
      fallback = defaultBabyNameNumbers.defaultUserStateMaxNewBabyNames
      this.storeRawData({maxNewBabyNames: fallback})
      console.warn("You can not change maxNewBabyNames from '" + fallback + "' to '" + this.state.maxNewBabyNames + "' once the App was mounted.")
    }

    // prevent changes on max SelectableBabyNames
    if (this.state.maxSelectableBabyNames !== defaultBabyNameNumbers.defaultUserStateMaxSelectableBabyNames) {
      fallback = defaultBabyNameNumbers.defaultUserStateMaxSelectableBabyNames
      this.storeRawData({maxSelectableBabyNames: fallback})
      console.warn("You can not change maxSelectableBabyNames from '" + fallback + "' to '" + this.state.maxSelectableBabyNames + "' once the App was mounted.")
    }

  }

  translation() {
    return {
      en: {
        windowTitle: "Ashlee and Yves's surprise"
      },
      fr: {
        windowTitle: "La surprise d'Ashlee et Yves"
      },
    }
  }

  /* used on Flags component */
  switchLanguage(language) {
    this.setState({language: language})
    document.title = this.translation()[this.state.language].windowTitle
  }
  loginSwitchLanguage(input) {
    let language = input.target.id
    if (language === "") {
      language = $(input.target).closest('svg').attr('id')
    }
    this.switchLanguage(language)
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
    let userInfo = {
      en: "Good morning ! / Good evening ! It is nice to have you here. Please enter your email address and the secret password that was communicated to you.",
      fr: "Bonjour ! / Bonsoir ! Heureux de vous avoir parmi nous. Veuillez entre votre adresse email et le mot de passe qui vous a ete communique.",
    }
    this.setUserInfoMessage(userInfo)
  }

  // used on Announcement page
  goToNewProfilePage() {
    this.setState({currentPage: "createProfile",firstLogin: false})
  }

  // used on Header
  switchCurrentPage(input) {
    this.setState({currentPage: input.target.id})
    delete this.state.userInfo
    delete this.state.errorMessage
    if (this.state.admin === true && input.target.id === "createProfile") {
      this.setState({adminEmail: this.state.email})
      if (!this.state.userProfiles) {
        this.api(
          "adminShowProfiles",
          {email: this.state.email},
          "backgroundQuerySpinner"
        )
      }
    }
    else if (typeof this.state.adminEmail !== "undefined") {
      this.setState({email: this.state.adminEmail})
      delete this.state.adminEmail
    }
  }

  // used on any page
  setUserInfoMessage(message) {
    this.setState({userInfo: message})
  }

  // used on Login page
  login(password = "") {
    let error = false
    let errorMessages = this.state.errors
    
    // validates user's email
    if (this.state.email.length === 0) {
      error = true
      errorMessages.email = {}
      errorMessages.email.en = "Please enter your email address."
      errorMessages.email.fr = "Veuillez entre votre adresse email." 
    }
    else if (!/^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/.test(this.state.email)) {
      error = true
      errorMessages.email = {}
      errorMessages.email.en = "Please enter a valid email address."
      errorMessages.email.fr = "Veuillez entre une adresse email valide."         
    }
    else {
      errorMessages.email = ""
    }

    // validates password
    if (password.length === 0) {
      error = true
      errorMessages.password = {}
      errorMessages.password.en = "Please enter the password."
      errorMessages.password.fr = "Veuillez entrer le mot de passe."
    }
    else {
      errorMessages.password = ""
    }

    if (error) {
      this.setState({errors: errorMessages})
    }
    // API call
    else {
      this.api(
        "login",
        {email: this.state.email, password: password, language: this.state.language}
      )
      delete this.state.password
      // silently load baby names
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
    let defaultUserState = defaultState
    defaultUserState.selectedBabyNames = ""
    defaultUserState.errors = {}
    defaultUserState.warnings =  {}
    defaultUserState.ready = true
    defaultUserState.backgroundQueryReady = true
    defaultUserState.authenticated = false
    this.setState(defaultUserState)
    delete this.state.admin
    delete this.state.adminEmail
    delete this.state.originalEmail
    delete this.state.birthday
    delete this.state.babyNameCount
    delete this.state.babyNames
    delete this.state.babyNameList
    delete this.state.selectedGender
    delete this.state.selectedCountry
    delete this.state.selectedAgeCategory
    delete this.state.selectedRelationship
    delete this.state.selectedBabyNames
    delete this.state.userProfiles
    delete this.state.firstLogin
    delete this.state.voted
    delete this.state.profileComplete
    delete this.state.errorType
    delete this.state.stackTrace
    delete this.state.created
    delete this.state.lastLogin
    delete this.state.lastSession
    delete this.state.userAuthenticated
    delete this.state.suggestedBabyNames
  }

  // used on the CreateProfile page
  submitProfile() {
    let error = false
    let errorMessages = this.state.errors

    // validates user's name
    if (this.state.name.length === 0
    || /[^A-Za-zàâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ -]/.test(this.state.name)) {
      error = true
      errorMessages.name = {}
      errorMessages.name.en = "Please enter your full name."
      errorMessages.name.fr = "Veuillez entrer votre prénom et votre nom."
    }
    else {
      errorMessages.name = ""
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
        "completeProfile",
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
      let selectedParameters = {
        selectedGender: this.state.gender,
        selectedCountry: this.state.country,
        // you probably want to calculate the birthday here
        selectedAgeCategory: ageCategory === null ? "allAgeCategories" : ageCategory,
        selectedRelationship: this.state.relationship
      }
      this.setState(selectedParameters)
    }
  }

  adminUpdateProfile() {
    let birthday = "null"
    let ageCategory = "null"
    if (this.state.hideBirthday) {
      birthday = "null"
      ageCategory = this.state["age-category"]
    }
    else {
      birthday = this.state.year + "/" + this.state.month + "/" + this.state.day
      ageCategory = "null"
    }
    this.api(
        "adminCompleteProfile",
        {
          email: this.state.email,
          adminEmail: this.state.adminEmail,
          gender: this.state.gender,
          name: this.state.name,
          birthday: birthday,
          "age-category": ageCategory,
          country: this.state.country,
          relationship: this.state.relationship,
          firstLogin: this.state.firstLogin,
          profileComplete: this.state.profileComplete,
          voted: this.state.voted,
          authenticated: this.state.userAuthenticated,
        }
      )  
  }
  switchProfile(input) {
    let profileNumber = input.target ? input.target.value : input
    let selectedProfile = this.state.userProfiles[profileNumber]
    // do not let the user profile override the current state of the app for the admin
    if (typeof selectedProfile.admin !== "undefined") {delete selectedProfile.admin}
    if (typeof selectedProfile.authenticated !== "undefined") {
      selectedProfile.userAuthenticated = selectedProfile.authenticated
      delete selectedProfile.authenticated
    }
    if (typeof selectedProfile.currentPage !== "undefined") {
      selectedProfile.userCurrentPage = selectedProfile.currentPage
      delete selectedProfile.currentPage
    }
    // parse birthday
    let birthday = selectedProfile.birthday ? selectedProfile.birthday.match(/[0-9]{4}\/[0-9]{1,2}\/[0-9]{1,2}/) : null
    if (birthday) {
      selectedProfile.hideBirthday = false
      birthday = birthday[0]
      selectedProfile.year = birthday.match(/[0-9]{4}/)[0]
      let monthAndDay = birthday.replace(selectedProfile.year + "/","")
      selectedProfile.month = monthAndDay.match(/[0-9]{1,2}\//)[0].replace("/","")
      selectedProfile.day = monthAndDay.match(/\/[0-9]{1,2}/)[0].replace("/","")
    }
    else if (selectedProfile.profileComplete) {
      selectedProfile.birthday = null
      this.setState({
        year: defaultState.year,
        month: defaultState.month,
        day: defaultState.day,
      })
      if (selectedProfile["age-category"] !== null) {
        selectedProfile.hideBirthday = true
      }
    }
    else {
      console.log(defaultState)
      this.setState({
        year: defaultState.year,
        month: defaultState.month,
        day: defaultState.day,
      })
    }
    // if user does not have a name, replace it by an empty string
    if (typeof selectedProfile.name === "undefined") {selectedProfile.name = ""}
    // store the current email address of the user
    // used to signify that admin will create a new user if they change the email address
    this.setState(selectedProfile)
    this.setState({selectedProfile: profileNumber, originalEmail: selectedProfile.email})
  }

  deleteProfile() {
    this.api(
      "adminDeleteUser",
      {
        email: this.state.email,
        adminEmail: this.state.adminEmail
      },
      false
    )
  }

  // used on the ChooseBabyNames and ShowBabyNameStats pages
  getBabyNames() {
    this.api(
      "showBabyNames",
      {email: this.state.email},
      "backgroundQuerySpinner",
    )
  }

  reloadApp() {
    this.api(
      "auto-login",
      {email: this.state.adminEmail ? this.state.adminEmail : this.state.email},
      true,
      true
    )
    this.getBabyNames()
    this.api(
      "adminShowProfiles",
      {email: this.state.adminEmail ? this.state.adminEmail : this.state.email},
      true,
      true
    )
  }

  /* used on the ChooseBabyNames */
  selectBabyName(input) {
    let selectedBabyNames = this.state.selectedBabyNames
    if (typeof selectedBabyNames === "undefined") {
      selectedBabyNames = ""
    }
    if (String(selectedBabyNames).indexOf(input.target.name) === -1) {
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
    
    let selectableNameCount = Math.min(this.state.maxSelectableBabyNames,this.state.babyNameCount)
    let selectedBabyNames = this.state.selectedBabyNames
    selectedBabyNames = selectedBabyNames.substring(0,selectedBabyNames.lastIndexOf(",")).split(",")
    let selectedNameCount = this.state.selectedBabyNames === "" ? 0 : selectedBabyNames.length

    // handle vote errors for existing names
    if (selectedNameCount > selectableNameCount) {
      errorMessages.selectedBabyNames = "Please do not select more than " + selectableNameCount + " names."
      error = true
    }
    else {
      errorMessages.selectedBabyNames = ""
    }

    // handle new name errors
    let emptyNewBabyNames = 0
    for (var i = 1; i <= this.state.maxNewBabyNames; i++) {
      if (this.state["newBabyName" + i] === "") {
        emptyNewBabyNames++
      }
      else if (/[^A-Za-zàâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ-]/.test(this.state["newBabyName" + i])) {
        errorMessages["newBabyName" + i] = "Please enter a valid name."
        error = true
      }
      else if (String(this.state.babyNameList).indexOf(this.state["newBabyName" + i]) > -1) {
        errorMessages["newBabyName" + i] = "This name has already been submitted."
      }
      else {
        errorMessages["newBabyName1" + i] = ""
      }
    }

    let submit = ""
    // handle warnings for selected baby names
    if ((!overrideBabyNameWarning || error) && selectedNameCount < selectableNameCount) {
      
      let nameSelectedMessage =
        selectedNameCount === 0
        ? "You have not selected any name "
        : selectedNameCount === 1
        ? "You have selected only 1 name "
        : "You have selected only " + selectedNameCount + " names ";

      submit = !error ? "Are you sure you want to continue? Click on submit again to confirm." : ""
      warningMessages.selectedBabyNames = nameSelectedMessage + " (max is " + selectableNameCount + " names). " + submit
      warning = true
    }
    else {
      warningMessages.selectedBabyNames = ""
    }

    // handle warnings for new baby names
    if ((!overrideBabyNameWarning || error) && (this.state.newBabyName1 === "" || this.state.newBabyName2 === "" || this.state.newBabyName3 === "")) {
      let newNamesCount = this.state.maxNewBabyNames - emptyNewBabyNames
      let nameEnteredMessage =
        newNamesCount === 0
          ? ""
          : newNamesCount === 1
          ? "You have entered only 1 new name. " 
          : "You have entered only " + newNamesCount + " new names. "


      submit = !error ? "Are you sure you want to continue? Click on submit again to confirm." : ""
      warningMessages.newBabyNames = nameEnteredMessage + "You can add up to " + this.state.maxNewBabyNames + " names to the list. " + submit
      warning = true
    }
    else {
      warningMessages.newBabyNames = "" 
    }

    if (error || (!overrideBabyNameWarning && warning)) {
      this.setState({errors: errorMessages, warnings: warningMessages, confirmBabyNamesSubmit: error ? false : true})
    }
    else {
      var requestObject = {}
      for (var x = 1; x <= this.state.maxNewBabyNames; x++) {
        requestObject["newBabyName" + x] = this.state["newBabyName" + x]
      }
      requestObject.email = this.state.email
      requestObject.newBabyNameCount = this.state.maxNewBabyNames
      requestObject.selectedBabyNames = this.state.selectedBabyNames
      this.api(
        "saveBabyNameVotes",
        requestObject,
      )
    }
  }

  deleteBabyNames() {
    var requestObject = {}
    for (var x = 1; x <= this.state.maxNewBabyNames; x++) {
      requestObject["newBabyName" + x] = this.state["newBabyName" + x]
    }
    requestObject.email = this.state.email
    requestObject.newBabyNameCount = this.state.maxNewBabyNames
    this.api(
      "adminDeleteBabyNames",
      requestObject,
    )
  }

  // used by showBabyNameStats
  selectParameter(input) {
    console.log(input)
    let parameter = {}
    parameter[input.target.id] = input.target.name
    this.setState(parameter)
  }

  // used by forms
  storeData(input) {
    let state = this.state
    if (input.target.type === "checkbox") {
      state[input.target.name] = input.target.checked
    }
    else {
      let value = input.target.value
      // convert value to number
      if (input.target.name === "day" || input.target.name === "month" || input.target.name === "year") {
        value = Number(value)
      }
      // capitalize the first letter of every word
      else if (input.target.name.indexOf("newBabyName") > -1 || input.target.name.indexOf("name") > -1) {
        value = value.replace(/\w\S*/g, function(value){return value.charAt(0).toUpperCase() + value.substr(1).toLowerCase()})
      }
      state[input.target.name] = value
    }
    this.setState(state)
  }

  // used internally
  storeRawData(dataObject) {
    this.setState(dataObject)
  }

  // API calls
  api(request, data, spinner = true, filterOutCurrentPage = false, doNotDeleteUserInfo = false) {
    // validate request
    if (typeof data === 'object' && typeof request === "string") {
        if (request.length && typeof data === "object") {
        data.request = request
        // trigger spinner
        if (spinner === "backgroundQuerySpinner") {
          this.setState({backgroundQueryReady:false})
        }
        else if (spinner) {
          this.setState({ready:false})
        }
        // clear errors
        if (!doNotDeleteUserInfo) {
          this.setState({errors: {}})
          delete this.state.errorMessage
          delete this.state.userInfo
        }
        $.ajax({
          type: "GET",
          url: "https://bu67qviz40.execute-api.us-west-2.amazonaws.com/prod",
          data: data,
          contentType: 'application/json',
          dataType: 'json',
          context: this,
          crossDomain: true,
          beforeSend: function() {
            if (typeof data.password !== "undefined") {
              data.password = data.password.replace(/./g,"*")
            }
            console.log("Request sent.","\nData: ",data)
          },
          success: function(response) {
            if (spinner === "backgroundQuerySpinner") {
              this.setState({backgroundQueryReady:true})
            }
            else if (spinner) {
              this.setState({ready:true})
            }
            if (response != null && typeof response === "object") {
              if (filterOutCurrentPage && typeof response.currentPage !== "undefined") {
                delete response.currentPage
                delete response.userInfo
              }
              // saves response in the state
              this.setState(response)
              // parse baby names into an array (used to check if name has already been submitted when user votes)
              if (typeof response.babyNames !== "undefined") {
                let babyNameList = response.babyNames.map(babyNameData => {
                  return babyNameData.name
                })
                this.setState({babyNameList: babyNameList})
              }
              // refresh baby names after user has voted or admin has deleted names
              if (request === "saveBabyNameVotes" || request === "adminDeleteBabyNames") {
                this.api(
                  "showBabyNames",
                  {email: this.state.email},
                  "backgroundQuerySpinner",
                  false,
                  request === "adminDeleteBabyNames" ? true : false
                )
              }
              // refresh list of profiles after admin has deleted profiles
              if (request === "adminDeleteUser" || request === "adminCompleteProfile") {
                let selectedProfile = 0
                if (request === "adminCompleteProfile") {
                  selectedProfile = this.state.selectedProfile
                }
                this.switchProfile(selectedProfile)

                this.api(
                  "adminShowProfiles",
                  {email: this.state.adminEmail ? this.state.adminEmail : this.state.email},
                  false,
                  false,
                  true
                )
              }
              if (request === "adminShowProfiles") {
                this.switchProfile(this.state.selectedProfile ? this.state.selectedProfile : 0)
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
                  "\nData sent:", data,
                  "\nError message:", response.errorMessage,
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
          },
          error: function() {
            if (spinner === "backgroundQuerySpinner") {
              this.setState({backgroundQueryReady:true})
            }
            else if (spinner) {
              this.setState({ready:true})
            }
            this.setState({errorMessage: "Sorry, an error occurred."})
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

    let currentPage = this.state.currentPage

    // do not let user mess around with the currentPage state
    // do not modify currentPage for the cases below
    if (currentPage === null || currentPage === "login" || currentPage === "announcement" || this.state.admin) {
    }
    // first page seen when user logs in for the first time must be announcenement
    else if (this.state.firstLogin) {
      currentPage = "announcement"
    }
    // user has not created a profile yet
    else if (!this.state.profileComplete && !this.state.voted) {
      currentPage = "createProfile"
    }
    // user has not voted yet
    else if (currentPage === "showBabyNameStats" && this.state.profileComplete && !this.state.voted) {
      currentPage = "chooseBabyNames"
    }
    // user has voted already
    /*else if (currentPage === "chooseBabyNames" && this.state.profileComplete && this.state.voted) {
      currentPage = "showBabyNameStats"
    }*/

    if (this.state.currentPage !== currentPage) {
      console.warn("Access to '" + this.state.currentPage + "' is forbidden. Replaced by '" + currentPage + "'.")
    }
    

    let pageMainContent = null
    let showHeader = true
    let showFooter = true
    // chooses appropriate page to show
    switch (currentPage) {
      default:
        showHeader = false
        showFooter = false
        pageMainContent = (
          <Flags
            mainPage
            language={this.state.language}
            switchLanguage={this.switchLanguage}
            goToLogin={this.goToLogin}
            email={this.state.email}
          />
        )
        break
      case "login":
        pageMainContent = (
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
        pageMainContent = (
          <Announcement
            language={this.state.language}
            goToNewProfilePage={this.goToNewProfilePage}  
            firstLogin={this.state.firstLogin}
          />
        )
        break
      case "createProfile":
        pageMainContent = (
          <CreateProfile
            language={this.state.language}
            gender={this.state.gender}
            name={this.state.name}
            email={this.state.email}
            day={this.state.day}
            month={this.state.month}
            year={this.state.year}
            minYear={this.state.minYear}
            maxYear={this.state.maxYear}
            hideBirthday={this.state.hideBirthday}
            age-category={this.state["age-category"]}
            ageCategoryChoices={this.state.ageCategoryChoices}
            country={this.state.country}
            countryChoices={this.state.countryChoices}
            relationship={this.state.relationship}
            relationshipChoices={this.state.relationshipChoices}
            storeData={this.storeData}
            errors={this.state.errors}
            submitProfile={this.submitProfile}
            adminUpdateProfile={this.adminUpdateProfile}
            switchProfile={this.switchProfile}
            deleteProfile={this.deleteProfile}
            profileComplete={this.state.profileComplete}
            admin={this.state.admin}
            backgroundQueryReady={this.state.backgroundQueryReady}
            userProfiles={this.state.userProfiles}
            // profile editing for the admin
            created={this.state.created}
            firstLogin={this.state.firstLogin}
            lastLogin={this.state.lastLogin}
            lastSession={this.state.lastSession}
            // currentPage={this.state.currentPage}
            voted={this.state.voted}
            originalEmail={this.state.originalEmail}
            userCurrentPage={this.state.userCurrentPage}
            userAuthenticated={this.state.userAuthenticated}
            suggestedBabyNames={this.state.suggestedBabyNames}
            babyNameVotes={this.state.babyNameVotes}
          />
        )
        break
      case "chooseBabyNames":
        var newBabyNames = {}
        for (var i = 1; i <= this.state.maxNewBabyNames; i++) {
          newBabyNames["newBabyName" + i] = this.state["newBabyName" + i]
        }
          pageMainContent = (
            <ChooseBabyNames
              language={this.state.language}
              email={this.state.email}
              babyNames={this.state.babyNames}
              selectBabyName={this.selectBabyName}
              selectedBabyNames={this.state.selectedBabyNames}
              maxNewBabyNames={this.state.maxNewBabyNames}
              newBabyNames={newBabyNames}
              submitBabyNames={this.submitBabyNames}
              confirmBabyNamesSubmit={this.state.confirmBabyNamesSubmit}
              deleteBabyNames={this.deleteBabyNames}
              overrideBabyNameWarning={this.overrideBabyNameWarning}
              storeData={this.storeData}
              warnings={this.state.warnings}
              errors={this.state.errors}
              backgroundQueryReady={this.state.backgroundQueryReady}
              voted={this.state.voted}
              admin={this.state.admin}
            />
          )
        break
      case "showBabyNameStats":
        pageMainContent = (
          <ShowBabyNameStats
            language={this.state.language}
            babyNames={this.state.babyNames}
            languageChoices={this.state.languageChoices}
            genderChoices={this.state.genderChoices}
            ageCategoryChoices={this.state.ageCategoryChoices}
            countryChoices={this.state.countryChoices}
            relationshipChoices={this.state.relationshipChoices}
            minBabyNameSize={this.state.minBabyNameSize}
            maxBabyNameSize={this.state.maxBabyNameSize}
            selectParameter={this.selectParameter}
            selectedGender={this.state.selectedGender}
            selectedCountry={this.state.selectedCountry}
            selectedRelationship={this.state.selectedRelationship}
            selectedAgeCategory={this.state.selectedAgeCategory}
            backgroundQueryReady={this.state.backgroundQueryReady}
          />
        )
        break
    }

    // spinner
    if (!this.state.ready) {
      pageMainContent = <PageSpinner/>
    }

    return (
      <Grid>
        <Col
          lg={8} lgOffset={2}
          md={10} mdOffset={1}
          sm={12}
        >
          {/* header */}
          {!showHeader ? null :
            <Header
              language={this.state.language}
              authenticated={this.state.authenticated}
              currentPage={this.state.currentPage}
              firstLogin={this.state.firstLogin}
              profileComplete={this.state.profileComplete}
              voted={this.state.voted}
              switchCurrentPage={this.switchCurrentPage}
              logout={this.logout}
              admin={this.state.admin}
            />
          }
          {/* reload */}
          {this.state.admin !== true ? null :
            <Alert bsStyle="success" className="menu-link text-center" onClick={this.reloadApp}><a>Reload the App</a></Alert>

          }
          {/* User info message */}
          {!this.state.userInfo ? null :
            <Alert bsStyle="info">{this.state.userInfo[this.state.language]}</Alert>
          }
          {/* API error feedback */}
          {!this.state.errorMessage ? null :
            <Alert bsStyle="danger">
            {
              this.state.errorMessage[this.state.language]
              ? this.state.errorMessage[this.state.language]
              : this.state.errorMessage
            }
            </Alert>
          }
          {/* page main content */}
          
        <div  className="content">
          {pageMainContent}
        </div>
          {/* footer */}
          {!showFooter ? null :
            <Footer
              switchLanguage={this.switchLanguage}
              submitLanguageShift={this.submitLanguageShift}
              loginSwitchLanguage={this.state.currentPage === "login" ? this.loginSwitchLanguage : null}
            />
          }
        </Col>
      </Grid>
    )
  }
}

export default PageSelector