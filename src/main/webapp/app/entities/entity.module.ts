import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ZipmyntMoneyAccountModule } from './money-account/money-account.module';
import { ZipmyntTransactionModule } from './transaction/transaction.module';
import { ZipmyntBudgetModule } from './budget/budget.module';
import { ZipmyntBudgetItemModule } from './budget-item/budget-item.module';
import { ZipmyntBillsModule } from './bills/bills.module';
import { ZipmyntBillItemModule } from './bill-item/bill-item.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        ZipmyntMoneyAccountModule,
        ZipmyntTransactionModule,
        ZipmyntBudgetModule,
        ZipmyntBudgetItemModule,
        ZipmyntBillsModule,
        ZipmyntBillItemModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ZipmyntEntityModule {}
