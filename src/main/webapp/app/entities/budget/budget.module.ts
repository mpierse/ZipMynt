import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BudgetSnapshotComponent } from './budget-snapshot.component';
import { BudgetDoughnutChartComponent } from './budget-doughnut-chart.component';
import { BudgetProgressBarComponent } from './budget-progress-bar.component';
import { BudgetModalComponent, BudgetModalContentComponent } from './budget-modal.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';

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
    imports: [
        ZipmyntSharedModule,
        RouterModule.forChild(ENTITY_STATES),
        ZipmyntBudgetItemModule,
        ChartsModule,
        CommonModule,
        NgxChartsModule
    ],
    declarations: [
        BudgetComponent,
        BudgetDetailComponent,
        BudgetUpdateComponent,
        BudgetDeleteDialogComponent,
        BudgetDeletePopupComponent,
        BudgetSnapshotComponent,
        BudgetDoughnutChartComponent,
        BudgetProgressBarComponent,
        BudgetModalComponent,
        BudgetModalContentComponent
    ],
    entryComponents: [
        BudgetComponent,
        BudgetUpdateComponent,
        BudgetDeleteDialogComponent,
        BudgetDeletePopupComponent,
        BudgetModalContentComponent,
        BudgetModalComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    exports: [
        BudgetComponent,
        BudgetUpdateComponent,
        BudgetDeleteDialogComponent,
        BudgetDeletePopupComponent,
        BudgetSnapshotComponent,
        BudgetDoughnutChartComponent,
        BudgetProgressBarComponent
    ]
})
export class ZipmyntBudgetModule {}
