import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ZipmyntSharedModule } from 'app/shared';
import {
    MoneyAccountComponent,
    MoneyAccountDetailComponent,
    MoneyAccountUpdateComponent,
    MoneyAccountDeletePopupComponent,
    MoneyAccountDeleteDialogComponent,
    moneyAccountRoute,
    moneyAccountPopupRoute
} from './';

const ENTITY_STATES = [...moneyAccountRoute, ...moneyAccountPopupRoute];

@NgModule({
    imports: [ZipmyntSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        MoneyAccountComponent,
        MoneyAccountDetailComponent,
        MoneyAccountUpdateComponent,
        MoneyAccountDeleteDialogComponent,
        MoneyAccountDeletePopupComponent
    ],
    entryComponents: [
        MoneyAccountComponent,
        MoneyAccountUpdateComponent,
        MoneyAccountDeleteDialogComponent,
        MoneyAccountDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ZipmyntMoneyAccountModule {}
