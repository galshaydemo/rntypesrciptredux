import { IUser } from "../../interface/user";

export interface IUserAddAction {
  readonly type: 'USER_ADD';
  payload: IUser;
}
export interface IUserDeleteAction {
  readonly type: 'USER_DELETE';
  payload: IUser;
}

export type UserActions = IUserAddAction | IUserDeleteAction;
