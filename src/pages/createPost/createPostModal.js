import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import {ReactComponent as Close} from "../../assets/images/Close.svg"
import { createPostAction } from '../../store/actions/modal';
import CreatePost from '.';
import { Link } from 'react-router-dom';

const customStyles = {
    overlay: {
      position: 'fixed',
      zIndex:'100', 
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.75)'
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
  
      width: '40%',
      height: '80%',
      padding: '0',
      borderRadius: '1.5rem',
      overflowX: 'hidden',
      overflowY: 'hidden'
    },
  };
  


const CreatePostModal = () => {
  const dispatch = useDispatch();  

  // 게시물 생성 모달창 on/off 상태 가져오기
  const {createPost} = useSelector((state) => state.ModalReducer);
  console.log("test2",createPost);


  function closeModal() {
    // 모달창 닫기
    dispatch(
      createPostAction({
        createPost: false,
      }),
    );
  }
  return (
    <>
      <Modal
        isOpen={createPost}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
        >
        {/* 게시물 생성 컴포넌트*/}
        {createPost &&
          <CreatePost />
        }

      </Modal>

      {/* <CloseLink to={"/explore"} onClick={closeModal}>
        <Close />
      </CloseLink> */}
     </>
  );
};

export default CreatePostModal;

const CloseLink = styled(Link)`
  position: absolute;
  z-index: 1000;
  top: 1rem;
  right: 1rem;
  padding: 0.8rem;
  /* background-color: transparent; */
  background-color: red;
  border: none;
`;

