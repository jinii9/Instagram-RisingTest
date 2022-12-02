import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components"
import {ReactComponent as Logo} from "../../assets/images/Logo.svg"
import {ReactComponent as Search} from "../../assets/images/Search.svg"
import {ReactComponent as Home} from "../../assets/images/Home.svg"
import {ReactComponent as Plane} from "../../assets/images/Plane.svg"
import {ReactComponent as CreatePostIMG} from "../../assets/images/CreatePost.svg"
import {ReactComponent as Safari} from "../../assets/images/Safari.svg"
import {ReactComponent as Heart} from "../../assets/images/Heart.svg"
import Profile from "../../assets/images/Profile.png";
import { ProfileImg } from "../../pages/home/feed";
import { useState } from "react";
import ProfileMenu from "./profileMenu";
import { useDispatch, useSelector } from "react-redux";
import { createPostAction } from "../../store/actions/modal";
import CreatePostModal from '../../pages/createPost/createPostModal';
import HeartMenu from './heartMenu';
// import CreatePost from "../../pages/createPost";

const Header = ({ page }) => {
    const {user} = useSelector((state) => state.ProfileReducer);
    // console.log("Header~~~~~~~~~~~~~~~~");
    // console.log(user);
    // 토글 메뉴창
    const [toggleMenu, setToggleMenu] = useState(false);
    const [toggleHeart, setToggleHeart] = useState(false);
    const handleToggleMenu = () => {
        setToggleMenu(!toggleMenu);
    }
    const handleToggleHeart = () => {
        setToggleHeart(!toggleHeart);
    }

    // 게시물 생성 모달창
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const dispatch = useDispatch();
    const openModal = () => {
        setIsOpen(true);
        dispatch(
            createPostAction({
              createPost: true,
          }),
        );
    }

    return (
        <>
        <Wrap>
            <LogoWrap><Link to={'/'}><Logo/></Link></LogoWrap>
            
            <SearchWrap>
                <InputWrap>
                    <Input name="search"></Input>
                </InputWrap>
                {/* <SearchDesign을 flex-중앙정렬 하는 태그> SearchWrap에다가 flex를 주면 input과 flex되므로 X + SearchDesign에다가 줄 수 있지만, 중앙에 오도록 하드코딩 필요 => 새로운 태그 만들어줌 */}
                <SearchDesignWrap> 
                    <SearchDesign>
                        <SearchImg><Search/></SearchImg>
                        <p>검색</p>
                        {/* <DelteAll></DelteAll> */}
                    </SearchDesign>
                </SearchDesignWrap>
            </SearchWrap>

            <Nav>
                <Link to={'/'}><Home/></Link>
                <Link to={'/direct'}><Plane/></Link>
                <button onClick={openModal}><CreatePostIMG/></button>

                <Link to={'/explore'}><Safari/></Link>
                {/* <Link to={'/'}><Heart/></Link> */}
                <button onClick={handleToggleHeart}><Heart/></button>
                <button onClick={handleToggleMenu}>
                    <ProfileWrap>
                        {/* {user.IMG===undefined ? ( */}
                            <img alt='작성자의 프로필 사진' src={user.IMG}/>

                        {/* ) : ( */}
                            {/* <img alt='작성자의 프로필 사진' src={user.IMG}/> */}
                        {/* )} */}
                    </ProfileWrap>

                    {/* <ProfileMenu /> */}

                
                {/* 토글창 */}
                {toggleMenu && <ProfileMenu />}
                {toggleHeart && <HeartMenu />}
                </button>
            </Nav>
            {/* 게시물 생성 모달창 */}
            {/* {modalIsOpen && <CreatePostModal/>} */}
        </Wrap>
        {/* {modalIsOpen && <CreatePostModal/>} */}
                        {/* 게시물 생성 모달창 */}
            {modalIsOpen && 
                <CreatePostModal/>
            }
        </>
    )
}

export default Header;
const Wrap = styled.div`
    z-index: 3;
    width: 97.5rem;
    height: 6rem;
    padding: 0 2rem;
    
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    /* z-index: 10; */
    /* position: relative; */
`;
const LogoWrap = styled.div`
    flex: 1 0 12.7rem;
`;

const SearchWrap = styled.div`
    position: relative;
    height: 3.6rem;
    width: 26.8rem;
`;
const InputWrap = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background: rgb(239, 239, 239);
    border-radius: 0.8rem;
`;
const Input = styled.input`
    position: relative;
    z-index: 3;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: 0;
    outline: none;
    background-color: transparent;
    padding: 0.3rem 1.6rem;
`;
const SearchDesignWrap = styled.div`
    z-index: 2;
    
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    
`;
const SearchDesign = styled.div`
    padding: 0 1.6rem;
    display: flex;
    align-items: center;
    & p {
        font-size: 1.6rem;
        line-height: 2.5rem;
        color: rgb(142, 142, 142);
        /* text-align: left; */
    }
`;
const SearchImg = styled.div`
    margin-right: 1.2rem;
`;


const Nav = styled.div`
    display: flex;
    padding-left: 2.4rem;
    justify-content: flex-end;
    flex: 1 0 12.7rem;
    & a {
        margin-left: 2.2rem;
    }
    & button {
        position: relative;

        margin-left: 2.2rem;
        border: none;
        background-color: transparent;
        padding: 0;
        cursor: pointer;
    }
`;
const ProfileWrap = styled(ProfileImg)`
    width: 2.4rem;
    height: 2.4rem;
`;
