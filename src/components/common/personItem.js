import React, { useState } from 'react';
import styled from 'styled-components';
import { ProfileImg, WriterId as UserId } from '../../pages/home/feed';
import Profile from "../../assets/images/Profile.png";
import { BlueLetterBtn } from '../../components/common/styled';
import * as S from '../../pages/home/recommend';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PersonItem = ({data}) => {
    const [followCheck, setFollowCheck] = useState(false);


    const handleFollow = () => {
        console.log('인기인id: ', data.id);
        
        try {
            const localData = window.localStorage.getItem("jwt");
            console.log('localData:',localData);
            // <서버에서 친구 팔로우하기>
            const Follow = async () => {
                const ServerData = {
                    id: data.id
                }
                const url= "https://cors-anywhere.herokuapp.com/https://clone-instagram.shop:8080/users/follow";
                const res = await axios({
                    method: "post",
                    url: url,
                    data: ServerData,
                    headers: {
                        'X-ACCESS-TOKEN': localData
                    }
                });

                console.log("Follow:", res.data);
                if(res.data.isSuccess){
                    setFollowCheck(true);

                }
            } 




            Follow();      

        } catch (error) {
            console.log(error);
        }       
    }

    return (
        <Wrap>
            {/* <S.MyProfileWrap> */}
                <Link to={'/'}>
                    <ProfileImg>
                        <img alt='작성자의 프로필 사진' src={data.img_url}/>
                    </ProfileImg>
                </Link>
                <S.ProfileInfo>
                    <UserId>{data.id}</UserId>
                    <Reason>인기</Reason>
                </S.ProfileInfo>
                <FollowBtn onClick={handleFollow} followCheck={followCheck}>
                    {followCheck ? (
                        <>팔로잉</>
                    ) : (
                        <>팔로우</>
                    )}
                </FollowBtn>
            {/* </S.MyProfileWrap>*/}
        </Wrap>
    );
};

export default PersonItem;
const FollowBtn = styled(BlueLetterBtn)`
    color: ${(props) => (props.followCheck ? 'black' : 'rgb(0, 149, 246)')};
`;
export const Wrap = styled.div`
    /* padding: 0.8rem 1.6rem; */
    padding: 0.8rem 1rem 0.8rem 1.4rem;

    
    display: flex;
`;
// const Reason = styled(S.InfoName)`
//     font-size: 1.2rem;
// `;
export const Reason = styled(UserId)`
    font-weight: 400;
    color: #8e8e8e;
    font-size: 1.2rem;
`;