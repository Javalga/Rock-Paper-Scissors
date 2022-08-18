import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { State1 } from './State1/State1.js'
import iconPaper from '../../images/icon-paper.svg'
import iconRock from '../../images/icon-rock.svg'
import iconScissors from '../../images/icon-scissors.svg'

export const Playground = () => {

    const [playgroundState, setPlaygroundState] = useState(1)

    if (playgroundState === 1) {
        return (
            <PlaygroundMainContainer>
                <State1
                iconPaper={iconPaper}
                iconRock={iconRock}
                iconScissors={iconScissors}
                ></State1>
            </PlaygroundMainContainer>
        );
    }
}

const PlaygroundMainContainer = styled.div`
    position: relative;
    display:flex;
    align-items: center;
    margin: auto;
    width: 100vw;
    height: 100vh;
    z-index: 9;
`