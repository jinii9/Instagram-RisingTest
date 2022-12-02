import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import './slick-carousel/slick/slick.css';
import './slick-carousel/slick/slick-theme.css';
import * as S from '../pages/home/feed';
import {ReactComponent as DotNav} from "../assets/images/DotNav.svg";
import {ReactComponent as Heart} from "../assets/images/Heart.svg";
import Profile from "../assets/images/Profile.png";
import { Link } from 'react-router-dom';
import {ReactComponent as Plane} from "../assets/images/Plane.svg"
import {ReactComponent as Message} from "../assets/images/Message.svg"
import {ReactComponent as Save} from "../assets/images/Save.svg"
import {ReactComponent as Emoji} from "../assets/images/Emoji.svg"

// 슬라이드
export function Slide ({IMGdata}) {
    
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
        <Slider {...settings}>
            {IMGdata.map((data, index) => ( 
                <div key={index}>
                    <SlideImg>
                        <img alt="피드 사진" src={data}/>
                    </SlideImg>
                </div>
                
            ))}
        </Slider>
    )
}

// 댓글
function CommentItem ({item}) {
    console.log(item);
    return(
        <HeartWrap>
            <ItemComment>
                <S.ProfileWrap style={{'align-items':'flex-start', 'margin':'0'}}>
                
                    <S.ProfileImg style={{'margin-right':'1.8rem'}}>
                        <Link to={""}><img alt='댓글 작성자의 프로필 사진' src={item.userProfile}/></Link>
                    </S.ProfileImg>
                </S.ProfileWrap>
                    <InfoWrap>
                        <h2>{item.userName}</h2>
                        <p>
                            {item.commentWriting}
                        </p>
                        <Detail>
                            <Time>5시간</Time>
                            <CommentBtn>답글 달기</CommentBtn>
                            <Translate>번역 보기</Translate>
                        </Detail>
                    </InfoWrap>
            </ItemComment>
            <div>
                <HeartBtn>
                        <Heart width='12'/>
                </HeartBtn>
            </div>
        </HeartWrap>

    )
}

const PostView = ({postViewData}) => {
    // 받은 게시물조회 데이터
    const data = postViewData.data;
    const handleSubmitComment = () => {

    }
    return (
        <>
            <Wrap>
                <LeftSection>
                    <Slide IMGdata={data.img}/>
                </LeftSection>
                
                <RightSection>
                    <Article>
                        {/* 상단 */}
                        <S.Header style={{'border-bottom':'1px solid rgb(239, 239, 239)'}}>
                            <S.ProfileWrap>
                                <S.ProfileImg>
                                    <Link to={""}><img alt='작성자의 프로필 사진' src={data.userProfile}/></Link>
                                </S.ProfileImg>
                                <S.WriterId>
                                    {data.userName}
                                </S.WriterId>
                            </S.ProfileWrap>
                            <S.DotNavWrap>
                                <S.DotNavBtn><DotNav/></S.DotNavBtn>
                            </S.DotNavWrap>
                        </S.Header>

                        {/*  */}
                        <Section>
                            {/* <CommentWrap> */}
                                {/* 게시자가 쓴 글*/}
                                <Comment>
                                    <S.ProfileWrap style={{'align-items':'flex-start', 'margin':'0'}}>
                                    
                                        <S.ProfileImg style={{'margin-right':'1.8rem'}}>
                                            <Link to={""}><img alt='작성자의 프로필 사진' src={data.userProfile}/></Link>
                                        </S.ProfileImg>
                                    </S.ProfileWrap>

                                    <InfoWrap>
                                        <h2>{data.userName}</h2>
                                        <p>
                                            {data.writing}
                                        </p>
                                        <Detail>
                                            <Time>5시간</Time>
                                            <Translate>번역 보기</Translate>
                                        </Detail>
                                    </InfoWrap>
                                </Comment>
                                {/*댓글 리스트*/}
                                {(data.comment).map((item,index) => (
                                        // <div key={item}>
                                            <CommentItem key={index} item={item}/>
                                        // </div>
                                ))}
                        </Section>
                    </Article>
                    {/*  */}
                    <Footer>
                        <PostIconWrap>
                            <S.ThreeWrap>
                                <S.IconBtn heart type='button' ><Heart /></S.IconBtn>
                                
                                <S.IconBtn type='button'><Message/></S.IconBtn>
                                <S.IconBtn type='button'><Plane/></S.IconBtn>
                            </S.ThreeWrap>
                            <S.IconBtn save type='button'><Save width="24" height="24"/></S.IconBtn>
                        </PostIconWrap>
                        <S.GoodWrap>좋아요 1,000개</S.GoodWrap>
                        
                        <S.OptionWrap>
                            <S.Date>2일 전</S.Date>
                        </S.OptionWrap>

                        <S.CommentForm onSubmit={handleSubmitComment}>
                            <PostIconWrap style={{'borderTop':'1px solid rgb(239, 239, 239)'}}>
                                <S.IconBtn heart type='button' ><Emoji/></S.IconBtn>
                                {/* <EmojiWrap><Emoji/></EmojiWrap> */}
                                <textarea placeholder="댓글 달기..." autoComplete='off' autoCorrect='off'></textarea>
                                {/* <CommentBtn></CommentBtn> */}
                                <S.IconBtn CommentLetter type='button' ><p>게시</p></S.IconBtn>
                            </PostIconWrap>
                        </S.CommentForm>
                    </Footer>
                </RightSection>
            </Wrap>
        </>
    );
};

export default PostView;
export const PostIconWrap = styled(S.IconWrap)`
    padding: 0.6rem 1.6rem;
    /* border-top:1px solid rgb(239, 239, 239) */
`;
export const Wrap = styled.div`
    padding: 0;
    width: 100%;
    height: 100%;
    /* height: 100vh; */
    display: flex;
    overflow-x: hidden;
`;
export const LeftSection = styled.div`
    /* flex: 1 1 auto; */
    width: 60%;
    height: 100%;
    overflow-y: hidden;
    background-color: black;
    text-align: center;
    /* display:flex; */
    /* justify-content: center; */
    
    /* align-items: center; */
`;
export const RightSection = styled.div`
    /* flex: 5 0 auto; */
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const Article = styled.div``;
const Section = styled.div`
    padding: 1.6rem 1.6rem;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
`;
const Comment = styled.div`
    margin-top: -0.5rem;
    margin-right: -0.2;
    padding-top: 1.2rem;

    display: flex;
    /* justify-content: center; */
`;
const ItemComment = styled(Comment)`
    width: 100%;
    justify-content: flex-start;
`;

const InfoWrap = styled.span`
    font-size: 1.4rem;
    line-height: 1.8rem;
    & h2 {
        display: inline;
        font-weight: bold;
        margin-right: 0.5rem;
    }
    & p {
        display: inline;
        white-space: pre-line;
    }
`;
const Detail = styled.div`
    margin-top: 0.8rem;
    margin-bottom: 0.4rem;
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 1.6rem;
    color: #8e8e8e;
`;
const Time = styled.div`
    margin-right: 1.2rem;
`;
const Translate = styled.div`
    font-weight: bold;
    cursor: pointer;
`;
const CommentBtn = styled.button`
    font-size: 1.2rem;
    font-weight: 1.6rem;
    color: #8e8e8e;

    font-weight: bold;
    cursor: pointer;
    margin-right: 1.2rem;

    border: none;
    background-color: transparent;

`;
const HeartWrap = styled.div`
    display: flex;
    /* justify-content: stretch; */
    justify-content: space-between;

    width: 100%;
`;
const HeartBtn = styled.button`
    /* display: flex; */
    margin-top: 0.9rem;
    border: none;
    background-color: transparent;
`;


// Footer
const Footer = styled.div`
    align-self: flex-end;
    width: 100%;
`;




// 슬라이드 styled component
const SlideImg = styled.div`

    & img {
  

        width: 100%;
        height: 100vh;
        object-fit: cover;
        /* width: 50rem; */
    }

`;