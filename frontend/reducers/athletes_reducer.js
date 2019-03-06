import { RECEIVE_CURRENT_USER,
         LOGOUT_CURRENT_USER,
} from "../actions/session_actions";

const AthletesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    let newState;

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState = Object.assign({}, oldState, { [action.athlete.id]: action.athlete });

            return newState;
            
        default:
            return oldState;
    }
};

export default AthletesReducer;