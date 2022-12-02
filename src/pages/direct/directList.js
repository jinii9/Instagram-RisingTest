import React from 'react';
import styled from 'styled-components';
import {ReactComponent as NewMessage} from "../../assets/images/NewMessage.svg"
import {ReactComponent as Arrow} from "../../assets/images/Arrow.svg"
import { Link } from 'react-router-dom';
import { DirectDATAS } from '../../assets/datas/directDATA';
import { ProfileImg } from '../home/feed';

const DirectList = () => {
    // console.log("DirectDATAS----");
    // console.log(DirectDATAS[0].comment[0].commentWriting[DirectDATAS[0].comment[0].commentWriting.length-1])
    // console.log(DirectDATAS[0].comment[DirectDATAS[0].comment.length-1].commentWriting)

    return (
        <Wrap>
            <Header>
                <AccountBtn>
                    <AccountWrap>
                        <h2>apple</h2>
                        <ArrowWrap><Arrow/></ArrowWrap>
                    </AccountWrap>
                </AccountBtn>
                <SendWrap><NewMessage/></SendWrap>
            </Header>

            <Nav>
                <NavLink to={'/direct'}><span>주요</span></NavLink>
                <NavLink to={''}>일반</NavLink>
                <NavLink to={''} ask="true">요청</NavLink>
            </Nav>

            <Section>
                {/* 디엠 상대 리스트 */}
                {DirectDATAS.map((data) => (
                    <ItemLink to={`/direct/t/${data.id}`} state={{data}} key={data.id}>
                        <FriendProfileImg>
                            <img alt="상대 프로필 사진" src={data.friendProfile}></img>
                        </FriendProfileImg>
                        <FriendInfo>
                            <InfoItem>{data.friendName}</InfoItem>
                            <InfoItem comment="true">{data.comment[data.comment.length-1].commentWriting}</InfoItem>
                        </FriendInfo>
                    </ItemLink>
                ))}
            </Section>
        </Wrap>
    );
};

export default DirectList;

export const Wrap = styled.div`
    width: 35rem;
    height: 100%;
    border: 1px solid rgb(219, 219, 219);
    background-color: white;

    font-size: 1.6rem;
    display: flex;
    flex-direction: column;
    overflow-y: none;
`;
const Header = styled.div`
    width: 100%;
    height: 6rem;
    padding: 0 2rem;
    box-sizing: border-box;

    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
const AccountBtn = styled.button`
    flex: 1 1 auto;
    height: 100%;
    background-color: transparent;
    border: none;
`;
const AccountWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    & h2 {
        font-size: 1.6rem;
        line-height: 2.4rem;
        font-weight: 600;
    }
`;
const ArrowWrap = styled.div`
    transform: rotate(180deg);
    padding: 0.8rem;
`;

const SendWrap = styled.div`
    margin-left: 0.8rem;
`;

const Nav = styled.div`
    width: 100%;
    height: 4.3rem;
    display: flex;
    border: 1px solid rgb(219, 219, 219);
`;
const NavLink = styled(Link)`
    flex: 1 1 auto;
    padding: 1.2rem 0;
    /* text-align: center; */
    text-align: ${(props) => (props.ask ? 'end' : 'center')};
    margin-right: ${(props) => (props.ask ? '3rem' : '0')};
    color: ${(props) => (props.ask ? '#0095f6' : 'black')};
    font-weight: 600;
`;
const Section = styled.div`
    /* height: 100%; */
        /* box-sizing: border-box; */
    flex: 1 1 auto;
    overflow-y: scroll;

    display: flex;
    flex-direction: column;
    padding-top: 0.8rem;
`;
const ItemLink = styled(Link)`
    display: flex;
    padding: 0.8rem 2rem;
`;
const FriendProfileImg = styled(ProfileImg)`
    margin-right: 1.2rem;
    box-sizing: border-box;
    width: 5.6rem;
    height: 5.6rem;

`;
const FriendInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    font-size: 1.4rem;

`;
const InfoItem = styled.span`
        width: 22rem;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-top: ${(props) => (props.comment ? '0.8rem': '0')};
        color: ${(props) => (props.comment ? '#8e8e8e': 'black')};
`;
