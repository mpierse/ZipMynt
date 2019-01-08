import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'jhi-budget-progress-bar',
    templateUrl: './budget-progress-bar.component.html',
    styleUrls: ['./budget-progress-bar.component.css']
})
export class BudgetProgressBarComponent implements OnInit {
    @Input() budgetCategory: string;
    @Input() budgetExpected: number;
    @Input() budgetActual: number;

    ngOnInit() {}
}
