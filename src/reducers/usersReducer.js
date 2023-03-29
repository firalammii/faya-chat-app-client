
import { userActionTypes } from '../actions/actionTypes.js';
const { FETCH_USERS, CREATE_USER, LOGIN, LOGOUT } = userActionTypes;

const initialState = {
    users: [],
    currentUser: JSON.parse(localStorage.getItem('user')) || null
};

export const usersReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case FETCH_USERS: {
            return { ...state, users: actions.payload };
        }
        case CREATE_USER: {
            return {
                ...state,
                users: [...state.users, actions.payload]
            };
        }

        case LOGIN: {
            localStorage.setItem('user', JSON.stringify(actions.payload));
            return { ...state, currentUser: actions.payload }
        }
        case LOGOUT: {
            localStorage.removeItem('user');
            return { ...state, currentUser: null };
        }
        default: return state;
    }
};
