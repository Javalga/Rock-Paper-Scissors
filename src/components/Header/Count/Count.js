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
    width: 20%;
    background-color: snow;
    border-radius: 15px;
    padding: 2%;
    align-items: center;
    flex-direction:column;
    justify-content: space-between;
`
const Title = styled.p`

`
const CountNumber = styled.p`
    font-size: 5vw;
`