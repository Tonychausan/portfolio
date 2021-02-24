import React, {Component} from 'react';
import {Link} from 'react-scroll'

import './ScrollButton.css'


type ScrollButtonProps = {
    link: string;
    className?: any;
}

const ScrollButton = (props: ScrollButtonProps) =>  {
        return (
            <div className={props.className + " ScrollButton"}>
                <Link className="scrollLink" to={props.link} offset={-70} spy={true} smooth={true} duration={1000}>
                    <span/>
                    Scroll
                </Link>
            </div>
        )
}
export default ScrollButton;