import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from '../../components/postView';
import {ProfileWrap, ProfileImg, WriterId, IconBtn, CommentForm} from '../home/feed';
import Profile from "../../assets/images/Profile.png";
import Slider from 'react-slick';
import '../../components/slick-carousel/slick/slick.css';
import '../../components/slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import {Wrap, Header} from '.';
import {ReactComponent as BackArrow} from "../../assets/images/BackArrow.svg"
import {ReactComponent as Emoji} from "../../assets/images/Emoji.svg"
import {ReactComponent as Location} from "../../assets/images/Location.svg"
import {ReactComponent as Arrow} from "../../assets/images/Arrow.svg"
import { useDispatch } from 'react-redux';
import { createPostAction } from '../../store/actions/modal';
import axios from 'axios';
// import { post } from 'axios';
function Slide ({File}) {
    
    // 슬라이드 셋팅
    const settings = {
        className: "",
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    }; 
    // console.log("슬라이드")
    return (
        <Slider {...settings} style={{'height': '100%'}}>
            {File.map((data, index) => ( 
                // <div key={index}>
                    <SlideImg key={index}>
                        <img alt="피드 사진" src={data}/>
                    </SlideImg>
                // </div>
                
            ))}
        </Slider>
    )
}
const SlideImg = styled.div`
     height: 100%;
     /* width: 100%; */
     height: 75vh;
     /* border: 3px solid red; */
    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        /* width: 50rem; */
    }

`;
const CreatePostFinal = ({File, originalFile}) => {
    console.log("File확인확인확인:", File);
    // console.log("File확인확인확인:", originalFile);

    const [inputValues, setInputValues] = useState({
        image: File,
        content: "",
        location: "",
        openLevel: "public"
    });
    const [originalValues, setOriginalValues] = useState({
        content: "",
        location: "",
        openLevel: "public"
    })
    const [count, setCount] = useState();
    const dispatch = useDispatch();

    const handleCount = (e) => {
        let count = e.target.value.replace(/<br\s*\/?>/gm, "\n").length;
        setCount(count);
        // 동시에 input 값도 넣기
        setInputValues({
            ...inputValues,
            [e.target.name]: e.target.value,
        })
    }
    const handleChange = (e) => {
                // 
                setOriginalValues({
                    ...originalValues,
                    [e.target.name]: e.target.value,
                })
        setInputValues({
            ...inputValues,
            [e.target.name]: e.target.value,
        })

    }

    const handleShare = () => {
        // 모달창 닫기
        try {
        console.log("모달창 닫기");
        dispatch(
            createPostAction({
            createPost: false,
            }),
        );

        // ------------------------------------<form-data 이용X -> 피드 생성 API>
        // (이미지 url로 그냥 보내는...)
        const localData = window.localStorage.getItem("jwt");
        console.log('localData:',localData);
        console.log("ddddddddddddddddddddddddddddddddd:", inputValues.image);
        const FeedCreate = async () => {

            const url= "https://cors-anywhere.herokuapp.com/https://clone-instagram.shop:8080/post/create/demo";
            const res = await axios({
                method: "post",
                url: url,
                data: inputValues,
                headers: {
                    'X-ACCESS-TOKEN': localData
                }
            });

            console.log("Create:", res.data);
        } 
        FeedCreate();            


        // ------------------------------------<form-data 이용 -> 피드 생성 API>
        // const FeedCreate = async () => {
        //     const localData = window.localStorage.getItem("jwt");
            // console.log("체크체크1", originalFile);
            // console.log("체크체크2",inputValues);
            // console.log("체크체크3:", originalValues);

            // const url = "https://cors-anywhere.herokuapp.com/https://clone-instagram.shop:8080/post/create"
            // let formData = new FormData();
            // formData.append('image', originalFile);
            
            
            // const blob = new Blob([JSON.stringify(originalValues)], {type: "application/json"}) ;

            // formData.append("post",blob); // 또는  formData.append("data", JSON.stringify(value)); // JSON 형식으로 파싱.(백엔드의 요청에 따라 전송방식이 달라진다.)
            // console.log("체크:", blob)



            // const res = await axios({
            //     method: "POST",
            //     url: url,
            //     headers: {
            //         "X-ACCESS-TOKEN": localData,
            //         "Content-Type": `multipart/form-data"; boundary=${formData._boundary}`, // Content-Type을 반드시 이렇게 하여야 한다.
            //     },
            //     data: formData, // data 전송시에 반드시 생성되어 있는 formData 객체만 전송 하여야 한다.
            // })
            // console.log("체크:", res.data)


        // }
        // FeedCreate();
        } catch (error) {
            console.log(error);
        }
    }
    // console.log("체크체크",inputValues);

    return (
        <Wrap style={{'lineHeight':'0rem'}}>
            <Header2>
            <button><BackArrow/></button>
                <p>새 게시물 만들기</p>
            <button onClick={handleShare}>공유하기</button>
            </Header2>

            <Section>
                <S.LeftSection style={{'width': '90%'}}>
                    <Slide File={File} style={{'height': '100%'}}/>
                </S.LeftSection>

                <S.RightSection style={{'justifyContent': 'flex-start'}}>
                    <ProfileWrap>
                        <ProfileImg>
                            <Link to={""}><img alt='작성자의 프로필 사진' src={Profile}/></Link>
                        </ProfileImg>
                        <WriterId>
                            테스트ID
                        </WriterId>
                    </ProfileWrap>
                    
                    {/*  */}
                    <MainWrap>
                        <TextArea
                            palceholder="글자 입력"
                            maxLength={2200}
                            name="content"
                            onChange={handleCount}
                        ></TextArea>
                        <S.PostIconWrap>
                                <IconBtn heart type='button' ><Emoji fill='#8e8e8e' height="20"/></IconBtn>
                                {/* <textarea palceholder="댓글 달기" autoComplete='off' autoCorrect='off'></textarea> */}
                                <CountWrap CommentLetter type='button' disabled='disabled'><p>{count}/2,200</p></CountWrap>
                        </S.PostIconWrap>
                    </MainWrap>


                    <Option>
                        <S.PostIconWrap>
                            <textarea placeholder="위치 추가" name="location" onChange={handleChange}></textarea>
                            <IconBtn save type='button'><Location width="16" height="16"/></IconBtn>
                        </S.PostIconWrap>
                    </Option>
                    <Option>
                        <S.PostIconWrap>
                            {/* <textarea palceholder="위치 추가"></textarea> */}
                            <p style={{'fontWeight':'100'}}>접근성</p>
                            <IconBtn save type='button' style={{'transform':'rotate(180deg)'}}><Arrow/></IconBtn>
                        </S.PostIconWrap>
                    </Option>
                    <Option>
                        <S.PostIconWrap>
                            <p style={{'fontWeight':'100'}}>고급 설정</p>
                            <IconBtn save type='button' style={{'transform':'rotate(180deg)'}}><Arrow/></IconBtn>
                        </S.PostIconWrap>
                        <hr style={{'margin':'0', 'border':'1px solid rgb(239, 239, 239)'}}/>

                    </Option>
                </S.RightSection>
            </Section>
        </Wrap>
    );
};

export default CreatePostFinal;

const Header2 = styled.div`
    width: 100%;
    height: 4.3rem;
    display:flex;
    align-items: center;
    justify-content: space-between;
    overflow-x: hidden;
    overflow-y: hidden;
    border-bottom:1px solid rgb(239, 239, 239);

    & button {
        background-color: transparent;
        border: none;
        padding: 0.8rem;
        color: rgb(0, 149, 246);
        font-size: 1.4rem;
        font-weight: 600;
        cursor: pointer;
    }

`
const Section = styled.div`
    width: 100%;
    flex: 1 1 auto;
    display: flex;
`;
const MainWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

`;
export const TextArea = styled.textarea`
        width: 100%;
        padding: 0.6rem 1.6rem;
        height: 16.8rem;
        
        /* flex-grow: 1; */
        border: none;
        outline: none;
        resize: none;
        line-height: 1.8rem;
        
        &::placeholder {
        background-color: red;
        color: rgba(255, 255, 255, 0.5);
        /* opactiy: 1; */
    }
`;
const CountWrap = styled(IconBtn)`
    cursor: auto;
    p {
        color: #c7c7c7;
        font-weight: 100;
        font-size: 1.2rem;
        line-height: 1.6rem;
    }
`;
const Option = styled(CommentForm)`
    height: 4.4rem;
    & textarea::placeholder {
        color: #8e8e8e;
        font-weight: 400;
        font-size: 1.6rem;
    }
`