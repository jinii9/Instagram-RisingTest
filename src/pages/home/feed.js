import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import styled from 'styled-components';
import {ReactComponent as DotNav} from "../../assets/images/DotNav.svg";
import Profile from "../../assets/images/Profile.png";
import '../../slick-carousel/slick/slick.css';
import '../../slick-carousel/slick/slick-theme.css';
import {ReactComponent as Heart} from "../../assets/images/Heart.svg"
import {ReactComponent as FillHeart} from "../../assets/images/FiilHeart.svg"
import {ReactComponent as Plane} from "../../assets/images/Plane.svg"
import {ReactComponent as Message} from "../../assets/images/Message.svg"
import {ReactComponent as Save} from "../../assets/images/Save.svg"
import {ReactComponent as FillSave} from "../../assets/images/FillSave.svg"
import {ReactComponent as Emoji} from "../../assets/images/Emoji.svg"
import { useDispatch, useSelector } from 'react-redux';
import { saveAction } from '../../store/actions/profile';
import { postViewAction } from '../../store/actions/modal';
import PostViewModal from '../../components/postViewModal';

// 슬라이드
function Slide ({IMGdata}) {
    
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
                    <SlideImg2>
                        <img alt="피드 사진" src={data}/>
                    </SlideImg2>
                </div>
                
            ))}
        </Slider>
    )
}

const SlideImg2 = styled.div`

    & img {
        /* position: absolute; */
        /* margin: 0; */
        /* padding: 0; */    

        width: 100%;
        height: 47rem;
        object-fit: cover;
    }

`;


// 인스타 피드 컴포넌트
const Feed = ({data}) => {
    // console.log("Feed", data);
    const dispatch = useDispatch();
    const [commentCount, setCommentCount] = useState();
    const [heartCheck, setHeartCheck] = useState(false);
    const [saveCheck, setSaveCheck] = useState(false);
    const [heartCount, setHeartCount] = useState(100);
    //모달창 준비
    const {postView} = useSelector((state) => state.ModalReducer);

    // const [modalIsOpen, setIsOpen] = React.useState(false);

    useEffect(() => {
        setCommentCount(data.comment.length);
    },[]);

    const handleHeart = () => {
        setHeartCheck(!heartCheck);
        if(heartCheck){
            setHeartCount(heartCount-1);
        } else {
            setHeartCount(heartCount+1);

        }
        // console.log('하트핱');
    }
    const handleSave = () => {
        setSaveCheck(!saveCheck);
        // console.log("피드 확인확인");
        // console.log(data.id);
        dispatch(
            saveAction({
                id: data.id,
                userName: data.userName,
                userProfile: data.userProfile,
                img: data.img,
                goodCount: data.goodCount,
                writing: data.writing,
                commentCount: data.commentCount,
                comment: data.comment
            })
        )
    }

    function openModal() {
        console.log("체크합시다")
        // setIsOpen(true);
        dispatch(
          postViewAction({
              postView: true,
          }),
        );

    }

    const handleSubmitComment = () => {

    }
    

    return (
        <Wrap>
            <FeedWrap>
                <Header>
                    <ProfileWrap>
                        <ProfileImg>
                            {/* <Link to={""}><img alt='작성자의 프로필 사진' src='https://cors-anywhere.herokuapp.com/https://instagram.fcok10-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fcok10-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=BYqIec9vk6gAX-IClv-&edm=AClPCLABAAAA&ccb=7-5&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-5&oh=00_AfD3Wf6D6KXpPkDMxI097dq9z8CvfnVneGL5zKEbMdWeyA&oe=63651E4F&_nc_sid=17ef2a'/></Link> */}
                            <Link to={""}><img alt='작성자의 프로필 사진' src={data.userProfile}/></Link>
                        </ProfileImg>
                        <WriterId>
                            {data.userName}
                        </WriterId>
                    </ProfileWrap>
                    <DotNavWrap>
                        <DotNavBtn><DotNav/></DotNavBtn>
                    </DotNavWrap>
                </Header>

                <Section>
                    {/* 슬라이드 */}
                    <Slide IMGdata={data.img}/>
                </Section>

                <Footer>
                    <IconWrap>
                        <ThreeWrap>
                            <IconBtn heart type='button' onClick={handleHeart}>
                                {heartCheck ? (
                                    <FillHeart/>
                                ) : (
                                    <Heart/>
                                )}
                            </IconBtn>
                            
                            <IconBtn type='button'>
                                <Link to={`/${data.id}`} state={{data}} onClick={openModal}>
                                    <Message/>
                                </Link>
                            </IconBtn>
                            <IconBtn type='button'><Plane/></IconBtn>
                        </ThreeWrap>
                        <IconBtn save type='button' onClick={handleSave}>
                            {/* <Save width="24"/> */}
                            {saveCheck ? (
                                <FillSave width="24"/>
                            ) : (
                                <Save width="24"/>
                            )}
                        </IconBtn>
                    </IconWrap>
                    {/* <GoodWrap>좋아요 {data.goodCount}개</GoodWrap> */}
                    <GoodWrap>좋아요 {heartCount}개</GoodWrap>
                    <PostWrap>
                        <WritingWrap>
                            <Writer>{data.userName}</Writer>
                            <p>{data.writing}</p>
                        </WritingWrap>

                        {/* <WritingWrap>
                            <CommentAll>댓글 100개 모두 보기</CommentAll>
                        </WritingWrap> */}

                        {/* <WritingWrap Comment> */}
                            {/* 댓글 반복 */}
                            {data.comment.length<3 ? (
                                data.comment.map((commentData, index) => (
                                    <WritingWrap Comment key={index}>
                                        <Writer>{commentData.userName}</Writer>
                                        <p>{commentData.commentWriting}</p>
                                    </WritingWrap>                                
                                ))                              
                            ) : (
                                <>
                                    <WritingWrap>
                                        <CommentAll>댓글 {commentCount}개 모두 보기</CommentAll>
                                    </WritingWrap>
                                    <WritingWrap Comment>
                                    <Writer>{data.comment[0].userName}</Writer>
                                    <p>{data.comment[0].commentWriting}</p>
                                    </WritingWrap>
                                    <WritingWrap Comment>
                                    <Writer>{data.comment[1].userName}</Writer>
                                    <p>{data.comment[1].commentWriting}</p>
                                    </WritingWrap>                                    
                                </>
                            )}                            
                    </PostWrap>

                    <OptionWrap>
                        <Date>2일 전</Date>
                        <Translation>번역 보기</Translation>
                    </OptionWrap>

                    {/* <CommentWrap> */}
                        <CommentForm onSubmit={handleSubmitComment}>
                            <IconWrap>
                                <IconBtn heart type='button'><Emoji/></IconBtn>
                                {/* <EmojiWrap><Emoji/></EmojiWrap> */}
                                <textarea placeholder="댓글 달기..." autoComplete='off' autoCorrect='off'></textarea>
                                {/* <CommentBtn></CommentBtn> */}
                                <IconBtn CommentLetter type='button' ><p>게시</p></IconBtn>
                            </IconWrap>
                        </CommentForm>
                    {/* </CommentWrap> */}
                </Footer>
            </FeedWrap>
            {postView && <PostViewModal From="feed"/>}
        </Wrap>
    );
};

export default Feed;

const Wrap = styled.div`
    width: 47rem; /* 인스타그램에서는 @media (min-width: 640px) 사용 */

    margin: 1.6rem -0.1rem 1.2rem -0.1rem;

`;
export const FeedWrap = styled.div`
    background-color: white;
    border-radius: 0.8rem;
    border: 1px solid rgb(219, 219, 219);
    display: flex;
    flex-direction: column;
`;
export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    height: 5.8rem;
`;
export const ProfileWrap = styled.div`
    display: flex;
    align-items: center;
    margin: 0.8rem 0.4rem 0.8rem 1.2rem;
`;
export const ProfileImg = styled.div`
    /* position: absolute;
    top: -5px;
    left: -5px;
    width: 42px;
    height: 42px; */
    /* 이미지 둥글게 만들기 */
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 70%;
    overflow: hidden;
    /* 이미지 둥글게 만들기 */
    & img {
        /* 이미지 둥글게 만들기 */
        width: 100%;
        height: 100%;
        object-fit: cover;
        /* 이미지 둥글게 만들기 */
    }
`;
export const WriterId = styled.div`
    margin-left: 1rem;
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    line-height: 1.8rem;
    font-weight: bold;
    text-align: center;
`;
export const DotNavWrap = styled.div`
    padding-right: 0.4rem;
    display: flex;
    justify-content: center;
`;
export const DotNavBtn = styled.button`
        border: none;
        background-color: transparent;
        padding: 0.8rem;
`;



const Section = styled.div`
    /* width: 100%; */
    /* height: 58.8rem; */
    /* border: 1px solid red; */
`;

export const Footer = styled.div` 
    /* ----------------임시 height 지정------------------------------------ */
    /* height: 269px; */
`;
export const IconWrap = styled.div`
    margin-top: 0.4rem;
    padding: 0rem 1.2rem 0.6rem 1.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

`;
export const ThreeWrap = styled.div`
    display:flex;
`;
export const IconBtn = styled.button`
        position: relative;
        z-index: 2;

        background-color: transparent;
        border: none;
        padding: ${(props) => (props.CommentLetter ? "0rem":"0.8rem")};
        margin-left: ${(props) => (props.heart && "-0.8rem")};
        margin-right: ${(props) => (props.save && "-1rem")};

        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;

        & p {
            color: #0095f6;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            
            font-size: 1.4rem;
            line-height: 1.8rem;
            font-weight: bold;
            width: 2.8rem;
        }
`;
export const GoodWrap = styled.div`
    margin-bottom: 0.8rem;
    padding: 0 1.2rem;
    font-size: 1.4rem;
    line-height: 1.8rem;
    font-weight: bold;
`;
export const PostWrap = styled.div`
    padding: 0 1.2rem;

`;
export const WritingWrap = styled.div`
    font-size: 1.4rem;
    line-height: 1.8rem;

    margin-bottom: ${(props) => (props.Comment? "0.4rem":"0.8rem")};
    & p {
        display: inline;
    }
`;
export const Writer = styled.span`
    display: inline;
    font-weight: bold;

    margin-right: 0.5rem;
`;

export const CommentAll = styled.div`
    color: #8e8e8e;
`;
// const Comment = styled.div``;

export const OptionWrap = styled.div`
    margin-bottom: 1.2rem;
    padding-left: 1.2rem;
    display: flex;
    align-items: center;
    margin-top: 1.2rem;

`;
export const Date = styled.div`
    color: #8e8e8e;
    text-align: center;
    font-size: 1rem;
    line-height: 1.2rem;
    
`;
export const Translation = styled.div`
    font-weight: bold;
    /* text-align: center; */
    padding-left: 0.8rem;
    font-size: 1.2rem;
    line-height: 1.6rem;

`;

export const CommentWrap = styled.div`
    /* height: 4rem;
    display: flex;
    padding: 0.4rem 1.6rem 0.4rem 1.2rem;
    border: 1px solid blue; */
`;
export const CommentForm = styled.form`
    border-top: 1px solid rgb(219, 219, 219);
    & textarea {

        flex-grow: 1;
        border: none;
        outline: none;
        resize: none;
        height: 1.8rem;
        line-height: 1.8rem;

    }
    & textarea::placeholder {
        color: #8e8e8e;
        font-weight: 500;
        font-size: 1.2rem;
    }
`;



















// 슬라이드 styled component
const SlideImg = styled.div`

    & img {
        /* position: absolute; */
        /* margin: 0; */
        /* padding: 0; */    

        width: 100%;
        /* height: 100%; */
        /* object-fit: cover; */
    }

`;