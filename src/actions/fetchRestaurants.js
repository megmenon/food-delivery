import { fetchPending, fetchSuccess, fetchError } from './loadRestaurants';


const fetchRestaurants = () => {
    return dispatch => {
        dispatch(fetchPending());
        fetch('https://eatstreet.com/publicapi/v1/restaurant/search?method=both&street-address=316+W.+Washington+Ave.+Madison,+WI', {
            method: 'GET',
            headers: {
                'X-Access-Token': '580d73fe5b54013d'
            }
        })
        .then(res => res.json())
        .then(data => dispatch(fetchSuccess(data.restaurants)))
        .catch(error => dispatch(fetchError(error)))
    }
}

export default fetchRestaurants