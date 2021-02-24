import React from 'react';
import {Link} from 'react-scroll'

import './NavLink.css'

type LinkProps = {
    link: string;
    className?: any;
}

export const PortfolioLink : React.FunctionComponent<LinkProps> = (props) =>  {
    return (
        <div className={props.className + " PortfolioLink"}>
            <Link className="portfolioLink" to={props.link} offset={-100} spy={true} smooth={true} duration={1000}>
                {props.children}
            </Link>
        </div>
    )
}

const NavLink : React.FunctionComponent<LinkProps> = (props) =>  {
    return (
        <div className={props.className + " NavLink"}>
            <Link className="navLink" to={props.link} offset={-100} spy={true} smooth={true} duration={1000}>
                {props.children}
            </Link>
        </div>
    )

}
export default NavLink;