import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'jhi-budget-snapshot-tracker',
    templateUrl: './budget-snapshot-tracker.component.html',
    styleUrls: ['./budget-snapshot-tracker.component.css']
})
export class BudgetSnapshotTrackerComponent implements OnInit {
    name: any;
    subPlease: any;
    width: any;

    // fundData = [{
    //     'fund': 'General',
    //     'goal': '10000',
    //     'raised': '4650',
    // }];

    ngOnInit() {
        this.width = 45;
    }
}
