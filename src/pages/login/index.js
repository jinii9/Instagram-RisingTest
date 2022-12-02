// import { PageWrap } from "../../components/common/styled"
// import Header from "../../components/common/header"
import styled, { createGlobalStyle }  from 'styled-components';
// import { useState } from "react"
// import { useNavigate } from "react-router-dom"
// import { loginAction } from "../../store/actions/login"
// import { useDispatch } from "react-redux"
import Login from "./login"
import Footer from './footer';
import { PageWrap, Section, LoginWrap, FooterWrap } from '../../components/common/styled';
import LoginMainIMG from "../../assets/images/LoginMainIMG3.png";
const LoginPage = () => {

    //외부 모듈

    //state 생성

    //name 셋팅

    //로그인 버튼 클릭

    return (
        <>
            {/* <GlobalStyle /> */}
            <PageWrap>
                <Section>
                    <SideImg>
                        <img alt="LoginMainImg" src={LoginMainIMG}/>
                    </SideImg>
                    <LoginWrap><Login /></LoginWrap>
                </Section>

                <FooterWrap>
                    <Footer/>
                </FooterWrap>
            </PageWrap>
        </>
    )
}




export default LoginPage;

const SideImg = styled.div`
    background-image: url(https://static.cdninstagram.com/rsrc.php/v3/y4/r/ItTndlZM2n2.png);
    background-position: -4.6rem 0;
    background-size: 46.832rem 63.415rem;
    flex-basis: 38.032rem;

    height: 58.115rem;
    margin-bottom: 1.2rem;
    margin-right: 3.2rem;

    position: relative;

    & img {
        position: absolute;
        top: 3.8rem;
        left: 11.8rem;
        /* opacity: 0.35; */
        /* z-index: -1; */
    }
`;

