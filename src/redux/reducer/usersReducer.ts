import {UserActions} from '../actions/UserAction';
import {IUser} from '../../interface/user';
import {InputAccessoryView} from 'react-native';

type UserState = {
  data: IUser[];
};
const initialState: UserState = {
  data: [{name: 'person one', age: 20, id: '000000000'}],
};
const UserReducer = (state: UserState = initialState, action: UserActions) => {
  switch (action.type) {
    case 'USER_DELETE':
      console.log('delete');
      console.log(action.payload.name);
      let a = [...state.data];
      console.log(a);
      //a.pop();
      a = a.filter((ele) => ele.name != action.payload.name);
      console.log(a);
      return {
        data: a,
      };
    case 'USER_ADD':
      const u: IUser = {
        name: action.payload.name,
        age: action.payload.age,
        id: action.payload.id,
      };
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
