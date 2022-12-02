import styled from 'styled-components';
// import { FooterWrap, LoginWrap, PageWrap, Section } from '../login';
import { PageWrap, Section, LoginWrap, FooterWrap } from '../../components/common/styled';
import Footer from '../login/footer';
import Sign from './sign';

const SignPage = () => {

    return (
        <>
            <PageWrap>
                <Section>
                    {/* <SideImg></SideImg> */}
                    <LoginWrap><Sign /></LoginWrap>
                </Section>

                <FooterWrap>
                    <Footer/>
                </FooterWrap>
            </PageWrap>
        </>
    )
}

export default SignPage
