import styled from "styled-components";

const Boxed = styled.i`
    color: var(--text);
    border: 1px solid var(--bodyLight);
    background-color: var(--body);
    padding: 5px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    
    min-width: 20px;
    height: 20px;

    transition: all 0.15s linear;
    

    font-size: 15px;
    font-style: normal;
`

const SoButton = styled(Boxed)`
    font-size: 20px;
    transition: all 0.15s linear;
    cursor: pointer;

    &:hover{
        background-color: ${({ color }) => color};
        color: white;
    }
`

const ContactWrapper = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 10px;
`

const SocialWrapper = styled(ContactWrapper)`
    justify-content: left;
    gap: 10px;
`

const NoDecLink = styled.a`
    text-decoration: none;
`

const SocialButton = ({ type, link, color }) => <NoDecLink href={link}>
    <SoButton className={`bi bi-${type}`} color={color}>
    </SoButton>
</NoDecLink>


const ContactButton = ({ type, link, innerContent }) => <NoDecLink href={link}>
    <Boxed className={`bi bi-${type}`}>
        {innerContent}
    </Boxed>
</NoDecLink>



const Contacts = () => {
    return(
        <div>
            <ContactWrapper>
                <Boxed className="bi bi-envelope-fill">
                    nyw6dh@virginia.edu
                </Boxed>

                <Boxed className="bi bi-telephone-fill">
                    541-221-5816
                </Boxed>
            </ContactWrapper>
            <SocialWrapper>
                <SocialButton color="#0077B5" link="https://www.linkedin.com/in/wei-edward/" type="linkedin"/>
                <SocialButton color="#171515" link="https://github.com/ewei2406" type="github"/>
                <SocialButton color="#1DA1F2" link="https://twitter.com/ewei2406" type="twitter"/>
                <SocialButton color="#1778F2" link="https://www.facebook.com/profile.php?id=100011777584753" type="facebook"/>
                <SocialButton color="#DD2A7B" link="https://www.instagram.com/ewei2406/" type="instagram"/>
            </SocialWrapper>
        </div>
    )
}

export default Contacts