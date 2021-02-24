import React from 'react';
import styled, {keyframes} from "styled-components";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {library} from "@fortawesome/fontawesome-svg-core";
import {Image} from "react-bootstrap";
import linkedinLogo from "../assets/LI-In-Bug.png";
import mailLogo from "../assets/unread-mail-icon.svg";
import githubLogo from "../assets/GitHub-Mark-120px-plus.png"

library.add(faEnvelope)

type ContactBoxProps = {
    className?: string;
    icon: any;
    link?: string;
    text: string;
}

const Box = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 1rem 0 1rem;
    cursor: pointer;
    width: 50%;
`

const BoxImage = styled(Image)`
    width: 50%;
    margin-bottom: 1rem;
`

const ContactBox = (props: ContactBoxProps) =>  {
    return (
        <Box className={props.className} href={props.link} target="_blank" >
            <BoxImage src={props.icon}/>
            <p>{props.text}</p>
        </Box>
    )
}

const StyledContactBox = styled(ContactBox)`
    @media (max-width: 768px) {
        margin-top: 1.5rem;
    }
`

const Container = styled.div`
    display: flex;
    align-items: flex-end;
    width: 100%;
    
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`

const RotateAnimation = keyframes`
    from {
        -webkit-transform: rotate(360deg);
    }
    to { 
        -webkit-transform: rotate(0deg);
    }
`

const GitHubContainer = styled.div`
    margin: 2rem 1rem 0 1rem;
    
    & > p {
        margin: 1rem 2rem;
    }
    
    position: relative;
    align-items: center;
    animation: bounceInUp 3s;
    
`

const GitHubLinkContainer = styled.div`
    display: flex;
    justify-content: center;
`


const GitHubLink = styled.a`
    flex-direction: column;
    align-items: center;
    padding: 1rem 1rem 0 1rem;
    border: 0.2rem solid black;
      
    border-radius: 2rem;
   
    > p {
        width: 100%;
        text-align: center;
        margin-top: 0.5rem;
    }
`

const GithubImg = styled(Image)`
    &:hover{
        animation: ${RotateAnimation};
        animation-duration: 3s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }
`

const ExpandAnimation = keyframes`
    100% { margin-bottom: 0 }
`

const ModalContainer = styled.div`
    overflow: hidden;
    margin-bottom: -15rem;
    animation: ${ExpandAnimation} 1s forwards;
    animation-delay: 0.5s;
`

const ContactModal = () => {
    return (
        <ModalContainer>
            <Container>
                <StyledContactBox link={"https://www.linkedin.com/in/tony-chau/"} icon={linkedinLogo} text="Linkedin"/>
                <StyledContactBox link={"mailto:tonychau1992@gmail.com"} icon={mailLogo} text="tonychau1992@gmail.com"/>
            </Container>
            <GitHubContainer>
                <p>Also, if you're interested in this portfolio, check out the github!</p>
                <GitHubLinkContainer>
                    <GitHubLink  href={"https://github.com/Tonychausan/portfolio"} target="_blank" >
                        <GithubImg src={githubLogo}/>
                        <p>Portfolio</p>
                    </GitHubLink>
                </GitHubLinkContainer>
            </GitHubContainer>
        </ModalContainer>
    )

}

export default ContactModal;