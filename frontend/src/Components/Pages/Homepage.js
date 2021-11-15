import styled from "styled-components"
import React from "react"

import Header from "./Components/Header"
import Section from "./Components/Section"
import Content from "./Components/Content"

import shapes from './Shapes.png'


const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
`

const ImgWrapper = styled.div`
    display: flex;
    justify-content: center;
`


const Img = styled.img`
    width: 400px;
    max-width: 80%;
    transition: filter 0.15s linear;
    ${({ theme }) => theme.isDark ? 'filter: invert(1)' : 'filter: invert(0.3)'};
`


const Homepage = () => {
    return(
        <PageWrapper>
            <ImgWrapper>
                <Img src={shapes} alt="" />
            </ImgWrapper>

            <Section>
                <Header>About Me</Header>
                <Content>
                    Hello, my name is Edward Wei. I am from Eugene, OR, and am currently studying computer science at the University of Virginia in Charllotesville, VA.
                </Content>
            </Section>

            <Section>
                <Header>About Me</Header>
                <Content>
                    Hello, my name is Edward Wei. I am from Eugene, OR, and am currently studying computer science at the University of Virginia in Charllotesville, VA.
                </Content>
            </Section>

            

        </PageWrapper>
    )
}

export default Homepage