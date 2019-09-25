const LOGIN = (state, credentials) => {
    state.credentials = credentials;
}

const SET_SUCCESS = (state, success) => {
    state.credentials.authorized.success = success;
}

export default {
    LOGIN,
    SET_SUCCESS
}