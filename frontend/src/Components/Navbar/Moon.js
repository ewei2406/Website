const MoonIcon = ({ toggle, theme }) => (
    <i style={{"cursor": "pointer"}} title="Toggle dark mode"
        onClick={toggle} className={`bi ${theme === 'light' ? 'bi-moon' : 'bi-moon-fill'}`}></i>
)


export default MoonIcon