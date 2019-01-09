import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import 'chart.js/src/chart.js';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';
import { BudgetItemService } from '../budget-item';
import { JhiAlertService, JhiEventManager } from 'ng-jhipster';
import { IBudgetItem } from 'app/shared/model/budget-item.model';

@Component({
    selector: 'jhi-budget-doughnut-chart',
    templateUrl: './budget-doughnut-chart.component.html'
})
export class BudgetDoughnutChartComponent implements OnInit {
    @ViewChild('base-chart')
    chart: BaseChartDirective;

    public doughnutChartLabels: Array<any>;
    public doughnutChartData: number[] = [900, 450, 1000, 200, 600, 0, 80, 200];
    public doughnutChartType: string = 'doughnut';
    private budgetItems: IBudgetItem[] = [];

    constructor(private budgetItemService: BudgetItemService, private jhiAlertService: JhiAlertService) {}

    ngOnInit() {
        this.loadAll();
        this.getCategories();
        this.chart.chart.update();
    }
    // events

    loadAll() {
        this.budgetItemService.query().subscribe(
            (res: HttpResponse<IBudgetItem[]>) => {
                this.budgetItems = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    getCategories() {
        for (let i = 0; i < this.budgetItems.length; i++) {
            console.log('budget items: ' + this.budgetItems.length);
            if (!this.doughnutChartLabels.includes(this.budgetItems[i].category)) {
                this.doughnutChartLabels.push(this.budgetItems[i].category);
            }
        }
    }

    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }

    protected onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
