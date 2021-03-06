import { Component } from '@angular/core';
import { single } from './data';

@Component({
    selector: 'jhi-budget-doughnut-chart',
    templateUrl: './budget-doughnut-chart.component.html'
})
export class BudgetDoughnutChartComponent {
    single: any[];

    view: any[] = [600, 400];

    // options
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = false;
    showXAxisLabel = true;
    xAxisLabel = 'Category';
    showYAxisLabel = true;
    yAxisLabel = 'Spending';

    colorScheme = {
        domain: ['#A7D7D7', '#F5A7B5', '#FBE2AA', '#99C8EE', '#967bb6', '#C4D7E4']
    };

    // line, area
    autoScale = true;

    constructor() {
        Object.assign(this, { single });
    }

    onSelect(event) {
        console.log(event);
    }
}
