import {UserActionTypes} from './user.types';
const INITIAL_STATE = {
  currentUser: null,
};
//if state is undefined , then it will take INITIAL_STATE
//null is also valid state
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
