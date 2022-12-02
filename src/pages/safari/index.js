import React from 'react';
import Header from '../../components/common/header';
import { PageWrap, HeaderWrap, Section, SectionSub, LoginWrap, FooterWrap, HeaderStyle, MainPageWrap } from '../../components/common/styled';
import styled from 'styled-components';
import { ProfileStyle } from '../profile';
import Safari from './safari';

const SafariPage = () => {
    return (
        <MainPageWrap>
                <HeaderWrap>
                    <Header />
                </HeaderWrap>

                <SectionSub>
                    <SafariStyle>
                        {/* <ProfileHeader/> */}
                        {/* <ProfileNav/> */}
                        <Safari />
                    </SafariStyle>
                </SectionSub>
                
        </MainPageWrap>
    );
};

export default SafariPage;

const SafariStyle = styled(ProfileStyle)`
    padding: 0;
`; 