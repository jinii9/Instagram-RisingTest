//초기 상태값 설정
const initialState = {
    user: {},
    save: [],
}


//리듀서 설정
const ProfileReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'PROFILE': {
            return {
                ...state,
                user: {
                    ...state.user,
                    userName: action.data.userName,
                    realName: action.data.realName,
                    IMG: action.data.profileImg,
                }
            }
        }
        case 'SAVE': {
            return {
                ...state,
                save: state.save.concat({
                    // ...state.save,
                    id: action.data.id,
                    userName: action.data.userName,
                    userProfile: action.data.userProfile,
                    img: action.data.img,
                    goodCount: action.data.goodCount,
                    writing: action.data.writing,
                    commentCount: action.data.commentCount,
                    comment: action.data.comment
                })
            }
        }
        default: {
            return {
                ...state
            }
        }
    }

}

export default ProfileReducer