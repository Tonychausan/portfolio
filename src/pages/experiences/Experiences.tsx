import React from 'react';
import styled from 'styled-components'

import Section from "../../components/section/Section";
import {Accordion} from 'react-bootstrap'
import './Experiences.css'
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {ExperienceObject} from "../../assets/ExperienceStructure";

type ExperiencesProps = {
    experiences: ExperienceObject[];
}

const LightZoneDiv = styled.div`
    color: black;
`

const Experiences = (props: ExperiencesProps) => {
    const CreateExperienceCard = (experienceObject: ExperienceObject, eventkey: string) => {
        return (
            <ExperienceCard key={"experiences-" + eventkey} experienceObject={experienceObject}  eventKey={"experience" + eventkey}/>
        )
    }

    return (
        <Section id="experiences" className="Experiences" sectionName="experiences" variant={"dark"}>
            <h1>Experience</h1>
            Click on the rows to expand.
            <LightZoneDiv>
                <Accordion>
                    {
                        props.experiences.map((experienceObject, index) => CreateExperienceCard(experienceObject, String(index)))
                    }
                </Accordion>
            </LightZoneDiv>
        </Section>
    )
}
export default Experiences;