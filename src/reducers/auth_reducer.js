import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
} from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            {
                const { text } = action.payload;
                return {
                    ...state,
                    email: text,
                };
            }
        case PASSWORD_CHANGED:
            {
                const { text } = action.payload;
                return {
                    ...state,
                    password: text,
                };
            }
        default:
            return state;
    }
};
