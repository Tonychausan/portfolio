import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";

type AnimatedScrollProps = {
    animation: string;
    duration?: number;
    className?: string;
}

interface AnimatedDivProps extends AnimatedScrollProps {
    isOnScreen?: boolean;
}

const AnimatedDiv = styled.div<AnimatedDivProps>`
    visibility: ${props => props.isOnScreen ? 'visible' : 'hidden'};
    ${(props) => (props.isOnScreen ) && `
        animation: ${props.animation};
        animation-duration: ${props.duration ? props.duration : "1"}s;
    `}
`


function useOnScreen(ref: any, setIsVisible: Function, isVisible: boolean) {
    useEffect(() => {
        const thresholdArray = (steps: any) => Array(steps + 1)
            .fill(0)
            .map((_, index) => index / steps || 0)

        const handleIntersect = (entries: any) => {
            entries.forEach((entry: any)=> {
                const isIntersecting = entry.isIntersecting

                if (!isVisible && isIntersecting) {
                    setIsVisible(true)
                }
            })
        }

        const observer = new IntersectionObserver(handleIntersect
        , {threshold: thresholdArray(10)})

        observer.observe(ref.current)
        // Remove the observer as soon as the component is unmounted
        return () => { observer.disconnect() }
    }, [ref, isVisible])

    return isVisible
}

const AnimatedScroll: React.FunctionComponent<AnimatedScrollProps> = (props) => {
    const [isVisible, setIsVisible] = useState(false)

    const propsWithoutChildren = props as AnimatedDivProps;

    const ref = useRef<HTMLDivElement>(null)

    const isOnScreen = useOnScreen(ref, setIsVisible, isVisible)

    return (
        <div ref={ref}>
            {
                <AnimatedDiv {...propsWithoutChildren} isOnScreen={isOnScreen}>
                    {props.children}
                </AnimatedDiv>
            }
        </div>
    )
}

export default AnimatedScroll;