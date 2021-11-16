import { Link, NavLink } from "react-router-dom"
import React from "react"
import styled from 'styled-components'

import MoonIcon from "./Moon"
import Contacts from "./Contacts"


const Navbutton = styled(NavLink)`
    color: var(--text);
    padding: 5px 8px;
    display: block;
    text-decoration: none;
    background-color: var(--body);
    border: 1px solid var(--text);
    transition: all 0.15s linear;

    &.active {
        background-color: var(--text);
        color: var(--body);
    }

    &:hover {
        background-color: var(--bodyLight);
    }
`

const ButtonWrapper = styled.div`
    transition: all 0.15s linear;
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
    padding: 0;
`

const Title = styled(Link)`
    font-size: 50px;
    
    font-family: 'Roboto Mono', monospace;
    background-color: var(--body);
    color: var(--text);
    border: 1px solid var(--bodyLight);
    padding: 5px 10px;
    text-decoration: none;

    cursor: pointer;

    &:hover {
        background-color: var(--bodyLight);
    }
`

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const Navbar = ({ toggle, theme }) => {
    return (
        <NavWrapper>

            <TitleWrapper>
                <Title to="/">
                    Edward Wei
                </Title>
                <Contacts />
            </TitleWrapper>

            <ButtonWrapper>
                <Navbutton to="/">Home</Navbutton>
                <Navbutton to="/projects">Projects</Navbutton>
                <MoonIcon toggle={toggle} theme={theme} />
            </ButtonWrapper>
        </NavWrapper>
    )
}

export default Navbar