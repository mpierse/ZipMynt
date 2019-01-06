import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BudgetSnapshotComponent } from './budget-snapshot.component';
import { BudgetDoughnutChartComponent } from './budget-doughnut-chart.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';

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
    imports: [ZipmyntSharedModule, RouterModule.forChild(ENTITY_STATES), ZipmyntBudgetItemModule, ChartsModule],
    declarations: [
        BudgetComponent,
        BudgetDetailComponent,
        BudgetUpdateComponent,
        BudgetDeleteDialogComponent,
        BudgetDeletePopupComponent,
        BudgetSnapshotComponent,
        BudgetDoughnutChartComponent
    ],
    entryComponents: [BudgetComponent, BudgetUpdateComponent, BudgetDeleteDialogComponent, BudgetDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    exports: [
        BudgetComponent,
        BudgetUpdateComponent,
        BudgetDeleteDialogComponent,
        BudgetDeletePopupComponent,
        BudgetSnapshotComponent,
        BudgetDoughnutChartComponent
    ]
})
export class ZipmyntBudgetModule {}
