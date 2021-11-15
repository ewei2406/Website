import styled from "styled-components"

const MoonWrapper = styled.i`
    background-color: var(--body);
    border: 1px solid var(--bodyLight);
    padding: 5px 8px;

    transition: all 0.1s linear;

    &:hover {
        background-color: var(--bodyLight);
    }
`

const MoonIcon = ({ toggle, theme }) => (
    <MoonWrapper style={{"cursor": "pointer"}} title="Toggle dark mode"
        onClick={toggle} className={`bi ${theme === 'light' ? 'bi-moon' : 'bi-moon-fill'}`}></MoonWrapper>
)


export default MoonIcon