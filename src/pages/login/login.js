import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { PageWrap } from '../../components/common/styled';
import styled from "styled-components"
import AppDownload from '../../components/appDownload';
import { loginAction } from '../../store/actions/login';
import SignPage from '../sign';
import {REST_API_KEY, REDIRECT_URI, KAKAO_AUTH_URL} from './KaKaoLoginData';


const Login = () => {
    const navigate = useNavigate();
    //////
    const location = useLocation();
    const KAKAO_CODE = location.search.split('=')[1];

    const getKakaoToken = () => {
        fetch(`https://kauth.kakao.com/oauth/token`,{
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${KAKAO_CODE}`,
        })
        .then(res => res.json())
        .then(data => {
            
            if(data.access_token) {
                // localStorage.setItem('kakao_access_Token', data.access_token);
                console.log("kakao access Token:", data.access_token);

                try {
                    const KakaoLogin = async () => {
                        navigate("/");
                        // window.localStorage.setItem("jwt", "res.data.result.jwt");

                        // const url = `https://cors-anywhere.herokuapp.com/https://clone-instagram.shop:8080/login/kakao?access_Token=${data.access_token}`;
                        // const res = await axios({
                        //     method: "post",
                        //     url: url
                        // });
                        // console.log('KaKao로그인:',res.data);
                        // if(res.data.isSuccess) {
                        //     navigate("/");
                        //     // 고객 id,jwt redux에 넣어주기
                        //     dispatch(
                        //         loginAction({
                        //             userId: res.data.result.id,
                        //             jwt: res.data.result.jwt
                        //         }),
                        //     );
                        //     // 로컬스토리지에 토큰 저장
                        //     window.localStorage.setItem("jwt", res.data.result.jwt);
                        // }
                    }
                    KakaoLogin();

                } catch (error) {
                    console.log(error);
                }

                // navigate("/");
            }
            else {
                // goToHome();
            }
        });

    }

    useEffect(() => {
        if(!location.search) return;
        console.log('인가코드: ' + KAKAO_CODE);
        getKakaoToken();
    },[])
    //////









    const dispatch = useDispatch();
    
    // 서버의 로그인 정보 불일치 시
    const [loginError, setLoginError] = useState(false);
    // inputValues가 빈 값이 아니면 가입 버튼 활성화
    const [isDisable, setIsDisable] = useState(true);
    // input value 값 관리
    const [inputValues, setInputValues] = useState({
        email: "",
        password: "",
    });

    useEffect(() => {
        if(inputValues.email!=="" && inputValues.password!==""){
            setIsDisable(false);
        } else {
            setIsDisable(true);
        }
    },[inputValues])

    const handleChange = (e) => {
        setInputValues({
            ...inputValues,
            [e.target.name]: e.target.value,
        })
    }
    // 로그인 버튼 클릭
    const handleSubmit = async () => {
        try {
            const url = "https://cors-anywhere.herokuapp.com/https://clone-instagram.shop:8080/login";
            const data = {
                phoneIdEmail: inputValues.email,
                pwd: inputValues.password
            }
            const res = await axios({
                method: "post",
                url: url,
                data: data,
            });
            // // 고객 id,jwt 받기
            console.log(res.data);
            // success 했다면 home으로 Link
            if(res.data.isSuccess) {
                navigate("/");
                setLoginError(false);
                // 고객 id,jwt redux에 넣어주기
                dispatch(
                    loginAction({
                        userId: res.data.result.id,
                        jwt: res.data.result.jwt
                    }),
                );
                // 로컬스토리지에 토큰 저장
                window.localStorage.setItem("jwt", res.data.result.jwt);
            } else {
                setLoginError(true);
            }

            // 고객 id redux에 넣어주기
            // dispatch(
            //     loginAction({userId: res.data.result}),
            // );
        } catch (error) {
            console.log(error);
        }
    }
    console.log(inputValues)
    return (
        <PageWrap>
            <LoginWrap>
                <Logo></Logo>

                <MainWrap>
                    <Form onSubmit={handleSubmit}>
                        <InputWrap>
                            <Label>
                                <InputLetter inputValues={inputValues.email}>전화번호, 사용자 이름 또는 이메일</InputLetter>
                                <Input inputValues={inputValues} type="text" onChange={handleChange} value={inputValues.email} name="email"></Input>
                            </Label>
                        </InputWrap>
                        <InputWrap>
                            <Label>
                                <InputLetter inputValues={inputValues.password}>비밀번호</InputLetter>
                                <Input inputValues={inputValues} type="password" onChange={handleChange} value={inputValues.password} name="password"></Input>
                            </Label>
                        </InputWrap>
                        {/* <button type="submit"><Link to="/home">로그인</Link></button> */}
                        {/* <SignLoginLink to="/home"><button type="submit">로그인</button></SignLoginLink> */}
                        <BlueBtn type="submit" ChangeColor={isDisable} onClick={handleSubmit}>로그인</BlueBtn>
                        
                    </Form>  
                    <Or>
                        <Line/>
                        <p>또는</p>
                        <Line/>
                    </Or>
                    <FacebookLogin>
                        <FacebookImg />
                        <span><a href={KAKAO_AUTH_URL}>Facebook으로 로그인</a></span>
                    </FacebookLogin>
                    {loginError && 
                        <ErrorCheck>잘못된 비밀번호입니다. 다시 확인하세요.</ErrorCheck>
                    }
                    <FindPassword>비밀번호를 잊으셨나요?</FindPassword>
                </MainWrap>
            </LoginWrap>

            <LoginWrap>
                <SignWrap>
                    <p>계정이 없으신가요?</p>
                    <Link to="/sign">가입하기</Link>
                </SignWrap>
            </LoginWrap>
            
            <AppDownload />
        </PageWrap>
    );
};

export default Login;

export const PageWrap = styled.div``;

export const LoginWrap = styled.div`
    border: 1px solid rgb(219, 219, 219);
    border-radius: 0.1rem;
    background-color: rgb(255, 255, 255);
    margin: 0 0 1rem;
    padding: 1rem 0;
    
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const Logo = styled.div`

    background-image: url(https://static.cdninstagram.com/rsrc.php/v3/yi/r/ZFtnMBJnHU_.png);
    background-position: 0px -55.4rem;
    /* background-size: auto; */
    width: 17.5rem;
    height: 5.1rem;
    background-repeat: no-repeat;
    /* display: inline-block; */

    margin-top: 3.6rem;
    margin-bottom: 1.2rem;
    cursor: pointer;
`;
export const MainWrap = styled.div`
    margin-bottom: 1rem;
    width: 35rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */

`;
export const Form = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2.4rem;

    & button {

        /* margin: 0.8rem 4rem 0.8rem 4rem;
        padding: 0.5rem 0.9rem;
        border: none;

        background-color: transparent;
        color: #ffffff;
        cursor: pointer;
        font-weight: 600;

        border-radius: 0.4rem;
        background-color: rgb(0, 149, 246);
        color: #ffffff;
        font-weight: 600; */
    }
`;
// 가입, 로그인 버튼 따로 빼줌
export const BlueBtn = styled.button`
        margin: 0.8rem 4rem 0.8rem 4rem;
        padding: 0.5rem 0.9rem;
        border: none;

        /* background-color: transparent; */
        color: #ffffff;
        cursor: pointer;
        font-weight: 600;

        border-radius: 0.4rem;
        /* background-color: rgb(0, 149, 246); */
        background-color: ${(props) => (props.ChangeColor ? "rgba(0, 149, 246, 0.3)": "rgb(0, 149, 246)")};
        /* background-color: rgba(0, 149, 246, 0.3); */

        color: #ffffff;
        font-weight: 600;
`

export const SignLoginLink = styled(Link)`
        /* margin: 0.8rem 4rem 0.8rem 4rem; */
        /* padding: 0.5rem 0.9rem; */
        
        /* width: 100%; */
        /* border: none; */
        /* border-radius: 0.4rem; */
        /* background-color: rgb(0, 149, 246); */
        /* color: #ffffff; */
        /* font-weight: 600; */
        /* display: flex; */
        /* justify-content: center; */
`
export const InputWrap = styled.div`
    margin: 0 4rem 0.6rem;
    background-color: #FAFAFA;
    border: 1px solid rgb(219, 219, 219);
    border-radius: 0.3rem;
    
    height: 3.6rem;
    position: relative;
    padding: 0 0 0rem 0.8rem;
    
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Label = styled.label`
    /* display: flex; */
    /* flex-direction: column; */
    flex-grow: 1;
    
`;
export const XErrorWrap = styled.div`
    padding-right: 0.8rem;
`;
export const XError = styled.div`
    /* padding-right: 0.8rem; */
    margin-left: 0.8rem;

    width: 2.2rem;
    height: 2.2rem;
    background-image: url(https://static.cdninstagram.com/rsrc.php/v3/y5/r/TJztmXpWTmS.png);
    background-repeat: no-repeat;
    background-position: -24.9rem -33.3rem;
`;
export const OCorrect = styled.div`
    /* padding-right: 0.8rem; */
    margin-left: 0.8rem;

    width: 2.2rem;
    height: 2.2rem;
    background-image: url(https://static.cdninstagram.com/rsrc.php/v3/y5/r/TJztmXpWTmS.png);
    background-repeat: no-repeat;
    background-position: -22.5rem -33.3rem;
`;
export const Input = styled.input`
        background-color:transparent;

        border: none;
        margin: 0 1rem 0 0;
        outline: none;
        width: 93%;
        height: 100%;

        padding: ${(props) => (props.inputValues!=='' && "0.3rem 0 0rem 0rem;")};

`;
export const InputLetter = styled.div`
    color: rgb(142, 142, 142);
    transform: ${(props) => (props.inputValues!=='' && "translateY(-10px)")};
    font-size: ${(props) => (props.inputValues==='' ? "1.3rem" : "0.2rem")};
    padding: ${(props) => (props.inputValues!=='' && "0.3rem 0 0rem 0rem;")};

    position: absolute;
    top: 30%;
`;

export const Or = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 4rem 1.8rem;

    & p {
        margin: 0 1.8rem;
        font-weight: 600;
        font-size: 1.4rem;
        line-height: 1.8rem;
        color: #8e8e8e;
    }
`;
export const Line = styled.div`
    /* width: 100%; */
    height: 0.1rem;
    flex: 1 1 auto;
    background-color: rgb(219, 219, 219);
`;
const FacebookLogin = styled.button`
    border: none;
    background-color:transparent;

    display: flex;
    justify-content: center;
    align-items: center;

    & span {
        color: #385185;
        font-size: 1.4rem;
        font-weight: 600;
        font: inherit;
        font-size: 100%;
    }
`;
const FacebookImg = styled.div`
    /* margin: 0 4rem; */
    background: url(https://static.cdninstagram.com/rsrc.php/v3/y5/r/TJztmXpWTmS.png) -41.4rem -25.9rem no-repeat;
    width: 1.6rem;
    height: 1.6rem;
    margin-right: 0.8rem;
`;
const ErrorCheck = styled.div`
    margin: 1rem 4rem;
    text-align: center;
    font-size: 1.4rem;
    color: #ed4956;
`
const FindPassword = styled.div`
    text-align: center;
    margin-top: 1.2rem;
    font-size: 1.2rem;
    line-height: 1.6rem;
`;
export const SignWrap = styled.div`
    display: flex;
    font-size: 1.4rem;
    margin: 1.5rem;
    & a {
        color: rgb(0, 149, 246);
        text-decoration: none;
        font-weight: bold;
        padding-left: 0.1rem;
    }
`;
export const DownLoad = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & p {
        font-size: 1.4rem;
        line-height: 1.8rem;
        margin: 2rem 2rem;
    }
`;
export const AppImgWrap = styled.div`
    display: flex;
    margin: 1rem 0;
    & img {
        height: 4rem;
        margin-right: 0.8rem;
    }
`;
