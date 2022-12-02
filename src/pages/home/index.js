import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import { PostDATAS } from "../../assets/datas/postDATA";
import Header from "../../components/common/header"
// import { PageWrap, HeaderWrap, Section, LoginWrap, FooterWrap, HeaderStyle, MainPageWrap } from '../../components/common/styled';
import { HeaderWrap, LoginWrap} from '../../components/common/styled';
import { profileAction } from "../../store/actions/profile";
import LoginReducer from "../../store/reducers/login";
import ProfileReducer from "../../store/reducers/profile";
import Footer from "../login/footer";
import Feed from "./feed";
import LiveStory from "./liveStory";
import Recommend from "./recommend";
import ServerFeed from "./ServerFeed";

const HomePage = () => {
    // const {user} = useSelector((state) => state.ProfileReducer);
    // console.log(user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const [ServerFeedData, setServerFeedData] = useState([]);
    useEffect(() => {
        try {
            const localData = window.localStorage.getItem("jwt");

            // <<<<<<<<<<<<<<피드(게시물) 리스트 조회 API>>>>>>>>>>>>>>>
            const FeedList = async () => {
                const url= "https://cors-anywhere.herokuapp.com/https://clone-instagram.shop:8080/postlist";
                const res = await axios({
                    method: "get",
                    url: url,
                    headers: {
                        'X-ACCESS-TOKEN': localData
                    }
                });  
                // console.log("FeedList", res.data.result);              
                setServerFeedData(res.data.result);
            }


            // <<<<<<<<<<<<<<내 프로필 조회 API>>>>>>>>>>>>>>>
            const ProfileInfo = async () => {
                const url= "https://cors-anywhere.herokuapp.com/https://clone-instagram.shop:8080/users/myprofile";
                const res = await axios({
                    method: "get",
                    url: url,
                    headers: {
                        'X-ACCESS-TOKEN': localData
                    }
                });

                console.log("Home", res.data);
                // 프로필 정보 리덕스에 저장
                let profileNull = res.data.img_url;
                if(res.data.img_url===undefined){
                    profileNull = "http://localhost:3000/static/media/Profile.8d49e377c7c342895ec2.png";
                }
                // console.log(profileNull);
                dispatch(
                    profileAction({
                        userName: res.data.result.id,
                        realName: res.data.result.nickname,
                        profileImg: profileNull
                    })
                )

            }

            // <<<<<<<<<<<<<<자동로그인 API>>>>>>>>>>>>>>>
            const AutoLogin = async () => {
                // const localData = window.localStorage.getItem("jwt");
                console.log(localData);
                const url = "https://cors-anywhere.herokuapp.com/https://clone-instagram.shop:8080/autologin";

                const res = await axios({
                    method: "post",
                    url: url,
                    headers: {
                        'X-ACCESS-TOKEN': localData
                      }
                });
                console.log('Home자동로그인jwt:',localData);
                console.log('Home자동로그인:',res.data);
                if(!res.data.isSuccess){
                    navigate("/login");
                } else {
                    // jwt 인증 성공한다면
                    ProfileInfo();
                    FeedList();
                }
            }

            AutoLogin();

        } catch (error) {
            console.log(error);
        }
    },[]);

    console.log("게시글 지울 수 있는 리스트:",ServerFeedData);

    return (
        <PageWrap>
                <HeaderWrap>
                    <Header />
                </HeaderWrap> 

                <Section>
                    <RightSection>
                        <LiveStory/>
                        {/* Feed 맵핑 */}
                        {/* {ServerFeedData.map((data) => (
                            <ServerFeed data={data} key={data.id}/>
                        ))} */}
                        {ServerFeedData.slice(0).reverse().map((data) => (
                            <ServerFeed data={data} key={data.id}/>
                        ))}
                        {/* {PostDATAS.map((data) => (
                        <Feed data={data} key={data.id}/>
                        ))} */}
                    </RightSection>
                    <LeftSection>
                        <Recommend/>
                        {/* <Footer/> */}
                    </LeftSection>
                </Section>       
        </PageWrap>
        // <>
        //     <PageWrap style={{'border':'1px solid red'}}>
        //         <HeaderWrap>
        //             <Header />
        //         </HeaderWrap>
                
        //         <Section style={{'border':'1px solid red'}}>
        //             <HeaderStyle>
        //                 <MainWrap>
        //                     <LiveStory />
        //                     <Feed />
        //                     {/* {PostDATAS.map((data) => (
        //                         <Feed data={data} key={data.id}/>
        //                     ))} */}
        //                 </MainWrap>
        //                 <RecommendWrap><Recommend/></RecommendWrap>
        //             </HeaderStyle>
        //         </Section>

        //         {/* <FooterWrap>
        //             <Footer/>
        //         </FooterWrap> */}
        //     </PageWrap>
        // </>
    )
}

export default HomePage;

//

const PageWrap = styled.div`
/* border: 1px solid red; */
/* height: 100vh; */
height: 100%;
background-color: rgb(250, 250, 250);
display: flex;
flex-direction: column;
align-items: center;
`;
const Section = styled.div`
width: 82.1rem;
height: 100%;
display: flex;
`;
const RightSection = styled.div`
margin-right: 3.2rem;
box-sizing: border-box;
width: 100%;
`;
const LeftSection = styled.div`
display: flex;
flex-direction: column;
`;

//
const HomeWrap = styled(HeaderWrap)`
    /* z-index: 3;
    top: 0;
    left: 0;
    right: 0;
    position: fixed; */
`;

const RecommendWrap = styled.div``;


const MainWrap = styled(LoginWrap)`
    margin-top: 1rem;
    margin-right: 3.2rem;
    /* border: 1px solid red; */
`;