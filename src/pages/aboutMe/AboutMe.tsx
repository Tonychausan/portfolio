import React from 'react'
import {Image} from 'react-bootstrap'

import './AboutMe.css'
import Section from "../../components/section/Section";
import logo from "../../assets/t.chau.png";


const AboutMe = () => {
    return (
        <Section id="aboutme" className="AboutMe" sectionName="aboutme">
            <Image src={logo} className="app-logo" alt="logo" roundedCircle/>
            <div>
                <h1>About me</h1>
                <p>
                    I'm Tony, a developer. I graduated from NTNU in 2017 and have been in the IT industry since. I have
                    always been interested in solving logical challenges, and this is one of the qualities I have that
                    has strengthened my interests in technology and IT. In addition to being quite interested in
                    algorithms and problem solving, I am also very curious about how the world develops and has great
                    interest in future-oriented technology such as machine learning and AI.
                </p>
                <p>
                    As a developer, I have most experience with backend development on Java-based systems but I do also
                    have
                    a bit of experience on frontend development (mainly React). Adaptableness plays an important role in
                    todays rapidly evolving IT industry, and I don't think I have problems adapting to new languages,
                    frameworks or APIs, as these are rapidly released and updated.
                </p>
                <p>
                    As a person, I am goal oriented and capabale of working independently on hard problems. In a team I
                    value knowledge sharing (code reviews, solution discussions, etc.) and inclusivness, and get
                    motivated
                    by a team that works on improvements (both professionally and personally).
                </p>
            </div>
        </Section>
    )
}
export default AboutMe;