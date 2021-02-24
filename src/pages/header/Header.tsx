import React from 'react';
import styled, {keyframes} from "styled-components";
import ScrollButton from "../../components/scrollButton/ScrollButton";
import {Button, Image, Modal} from "react-bootstrap";

import './Header.css'
import logo from "../../assets/t.chau.png";
import ContactModal from "../../components/ContactModal";


type HeaderProps = {
    handleClose: any;
    handleShow: any;
    showContact: boolean
}

const SlideUpAnimation = keyframes`
    100% { top: 0 }
`

const StyledScrollButton = styled(ScrollButton)`
    display: flex;
    position: relative;
    overflow: hidden
    align-items: center;
    top: 100%;
    animation: ${SlideUpAnimation} 1s forwards;
    margin-bottom: 10rem;
    
    @media screen and (orientation:landscape)  and (max-height: 768px)  {
        margin-bottom: 0rem;
        justify-content: center;
    }
`

const GreyScaleImg = styled(Image)`
    filter: grayscale(100%);
    opacity: 0.2;
`

const ContactButton = styled(Button)`
    animation: zoomIn;
    animation-duration: 2s;
`

const Header = (props: HeaderProps) => {
    return (
        <div className="Header header-container">
            <div className="header-text-image">
                <div className="header-text">
                    <h1>Tony Chau</h1>
                    <p>Full-stack developer</p>
                    <ContactButton variant="outline-light" onClick={props.handleShow}>
                        Contact Info
                    </ContactButton>
                </div>
                <div className="header-image-container">
                    <GreyScaleImg src={logo} className="header-logo" alt="logo" roundedCircle/>
                </div>
            </div>
            <StyledScrollButton link="aboutme"/>


            <Modal id="contact-modal" show={props.showContact} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Contact</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ContactModal />
                </Modal.Body>
            </Modal>
        </div>
    )
}
export default Header;