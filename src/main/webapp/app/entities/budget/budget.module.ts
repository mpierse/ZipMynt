import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ZipmyntSharedModule } from 'app/shared';
import { ZipmyntAdminModule } from 'app/admin/admin.module';
import {
    BudgetComponent,
    BudgetDetailComponent,
    BudgetUpdateComponent,
    BudgetDeletePopupComponent,
    BudgetDeleteDialogComponent,
    budgetRoute,
    budgetPopupRoute
} from './';

const ENTITY_STATES = [...budgetRoute, ...budgetPopupRoute];

@NgModule({
    imports: [ZipmyntSharedModule, ZipmyntAdminModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [BudgetComponent, BudgetDetailComponent, BudgetUpdateComponent, BudgetDeleteDialogComponent, BudgetDeletePopupComponent],
    entryComponents: [BudgetComponent, BudgetUpdateComponent, BudgetDeleteDialogComponent, BudgetDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ZipmyntBudgetModule {}
