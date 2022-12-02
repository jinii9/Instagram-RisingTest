import React from 'react';
import styled from 'styled-components';
import { StoryDATAS } from '../../assets/datas/storyDATA';
import Slider from 'react-slick';
import '../../slick-carousel/slick/slick.css';
import '../../slick-carousel/slick/slick-theme.css';
import * as S from './feed';
import { Link } from 'react-router-dom';

// 슬라이드
function Slide ({StoryData}) {

    // console.log("확인~~~~~~~~~~~~~~")
    // console.log(StoryData);
    // console.log(StoryData[0].ProfileImg);


    // 슬라이드 셋팅
    const settings = {
        className: "div",
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        adaptiveHeight: true,
        // prevArrow: <SamplePrevArrow />,            
        // nextArrow: <SampleNextArrow />,
    }; 
    // console.log("슬라이드")
    return (
        <Slider {...settings}>
            {StoryData.map((data, index) => ( 
                <ProfileWrap key={index}>
                    <ItemWrap>
                        <ProfileImgWrap>
                            {/* <Link to={""}><img alt='작성자의 프로필 사진' src='https://cors-anywhere.herokuapp.com/https://instagram.fcok10-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fcok10-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=BYqIec9vk6gAX-IClv-&edm=AClPCLABAAAA&ccb=7-5&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-5&oh=00_AfD3Wf6D6KXpPkDMxI097dq9z8CvfnVneGL5zKEbMdWeyA&oe=63651E4F&_nc_sid=17ef2a'/></Link> */}
                            <Link to={""}>
                                <img alt='스토리' src={data.ProfileImg}/>
                            </Link>
                        </ProfileImgWrap>
                        <S.WriterId style={{'fontWeight':'400', 'margin':'0'}}>
                            {data.userName}
                        </S.WriterId>
                    </ItemWrap>
                </ProfileWrap>
            ))}
        </Slider>
    )
}
const ProfileWrap = styled.div`
    /* border: 1px solid blue; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* margin: 0rem; */

`;
const ItemWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const ProfileImgWrap = styled(S.ProfileImg)`
    width: 5rem;
    height: 5rem;
`;



const LiveStory = () => {
    // console.log(StoryDATAS);
    return (
        <Wrap>
            {/* {StoryDATAS.map((data) => ( */}
                <Slide StoryData={StoryDATAS}/>
            {/* ))} */}
        </Wrap>
    );
};

export default LiveStory;

const Wrap = styled.div`
    margin-top: 1.6rem;
    padding: 1.6rem 0;
    border-radius: 0.8rem;
    border: 1px solid rgb(219, 219, 219);
    background-color: white;
    width: 46.6rem;

    display: flex;
    justify-content: center;
    align-items: center;
`;