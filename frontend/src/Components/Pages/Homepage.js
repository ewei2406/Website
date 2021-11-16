import styled from "styled-components"
import React from "react"

import Header from "./Components/Header"
import Section from "./Components/Section"
import Content from "./Components/Content"

import Skills from "./Components/Skills"
import Tags from "./Components/Tags"

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

const aboutTags = [
    ["bi bi-geo-alt-fill", "Charlottesville, VA"],
    ["bi bi-mortarboard-fill", "CS @ UVA"],
]

const Homepage = () => {
    return(
        <PageWrapper>
            <ImgWrapper>
                <Img src={shapes} alt="" />
            </ImgWrapper>

            <Section>
                <Header>About Me</Header>

                {/* <Tags tags={aboutTags}/> */}

                <Content>
                    {"Hello, my name is Edward Wei and I'm from Eugene, OR. Currently, I am \
                    studying computer science at the University of Virginia in Charllotesville, VA. \
                    I am looking for an internship for Summer 2022."}
                </Content>
            </Section>

            <Section>
                <Header>Skills</Header>
                <Content>
                    Click on a skill to view projects related to it.
                    <Skills/>
                </Content>
            </Section>
        </PageWrapper>
    )
}

export default Homepage