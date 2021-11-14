import { NavLink } from "react-router-dom"
import React from "react"
import styled from 'styled-components'


const Navbutton = styled(NavLink)`
    color: ${({ theme }) => theme.text};
    padding: 5px;
    display: block;
    text-decoration: none;
    background-color: ${({ theme }) => theme.body};
    transition: background-color .15s;

    &.active {
        background-color: ${({ theme }) => theme.text};
        color: ${({ theme }) => theme.body};
    }

    &:hover {
        background-color: ${({ theme }) => theme.lightColor};
    }
`

const Navwrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const Navbar = ({ toggle, theme }) => {
    return (
        <Navwrapper>
            <Navbutton to="/">Home</Navbutton>
            <Navbutton to="/projects">Projects</Navbutton>
            <i onClick={toggle} className={`bi ${theme === 'light' ? 'bi-moon' : 'bi-moon-fill'}`}></i>
        </Navwrapper>
    )
}

export default Navbar