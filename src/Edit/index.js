import React from 'react';
import styled from 'styled-components';
import Header from '../components/common/header';
import { HeaderWrap, SectionSub, LoginWrap, FooterWrap, HeaderStyle, MainPageWrap } from '../components/common/styled';
import Footer from '../pages/login/footer';
import Nav from './nav';
import ProfileEdit from './profileEdit';
// import { PageWrap, HeaderWrap, SectionSub, LoginWrap, FooterWrap, HeaderStyle, MainPageWrap } from '../../components/common/styled';

const EditPage = () => {
    return (
        <Wrap>
                <HeaderWrap>
                    <Header />
                </HeaderWrap>

                <EditSection>
                    <EditStyle>
                            <Nav/>
                            <ProfileEdit/>
                    </EditStyle>
                </EditSection>

                <FooterWrap>
                    <Footer/>
                </FooterWrap>
        </Wrap>
    );
};

export default EditPage;
const Wrap = styled.div`
    display: flex;
    flex-direction: column;
`;
const EditSection = styled(SectionSub)`
    flex: 1 1 auto;
    padding: 0;
    /* height: 100%; */
    /* width: 100%; */
`
const EditStyle = styled.div`
    /* padding: 2rem; */
    background-color: white;
    margin: 3rem 14.9rem 0;
    box-sizing: border-box;
    display: flex;
    width: 93.3rem;

    height: 100%;
    border: 1px solid rgb(219, 219, 219);
`;
// const NavWrap = styled.div`
//     width: 30%;

// `;
// const Main = styled.div`
//     width: 70%;
// `;

