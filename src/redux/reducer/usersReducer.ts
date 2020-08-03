import {UserActions} from '../actions/UserAction';
import { IUser } from '../../interface/user';
import { InputAccessoryView } from 'react-native';

type UserState = {
  data: IUser[];
};
const initialState: UserState = {
  data: [{name:'person one',age:20}],
};
const UserReducer = (state: UserState = initialState, 
    action: UserActions) => {
  switch (action.type) {
    case 'USER_DELETE':
      let a = state.data;
      //a.pop();

      return {
        ...state,
      };
    case 'USER_ADD':
      const u:IUser={name:action.payload.name,
        age:action.payload.age};
      let c = [...state.data];
      c.push(u);
      console.log(c);
      return {
        data: c,
      };
    default:
      return state;
  }
};
export default UserReducer;
