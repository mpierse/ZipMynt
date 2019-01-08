import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ZipmyntSharedModule } from 'app/shared';
import {
    BudgetItemComponent,
    BudgetItemDetailComponent,
    BudgetItemUpdateComponent,
    BudgetItemDeletePopupComponent,
    BudgetItemDeleteDialogComponent,
    budgetItemRoute,
    budgetItemPopupRoute
} from './';

const ENTITY_STATES = [...budgetItemRoute, ...budgetItemPopupRoute];

@NgModule({
    imports: [ZipmyntSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        BudgetItemComponent,
        BudgetItemDetailComponent,
        BudgetItemUpdateComponent,
        BudgetItemDeleteDialogComponent,
        BudgetItemDeletePopupComponent
    ],
    entryComponents: [BudgetItemComponent, BudgetItemUpdateComponent, BudgetItemDeleteDialogComponent, BudgetItemDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    exports: [BudgetItemComponent]
})
export class ZipmyntBudgetItemModule {}
