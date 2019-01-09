import { Component, OnInit } from '@angular/core';
import 'chart.js/src/chart.js';

@Component({
    selector: 'jhi-budget-doughnut-chart',
    templateUrl: './budget-doughnut-chart.component.html'
})
export class BudgetDoughnutChartComponent implements OnInit {
    public doughnutChartLabels: string[] = ['Rent', 'Food', 'Income', 'Utilities', 'Shopping', 'Transfer', 'Automotive', 'Miscellaneous'];
    public doughnutChartData: number[] = [900, 450, 1000, 200, 600, 0, 80, 200];
    public doughnutChartType: string = 'doughnut';

    constructor() {}

    ngOnInit() {}
    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }
}
