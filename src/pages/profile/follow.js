import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { RecommendDATAS } from '../../assets/datas/recommendDATA';
import {Wrap, Reason as PersonReason, Reason} from '../../components/common/personItem';
import {ProfileImg, WriterId as UserId} from '../home/feed';
import * as S from '../home/recommend';
import { BlueBtn } from '../login/login';

function FollowItem ({data}) {
    // console.log(data.id);

    // 팔로잉 취소 및 다시 팔로잉 버튼 체크
    const [BtnCheck, setBtnCheck] = useState(true);

    const FollowingCheck = () => {
        try {
            const localData = window.localStorage.getItem("jwt");
            // console.log('localData:',localData);
            // <팔로잉 취소>
            const FollowChange = async () => {
                const ServerData = {
                    id: data.id
                }
                const url= "https://cors-anywhere.herokuapp.com/https://clone-instagram.shop:8080/users/follow_cancel";
                const res = await axios({
                    method: "post",
                    url: url,
                    data: ServerData,
                    headers: {
                        'X-ACCESS-TOKEN': localData
                    }
                });

                console.log("FollowCheck:", res.data);
                if(res.data.isSuccess){
                    setBtnCheck(false);

                }
            } 
            FollowChange();      

        } catch (error) {
            console.log(error);
        }  
    }

    return(
    <PersonWrap key={data.id}>
        <Link to={'/'}>
            <ProfileImg>
                <img alt='작성자의 프로필 사진' src={data.img_url}/>
            </ProfileImg>
        </Link>
        <S.ProfileInfo>
            <UserId>{data.id}</UserId>
            <Reason>{data.nickName}</Reason>
        </S.ProfileInfo>
        {BtnCheck? (
            <FollowingBtn onClick={FollowingCheck} Check={BtnCheck}>
                <p>팔로잉</p>
            </FollowingBtn>
        ) : (
            <FollowingBtn onClick={FollowingCheck} Check={BtnCheck}>
                <p>팔로우</p>
            </FollowingBtn>
        )}
    </PersonWrap>    
);
}

const Follow = () => {
    // console.log(RecommendDATAS);
    // const [BtnCheck, setBtnCheck] = useState(false);

    // const FollowingCheck = () => {
    //     setBtnCheck(!BtnCheck);
    // }
    const [FollowData, setFollowData] = useState([]);    

    useEffect(() => {
        try {
            const localData = window.localStorage.getItem("jwt");
            // console.log("확인확인확인할거", localData);
            const FollowList = async () => {
                const url= "https://cors-anywhere.herokuapp.com/https://clone-instagram.shop:8080/users/followees";
                const res = await axios({
                    method: "get",
                    url: url,
                    headers: {
                        'X-ACCESS-TOKEN': localData
                    }
                });

                console.log("FollowList", res.data.result);
                setFollowData(res.data.result);
            } 

            FollowList();      

        } catch (error) {
            console.log(error);
        }        
    },[])
    return (
        <FollowWrap>
            <Header>팔로잉</Header>
            <Header>
                <NavLink>사람</NavLink>
                <NavLink>해시태그</NavLink>
            </Header>
            <Section>
                {FollowData.map((data) => (
                    <FollowItem data={data} key={data.id}/>
                    // <PersonWrap key={data.id}>
                    //     <Link to={'/'}>
                    //         <ProfileImg>
                    //             <img alt='작성자의 프로필 사진' src={data.img}/>
                    //         </ProfileImg>
                    //     </Link>
                    //     <S.ProfileInfo>
                    //         <UserId>{data.userId}</UserId>
                    //         <Reason>{data.userName}</Reason>
                    //     </S.ProfileInfo>
                    //     {BtnCheck? (
                    //         <FollowingBtn onClick={FollowingCheck} Check={BtnCheck}>
                    //             <p>팔로잉</p>
                    //         </FollowingBtn>
                    //     ) : (
                    //         <FollowingBtn onClick={FollowingCheck} Check={BtnCheck}>
                    //             <p>팔로우</p>
                    //         </FollowingBtn>
                    //     )}

                    // </PersonWrap>
                ))}
            </Section>
        </FollowWrap>
    );
};

export default Follow;

const FollowWrap = styled.div`
    /* border: 1px solid red; */
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    font-size: 1.6rem;
    font-weight: bold;
`;
const Header = styled.div`
    /* border: 1px solid red; */
    border-bottom: 1px solid rgb(238, 238, 238);
    width: 100%;
    height: 4.2rem;

    text-align: center;
    line-height: 4.2rem;

    display: flex;
    justify-content: center;
`;
const NavLink = styled(Link)`
    width: 100%;
    color: #00376b;
`;
const Section = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: scroll;
`;
const PersonWrap = styled(Wrap)`
    justify-content: center;
    align-items: center;
`;
const FollowingBtn = styled(BlueBtn)`
    margin: 0;
    background-color: ${(props) => (props.Check ? 'white' : 'rgb(0, 149, 246)')};
    color: ${(props) => (props.Check ? 'black' : 'white')};

    border: 1px solid rgb(219, 219, 219);

    & p {
        padding: 0 1.6rem;
    }
`;