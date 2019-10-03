
const initialState = {
     pending: false,
     restaurants: [],
     error: null
}

export default function (state = initialState, action) {
    switch(action.type){
        case 'FETCH_PENDING':
            return {
                ...state,
                pending: true
            }
        case 'FETCH_SUCCESS':
            return {
                ...state,
                pending: false, 
                restaurants: [action.payload]
            }
        case 'FETCH_ERROR':
            return {
                ...state, 
                pending: false,
                error: action.error
            }
        default: 
            return state
    }
}

