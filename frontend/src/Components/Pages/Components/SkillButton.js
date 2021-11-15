import styled from "styled-components"
import { Link } from "react-router-dom"

const SkillWrapper = styled(Link)`
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

    &:hover {
        background-color: ${({ color }) => color};
    }

    &:hover * {
        color: white;
    }
`

const SkillButton = ({ name, link, color }) => <SkillWrapper to={link} color={color}>
    <i className={name}></i>
</SkillWrapper>

export default SkillButton