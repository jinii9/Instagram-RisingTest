import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {ProfileImg} from '../pages/home/feed';
import { BlueBtn } from '../pages/login/login';
// import { InputWrap, Label } from '../pages/login/login';

const ProfileEdit = () => {
    const {user} = useSelector((state) => state.ProfileReducer);
    const [inputValues, setInputValues] = useState({
        realName: "",
        userName: "",
        intro: "",
        email: "",
        phone: "",
        sex: "",
        recommend: true,
    });
    const handleChange = (e) => {
        setInputValues({
            ...inputValues,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <Wrap>
            <ImgEdit>
                <ProfileWrap>
                        <img alt='작성자의 프로필 사진' src={user.IMG}/>
                </ProfileWrap>
                <ImgInfo>
                    <p>{user.userName}</p>
                    <button>프로필 사진 바꾸기</button>
                </ImgInfo>
            </ImgEdit>
            <EditForm>
                <InputWrap>
                    <Label>
                        <InputLetter>이름</InputLetter>
                        <InfoWrap>
                            <Input inputValues={inputValues.realName} type="text" onChange={handleChange} value={user.realName} name="realName"></Input>
                            <p>사람들이 이름, 별명 또는 비즈니스 이름 등 회원님의 알려진 이름을 사용하여 회원님의 계정을 찾을 수 있도록 도와주세요.</p>
                            <p>이름은 14일 안에 두 번만 변경할 수 있습니다.</p>
                        </InfoWrap>    
                    </Label>
                </InputWrap>
                <InputWrap>
                    <Label>
                        <InputLetter>사용자 이름</InputLetter>
                        <InfoWrap>
                            <Input inputValues={inputValues.userName} type="text" onChange={handleChange} value={user.userName} name="userName"></Input>
                            <p>대부분의 경우 이후 14일 동안 사용자 이름을 다시 {user.userName}(으)로 변경할 수 있습니다.</p>
                        </InfoWrap>    
                    </Label>
                </InputWrap>
                <InputWrap>
                    <Label>
                        <InputLetter>웹사이트</InputLetter>
                        <InfoWrap>
                            <Input disabled placeholder="웹사이트" type="text" ></Input>
                            <p>링크 수정은 모바일에서만 가능합니다. Instagram 앱으로 이동하여 프로필의 소개에서 웹사이트를 변경하여 수정하세요.</p>
                        </InfoWrap>    
                    </Label>
                </InputWrap>
                <InputWrap>
                    <Label>
                        <InputLetter>소개</InputLetter>
                        <InfoWrap style={{'margin-bottom':'1.6rem'}}>
                             <textarea autoComplete='off' autoCorrect='off'></textarea>
                        </InfoWrap>    
                    </Label>
                </InputWrap>
                <InputWrap>
                    <Label>
                        <InputLetter>이메일</InputLetter>
                        <InfoWrap>
                            <Input  inputValues={inputValues} type="text" onChange={handleChange} name="email"></Input>
                        </InfoWrap>    
                    </Label>
                </InputWrap>
                <InputWrap>
                    <Label>
                        <InputLetter>전화번호</InputLetter>
                        <InfoWrap>
                            <Input  inputValues={inputValues} type="text" onChange={handleChange} name="phone"></Input>
                        </InfoWrap>    
                    </Label>
                </InputWrap>
                <InputWrap>
                    <Label>
                        <InputLetter>성별</InputLetter>
                        <InfoWrap>
                            <Input  inputValues={inputValues} type="text" onChange={handleChange} name="sex" value={"밝히고 싶지 않음"}></Input>
                        </InfoWrap>    
                    </Label>
                </InputWrap>
                <InputWrap>
                    <Label>
                        <InputLetter>비슷한 계정 추천</InputLetter>
                        <RecommendCheck>
                            <input type={"checkbox"}></input>
                            <p>팔로우할 만한 비슷한 계정을 추천할 때 회원님의 계정을 포함합니다.<bold>[?]</bold></p>
                        </RecommendCheck>
                    </Label>
                </InputWrap>

                <SubmitWrap>
                    <SubmitSubWrap>
                        <BlueBtn type="submit">제출</BlueBtn>
                        <Link to={""}><p>일시적으로 내 계정 비활성화하기</p></Link>
                    </SubmitSubWrap>
                </SubmitWrap>
            </EditForm>
        </Wrap>
    );
};

export default ProfileEdit;

const Wrap = styled.div`
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    /* margin-left: 12.4rem; */
`
const ImgEdit = styled.div`
    margin-top: 3.2rem;
    display: flex;
`;
const ProfileWrap = styled(ProfileImg)`
    width: 3.8rem;
    height: 3.8rem;
    margin-right: 3.2rem;
    margin-left: 16rem;
`;
const ImgInfo = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
    & p {
        font-size: 2rem;
        line-height: 2.2rem;
    }
    & button {
        padding: 0;
        background-color: transparent;
        border:none;
        font-size: 1.4rem;
        font-weight: bold;
        line-height: 1.8rem;
        color: #0095f6;
    }
`;
const EditForm = styled.form`
    margin: 1.6rem 0;
`;
const InputWrap = styled.div`
    margin-bottom: 1.6rem;
`;
const Label = styled.label`
    display: flex;
    font-size: 1.6rem;
    line-height: 1.8rem;
    font-weight: bold;
`;
const InputLetter = styled.div`
    padding-right: 3.2rem;
    width: 19.4rem;
    text-align: end;
`;
const InfoWrap = styled.div`
    flex: display;
    flex-direction: column;
    width: 35.5rem;
    & p {
        font-weight: 100;
        font-size: 1.2rem;
        color: #8e8e8e;
        margin-bottom: 1.6rem;
    }
    & textarea {
        /* border: none; */
        padding: none;
        border: 1px solid rgb(219, 219, 219);
        outline: none;
        resize: none;
        height: 6rem;
        /* width: calc(100%-1%); */
        width: 100%;
        overflow-y: scroll;

    }
`;
const Input = styled.input`
    padding: 0 1rem;
    box-sizing: border-box;
    width: 100%;
    height: ${(props) => (props.Intro ? '6rem' : '3.2rem')};
    /* overflow-y: ${(props) => (props.Intro ? 'scroll' : 'auto')}; */
    /* overflow-y: scroll; */
    border: 1px solid rgb(219, 219, 219);
    margin-bottom: 1.6rem;
`;
const RecommendCheck = styled.div`
    display: flex;
    & p {
        width: 40%;
        margin-left: 0.5rem;
    }
    & bold {
        color: #0095f6;
    }
`;
const SubmitWrap = styled(InputWrap)`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;

`;
const SubmitSubWrap = styled.div`
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;

    & p {
        font-weight: bold;
        font-size: 1.4rem;
        color: #0095f6;
        margin-left: 5rem;
    }
`;
