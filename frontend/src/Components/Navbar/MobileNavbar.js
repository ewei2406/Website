import { NavLink } from "react-router-dom"
import React from "react"
import styled from 'styled-components'

import MoonIcon from "./Moon"


const Navbutton = styled(NavLink)`
    text-align: center;
    color: var(--text);
    padding: 5px;
    width: 100%;
    display: block;
    text-decoration: none;
    background-color: var(--body);
    border: 1px solid var(--bodyLight);

    &.active {
        background-color: var(--text);
        color: var(--body);
    }

    &:hover {
        background-color: ${({ theme }) => theme.lightColor};
    }
`

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 10px;
`

const NavWrapper = styled.div`
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: stretch;
    margin-bottom: 50px;
    gap: 10px;
    padding: 0;
`

const Title = styled.div`
    font-size: 40px;
    font-family: 'Roboto Mono', monospace;
    background-color: var(--body);
    border: 1px solid var(--bodyLight);
    padding: 5px 10px;
`

const MobileNavbar = ({ toggle, theme }) => {
    return (
        <NavWrapper>
            <Title>Edward Wei</Title>
            <ButtonWrapper>
                <Navbutton to="/">Home</Navbutton>
                <Navbutton to="/projects">Projects</Navbutton>
                <MoonIcon toggle={toggle} theme={theme}/>
            </ButtonWrapper>
        </NavWrapper>
    )
}

export default MobileNavbar