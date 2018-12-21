import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JhiAlertService } from 'ng-jhipster';

import { IBills } from 'app/shared/model/bills.model';
import { BillsService } from './bills.service';
import { IUser, UserService } from 'app/core';

@Component({
    selector: 'jhi-bills-update',
    templateUrl: './bills-update.component.html'
})
export class BillsUpdateComponent implements OnInit {
    bills: IBills;
    isSaving: boolean;

    users: IUser[];

    constructor(
        protected jhiAlertService: JhiAlertService,
        protected billsService: BillsService,
        protected userService: UserService,
        protected activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ bills }) => {
            this.bills = bills;
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
        if (this.bills.id !== undefined) {
            this.subscribeToSaveResponse(this.billsService.update(this.bills));
        } else {
            this.subscribeToSaveResponse(this.billsService.create(this.bills));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IBills>>) {
        result.subscribe((res: HttpResponse<IBills>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
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
