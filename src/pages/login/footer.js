import React from 'react';
import styled, { createGlobalStyle }  from 'styled-components';
import {ReactComponent as Arrow} from "../../assets/images/Arrow.svg"

const Footer = () => {
    return (
        <PageWrap>
            <InfoWrap>
                <a href='https://about.meta.com/'>Meta</a>
                <a href='https://about.meta.com/'>소개</a>
                <a href='https://about.meta.com/'>블로그</a>
                <a href='https://about.meta.com/'>채용 정보</a>
                <a href='https://about.meta.com/'>도움말</a>
                <a href='https://about.meta.com/'>API</a>
                <a href='https://about.meta.com/'>개인정보처리방침</a>
                <a href='https://about.meta.com/'>약관</a>
                <a href='https://about.meta.com/'>인기 계정</a>
                <a href='https://about.meta.com/'>해시태그</a>
                <a href='https://about.meta.com/'>위치</a>
                <a href='https://about.meta.com/'>Instagram Lite</a>
                <a href='https://about.meta.com/'>연락처 업로드 & 비사용자</a>
            </InfoWrap>
            <LanguageWrap>
                <SelectBox>
                    <select>
                        <option value="ko">한국어</option>
                        <option value="af">Afrikaans</option>
                        <option value="cs">Čeština</option>
                        <option value="da">Dansk</option>
                        <option value="de">Deutsch</option>
                    </select>
                    {/* <Icon>
                        <Arrow/>
                    </Icon> */}
                </SelectBox>
                <span>© 2022 Instagram from Meta</span>
            </LanguageWrap>
        </PageWrap>
    );
};

export default Footer;

const PageWrap = styled.div`
    padding: 0 1.6rem;
    margin-bottom: 5.2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: rgb(142, 142, 142);
`;
const InfoWrap = styled.div`
    margin-top: 2.4rem;
    display: flex;

    & a {
        margin: 0 0.8rem 1.2rem;

        font-weight: 400;
        font-size: 1.2rem;
        line-height: 1.6rem;
        /* margin: -0.2rem 0 -0.3rem; */
    }
`;
const LanguageWrap = styled.div`
    display: flex;
    margin: 1.2rem 0;
    align-items: center;
    & span {
        margin-left: 2rem;
    }
    
    & select {
        -webkit-appearance:none; /* 크롬 화살표 없애기 */
        appearance:none; /* 화살표 없애기 */
        width: 100%;
        height: 100%;
        text-align-last: center;
        color: rgb(142, 142, 142);
        background-color:transparent;
        border: none;

        background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' aria-label='아래쪽 V자형 아이콘' class='_ab6-' color='%238e8e8e' fill='%238e8e8e' height='12' role='img' viewBox='0 0 24 24' width='12' transform='rotate(177)'%3E%3Cpath d='M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z'%3E%3C/path%3E%3C/svg%3E") right no-repeat;
        padding: 0 1rem;
        /* transform: rotate(180deg); */
        cursor: pointer;
        &:focus {
            outline: none;
        }
    }
    & option {
        color: #000000;
    }
`;
const SelectBox = styled.div`
    display: flex;
`;
const Icon = styled.div`
    /* z-index: 100; */
    transform: rotate(180deg);
`;