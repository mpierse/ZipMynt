import { IBillItem } from 'app/shared/model//bill-item.model';
import { IUser } from 'app/core/user/user.model';

export interface IBills {
    id?: number;
    paymentTotal?: number;
    billItems?: IBillItem[];
    user?: IUser;
}

export class Bills implements IBills {
    constructor(public id?: number, public paymentTotal?: number, public billItems?: IBillItem[], public user?: IUser) {}
}
