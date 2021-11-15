import { NavLink } from "react-router-dom"
import React from "react"
import styled from 'styled-components'

import MoonIcon from "./Moon"


const Navbutton = styled(NavLink)`
    color: var(--text);
    padding: 5px 8px;
    display: block;
    text-decoration: none;
    background-color: var(--body);
    border: 1px solid var(--bodyLight);
    transition: all 0.1s linear;

    &.active {
        background-color: var(--text);
        color: var(--body);
    }

    &:hover {
        background-color: var(--bodyLight);
    }
`

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

const NavWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 50px;
    padding: 0;
`

const Title = styled.div`
    font-size: 50px;
    font-family: 'Roboto Mono', monospace;
    background-color: var(--body);
    border: 1px solid var(--bodyLight);
    padding: 5px 10px;
`

const Navbar = ({ toggle, theme }) => {
    return (
        <NavWrapper>
            <Title>Edward Wei</Title>
            <ButtonWrapper>
                <Navbutton to="/">Home</Navbutton>
                <Navbutton to="/projects">Projects</Navbutton>
                <MoonIcon toggle={toggle} theme={theme} />
            </ButtonWrapper>
        </NavWrapper>
    )
}

export default Navbar