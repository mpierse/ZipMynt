import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'jhi-budget-snapshot-tracker',
    templateUrl: './budget-snapshot-tracker.component.html',
    styleUrls: ['./budget-snapshot-tracker.component.css']
})
export class BudgetSnapshotTrackerComponent implements OnInit {
    @Input() budgetCategory: string;
    @Input() budgetExpected: number;
    @Input() budgetActual: number;

    ngOnInit() {}
}
