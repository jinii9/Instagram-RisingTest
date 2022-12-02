import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {ReactComponent as Profile} from "../../assets/images/NavProfile.svg"
import {ReactComponent as Save} from "../../assets/images/Save.svg"
import {ReactComponent as Setting} from "../../assets/images/Setting.svg"
import {ReactComponent as Change} from "../../assets/images/Change.svg"

const ProfileMenu = () => {
    // const [logoutCheck, setLogoutCheck] = useState(false);
    const handleLogout = () => {
        // console.log("handleLogout")
        window.localStorage.removeItem('jwt');
        // setLogoutCheck(true);

    }
    
    return (
        <Wrap>
            <TopSign />
            <SubNav>
                <Link to={'/profile'} style={{"margin":"0"}}>
                    <NavItem style={{"marginTop":"0.4rem"}}>
                        <Profile/>
                        <p>프로필</p>
                    </NavItem>
                </Link>
                <Link to={''} style={{"margin":"0"}}>
                    <NavItem>
                        <Save width="16"/>
                        <p>저장됨</p>
                    </NavItem>
                </Link>
                <Link to={''} style={{"margin":"0"}}>
                    <NavItem>
                        <Setting width="16" height="16"/>
                        <p>설정</p>
                    </NavItem>
                </Link>
                <Link to={''} style={{"margin":"0"}}>
                    <NavItem>
                        <Change/>
                        <p>계정 전환</p>
                    </NavItem>
                </Link>
                <Link to={''} style={{"margin":"0"}} onClick={handleLogout}>
                    <NavItem border-top="1px solid rgb(219,219,219">
                        <span>로그아웃</span>
                    </NavItem>
                </Link>
            </SubNav>
            {/* {logoutCheck && <Link to={"/Login"}></Link>} */}
        </Wrap>
    );
};

export default ProfileMenu;

export const Wrap = styled.div`
    background-color: white;
    width: 23rem;
    /* height: 19.8rem; */

    z-index: 10;

    /* position: relative; */
    position: absolute;
    top: 3.5rem;
    margin-left: -180px;

    border-radius: 0.6rem;
    -webkit-filter: drop-shadow(0 0 5px rgba(0,0,0, .0975));
`;

export const TopSign = styled.div`
    background-color: white;
    
    position: absolute;
    left: 185px;
    top: -10px;
    bottom: -10px;
    transform: rotate(90deg);

    height: 2rem;
    width: 1.5rem;

    clip-path: path( 'M8 0C8 4 9.32406e-08 7.819 1.25211e-07 10.5C1.57188e-07 13.1815 8 17.0005 8 21L8 0Z' );
`;
export const SubNav = styled.div`
    /* width: 100%; */
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const NavItem = styled.div`
    /* flex-grow: 1; */

    padding: 0.8rem 1.6rem;
    display: flex;
    align-items: center;

    & p {
        margin-left: 1.2rem;
    }
`;


