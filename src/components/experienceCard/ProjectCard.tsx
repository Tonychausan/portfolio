import React, {useEffect} from 'react';
import {Accordion, Card} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {ProjectObject} from "../../assets/ExperienceStructure";
import Tool from "../Tool";
import {CardProps, GryedText} from "./ExperienceCard";

interface ProjectCardProps extends CardProps{
    projectObject: ProjectObject
}

const ProjectCard = (props: ProjectCardProps) =>  {
    const project = props.projectObject

    return (
        <Card className="ProjectCard">
            <Accordion.Toggle className="card-header" as={Card.Header} eventKey={props.eventKey}>
                <div className="card-header-text">
                    <div className="card-header-header">
                        <h4>{project.workplace}</h4>
                        <p className="card-header-date"> <GryedText>({project.fromTime} - {project.toTime})</GryedText></p>
                    </div>
                </div>
                <div className="card-header-icon">
                    <FontAwesomeIcon icon="chevron-circle-down" />
                </div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={props.eventKey}>
                <Card.Body>
                    <h5>Description</h5>
                    <p>{project.description}</p>
                    {!!project.myRole &&
                    <div>
                        <h5>My role</h5>
                        <p>{project.myRole}</p>
                    </div>
                    }
                    {!!project.tools &&
                        <div>
                            <h5>Tools</h5>
                            { project.tools.split(',').map((tool, index) => <Tool key={"key-" + index}>{tool}</Tool>) }
                        </div>
                    }

                </Card.Body>
            </Accordion.Collapse>
        </Card>
    )
}

export default ProjectCard;