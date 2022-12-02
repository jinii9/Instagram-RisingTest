import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {ReactComponent as Meta} from "../assets/images/Meta.svg"

const Nav = () => {
    return (
        <Wrap>
            {/* <li */}
            <NavItem>
                <NavLink to={""}><p>프로필 편집</p></NavLink>
            </NavItem>
            <NavItem>
                <NavLink to={""}><p>프로페셔널 계정</p></NavLink>
            </NavItem>            
            <NavItem>
                <NavLink to={""}><p>비밀번호 변경</p></NavLink>
            </NavItem>            
            <NavItem>
                <NavLink to={""}><p>앱 및 웹사이트</p></NavLink>
            </NavItem>            
            <NavItem>
                <NavLink to={""}><p>이메일 알림</p></NavLink>
            </NavItem>            
            <NavItem>
                <NavLink to={""}><p>푸시 알림</p></NavLink>
            </NavItem>            
            <NavItem>
                <NavLink to={""}><p>연락처 관리</p></NavLink>
            </NavItem>            
            <NavItem>
                <NavLink to={""}><p>개인정보 및 보안</p></NavLink>
            </NavItem>            
            <NavItem>
                <NavLink to={""}><p>광고</p></NavLink>
            </NavItem>            
            <NavItem>
                <NavLink to={""}><p>관리 감독</p></NavLink>
            </NavItem>            
            <NavItem>
                <NavLink to={""}><p>로그인 활동</p></NavLink>
            </NavItem>            
            <NavItem>
                <NavLink to={""}><p>Instagram에서 보낸 이메일</p></NavLink>
            </NavItem>            
            <NavItem>
                <NavLink to={""}><p>도움말</p></NavLink>
            </NavItem>            
            <NavItem>
                <NavLink to={""}><p>디지털 자산</p></NavLink>
            </NavItem>            
            <NavItem>
                <button>
                    개인용 계정으로 전환
                </button>            
            </NavItem>            
            <MetaWrap>
                <Meta/>
                <MetaItem>
                    <a href=''>계정 센터</a>
                </MetaItem>
                <MetaItem>
                    <p>
                        스토리 및 게시물 공유, 로그인 등 Instagram, Facebook 앱, Messenger 간에 연결된 환경에 대한 설정을 관리하세요.
                    </p>
                </MetaItem>
            </MetaWrap>
        </Wrap>
    );
};

export default Nav;

const Wrap = styled.ul`
    width: 23.6rem;
    height: 100%;
    /* display: flex; */
    border-right: 1px solid rgb(219, 219, 219);

`;
const NavItem = styled.li`
    /* padding: 1.6rem 1.6rem 1.6rem 3rem; */
    width: 100%;
    & button {
        padding: 1.6rem 1.6rem 1.6rem 3rem;
        width: 100%;
        text-align: start;

        background-color: transparent;
        border:none;
        font-size: 1.4rem;
        font-weight: bold;
        color: #0095f6;
    }
`;
const NavLink = styled(Link)`
     & p {
        padding: 1.6rem 1.6rem 1.6rem 3rem;
        font-size: 1.6rem;
        line-height: 2rem;
     }
`;
const MetaWrap = styled.div`
    border-top: 1px solid rgb(219, 219, 219);
    padding: 2.8rem 2rem 2.8rem 3.2rem;
    display: flex;
    flex-direction: column;

    & a {
        color: #0095f6;
        font-weight: bold;
        font-size: 1.6rem;
        line-height: 2.4rem;
    }
`;
const MetaItem = styled.div`
    margin-top: 1.6rem;
    font-size: 1.2rem;
    line-height: 1.6rem;
    color: #8e8e8e;
`;