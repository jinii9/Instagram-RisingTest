import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { PostDATAS } from '../../assets/datas/postDATA';
import PostViewModal from '../../components/postViewModal';
import { postViewAction } from '../../store/actions/modal';

const Post = () => {
    console.log(PostDATAS);
    const dispatch = useDispatch();

    //모달창 준비
    const {postView} = useSelector((state) => state.ModalReducer);

    function openModal() {
        // console.log("체크합시다")
        // setIsOpen(true);
        dispatch(
          postViewAction({
              postView: true,
          }),
        );

    }

    return (
        <Wrap>
            {PostDATAS.map((data) => (
                    <ItemLink to={`/profile/${data.id}`} state={{data}} onClick={openModal} key={data.id}>
                            <img alt="게시물" src={data.img[0]}></img>
                    </ItemLink>
            ))}
            {postView && <PostViewModal From="profilePost"/>}
        </Wrap>
    );
};

export default Post;
export const Wrap = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* place-items: center; */
    gap: 2.8rem;
`
export const ItemLink = styled(Link)`
        /* width: 29.3rem; */
        height: 29.3rem;
        width: 100%;
        object-fit: cover;
    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    /* border: 1px solid purple; */
`;