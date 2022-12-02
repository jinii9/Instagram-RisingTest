import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ProfileImg, WriterId as InfoId } from './feed';
import Profile from "../../assets/images/Profile.png";
import { BlueLetterBtn } from '../../components/common/styled';
import PersonItem from '../../components/common/personItem';
import axios from 'axios';

const Recommend = () => {
    const {user} = useSelector((state) => state.ProfileReducer);
    
    const [RecommendData, setRecommendData] = useState([]);    
    // <서버에서 친구 추천 목록 가져오기> 
    useEffect(() => {
            try {
            const localData = window.localStorage.getItem("jwt");
            // console.log("확인확인확인할거", localData);
            const RecommendInfo = async () => {
                const url= "https://cors-anywhere.herokuapp.com/https://clone-instagram.shop:8080/users/recommend_users";
                const res = await axios({
                    method: "get",
                    url: url,
                    headers: {
                        'X-ACCESS-TOKEN': localData
                    }
                });

                console.log("Recommend", res.data.result);
                setRecommendData(res.data.result);
            } 

            RecommendInfo();      

        } catch (error) {
            console.log(error);
        }
    },[])


    // console.log('확인------',RecommendData);

    // 
    // const RecommendData = [
    //     {
    //         id: "1",
    //         userId: "nikebasketball",
    //         userName: "nikebasketball",
    //         reason: "인기",
    //         img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK0AAAB8CAMAAAAsE8D7AAAAYFBMVEUBAQEAAAD///+2trbm5uYZGRljY2NwcHA/Pz/R0dEjIyP6+voqKip5eXk5OTmenp4JCQnu7u5OTk6lpaUwMDCFhYXIyMiwsLD09PRpaWnCwsLc3NyYmJgQEBCSkpKMjIyp9j2oAAACKElEQVR4nO2Wi26CQBREucuCCALy8AFW/f+/LLAUtaVKwSmazNHEGODu5DC6WNZ7IVevgV8Gn/j0eW8G3eKgWxx0i4NucdAtDrolBjYBB93ioFscdIuDbnHQLQ66JQY2AQfd4qBbHHSLg25x0C0OusVBt8TAJuCY7EJuvj4aIbO6rZZ3Bo6RGmc9adGJbkXC1ZCr6jOPkRtGa5nNbTUitB9OaaSKG5e7xXriolPcVp/RvrjT2zar4xVlonde7dW6f6+gbp2DduTXMUbqYrdUSn848vuJwxcc77bCVvbXz7w70p0s4qeb5V4ptSyOJur9e4V1K4VScd+Qxqkf2gdVY7vt39x0Rrut3rlW6tRzRCRyY5NU6Wwlt15ncitZlSa7sdZIjc6lVm3WU/6Mul7mj3VriRfUeXK5KqqkCztpclbHgm0hl1bP61YkbmKV0uFly0R1NHV9lUcRWbW3W4fpyvfczVZdoeM1Iur4X1naRUv0IQmusybnSKTnmhmbcFb9BNtFW9fnM97tqT9sW9c/zwO73fRETeIcpdUsOtpt+iOr3uTft+GXcSvlbVZgXS+LjneR60vUxE6lex58RbeW+FmzGQQHO/T/ZycY76IuQ7UruGnuDNlf53X79bAt8rTnwQFLIl28ktsZoFtiYBNw0C0OusVBtzjoFgfd4qBbYmATcNAtDrrFQbc46BYH3eKgWxx0SwxsAg66xUG3OOgWB93ioFscdIviEwijHMZYoYicAAAAAElFTkSuQmCC",
    //     },
    //     {
    //         id: "2",
    //         userId: "adidas",
    //         userName: "adidas",
    //         reason: "인기",
    //         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGlDWndjle6fP9xyMwy0SLjePNhGmEaA7EyfgcxO5PWxJYqy1dnWi9bLWpVeoN2B6rn8Q&usqp=CAU",
    //     },
    //     {
    //         id: "3",
    //         userId: "puma",
    //         userName: "puma",
    //         reason: "인기",
    //         img: "https://post-phinf.pstatic.net/MjAxOTAyMTVfNTMg/MDAxNTUwMjIwMzc4NTA4.GO-yiNTHCpozOCO93oltny2PKp8SKbgF6orZZ6zaVk8g.XHR7ZZB1Ye8rk9TGaPtKWx8ZScyJx1lc2H6YzRnKqpgg.PNG/puma_2003.png?type=w1200",
    //     },
    // ]
    return (
        <Wrap>
            {/* userId: {user.userId} */}
            <MyProfileWrap>
                <Link to={'/'}>
                    <ProfileWrap>
                        {user.IMG===undefined ? (
                            <img alt='작성자의 프로필 사진' src={Profile}/>

                        ) : (
                            <img alt='작성자의 프로필 사진' src={user.IMG}/>
                        )}
                    </ProfileWrap>
                </Link>
                <ProfileInfo>
                    <InfoId>{user.userName}</InfoId>
                    <InfoName>{user.realName}</InfoName>
                </ProfileInfo>
                <BlueLetterBtn>전환</BlueLetterBtn>
            </MyProfileWrap>

            <RecommendWrap>
                <RecommendHeader>
                    <p>회원님을 위한 추천</p>
                    <Link to={''} style={{'marginLeft':'0.8rem'}}>모두 보기</Link>
                </RecommendHeader>

                <RecommendSection>
                    {RecommendData.map((data,index) => (
                            <PersonItem key={index} data={data}/>
                    ))}
                    
                </RecommendSection>
                
            </RecommendWrap>
        </Wrap>
    );
};

export default Recommend;

const Wrap = styled.div`
    width: 31.9rem;
    /* height: 100vh; */
`;
export const MyProfileWrap = styled.div`
    height: 6.6rem;
    margin-bottom: 1rem;
    margin-top: 4.6rem;

    display: flex;
    justify-content: center;
    align-items: center;

    padding-left: 1.3rem;

`;
const ProfileWrap = styled(ProfileImg)`
    width: 5.6rem;
    height: 5.6rem;
    margin-right: 1.2rem;
`;
export const ProfileInfo = styled.div`
    flex: 1 1 auto;
`;
export const InfoName = styled(InfoId)`
    font-weight: 400;
    color: #8e8e8e;
`;
const ProfileChange = styled.div`

`;


const RecommendWrap = styled.div`
    width: calc(100% + 1.5rem);

`;
const RecommendHeader = styled.div`
    padding: 0.4rem 1.6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;

    & p{
        color: #8e8e8e;
        font-size: 1.4rem;
        line-height: 1.8rem;
    }
    & a {
        font-size: 1.2rem;
        line-height: 1.6rem;
    }
`;


const RecommendSection = styled.div`
    padding: 0.8rem 0;
    display: flex;
    flex-direction: column;

`;



