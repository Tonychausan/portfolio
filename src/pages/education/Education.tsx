import React from 'react';
import {Accordion, Card, } from "react-bootstrap";
import styled from 'styled-components';

import Section from "../../components/section/Section";
import {GryedText} from "../../components/experienceCard/ExperienceCard";

const StyledCardHeader = styled(Accordion.Toggle)`
    cursor: default;
`

const AboutMe = () => {
    return (
        <Section id="education" className="Education" sectionName="education">
            <h1>Education</h1>
            <Accordion>
                <StyledCardHeader className="card-header" as={Card.Header} >
                    <div className="card-header-text">
                        <h2>NTNU<GryedText> (2012 - 2017)</GryedText></h2>
                        <p><GryedText>Master's degree, Computer Science</GryedText></p>
                        <p>Specialization on Complex Computer System (HPC, Hardware and algorithms), with a thesis about utilizing machine learning on sign language recognition.</p>
                    </div>
                </StyledCardHeader>
                <StyledCardHeader className="card-header" as={Card.Header}>
                    <div className="card-header-text">
                        <h2>The University of Tokyo<GryedText> (2015 - 2016)</GryedText></h2>
                        <p><GryedText>Graduate (exchange student), Computer Science</GryedText></p>
                    </div>
                </StyledCardHeader>
            </Accordion>
        </Section>
    )

}
export default AboutMe;