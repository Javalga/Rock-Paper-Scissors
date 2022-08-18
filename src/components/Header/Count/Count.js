import React from "react";
import styled from "styled-components";

export const Count = (props) => {
    return(
        <CountContainer>
            <Title>SCORE</Title>
            <CountNumber>
                12
            </CountNumber>
        </CountContainer>
    )
}

const CountContainer = styled.div`
    display: flex;
    width: 25%;
    height: 100%;
    background-color: snow;
    border-radius: 8px;
    flex-direction:column;
    justify-content: space-around;
    align-items: center;
`
const Title = styled.p`
    height: 1%;
    margin-top: 5%;
    color: #5761B7;
    font-size: 1.2vw;
    letter-spacing: 2px;
    font-weight: 700;
    margin-top
`
const CountNumber = styled.p`
    font-size: 5vw;
    color: #555367;
`