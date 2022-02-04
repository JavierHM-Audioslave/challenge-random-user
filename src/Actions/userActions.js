import {USERS} from "../Constants/actions";


const willSetUsers = () => ({
    type: USERS.WILL_SET_USERS
});

const setUsers = users => {
    return {
        type: USERS.SET_USERS,
        users: users
    };
};

const cleanStore = () => {
    return {
        type: USERS.CLEAN
    }
};

const updateUser = user => {
    return {
        type: USERS.UPDATE_USER,
        updatedUser: user
    };
};


export const usersActions = {
    willsetUsers: willSetUsers,
    setUsers: setUsers,
    cleanStore: cleanStore,
    updateUser: updateUser
}