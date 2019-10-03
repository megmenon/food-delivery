export const select = (payload) => dispatch => {
    dispatch({
        type: 'ADD',
        payload
    })
}