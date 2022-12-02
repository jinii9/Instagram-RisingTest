import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { ProfileImg } from '../home/feed';
import Profile from "../../assets/images/Profile.png";
import { Link, useNavigate } from 'react-router-dom';
import {ReactComponent as Setting} from "../../assets/images/Setting.svg";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { profileAction } from '../../store/actions/profile';
import { followingAction } from '../../store/actions/modal';
import FollowModal from './followModal';

const ProfileHeader = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {user} = useSelector((state) => state.ProfileReducer);

    const [FollowingCount, setFollowingCount] = useState();
    const [FollowingModalOpen, setFollowingModalOpen] = React.useState(false);
    

    // console.log("프로필");
    // console.log(user);

    useEffect(() => {
        try {
            const localData = window.localStorage.getItem("jwt");
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

                console.log(res.data);
                if(!res.data.isSuccess){
                    navigate("/login");
                } 
            }
            // <내가 팔로우한 사람들 count 위해 리스트 불러오기>
            const FollowList = async () => {
                const url= "https://cors-anywhere.herokuapp.com/https://clone-instagram.shop:8080/users/followees";
                const res = await axios({
                    method: "get",
                    url: url,
                    headers: {
                        'X-ACCESS-TOKEN': localData
                    }
                });

                // console.log("FollowList", res.data.result);
                console.log("FollowList", res.data.result.length);
                setFollowingCount(res.data.result.length);
            } 
            
            
            AutoLogin();
            FollowList();
        } catch (error) {
            console.log(error);
        }
    },[]);


    const [File, setFile] = useState(user.IMG);
    const fileInputRef = useRef(null);

    const handleFileUpload = (e) => {
        const fileList = e.target.files;
        if(fileList[0]) {
            const url = URL.createObjectURL(fileList[0]);
            console.log(url);
            setFile(url);
            // 리덕스에 업뎃
            dispatch(
                profileAction({
                    profileImg: url
                })
            )
        } 
        // else { // 업로드 취소할 시
        //     setFile(Profile);
        // }


    }

    // 모달창 on/off 관리
    const handleFollowingModal = () => {
        setFollowingModalOpen(true);
        dispatch(
            followingAction({
                following: true
            })
        )
    }
    return (
        <Wrap>
            {/* 프로필 사진 업로드 */}
            <ProfileIMGWrap onClick={() => fileInputRef.current.click()}>{/* 클릭될 때마다 파일을 업로드 할 수 있는 창 띄우기 */} 
                {/* <Link to={""}><img alt='작성자의 프로필 사진' src='https://cors-anywhere.herokuapp.com/https://instagram.fcok10-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fcok10-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=BYqIec9vk6gAX-IClv-&edm=AClPCLABAAAA&ccb=7-5&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-5&oh=00_AfD3Wf6D6KXpPkDMxI097dq9z8CvfnVneGL5zKEbMdWeyA&oe=63651E4F&_nc_sid=17ef2a'/></Link> */}
                <img alt='작성자의 프로필 사진' src={File}/>
            </ProfileIMGWrap>
            <input 
                type="file" 
                style={{'display':'none'}}
                accept="image/jpg, image/jpeg, impage/png" 
                onChange={handleFileUpload}
                ref={fileInputRef} />

            {/* 프로필 정보 */}
            <ProfileInfoWrap>
                <InfoWrap>
                    <h2>{user.userName}</h2>
                    <Link to='/accounts/edit/'><Edit>프로필 편집</Edit></Link>
                    <Btn><Setting width="24" height="24"/></Btn>
                </InfoWrap>

                <InfoWrap>
                    <CountWrap>
                        게시물 <span>4</span>
                    </CountWrap>
                    <Link to=''>
                        <CountWrap>팔로워 <span>0</span></CountWrap>
                    </Link>
                    <Link to='/profile/following' onClick={handleFollowingModal}>
                        <CountWrap>팔로우 <span>{FollowingCount}</span></CountWrap>
                    </Link>
                </InfoWrap>

                <InfoWrap>
                    <CountWrap><span>{user.realName}</span></CountWrap>
                </InfoWrap>
            </ProfileInfoWrap>
            {FollowingModalOpen && <FollowModal/>}
        </Wrap>
    );
}

export default ProfileHeader;

const Wrap = styled.div`
    margin-bottom: 4.4rem;
    display: flex;
`;
const ProfileIMGWrap = styled(ProfileImg)`
    width: 15rem;
    height: 15rem;
    margin: 0 10rem 0 7rem;
`;
const ProfileInfoWrap = styled.div`
    display: flex;
    flex-direction: column;
`;
const InfoWrap = styled.div`
    margin-bottom: 2rem;
    display: flex;
    align-items: center;

    & h2 {
        font-size: 1.8rem;
        line-height: 3.2rem;
    }
`;
const Edit = styled.div`
    margin-left: 2rem;
    font-size: 1.4rem;
    line-height: 1.8rem;
    font-weight: 600;
    padding: 0.5rem 0.9rem;
    border: 1px solid rgb(219, 219, 219);
    border-radius: 0.4rem;
`;
const Btn = styled.button`
    margin-left: 0.5rem;
    background-color: transparent;
    border: none;
    padding: 0.8rem;
`;
const CountWrap =styled.div`
    margin-right: 4rem;
    font-size: 1.6rem;
    line-height: 2.4rem;

    & span {
        font-weight: 600;
    }
`;