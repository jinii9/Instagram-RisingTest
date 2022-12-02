import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../../components/common/header';
import { PageWrap, HeaderWrap, SectionSub, LoginWrap, FooterWrap, HeaderStyle, MainPageWrap } from '../../components/common/styled';
import DirectList from './directList';
import Message from './message';

const DirectPage = () => {
    const location = useLocation();
    // 대화 내용 가져오기
    const TalkData = location.state;

    // const [nullCheck, setNullCheck] = useState(true);
    // useEffect(() => {
    //     console.log("확인");
    //     if(TalkData===null) {
    //         setNullCheck(true);
    //     } else {
    //         setNullCheck(false);
    //     }
    // },[]);

    return (
        <MainPageWrap>
                <HeaderWrap>
                    <Header />
                </HeaderWrap>

                <DirectSection>
                    <DirectStyle>
                        <DirectList/>
                        <Message TalkData={TalkData}/>
                    </DirectStyle>
                </DirectSection>
        </MainPageWrap>
    );
};

export default DirectPage;
const DirectSection = styled(SectionSub)`
    padding: 0;
    height: 100%;
    
`
const DirectStyle = styled.div`
    padding: 2rem;
    box-sizing: border-box;
    display: flex;
    width: 93.5rem;
    height: 100%;
`;