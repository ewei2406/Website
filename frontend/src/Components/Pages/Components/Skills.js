import styled from "styled-components"
import { Link } from "react-router-dom"

const LinkWrapper = styled(Link)`
    display: flex;
    text-decoration: none;
    align-items: center;
    justify-content: center;
    font-size: 30px;

    width: 50px;
    height: 50px;

    border: 1px solid var(--bodyLight);
    background-color: var(--body);

    transition: all 0.15s linear;

    object {
        display: inline-block;
        height: 30px;
        fill: white;
    }

    &:hover {
        background-color: ${({ color }) => color};
    }

    &:hover * {
        color: white;
    }
`

const SkillButton = ({ name, link, color }) => <LinkWrapper to={link} color={color}>
    <i className={name}></i>
</LinkWrapper>


const SkillWrapper = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
`

const CustomLink = styled(LinkWrapper)`
    color: white;
    mask-image: ${({ url }) => url};
    background-color: green;
    border: 1px solid black;
`

const Skills = () => <SkillWrapper>
    <SkillButton name="devicon-react-original" color="blue" link="/projects" />
    <SkillButton name="devicon-nodejs-plain" color="green" link="/projects" />
    <SkillButton name="devicon-express-original" color="green" link="/projects" />
    <SkillButton name="devicon-css3-plain" color="green" link="/projects" />
    <SkillButton name="devicon-html5-plain" color="green" link="/projects" />
    <SkillButton name="devicon-javascript-plain" color="green" link="/projects" />
    <SkillButton name="devicon-mongodb-plain" color="green" link="/projects" />
    <SkillButton name="devicon-python-plain" color="green" link="/projects" />
    <SkillButton name="devicon-numpy-original" color="green" link="/projects" />
    <SkillButton name="devicon-jupyter-plain" color="green" link="/projects" />
    <SkillButton name="devicon-r-original" color="green" link="/projects" />
    <SkillButton name="devicon-bash-plain" color="green" link="/projects" />
    <SkillButton name="devicon-git-plain" color="green" link="/projects" />
    <SkillButton name="devicon-github-original" color="green" link="/projects" />
    <SkillButton name="devicon-heroku-original" color="green" link="/projects" />
    <SkillButton name="devicon-illustrator-plain" color="green" link="/projects" />
    <SkillButton name="devicon-jquery-plain" color="green" link="/projects" />
    <SkillButton name="devicon-ubuntu-plain" color="green" link="/projects" />
    <SkillButton name="devicon-linux-plain" color="green" link="/projects" />
    <SkillButton name="devicon-markdown-original" color="green" link="/projects" />
    <SkillButton name="devicon-mysql-plain" color="green" link="/projects" />
    <SkillButton name="devicon-pandas-original" color="green" link="/projects" />
    <SkillButton name="devicon-photoshop-plain" color="green" link="/projects" />
    <SkillButton name="devicon-php-plain" color="green" link="/projects" />
    <SkillButton name="devicon-photoshop-plain" color="green" link="/projects" />
    <SkillButton name="devicon-premierepro-plain" color="green" link="/projects" />
    <SkillButton name="devicon-tensorflow-original" color="green" link="/projects" />
    <SkillButton name="devicon-vscode-plain" color="green" link="/projects" />

    <CustomLink to="/projects" color="red" url="url(https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg)">
    </CustomLink>
</SkillWrapper>

export default Skills