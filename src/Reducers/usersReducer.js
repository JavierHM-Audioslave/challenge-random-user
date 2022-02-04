import { handleActions } from "redux-actions";
import { USERS } from "../Constants/actions";


const initialState = "";

const clean = () => { return initialState };

const setUsers = (_, users ) => {
    return users.users;
};

const updateUser = (state, {updatedUser}) => {
    const users = state.map( user => {
        if( updatedUser.name.first === user.name.first && updatedUser.name.last === updatedUser.name.last ) {
            user.email = updatedUser.email;
            user.phone = updatedUser.phone;
            user.location.state = updatedUser.state;
            user.location.city = updatedUser.city;
        }

        return user;
    });
    
    return users;
}



export default handleActions(
    {
        [USERS.CLEAN]: clean,
        [USERS.SET_USERS]: setUsers,
        [USERS.UPDATE_USER]: updateUser
    },
    initialState
);