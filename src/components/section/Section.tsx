import React from 'react';
import styled from 'styled-components'

import './Section.css'

type SectionProps = {
    variant?: 'light' | 'dark';
    sectionName: string
    className: string
    id: string
}



const Section: React.FunctionComponent<SectionProps> = (props) =>  {
    const variantClass = props.variant === "dark" ? "section-dark" : ""

    return (
        <div id={props.id} className={"Section " + variantClass}>
            <div className={props.className + " section-content"}>
                {props.children}
            </div>
        </div>
    )
}

export default Section;