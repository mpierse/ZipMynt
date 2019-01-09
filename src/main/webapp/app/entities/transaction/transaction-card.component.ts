import { Component, OnInit } from '@angular/core';
import { TransactionService } from './transaction.service';
import { ITransaction } from 'app/shared/model/transaction.model';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

@Component({
    selector: 'jhi-transaction-card',
    templateUrl: './transaction-card.component.html',
    styles: []
})
export class TransactionCardComponent implements OnInit {
    transactions: ITransaction[];

    constructor(private transactionService: TransactionService, private jhiAlertService: JhiAlertService) {}

    ngOnInit() {
        this.loadAll();
    }

    loadAll() {
        this.transactionService.query().subscribe(
            (res: HttpResponse<ITransaction[]>) => {
                this.transactions = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    protected onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
