import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BudgetSnapshotComponent } from './budget-snapshot.component';

import { ZipmyntSharedModule } from 'app/shared';
import {
    BudgetComponent,
    BudgetDetailComponent,
    BudgetUpdateComponent,
    BudgetDeletePopupComponent,
    BudgetDeleteDialogComponent,
    budgetRoute,
    budgetPopupRoute
} from './';
import { ZipmyntBudgetItemModule } from 'app/entities/budget-item/budget-item.module';

const ENTITY_STATES = [...budgetRoute, ...budgetPopupRoute];

@NgModule({
    imports: [ZipmyntSharedModule, RouterModule.forChild(ENTITY_STATES), ZipmyntBudgetItemModule],
    declarations: [
        BudgetComponent,
        BudgetDetailComponent,
        BudgetUpdateComponent,
        BudgetDeleteDialogComponent,
        BudgetDeletePopupComponent,
        BudgetSnapshotComponent
    ],
    entryComponents: [BudgetComponent, BudgetUpdateComponent, BudgetDeleteDialogComponent, BudgetDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    exports: [BudgetComponent, BudgetUpdateComponent, BudgetDeleteDialogComponent, BudgetDeletePopupComponent, BudgetSnapshotComponent]
})
export class ZipmyntBudgetModule {}
