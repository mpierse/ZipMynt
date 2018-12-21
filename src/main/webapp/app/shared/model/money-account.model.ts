import { ITransaction } from 'app/shared/model//transaction.model';
import { IUserDetails } from 'app/shared/model//user-details.model';

export const enum AccountType {
    CREDIT = 'CREDIT',
    CHECKING = 'CHECKING',
    SAVINGS = 'SAVINGS',
    LOAN = 'LOAN'
}

export interface IMoneyAccount {
    id?: number;
    type?: AccountType;
    accountTotal?: number;
    transactions?: ITransaction[];
    userDetails?: IUserDetails;
}

export class MoneyAccount implements IMoneyAccount {
    constructor(
        public id?: number,
        public type?: AccountType,
        public accountTotal?: number,
        public transactions?: ITransaction[],
        public userDetails?: IUserDetails
    ) {}
}
