import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ZipmyntSharedModule } from 'app/shared';
import { HOME_ROUTE, HomeComponent } from './';
import { NgxPlaidLinkModule } from 'ngx-plaid-link';
import { ZipmyntMoneyAccountModule } from '../entities/money-account/money-account.module';
import { ZipmyntTransactionModule } from '../entities/transaction/transaction.module';
import { ZipmyntBudgetModule } from '../entities/budget/budget.module';
import { ZipmyntBillsModule } from '../entities/bills/bills.module';

@NgModule({
    imports: [
        ZipmyntSharedModule,
        NgxPlaidLinkModule,
        ZipmyntTransactionModule,
        ZipmyntMoneyAccountModule,
        ZipmyntBudgetModule,
        ZipmyntBillsModule,
        RouterModule.forChild([HOME_ROUTE])
    ],
    declarations: [HomeComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ZipmyntHomeModule {}
