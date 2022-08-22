import React from "react";
import styled from "styled-components";
import logo from '../../images/logo.svg'
import { Count } from './Count/Count.js'

export const Header = (props) => {
    return (
        <HeaderContainer>
            <LogoContainer>
                <Logo src={logo}>
                </Logo>
            </LogoContainer>
            <Count score={props.score}>
            </Count>
        </HeaderContainer>
    );
}

const HeaderContainer = styled.header`
    min-width: 50vw;
    height: 25vh;
    border: 4px solid rgb(230, 230, 231);
    border-radius: 30px;
    margin:auto;
    padding: 3vh;
    margin-top: 2%;
    align-items: center;
    justify-content: space-between;
    display: flex;
    `

const LogoContainer = styled.div`
    height: 85%;
    width: auto;
`
const Logo = styled.img`
    height: 100%;
`
