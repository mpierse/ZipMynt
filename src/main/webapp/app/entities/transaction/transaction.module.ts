import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ZipmyntSharedModule } from 'app/shared';
import { TransactionCardComponent } from './transaction-card.component';
import {
    TransactionComponent,
    TransactionDetailComponent,
    TransactionUpdateComponent,
    TransactionDeletePopupComponent,
    TransactionDeleteDialogComponent,
    transactionRoute,
    transactionPopupRoute
} from './';

const ENTITY_STATES = [...transactionRoute, ...transactionPopupRoute];

@NgModule({
    imports: [ZipmyntSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        TransactionComponent,
        TransactionDetailComponent,
        TransactionUpdateComponent,
        TransactionDeleteDialogComponent,
        TransactionDeletePopupComponent,
        TransactionCardComponent
    ],
    entryComponents: [
        TransactionComponent,
        TransactionUpdateComponent,
        TransactionDeleteDialogComponent,
        TransactionDeletePopupComponent,
        TransactionCardComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    exports: [TransactionComponent, TransactionDetailComponent, TransactionCardComponent]
})
export class ZipmyntTransactionModule {}
