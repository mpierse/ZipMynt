import { Component, OnInit } from '@angular/core';
import { BudgetService } from './budget.service';
import { IBudget } from 'app/shared/model/budget.model';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

@Component({
    selector: 'jhi-budget-snapshot',
    templateUrl: './budget-snapshot.component.html',
    styleUrls: ['./budget-snapshot.component.css']
})
export class BudgetSnapshotComponent implements OnInit {
    budgets: IBudget[] = [];
    today: number = Date.now();

    constructor(private budgetService: BudgetService, protected jhiAlertService: JhiAlertService) {}

    ngOnInit() {
        this.loadAll();
    }

    loadAll() {
        this.budgetService.query().subscribe(
            (res: HttpResponse<IBudget[]>) => {
                this.budgets = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    protected onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
    // Make methods to grab the specific budget expected/actuals
}
