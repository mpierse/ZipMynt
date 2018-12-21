import { IUser } from 'app/core/user/user.model';

export interface IUserDetails {
    id?: number;
    user?: IUser;
}

export class UserDetails implements IUserDetails {
    constructor(public id?: number, public user?: IUser) {}
}
