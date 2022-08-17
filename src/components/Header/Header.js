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
            <Count>
            </Count>
        </HeaderContainer>
    );
}

const HeaderContainer = styled.header`
    width: 40vw;
    height: 15vh;
    border: 4px solid rgb(230, 230, 231);
    border-radius: 30px;
    margin:auto;
    position: absolute;
    left: 0;
    right: 0;
    top: 7%;
    padding: 1.6%;
    display: flexbox;
    justify-content: space-between;
    `

const LogoContainer = styled.div`
    height: 100%;
    width: auto;
`
const Logo = styled.img`
    height: 100%;
`
