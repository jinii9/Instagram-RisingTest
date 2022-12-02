//초기 상태값 설정
const initialState = {
    user: {}
}


//리듀서 설정
const LoginReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'LOGIN': {
            return {
                ...state,
                user: {
                    ...state.user,
                    jwt: action.data.jwt,
                    userId: action.data.userId
                }
            }
        }
        // case 'SIGN': {
        //     return {
        //         ...state,
        //         user: {
        //             ...state.user,
        //             userId: action.data.userId
        //         }
        //     }
        // }
        default: {
            return {
                ...state
            }
        }
    }

}

export default LoginReducer