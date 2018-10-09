import {userApi} from '../api'
export const SET_USER = 'SET_USER';

export const get = (id) =>  {
    return (dispatch) => {
        userApi.get(id).then(user =>{
            dispatch({
                type: SET_USER,
                user
            });
        })
    }
}