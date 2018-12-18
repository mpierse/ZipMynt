import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ZipMyntUserDetailsModule } from './user-details/user-details.module';
import { ZipMyntMoneyAccountModule } from './money-account/money-account.module';
import { ZipMyntTransactionModule } from './transaction/transaction.module';
import { ZipMyntBudgetModule } from './budget/budget.module';
import { ZipMyntBudgetItemModule } from './budget-item/budget-item.module';
import { ZipMyntBillsModule } from './bills/bills.module';
import { ZipMyntBillItemModule } from './bill-item/bill-item.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        ZipMyntUserDetailsModule,
        ZipMyntMoneyAccountModule,
        ZipMyntTransactionModule,
        ZipMyntBudgetModule,
        ZipMyntBudgetItemModule,
        ZipMyntBillsModule,
        ZipMyntBillItemModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ZipMyntEntityModule {}
