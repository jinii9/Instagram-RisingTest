import React from 'react';
import * as S from './post';
import { SaveDATAS } from '../../assets/datas/postDATA';
import { useDispatch, useSelector } from 'react-redux';
import { postViewAction } from '../../store/actions/modal';
import PostViewModal from '../../components/postViewModal';

const Save = () => {
    // 리덕스 통해서 저장한 피드 값 가져오기
    const {save} = useSelector((state) => state.ProfileReducer);

    const dispatch = useDispatch();

    //모달창 준비
    // const {postView} = useSelector((state) => state.ModalReducer);
    // console.log('모달창 유무 확인', postView);
    // function openModal() {
    //     // setIsOpen(true);
    //     dispatch(
    //       postViewAction({
    //           postView: true,
    //       }),
    //     );

    // }
    console.log(save);
    return (
        <S.Wrap>
            {save.map((data) => (
                    // <S.ItemLink to={`/profile/${data.id}`} state={{data}} onClick={openModal} key={data.id}>
                    <S.ItemLink to={""} key={data.id}>
                            <img alt="게시물" src={data.img[0]}></img>
                    </S.ItemLink>
            ))}
            {/* {postView && <PostViewModal From="profilePost"/>} */}
        </S.Wrap>
    );
};

export default Save;