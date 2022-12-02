import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import ModalReducer from '../../store/reducers/modal';
import { Link } from 'react-router-dom';
import { createPostAction } from '../../store/actions/modal';
import {ReactComponent as Close} from "../../assets/images/Close.svg"
import CreatePostFinal from './createPostFinal';

const customStyles = {
  overlay: {
    position: 'fixed',
    zIndex:'100', 
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.25)'
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',

    width: '60%',
    height: '80%',
    padding: '0',
    borderRadius: '1.5rem',
  },
};


const CreatePostFinalModal = ({File, originalFile}) => {
    console.log("CreatePostFinalModal");

  const dispatch = useDispatch();  
  
  // 모달창 on/off 상태 가져오기
  const {createPost} = useSelector((state) => state.ModalReducer);


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
        {File &&
          <CreatePostFinal File={File} originalFile={originalFile}/>
        }
      </Modal>

      <CloseLink to={"/explore"} onClick={closeModal}>
        <Close />
      </CloseLink>
     </>
  );
};

export default CreatePostFinalModal;

const CloseLink = styled(Link)`
  position: absolute;
  z-index: 1000;
  top: 1rem;
  right: 1rem;
  padding: 0.8rem;
  background-color: transparent;
  border: none;
`;