import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import ModalReducer from '../store/reducers/modal';
import { postViewAction } from '../store/actions/modal';
import { Link, useLocation } from 'react-router-dom';
import {ReactComponent as Close} from "../assets/images/Close.svg"
import PostView from './postView';

const customStyles = {
  overlay: {
    position: 'fixed',
    zIndex:'100', 
    top: 0,
    left: 0,
    right: 0,
    // backgroundColor: 'rgba(0, 0, 0, 0.75)'
    backgroundColor: 'rgba(0, 0, 0, 0.15)'

  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',

    width: '75%',
    height: '95%',
    padding: '0',
  },
};


const PostViewModal = ({From}) => {
  const dispatch = useDispatch();  
  const location = useLocation();

  // 게시물 정보 가져오기
  const postViewData = location.state;
  // console.log(postViewData)

  // 어디 컴포넌트에서 왔는지 체크
  console.log("체크으으으ㅡ으으")
  console.log(From);

  // 모달창 on/off 상태 가져오기
  const {postView} = useSelector((state) => state.ModalReducer);


  function closeModal() {
    // 모달창 닫기
    dispatch(
      postViewAction({
          postView: false,
      }),
    );
  }
  return (
    <>
      <Modal
        isOpen={postView}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        {postViewData &&
          <PostView postViewData={postViewData}/>
        }
      </Modal>
      


      
      {From==="safari" &&
        <CloseLink to={"/explore"} onClick={closeModal}>
          <Close />
        </CloseLink>      
      }
      {From==="feed" &&
        <CloseLink to={"/"} onClick={closeModal}>
          <Close />
        </CloseLink>      
      }
      {From==="profilePost" &&
        <CloseLink to={"/profile"} onClick={closeModal}>
          <Close />
        </CloseLink>      
      }
     </>
  );
};

export default PostViewModal;

const CloseLink = styled(Link)`
  position: absolute;
  z-index: 1000;
  top: 1rem;
  right: 1rem;
  padding: 0.8rem;
  background-color: transparent;
  border: none;
`;