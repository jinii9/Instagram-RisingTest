//action 설정
// 게시물 조회 모달창 on/off
export const postViewAction = (data) => {
    return {
        type: 'postView',
        data: data
    }
}

// 게시물 생성 모달창 on/off
export const createPostAction = (data) => {
    return {
        type: 'createPost',
        data: data
    }
}

// 팔로잉 모달창 on/off
export  const followingAction = (data) => {
    return {
        type: 'following',
        data: data
    }
}