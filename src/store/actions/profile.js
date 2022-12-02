//action 설정
export const profileAction = (data) => {
    return {
        type: 'PROFILE',
        data: data
    }
}

export const saveAction = (data) => {
    return {
        type: 'SAVE',
        data: data
    }
}