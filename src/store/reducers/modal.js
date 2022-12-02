//초기 상태값 설정
const initialState = {
    postView: false,
    createPost: false,
    following: false,
}


//리듀서 설정
const ModalReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'postView': {
            return {
                ...state,
                postView: action.data.postView,                    
            }
        }
        case 'createPost': {
            return {
                ...state,
                createPost: action.data.createPost,                    
            }
        }
        case 'following': {
            return {
                ...state,
                following: action.data.following,                    
            }
        }
        default: {
            return {
                ...state
            }
        }
    }

}

export default ModalReducer