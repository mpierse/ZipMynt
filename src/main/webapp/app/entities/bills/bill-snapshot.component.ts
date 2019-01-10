import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { BillsService } from './bills.service';
import { JhiAlertService } from 'ng-jhipster';
import { IBills } from 'app/shared/model/bills.model';

import { BillItemService } from '../bill-item/bill-item.service';
import { IBillItem } from 'app/shared/model/bill-item.model';

@Component({
    selector: 'jhi-bill-snapshot',
    templateUrl: './bill-snapshot.component.html',
    styles: []
})
export class BillSnapshotComponent implements OnInit {
    billItems: IBills[];

    constructor(
        protected billsService: BillsService,
        protected jhiAlertService: JhiAlertService,
        protected billItemService: BillItemService
    ) {}

    ngOnInit() {
        this.loadAll();
    }

    loadAll() {
        this.billItemService.query().subscribe(
            (res: HttpResponse<IBillItem[]>) => {
                this.billItems = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    protected onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
