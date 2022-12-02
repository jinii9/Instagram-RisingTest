import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {Wrap as DirectListWrap} from './directList';
import {ReactComponent as Call} from "../../assets/images/Call.svg"
import {ReactComponent as Video} from "../../assets/images/Video.svg"
import {ReactComponent as Info} from "../../assets/images/Info.svg"
import {ReactComponent as DirectNull} from "../../assets/images/DirectNull.svg"
import {ReactComponent as Emoji} from "../../assets/images/Emoji.svg"
import {ReactComponent as Heart} from "../../assets/images/Heart.svg"
import {ReactComponent as DirectPhoto} from "../../assets/images/DirectPhoto.svg"

import {ProfileWrap, ProfileImg, WriterId, CommentForm} from '../home/feed';
import { Link } from 'react-router-dom';
import { BlueBtn } from '../login/login';

function MeContent ({MyCommentData}) {
    // console.log("Mecontent");
    // console.log(MyCommentData);
    return (
        <ContentWrap MyComment="true">
            <Bubble MyComment="true">
                <p>{MyCommentData.commentWriting}</p>
            </Bubble>
        </ContentWrap>
    );
} 
function FriendContent ({FriendCommentData, FriendProfile}) {
    // console.log("Friendcontent");
    // console.log(FriendCommentData);
    // console.log(FriendProfile);

    return (
        <ContentWrap>
            <FriendWrap>
            <ProfileImg style={{'margin-right':'0.8rem', 'marginBottom':'0.8rem'}}>
                {/* <Link to={""}><img alt='작성자의 프로필 사진' src='https://cors-anywhere.herokuapp.com/https://instagram.fcok10-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fcok10-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=BYqIec9vk6gAX-IClv-&edm=AClPCLABAAAA&ccb=7-5&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-5&oh=00_AfD3Wf6D6KXpPkDMxI097dq9z8CvfnVneGL5zKEbMdWeyA&oe=63651E4F&_nc_sid=17ef2a'/></Link> */}
                <Link to={""}><img alt='작성자의 프로필 사진' src={FriendProfile}/></Link>
            </ProfileImg>
            <Bubble>
                <p>{FriendCommentData.commentWriting}</p>
            </Bubble>
            </FriendWrap>
        </ContentWrap>
    );
}

const Message = ({TalkData}) => {
    // console.log('Message', TalkData);
    // console.log(TalkData.data.comment[0].commentWriting)
    return (
        <Wrap>
            {TalkData===null ? (
                <NullWrap>
                    <DirectNull/>
                    <NullMessage>내 메시지</NullMessage>
                    <NullMessage Info="true">친구나 그룹에 비공개 사진과 메시지를 보내주세요.</NullMessage>
                    <BlueBtn style={{'marginTop':'2.4rem'}}>메시지 보내기</BlueBtn>
                </NullWrap>
            ):(
                <Wrap>
                    <Header>
                        <InfoWrap>
                            {/* <LeftWrap></LeftWrap> */}
                            <ProfileWrap>
                                <ProfileImg>
                                    {/* <Link to={""}><img alt='작성자의 프로필 사진' src='https://cors-anywhere.herokuapp.com/https://instagram.fcok10-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fcok10-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=BYqIec9vk6gAX-IClv-&edm=AClPCLABAAAA&ccb=7-5&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-5&oh=00_AfD3Wf6D6KXpPkDMxI097dq9z8CvfnVneGL5zKEbMdWeyA&oe=63651E4F&_nc_sid=17ef2a'/></Link> */}
                                    <Link to={""}><img alt='작성자의 프로필 사진' src={TalkData.data.friendProfile}/></Link>
                                </ProfileImg>
                                <WriterId>
                                    {TalkData.data.friendName}
                                </WriterId>
                            </ProfileWrap>

                            <RightWrap>
                                <IconWrap><Call /></IconWrap>
                                <IconWrap><Video /></IconWrap>
                                <IconWrap><Info /></IconWrap>
                            </RightWrap>
                        </InfoWrap>
                    </Header>

                    <Section>
                        <Date>{TalkData.data.time}</Date>
                        {TalkData.data.comment.map((item, index) => (
                            item.userName==='friend' ? (
                                // <div key={item.id}>{item.commentWriting}</div>
                                <FriendContent key={item.id} FriendCommentData={item} FriendProfile={TalkData.data.friendProfile}/>
                            ) 
                            : (
                                <MeContent key={item.id} MyCommentData={item} />
                            )
                        ))}
                    </Section>

                    <Footer>
                        <CommentFormWrap>
                            <IconWrap><Emoji /></IconWrap>
                            <textarea placeholder="메시지 입력..."></textarea>
                            <IconWrap><DirectPhoto /></IconWrap>
                            <IconWrap><Heart /></IconWrap>                            
                        </CommentFormWrap>
                        
                    </Footer>
                </Wrap>
            )}

        </Wrap>
    );
};

export default Message;

const Wrap = styled(DirectListWrap)`
    width: 100%;
    /* flex: 1 1 auto; */
    background-color: white;
    border-left: none;
`;
const NullWrap =styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const NullMessage = styled.div`
    margin-top: 1.6rem;
    color: ${(props) => (props.Info ? '#8e8e8e':'black')};
    font-size: ${(props) => (props.Info ? '1.4rem':'2.2rem')};
`
const Header = styled.div`
    width: 100%;
    height: 6rem;
    box-sizing: border-box;
    padding: 0 2rem;
    border-bottom: 1px solid rgb(219, 219, 219);
    display: flex;
    align-items: center;
    
    position: sticky;
`;
const InfoWrap = styled.div`
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    justify-content: space-between;

`;
const LeftWrap = styled.div``;
const RightWrap = styled.div`
    display: flex;
`;
const IconWrap = styled.div`
    padding: 0.8rem;
`;

const Section = styled.div`
    flex: 1 1 auto;
    padding: 0 2rem;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;
const Date = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1.2rem;
    margin-bottom: 2.4rem;

    color: #8e8e8e;
    font-size: 1.2rem;
    line-height: 1.6rem;
`;
const Footer = styled.div`
    border: 1px solid rgb(219, 219, 219);
    height: 4.4rem;
    margin: 2rem;
    border-radius: 2.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const CommentFormWrap = styled(CommentForm)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    & textarea {
        flex: 1 1 auto;
    }
    & textarea::placeholder {
        font-weight: 500;
    }
`;



// Content 스타일
const ContentWrap = styled.div`
    display: flex;
    justify-content: ${(props) => (props.MyComment ? 'flex-end':'flex-start')};

    margin: 0.8rem 0;

`;
const FriendWrap = styled.div`
    display: flex;
    align-items: flex-end;
`;
const Bubble = styled.div`
    /* min-height: 4.4rem; */
    /* height: 4.4rem; */
    background-color: ${(props) => (props.MyComment ? 'rgb(239, 239, 239)':'white')};
    max-width: 23.6rem;
    padding: 1.6rem;
    border: 1px solid rgb(239, 239, 239);
    border-radius: 2.2rem;

    & p {
        /* text-align: center; */
        padding-left: 1rem;
        font-size: 1.4rem;
        line-height: 1.8rem;
    }
`;
