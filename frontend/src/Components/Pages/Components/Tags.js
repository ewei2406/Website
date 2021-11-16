import styled from "styled-components";

const Tag = styled.div`
    border: 1px solid var(--bodyLight);
    background-color: var(--body);
`

const TagWrapper = styled.div`
    display: flex;
`

const Tags = ({ tags }) => <TagWrapper>
    {tags.map(tag => 
        <Tag key={tag[0]}>
            <i className={tag[0]}></i><span style={{ fontSize: "15px" }}>{tag[1]}</span>
        </Tag>
    )}
</TagWrapper>

export default Tags