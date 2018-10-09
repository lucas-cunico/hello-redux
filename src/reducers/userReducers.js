import {SET_USER} from '../actions/userActions';

const initialValue = {
    user: {}
}
export default (state = initialValue, payload) => {
    switch (payload.type) {
        case SET_USER:
            const {user} = payload;
            return {...state, ...{user}};
        default:
            return state;
    }

}