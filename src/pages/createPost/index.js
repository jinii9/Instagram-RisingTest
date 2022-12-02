import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { ProfileImg } from '../home/feed';
import {ReactComponent as Photo} from "../../assets/images/Photo.svg"
import {ReactComponent as BackArrow} from "../../assets/images/BackArrow.svg"
import Slider from 'react-slick';
import '../../components/slick-carousel/slick/slick.css';
import '../../components/slick-carousel/slick/slick-theme.css';
import CreatePostFinalModal from './createPostFinalModal';
// import { SlideImg } from '../../components/postView';

// 슬라이드
function Slide ({File}) {
    
    // 슬라이드 셋팅
    const settings = {
        className: "",
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    }; 
    // console.log("슬라이드")
    return (
        <SlideWrap>
            <Slider {...settings}>
                {File.map((data, index) => ( 
                    <div key={index}>
                        <SlideImg>
                            <img alt="피드 사진" src={data}/>
                        </SlideImg>
                    </div>
                    
                ))}
        </Slider>
        </SlideWrap>
    )
}
const SlideWrap = styled.div`
    position: fixed;
    z-index: 2000;
    width: 100%;
    height: 100%;
`;
export const SlideImg = styled.div`

    & img {
  
        background-color: rgb(219, 219, 219);
        width: 100%;
        height: 80vh;
        object-fit: cover;
        /* width: 50rem; */
    }

`;
const CreatePost= () => {
    const [uploadImgIs, setUploadImgIs] = useState(false);
    const [File, setFile] = useState([]);
    const fileInputRef = useRef(null);
    const [nextModal, setNextModal] = useState(false);
    // 파일 쌩으로 보내기
    const [originalFile, setOriginalFile] = useState([]);
    const handleFileUpload = (e) => {
        const fileList = e.target.files;
        // console.log("확인1:",fileList);
        setOriginalFile(fileList);

        let arr = [];
        let urlList = [];
        if(fileList[0]) {
            for(var i=0; i<fileList.length; i++){
                arr[i] = fileList[i];
            }
            console.log(arr);

            arr.map((img, index) => (
                urlList[index] = URL.createObjectURL(img)
            ));
            console.log("확인2:",urlList);
            
            setFile(urlList);
            setUploadImgIs(true);
  
        } else { // 업로드 취소할 시
            setFile();
        }


    }

    const openModal = () => {
        setNextModal(true);
    }
    return (
        <Wrap>
            <Header>
                <button><BackArrow/></button>
                <p>새 게시물 만들기</p>
                <button onClick={openModal}>다음</button>
            </Header>

            
            {/* 프로필 사진 업로드 */}
            <UploadWrap uploadImgIs={uploadImgIs}>
                {uploadImgIs && 
                    // <img alt='작성자의 프로필 사진' src={File}
                    <Slide File={File}/>
                }
            </UploadWrap>

            <Section>
                <Photo/>
                <p>사진과 동영상을 여기에 끌어다 놓으세요</p>
                <SelectBtn onClick={() => fileInputRef.current.click()}>컴퓨터에서 선택</SelectBtn>
                <input 
                    type="file" 
                    multiple="multiple"
                    style={{'display':'none'}}
                    accept="image/jpg, image/jpeg, impage/png" 
                    onChange={handleFileUpload}
                    ref={fileInputRef} />
            </Section>

            {nextModal && <CreatePostFinalModal File={File} originalFile={originalFile}/>}
        </Wrap>
    );
};

export default CreatePost;

export const Wrap = styled.div`
    width: 100%;
    height: 100%;
    overflow-x: hidden;

    /* overflow-y: hidden; */
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: bold;
`;
export const Header = styled.div`
    width: 100%;
    height: 4.3rem;
    display:flex;
    align-items: center;
    justify-content: space-between;
    border-bottom:1px solid rgb(239, 239, 239);
    
    position: absolute;
    top: 0;
    z-index: 3000;
    background-color: white;

    & button {
        background-color: transparent;
        border: none;
        padding: 0.8rem;
        color: rgb(0, 149, 246);
        font-size: 1.4rem;
        font-weight: 600;
        cursor: pointer;
    }
`;
const UploadWrap = styled.div`
    display: ${(props) => (props.uploadImgIs ? 'block' : 'none')};
    border: 2px solid purple;
    width: 100%;
    height: 100%;
    position: absolute;
    /* margin-top: 4.3rem; */
`;
const Section = styled.div`
    width: 100%;
    /* height: 100vh; */
    /* overflow-x: hidden; */
    /* overflow-y: hidden; */
    flex: 1 1 auto;
    padding: 2.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & p {
        margin-top: 1.6rem;
        font-size: 2.2rem;
        line-height: 2.6rem;
        font-weight: 100;
    }
    & img {
        width: 50rem;
    }
`;
const SelectBtn = styled.button`
    background-color: rgb(0, 149, 246);
    color: white;
    border: none;
    border-radius: 0.4rem;
    font-size: 1.4rem;
    line-height: 1.8rem;
    font-weight: bold;
    padding: 0.5rem 0.9rem;
    margin: 0.1rem;
    margin-top: 2.5rem;
    cursor: pointer;
`;
