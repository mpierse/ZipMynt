import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { BillSnapshotCalendarComponent } from './bills-snapshot-calendar.component';

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
    imports: [
        ZipmyntSharedModule,
        RouterModule.forChild(ENTITY_STATES),
        CalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory
        })
    ],
    declarations: [
        BillsComponent,
        BillsDetailComponent,
        BillsUpdateComponent,
        BillsDeleteDialogComponent,
        BillsDeletePopupComponent,
        BillSnapshotComponent,
        BillSnapshotCalendarComponent
    ],
    entryComponents: [BillsComponent, BillsUpdateComponent, BillsDeleteDialogComponent, BillsDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    exports: [
        BillsComponent,
        BillsDetailComponent,
        BillsUpdateComponent,
        BillsDeleteDialogComponent,
        BillsDeletePopupComponent,
        BillSnapshotComponent,
        BillSnapshotCalendarComponent
    ]
})
export class ZipmyntBillsModule {}
