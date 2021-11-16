import styled from "styled-components"
import { Link } from "react-router-dom"

const LinkWrapper = styled(Link)`
    display: flex;
    text-decoration: none;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    gap: 5px;

    height: 50px;
    padding: 0 10px;

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
        color: white;
    }

    &:hover * {
        color: white;
    }
`


const SkillButton = ({ cName, link, color, name }) => <LinkWrapper to={link} color={color}>
    <i className={cName}></i><span style={{fontSize: "15px"}}>{name}</span>
</LinkWrapper>


const NoIcon = ({ link, color, name }) => <LinkWrapper to={link} color={color}>
    <span style={{ fontSize: "15px" }}>{name}</span>
</LinkWrapper>


const SkillWrapper = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    padding-left: 200px;
    position: relative;
`

const SectionHeading = styled.div`
    border: 1px solid var(--bodyLight);
    background-color: var(--body);
    display: flex;
    position: absolute;
    left: 0;
    align-items: center;
    justify-content: center;
    padding: 10px;
    margin-right: 50px;
    height: 30px;
`

const BigWrapper = styled.div`
margin-top: 20px;   
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const Skills = () => <BigWrapper>

    <SkillWrapper>
        <SectionHeading>Web Development</SectionHeading>
        <SkillButton name="React" cName="devicon-react-original" color="#79D8F7" link="/projects" />
        <SkillButton name="Node.js" cName="devicon-nodejs-plain" color="#7FC728" link="/projects" />
        <SkillButton name="Express" cName="devicon-express-original" color="#000" link="/projects" />
        <SkillButton name="MongoDB" cName="devicon-mongodb-plain" color="#589636" link="/projects" />
        <SkillButton name="JavaScript" cName="devicon-javascript-plain" color="#EFD81D" link="/projects" />
    </SkillWrapper>

    <SkillWrapper>
        <SectionHeading>Data</SectionHeading>
        <SkillButton name="R" cName="devicon-r-original" color="#1F65B7" link="/projects" />
        <SkillButton name="Python" cName="devicon-python-plain" color="#3476AA" link="/projects" />
        <SkillButton name="Pandas" cName="devicon-pandas-original" color="#0B0153" link="/projects" />
        <SkillButton name="Numpy" cName="devicon-numpy-original" color="#4D77CF" link="/projects" />
    </SkillWrapper>

    <SkillWrapper>
        <SectionHeading>AI/ML</SectionHeading>
        <SkillButton name="PyTorch" cName="bi bi-boxes" color="#E74A2B" link="/projects" />
        <SkillButton name="Python" cName="devicon-python-plain" color="#3476AA" link="/projects" />
        <SkillButton name="Jupyter" cName="devicon-jupyter-plain" color="#EB7325" link="/projects" />
    </SkillWrapper>

    <SkillWrapper>
        <SectionHeading>Tools</SectionHeading>
        <SkillButton name="Bash" cName="devicon-bash-plain" color="#2D3A3E" link="/projects" />
        <SkillButton name="Git" cName="devicon-git-plain" color="#E84D31" link="/projects" />
        <SkillButton name="GitHub" cName="devicon-github-original" color="#1A1E22" link="/projects" />
        <SkillButton name="VSCode" cName="devicon-vscode-plain" color="#0076C6" link="/projects" />
    </SkillWrapper>

    <SkillWrapper>
        <SectionHeading>DevOps</SectionHeading>
        <SkillButton name="Heroku" cName="devicon-heroku-original" color="#79589F" link="/projects" />
        <SkillButton name="DigitalOcean" cName="devicon-digitalocean-plain" color="#007CF7" link="/projects" />
        <SkillButton name="Ubuntu" cName="devicon-ubuntu-plain" color="#E2501E" link="/projects" />
    </SkillWrapper>

    <SkillWrapper>
        <SectionHeading>Design</SectionHeading>
        <SkillButton name="MarkDown" cName="devicon-markdown-original" color="#000" link="/projects" />
        <SkillButton name="Photoshop" cName="devicon-photoshop-plain" color="#2FA3F7" link="/projects" />
        <SkillButton name="Illustrator" cName="devicon-illustrator-plain" color="#FF9B00" link="/projects" />
        <SkillButton name="Premiere Pro" cName="devicon-premierepro-plain" color="#9494F7" link="/projects" />
    </SkillWrapper>


    <SkillWrapper>

        
    </SkillWrapper>
</BigWrapper>

export default Skills