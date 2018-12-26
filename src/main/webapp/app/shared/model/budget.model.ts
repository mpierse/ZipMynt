import { Moment } from 'moment';
import { IBudgetItem } from 'app/shared/model//budget-item.model';
import { IUserDetails } from 'app/shared/model//user-details.model';

export interface IBudget {
    id?: number;
    expectedTotal?: number;
    actualTotal?: number;
    startDate?: Moment;
    endDate?: Moment;
    budgetItems?: IBudgetItem[];
    userDetails?: IUserDetails;
}

export class Budget implements IBudget {
    constructor(
        public id?: number,
        public expectedTotal?: number,
        public actualTotal?: number,
        public startDate?: Moment,
        public endDate?: Moment,
        public budgetItems?: IBudgetItem[],
        public userDetails?: IUserDetails
    ) {}
}
