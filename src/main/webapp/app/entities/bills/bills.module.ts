import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ZipMyntSharedModule } from 'app/shared';
import {
    BillsComponent,
    BillsDetailComponent,
    BillsUpdateComponent,
    BillsDeletePopupComponent,
    BillsDeleteDialogComponent,
    billsRoute,
    billsPopupRoute
} from './';

const ENTITY_STATES = [...billsRoute, ...billsPopupRoute];

@NgModule({
    imports: [ZipMyntSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [BillsComponent, BillsDetailComponent, BillsUpdateComponent, BillsDeleteDialogComponent, BillsDeletePopupComponent],
    entryComponents: [BillsComponent, BillsUpdateComponent, BillsDeleteDialogComponent, BillsDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ZipMyntBillsModule {}
