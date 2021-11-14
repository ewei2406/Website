import { Link } from "react-router-dom"
import React from "react"
import styled from 'styled-components'


const Navbutton = styled(Link)`
    color: red;
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    display: block;
`

const Navwrapper = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: row;
    justify-content: center;
`


const Navbar = () => {
    return (
        <Navwrapper>
            <Navbutton to="/">Home</Navbutton>
            <Navbutton to="/projects">Projects</Navbutton>
        </Navwrapper>
    )
}

export default Navbar