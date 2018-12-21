import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { JhiAlertService } from 'ng-jhipster';

import { IBudget } from 'app/shared/model/budget.model';
import { BudgetService } from './budget.service';
import { IUser, UserService } from 'app/core';

@Component({
    selector: 'jhi-budget-update',
    templateUrl: './budget-update.component.html'
})
export class BudgetUpdateComponent implements OnInit {
    budget: IBudget;
    isSaving: boolean;

    users: IUser[];
    startDateDp: any;
    endDateDp: any;

    constructor(
        protected jhiAlertService: JhiAlertService,
        protected budgetService: BudgetService,
        protected userService: UserService,
        protected activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ budget }) => {
            this.budget = budget;
        });
        this.userService.query().subscribe(
            (res: HttpResponse<IUser[]>) => {
                this.users = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.budget.id !== undefined) {
            this.subscribeToSaveResponse(this.budgetService.update(this.budget));
        } else {
            this.subscribeToSaveResponse(this.budgetService.create(this.budget));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IBudget>>) {
        result.subscribe((res: HttpResponse<IBudget>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    protected onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    protected onSaveError() {
        this.isSaving = false;
    }

    protected onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }

    trackUserById(index: number, item: IUser) {
        return item.id;
    }
}
