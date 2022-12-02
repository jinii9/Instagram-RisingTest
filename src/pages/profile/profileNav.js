import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Post from './post';
import Save from './save';
import {ReactComponent as PostList} from "../../assets/images/PostList.svg";
import {ReactComponent as SaveList} from "../../assets/images/Save.svg";
import {ReactComponent as TagList} from "../../assets/images/Tag.svg";


const ProfileNav = () => {
    const [postCheck, setPostCheck] = useState(true);

    return (
        <Wrap>
            {/* Nav */}
            <NavWrap>
                {/* <Post /> */}
                <NavItem>
                    <IconLink to={"/profile"} onClick={() => {setPostCheck(true)}}>
                            <PostList/>
                            <span>게시물</span>
                    </IconLink>
                </NavItem>

                <NavItem>
                <IconLink to={"/profile/save"} onClick={() => {setPostCheck(false)}}>
                        <SaveList width="12"/>
                        <span>저장됨</span>
                </IconLink>
                </NavItem>

                <NavItem>
                <IconLink to={"/profile/tag"} onClick={() => {setPostCheck(false)}}>
                        <TagList/>
                        <span>태그됨</span>
                </IconLink>
                </NavItem>
            </NavWrap>



            {/* Section */}
            <SectionWrap>
                {postCheck && <Post/>}
                <Outlet />
            </SectionWrap>
        </Wrap>
    );
};

export default ProfileNav;
const Wrap = styled.div`
    
`
const NavWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid rgb(219,219,219);
    & a {
    }
`;
const NavItem = styled.button`
    height: 5.2rem;
    font-size: 1.2rem;
    line-height: 1.8rem;
    margin-right: 6rem;

    padding: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: transparent;
    border: none;
    /* border-top: 1px solid black; */
    
    & span {
        margin-left: 0.6rem;
    }
`;
const IconLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const SectionWrap = styled.div``;
