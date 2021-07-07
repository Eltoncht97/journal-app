import { types } from "../types/types";

/*
  {
    uid: '21212',
    name: 'elton
  }
*/
export const authReducer = ( state = {}, action ) => {

  switch (action.type) {
    case types.login:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName
      };

    case types.logout:
      return {};
  
    default:
      return state;
  };
  
}