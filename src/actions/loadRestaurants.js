export const FETCH_PENDING = 'FETCH_PENDING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';


export const fetchPending = () => {
    return {
        type: FETCH_PENDING
    }
}

export const fetchSuccess = (payload) => {
    return {
        type: FETCH_SUCCESS,
        payload
    }
}

export const fetchError = (error) => {
    return {
        type: FETCH_ERROR,
        payload: error
    }
}