import React from 'react';
import styled from 'styled-components';

const Tag = () => {
    return (
        // '태그됨' 없을 때
        <Wrap>
            <XWrap>
                <XImg/>
                <p>내가 나온 사진</p>
                <p>사람들이 회원님을 사진에 태그하면 태그된 사진이 여기에 표시됩니다.</p>
            </XWrap>
        </Wrap>
    );
};

export default Tag;
const Wrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const XWrap = styled.div`
    margin: 6rem 4.4rem;
    width: 35rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    & p:nth-child(2) {
        margin: 2.4rem 0;
        font-size: 2.8rem;
        line-height: 3.2rem;
    }
    & p:nth-child(3) {
        margin-bottom: 2.4rem;
        font-size: 1.4rem;
        line-height: 1.8rem;
        text-align: center;
    }
`;
const XImg = styled.div`
    width: 6.2rem;
    height: 6.2rem;
    background: url(https://static.cdninstagram.com/rsrc.php/v3/y5/r/TJztmXpWTmS.png) -25.6rem -26.9rem no-repeat;
`;