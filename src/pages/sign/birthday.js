import React, { useEffect, useState } from 'react';
// import { PageWrap } from '../../components/common/styled';
import styled from 'styled-components';
import * as S from '../login/login';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AppDownload from '../../components/appDownload';
// import { FooterWrap, LoginWrap, PageWrap, Section } from '../login';
import { PageWrap, Section, LoginWrap, FooterWrap } from '../../components/common/styled';
import Footer from '../login/footer';
import { DateOPTIONS } from '../../assets/datas/dateDATA';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../store/actions/login';

const BirthdayPage = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const inputValues = location.state;

    const dispatch = useDispatch();
    
    const [finalInputValues, setFinalInputValues] = useState(inputValues);
    console.log(finalInputValues);

    const handleChangeOption = (keyName, e) => {
        switch (keyName) {
            case "month":
                 return setFinalInputValues({
                        ...finalInputValues,
                        month: e.target.value
                    });
            case "day":
                return setFinalInputValues({
                    ...finalInputValues,
                    day: e.target.value
                });
            case "year":
                return setFinalInputValues({
                    ...finalInputValues,
                    year: e.target.value
                });
            default:
                return;
        }       
    }

    const handleFinalValues = async () => {
        try {
            let birthdayString = "";
            birthdayString += finalInputValues.year + "-" + finalInputValues.month + "-" + finalInputValues.day;
            console.log(birthdayString);

            const url = "https://cors-anywhere.herokuapp.com/https://clone-instagram.shop:8080/signup";
            const data = {
                phoneOrEmail: finalInputValues.email,
                nickname: finalInputValues.realName,
                id: finalInputValues.userName,
                pwd: finalInputValues.password,
                birth: birthdayString
            }
            console.log("Test");
            console.log(finalInputValues);
            const res = await axios({
                method: "post",
                url: url,
                data: data,
            });

            // 고객 id 받기
            console.log(res.data);
            console.log(res.data.result);

            // success 했다면 로그인페이지로 Link
            if(res.data.isSuccess) {
                navigate("/login");
            }
            // 고객 id redux에 넣어주기
            // dispatch(
            //     loginAction({userId: res.data.result}),
            // );

        } catch (error) {
            console.log(error);
        }
    }
    // console.log(finalInputValues);




    return (
            <PageWrap>
                <Section>
                    <LoginWrap>

                        <S.PageWrap>
                            <S.LoginWrap>
                                <S.MainWrap>
                                <BirthdayMainWrap>
                                    <CakeImg />
                                    <h2>생일 추가</h2>
                                    <p>공개 프로필에 포합되지 않습니다.</p>
                                    <button type='button'>왜 생일 정보를 입력해야 하나요?</button>
                                    
                                    <DateSelectWrap>
                                        {Object.keys(DateOPTIONS).map((keyName) => (
                                            // <ArrowWrap>
                                                <Select key={keyName} onChange={(e) => handleChangeOption(keyName, e)}>
                                                    {DateOPTIONS[keyName].map((item) => (
                                                        <Option key={item.value} value={item.value}>
                                                            {item.value}
                                                        </Option>
                                                    ))}
                                                </Select>
                                                // <ArrowImg key={keyName} />
                                                
                                            // </ArrowWrap>
                                        ))}
                                    </DateSelectWrap>
                                    
                                    <Info>
                                        비즈니스나 반려동물 들을 위한 계정인 경우에도 회원님의 생일 정보를 사용하세요
                                    </Info>

                                    {/* <NextBtn type='button' onClick={handleFinalValues}><Link to="/home">다음</Link></NextBtn> */}
                                    <NextBtn type='button' onClick={handleFinalValues}>다음</NextBtn>
                                    <NextBtn back>돌아가기</NextBtn>

                                </BirthdayMainWrap>
                                </S.MainWrap>
                            </S.LoginWrap>


                            <S.LoginWrap>
                                <S.SignWrap>
                                    <p>계정이 있으신가요?</p>
                                    <Link to="/">로그인</Link>
                                </S.SignWrap>
                            </S.LoginWrap>
                            
                            <AppDownload />
                        </S.PageWrap>

                    </LoginWrap>
                </Section>

                <FooterWrap>
                    <Footer/>
                </FooterWrap>
            </PageWrap>
    );
};

export default BirthdayPage;

const BirthdayMainWrap = styled.div`
    /* padding: 0.8rem 2.8rem; */
    padding: 0rem 2.8rem;

    margin-top: 1.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    & h2 {
        font-size: 1.6rem;
        line-height: 2.4rem;
        font-weight: bold;
        margin: 1.6rem 0rem 0.8rem;
    }
    & p:nth-child(3) {
        font-size: 1.4rem;
        line-height: 1.8rem;
        margin: 1.6rem 0rem 0.1rem 0rem;
    }
    & button {
        cursor: pointer;
        border: none;        
    }
    & button:nth-child(4) {
        font-size: 1.4rem;
        background-color: transparent;
        color: #0095f6;
        margin-bottom: 0.8rem;

    }
`;
const CakeImg = styled.div`
    width: 14.4rem;
    height: 9.6rem;
    background: url(https://static.cdninstagram.com/rsrc.php/v3/y8/r/ZWR9C7_JdnP.png) 0 0 no-repeat;
`;
const DateSelectWrap = styled.div`
    margin: 0.8rem 0;
    /* position: relative; */
`;
const ArrowWrap = styled.div`
    display: flex;
`;
const ArrowImg = styled.div`
    pointer-events: none;
    /* position: absolute; */
    /* right: 7px; */
    /* top: 12px; */
    background: url(https://static.cdninstagram.com/rsrc.php/v3/y5/r/TJztmXpWTmS.png) -35.8rem -28.6rem no-repeat;
    height: 1.2rem;
    width: 1.2rem;

    z-index:100;
`;
const Select = styled.select`
    margin-bottom: 0.8rem;
    margin-right: 0.8rem;
    border: 1px solid rgb(219, 219, 219);
    border-radius: 0.3rem;
    color: rgb(142, 142, 142);
    font-size: 1.2rem;
    height: 3.6rem;
    /* padding: 0 2.4rem 0 0.8rem; */
    padding: 0 0 0 0.7rem;
    
    /* 화살표 커스텀  */
    /* -webkit-appearance: none; 
    -moz-appearance: none;    
    appearance: none;      
    &::-ms-expand {
        display: none;
    } */
`;
const Option = styled.option``;
const Info = styled.p`
    /* width: 100%; */
    margin-top: 0.4rem;
    margin-bottom: 0.4rem;
    text-align: center;
    color: rgb(142, 142, 142);
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.6rem;
`;

const NextBtn = styled.button`
    width: 100%;
    border-radius: 0.4rem;
    font-weight: 600;
    margin: ${(props) => (!props.back ? "1.6rem 0.8rem" : "0 0 0.8rem 0")};
    padding: ${(props) => (!props.back && "0.5rem 0.9rem")};

    background-color: ${(props) => (props.back ? "#ffffff": "rgb(0, 149, 246)")};
    color: ${(props) => (props.back ? "rgb(0, 149, 246)": "#ffffff")};
`;


