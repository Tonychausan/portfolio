import React from 'react';
import {Accordion, Card} from "react-bootstrap";
import styled from 'styled-components';
import {faChevronCircleDown, faChevronDown} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library} from "@fortawesome/fontawesome-svg-core";

import './ExperienceCard.css';
import {ExperienceObject, ProjectObject} from "../../assets/ExperienceStructure";
import ProjectCard from "./ProjectCard";
import Tool from "../Tool";
import AnimatedScroll from "../AnimatedScroll";

export type CardProps = {
    eventKey: string;
}

interface ExperienceCardProps extends CardProps{
    experienceObject: ExperienceObject;
}


export const GryedText = styled.span`
    color: #808080;
`

library.add(faChevronDown)
library.add(faChevronCircleDown)

const ExperienceCard = (props: ExperienceCardProps) => {
    const experience = props.experienceObject;

    const createProjectCard = (projectObject: ProjectObject, eventKey: string) => {
        return (<ProjectCard key={"project-" + eventKey} projectObject={projectObject} eventKey={"project" + eventKey}/>)
    }

    return (
        <AnimatedScroll animation="fadeInLeft" >
            <Card className="ExperienceCard">
                <Accordion.Toggle className="card-header" as={Card.Header} eventKey={props.eventKey}>
                    <div className="card-header-text">
                        <div className="card-header-header">
                            <h2>{experience.workplace}</h2>
                            <p className="card-header-date"><GryedText>({experience.fromTime} - {experience.toTime})</GryedText></p>
                        </div>

                        <p><GryedText>{experience.title}</GryedText></p>
                    </div>
                    <div className="card-header-icon">
                        <FontAwesomeIcon icon="chevron-circle-down" />
                    </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={props.eventKey}>
                    <Card.Body>
                        <h3>Description</h3>
                        <p>{experience.description}</p>
                        {!!experience.tools &&
                            <div>
                                <h3>Tools</h3>
                                { experience.tools.split(',').map((tool, index) => <Tool key={"key-" + index}>{tool}</Tool>) }
                            </div>
                        }
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            {!!experience.projects &&
                experience.projects?.map((projectObject, index) => createProjectCard(projectObject, props.eventKey + "-" + String(index)))
            }
        </AnimatedScroll>
    )
}

export default ExperienceCard;