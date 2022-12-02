import React, { useRef, useState } from 'react';
import Header from '../../components/common/header';
import Footer from '../login/footer';
import { PageWrap, HeaderWrap, Section, LoginWrap, FooterWrap, HeaderStyle, MainPageWrap } from '../../components/common/styled';
import styled from 'styled-components';
import { ProfileImg } from '../home/feed';
import Profile from "../../assets/images/Profile.png";
import { Link } from 'react-router-dom';
import {ReactComponent as Setting} from "../../assets/images/Setting.svg"
import ProfileHeader from './profileHeader';
import ProfileNav from './profileNav';

const ProfilePage = () => {
// 서버에서 받아온 회원 정보를 리덕스에 저장
// 서버에서 받아온 회원 게시물 리스트 리덕스에 저장

    return (
        <MainPageWrap>
                <HeaderWrap>
                    <Header />
                </HeaderWrap>

                <SectionSub>
                    <ProfileStyle>
                        <ProfileHeader/>
                        <ProfileNav/>
                    </ProfileStyle>
                </SectionSub>
                
                <FooterWrap>
                    <Footer/>
                </FooterWrap>
        </MainPageWrap>
    );
};

export default ProfilePage;

export const SectionSub = styled(Section)`
    margin: 0rem;
    /* align-items: flex-start; */
    /* align-items: stretch; */
    /* height: 100vh; */
    /* height: 100%; */
    /* align-self: flex-start; */
    /* flex: 1 1 auto; */
    /* width: 100%; */
    /* display: flex; */
    /* justify-content: center; */
    /* flex-basis: 100%; */
    align-items: flex-start;

`;

export const ProfileStyle = styled.div`
    margin: 0 6.8rem;
    padding: 3rem 2rem 0;
    width: 100vh;
    margin-top: 3rem;
    /* height: 100vh; */

    /* display: flex; */
    /* flex-direction: column; */
    /* align-items: flex-start; */
`;




// const ProfileNav = styled.div``;
// const ProfileSection = styled.div``;


