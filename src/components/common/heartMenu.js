import React from 'react';
import styled from 'styled-components';
import {Wrap as MenuWrap, TopSign as MenuTopSign, SubNav as MenuSubNav} from './profileMenu';

const HeartMenu = () => {
    return (
        <Wrap>
            <TopSign />
            <SubNav>
                <CircleHeart/>
                <HeartLetter>게시물 활동</HeartLetter>
                <HeartLetter>다른 사람이 회원님의 게시물을 좋아하거나 댓글을 남기면 여기에 표시됩니다.</HeartLetter>
            </SubNav>
        </Wrap>
    );
};

export default HeartMenu;

const Wrap = styled(MenuWrap)`
    /* left: 42.7rem; */
    margin-left: -480px;
    width: 50rem;
    /* height: 100%; */
`;
const TopSign = styled(MenuTopSign)`
    left: 440px;
`;
const SubNav = styled(MenuSubNav)`
    align-items: center;
    padding: 0 4rem;
`
const CircleHeart = styled.div`
    background: url(https://static.cdninstagram.com/rsrc.php/v3/y5/r/TJztmXpWTmS.png) no-repeat;
    background-position: -30.6rem -13.2rem;
    height: 6.2rem;
    width: 6.2rem;
`
const HeartLetter = styled.p`
    margin-top: 1.6rem;
    font-size: 1.4rem;
    line-height: 1.8rem;
    text-align: center;
`;

