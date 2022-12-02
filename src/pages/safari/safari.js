
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { PostDATAS } from '../../assets/datas/postDATA';
import PostViewModal from '../../components/postViewModal';
import { postViewAction } from '../../store/actions/modal';
import * as S from '../profile/post';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement');

function Safari() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const dispatch = useDispatch();  

  function openModal() {
    setIsOpen(true);
    dispatch(
      postViewAction({
          postView: true,
      }),
    );
  }

  console.log(PostDATAS)
  return (
    <S.Wrap>
      {PostDATAS.map((data, index) => (
              <S.ItemLink to={`/p/${data.id}`} state={{data}} key={index} onClick={openModal}>
                      <img alt="게시물" src={data.img[0]}></img>
              </S.ItemLink>
      ))}
      {modalIsOpen && <PostViewModal From="safari"/>}
    </S.Wrap>
    
    // <div>
    //   <button onClick={openModal}>Open Modal</button>

    // </div>
  );
}

// ReactDOM.render(<Safari />, appElement);

export default Safari;

// import React, { useState } from 'react';
// import { PostDATAS } from '../../assets/datas/postDATA';
// import PostView from '../../components/postView';
// import * as S from '../profile/post';
// const Safari = () => {
//     const [ModalCheck, setModalCheck] = useState(false);
//     const handleModal = () => {
//         setModalCheck(!ModalCheck);
//     }
//     return (
//         <S.Wrap>
//             {PostDATAS.map((data) => (
//                     <S.ItemLink to={`/p/${data.id}`} key={data} onClick={handleModal}>
//                             <img alt="게시물" src={data.img[0]}></img>
//                     </S.ItemLink>
//             ))}
//             {ModalCheck && <PostView/>}
//         </S.Wrap>
//     );
// };

// export default Safari;