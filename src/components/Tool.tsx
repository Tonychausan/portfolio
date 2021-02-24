import React  from 'react';
import {Button} from "react-bootstrap";

import styled from 'styled-components'

const StyledButton = styled(Button)`
    margin: 2px;
`

const Tool: React.FunctionComponent =  (props) => {
    return (
        <StyledButton className="Tool" size="sm" variant="dark" disabled>
            {props.children}
        </StyledButton>
    )
}
export default Tool;