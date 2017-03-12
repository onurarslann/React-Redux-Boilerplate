export const selectUser = (user) => {
    console.log("You clicked on user: ", user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};

export const createUser = (user) => {
    console.log("You create user: ", user.first);
    return {
        type: 'USER_CREATED',
        payload: user
    }
};

export const deleteUser = (id) => {
    console.log("You delete user id: ", id);
    return {
        type: 'USER_DELETED',
        payload: id
    }
};
