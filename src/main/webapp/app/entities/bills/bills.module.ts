import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ZipmyntSharedModule } from 'app/shared';
import {
    BillsComponent,
    BillsDetailComponent,
    BillsUpdateComponent,
    BillsDeletePopupComponent,
    BillsDeleteDialogComponent,
    billsRoute,
    billsPopupRoute
} from './';

import { BillSnapshotComponent } from './bill-snapshot.component';

const ENTITY_STATES = [...billsRoute, ...billsPopupRoute];

@NgModule({
    imports: [ZipmyntSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        BillsComponent,
        BillsDetailComponent,
        BillsUpdateComponent,
        BillsDeleteDialogComponent,
        BillsDeletePopupComponent,
        BillSnapshotComponent
    ],
    entryComponents: [BillsComponent, BillsUpdateComponent, BillsDeleteDialogComponent, BillsDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    exports: [
        BillsComponent,
        BillsDetailComponent,
        BillsUpdateComponent,
        BillsDeleteDialogComponent,
        BillsDeletePopupComponent,
        BillSnapshotComponent
    ]
})
export class ZipmyntBillsModule {}
