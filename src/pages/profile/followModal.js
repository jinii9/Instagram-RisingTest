import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import {ReactComponent as Close} from "../../assets/images/Close.svg"
import { Link } from 'react-router-dom';
import { followingAction } from '../../store/actions/modal';
import Follow from './follow';

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
  
      width: '20%',
      height: '40%',
      padding: '0',
      borderRadius: '1.5rem',
      overflowX: 'hidden',
      overflowY: 'hidden'
    },
  };
  


const FollowModal = () => {
  const dispatch = useDispatch();  

  // 게시물 생성 모달창 on/off 상태 가져오기
  const {following} = useSelector((state) => state.ModalReducer);

  function closeModal() {
    // 모달창 닫기
    dispatch(
        followingAction({
        following: false,
      }),
    );
  }
  return (
    <>
      <Modal
        isOpen={following}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
        >
        {/* 게시물 생성 컴포넌트*/}
        {following &&
            <Follow />
        }

      </Modal>
      {following &&
        <CloseLink to={"/profile"} onClick={closeModal}>
            <Close fill='#000000' color="#000000"/>
        </CloseLink>
      }
     </>
  );
};

export default FollowModal;

const CloseLink = styled(Link)`
  position: absolute;
  z-index: 1000;
  top: 29rem;
  right: 68.5rem;
  padding: 0.8rem;
  background-color: transparent;
  /* background-color: red; */
  border: none;
`;

