import React, {useEffect, useState} from 'react';
import {Navbar, Nav, Button} from 'react-bootstrap'
import styled from "styled-components";
import { faComments } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {library} from "@fortawesome/fontawesome-svg-core";

import './App.css';
import AboutMe from "./pages/aboutMe/AboutMe";
import Experiences from "./pages/experiences/Experiences";
import {ExperienceObject} from "./assets/ExperienceStructure";
import Header from "./pages/header/Header";
import NavLink, {PortfolioLink} from "./components/navLink/NavLink";
import Education from "./pages/education/Education";
import Footer from "./pages/Footer/Footer";

library.add(faComments)

const StyledButton = styled(Button)`
    position: fixed;
    border-radius: 50%;
    height: 3rem;
    width: 3rem;
    bottom: 0.5rem;
    right: 0.5rem;
    animation: shakeX;
    animation-duration: 2s;
`

const AnimatedNavBar = styled(Navbar)`
    animation: fadeInDown;
    animation-duration: 2s;
`

const NavHeader = styled(Navbar.Brand)`
    font-size: 2rem;
    @media screen and (orientation:landscape) {
        font-size: 1rem;
    }
`

const StyledNav = styled(Nav)`
    @media (max-width: 575.98px) {
        padding-bottom: 1rem;
       
        border-bottom: 0.1rem solid white;
    }
`

function App() {
    const [isWaiting, setIsWait] = useState(false)
    useEffect(
        () => {
            let timer = setTimeout(() => setIsWait(true), 1000);
            return () => {
                clearTimeout(timer);
            };
        },
        []
    )

    const [experiences, setExperiences] = useState([] as ExperienceObject[]);
    const getJson = (location: string, setter: any) => {
        fetch(location
            ,{
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function(response){
                return response.json();
            })
            .then(function(json) {
                console.log(json);
                setter(json);
            });
    }
    useEffect(()=>{
        getJson('experiences.json', setExperiences)
    },[])

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
          <div className="App">
              <AnimatedNavBar className="bg-nav" variant="dark" expand="sm" fixed="top">
                  <NavHeader className="nav-header"><PortfolioLink link={"app-header"}>Portfolio</PortfolioLink></NavHeader>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                      <StyledNav className="mr-auto">
                          <NavLink link={"aboutme"}>About Me</NavLink>
                          <NavLink link={"Experiences"}>Experience</NavLink>
                          <NavLink link={"Education"}>Education</NavLink>
                      </StyledNav>
                  </Navbar.Collapse>
              </AnimatedNavBar>

              <div className="app-header" id="app-header">
                  <Header  handleClose={handleClose}  handleShow={handleShow} showContact={show}/>
              </div>

              { isWaiting &&
                  <div className="app-content">
                      <div className="content-container">
                          <AboutMe/>
                          <Experiences experiences={experiences}/>
                          <Education />
                          <Footer />
                      </div>
                  </div>
              }

              <StyledButton onClick={handleShow} variant="info"><FontAwesomeIcon icon={"comments"}/> </StyledButton>

          </div>
      );
}

export default App;
