import { isDisabled } from '@testing-library/user-event/dist/utils';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import AppDownload from '../../components/appDownload';
import * as S from '../login/login';

const Sign = () => {
    const navigate = useNavigate();
    const [inputValues, setInputValues] = useState({
        email: "",
        realName: "",
        userName: "",
        password: "",
        
    });
    // 유효성 체크
    const [signValidation, setSignValidation] = useState({
        emailValidate: true,
        realValidate: true,
        userValidate: true,
        pwdValidate: true,
    });
    // 중복 체크
    const [signDuplication, setSignDuplication] = useState({
        userNameDuplicate:true,
    });


    // inputValues가 빈 값이 아니면 가입 버튼 활성화
    const [isDisable, setIsDisable] = useState(true);
    // 전체 따지는 가입 버튼 활성화
    // const [isAllDisable, setIsAllDisable] = useState(true);


    // 빈 값 체크
    useEffect(() => {
        if(inputValues.email!=="" && inputValues.realName!=="" && inputValues.userName!=="" && inputValues.password!==""){
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

    const handleSubmit = async () => {
        console.log("handleSubmit");
        console.log(inputValues);
        // -----------------------------------validation 체크
         //email 유효성 체크
         const emailRegex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
         console.log('email확인', emailRegex.test(inputValues.email));
         
         if(!emailRegex.test(inputValues.email)){
            setSignValidation((check) => ({
                 ...check,
                 emailValidate: false,
             }));
         } else {
            setSignValidation((check) => ({
                ...check,
                emailValidate: true,
            }));
         }
         // 핸드폰 유효성 체크
        //  const phoneRegex = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
        //  if(!phoneRegex.test(inputValues.email)){
        //     setSignValidation((check) => ({
        //         ...check,
        //         emailValidate: false,
        //     }));
        //  } else {
        //     setSignValidation((check) => ({
        //         ...check,
        //         emailValidate: true,
        //     }));
        //  }
         // 비밀번호 유효성체크
         const pwdRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
         console.log('pwd확인', pwdRegex.test(inputValues.password));

         if(!pwdRegex.test(inputValues.password)){
            setSignValidation((check) => ({
                ...check,
                pwdValidate: false,
            }));
         } else {
            setSignValidation((check) => ({
                ...check,
                pwdValidate: true,
            }));
         }
         // 아이디 유효성체크 (userName)
         const userRegex = /^[가-힣a-zA-Z0-9]{4,20}$/;
         console.log('id확인', pwdRegex.test(inputValues.userName));
         if(!userRegex.test(inputValues.userName)){
            setSignValidation((check) => ({
                ...check,
                userValidate: false,
            }));
         } else {
            setSignValidation((check) => ({
                ...check,
                userValidate: true,
            }));
         }
        // -----------------------------------duplication 체크
        const fetchData = async () => {
            // realName 중복성 체크
            try {
                
                const url = `https://cors-anywhere.herokuapp.com/https://clone-instagram.shop:8080/users/checkid?id=${inputValues.userName}`;

                const res = await axios({
                    method: "get",
                    url: url,
                });

                console.log(res.data);
                let userNameDuplicate = res.data.isSuccess;
                setSignDuplication((check) => ({
                    ...check,
                    userNameDuplicate: userNameDuplicate,
                }));

                // 가입 버튼 시, 넘어갈 수 있는지 마지막 체크
                if(userNameDuplicate && signValidation.emailValidate && signValidation.realValidate && signValidation.userValidate && signValidation.pwdValidate){
                    // <S.SignLoginLink to="/birthday" state={{inputValues}} ></S.SignLoginLink>
                    navigate("/birthday", {state:inputValues});
                }
             

            } catch (error) {
                console.log(error);
            }
        };
        fetchData();

        // 1) fetchData 함수 시작 전에 여기가 먼저 그냥 실행됨
    }
    // 2) fetchData 함수 시작 전에 여기가 먼저 그냥 실행됨
    // console.log(inputValues)
    return (
        <S.PageWrap>
            <S.LoginWrap>
                <S.Logo></S.Logo>
                <S.MainWrap>

                    <MainInfo>친구들의 사진과 동영상을 보려면 가입하세요.</MainInfo>

                    <S.Or>
                        <S.Line/>
                        <p>또는</p>
                        <S.Line/>
                    </S.Or>

                    {/* <S.Form onSubmit={handleSubmit}> */}
                    <S.Form>
                        <S.InputWrap>
                            <S.Label>
                                <S.InputLetter inputValues={inputValues.email}>휴대폰 번호 또는 이메일 주소</S.InputLetter>
                                <S.Input inputValues={inputValues} type="text" onChange={handleChange} value={inputValues.email} name="email"></S.Input>
                            </S.Label>
                            {/* {(!signValidation.emailValidate) && ( 
                                <S.XErrorWrap>
                                    <S.XError/>
                                </S.XErrorWrap>
                            )} */}
                            <S.XErrorWrap>
                                {(signValidation.emailValidate===false && inputValues.email!=="") && ( 
                                        <S.XError/>
                                ) }
                                 {/* : (<S.OCorrect/>)}  */}
                            </S.XErrorWrap>
                        </S.InputWrap>
                        <S.InputWrap>
                            <S.Label>
                                <S.InputLetter inputValues={inputValues.realName}>성명</S.InputLetter>
                                <S.Input inputValues={inputValues} type="text" onChange={handleChange} value={inputValues.realName} name="realName"></S.Input>
                            </S.Label>
                        </S.InputWrap>
                        <S.InputWrap>
                            <S.Label>
                                <S.InputLetter inputValues={inputValues.userName}>사용자 이름</S.InputLetter>
                                <S.Input inputValues={inputValues} type="text" onChange={handleChange} value={inputValues.userName} name="userName"></S.Input>
                                {/* <S.Input inputValues={inputValues} type="text" onclick={handleChange} defaultValue={inputValues.userName} name="userName"></S.Input> */}
                            </S.Label>
                            {(signValidation.userValidate===false) && ( 
                                <S.XErrorWrap>
                                    <S.XError/>
                                </S.XErrorWrap>
                            )}
                        </S.InputWrap>
                        <S.InputWrap>
                            <S.Label>
                                <S.InputLetter inputValues={inputValues.password}>비밀번호</S.InputLetter>
                                <S.Input inputValues={inputValues} type="password" onChange={handleChange} value={inputValues.password} name="password"></S.Input>
                            </S.Label>
                            {(signValidation.pwdValidate===false && inputValues.password!=="") && ( 
                                <S.XErrorWrap>
                                    <S.XError/>
                                </S.XErrorWrap>
                            )}
                        </S.InputWrap>
                        
                        <Info>
                        저희 서비스를 이용하는 사람이 회원님의 연락처 정보를 Instagram에 업로드했을 수도 있습니다. 
                        <a href='https://www.facebook.com/help/instagram/261704639352628'> 더 알아보기</a>
                        </Info>
                        
                        {/* <button type="submit" disabled={isDisable} onClick={handleSubmit}>가입</button> */}
                        <S.BlueBtn ChangeColor={isDisable} type="submit" disabled={isDisable} onClick={handleSubmit}>가입</S.BlueBtn>

                    </S.Form>  

                </S.MainWrap>
            </S.LoginWrap>

            <S.LoginWrap>
                <S.SignWrap>
                    <p>계정이 있으신가요?</p>
                    <Link to="/">로그인</Link>
                </S.SignWrap>
            </S.LoginWrap>
            
            <AppDownload/>
        </S.PageWrap>
    );
};

export default Sign;

// const SignMainWrap = styled(S.MainWrap)`
    /* & p {
        color: rgb(142, 142, 142);
        font-size: 1.7rem;
        font-weight: 600;
        line-height: 2rem;
        margin: 0 4rem 1rem;
        text-align: center;
    } */
// `;
const MainInfo = styled.p `
    color: rgb(142, 142, 142);
    font-size: 1.7rem;
    font-weight: 600;
    line-height: 2rem;
    margin: 0 4rem 1rem;
    text-align: center;
`
export const Info = styled.p`
    color: rgb(142, 142, 142);
    font-size: 1.2rem;
    font-weight: 0;
    line-height: 1.6rem;
    margin: 1rem 4rem;
    text-align: center;
    & a {
        font-weight: bold;
    }
`;