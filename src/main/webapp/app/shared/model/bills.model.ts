import { IBillItem } from 'app/shared/model//bill-item.model';
import { IUserDetails } from 'app/shared/model//user-details.model';

export interface IBills {
    id?: number;
    companyName?: string;
    paymentTotal?: number;
    billItems?: IBillItem[];
    userDetails?: IUserDetails;
}

export class Bills implements IBills {
    constructor(
        public id?: number,
        public companyName?: string,
        public paymentTotal?: number,
        public billItems?: IBillItem[],
        public userDetails?: IUserDetails
    ) {}
}
