import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'jhi-budget-modal',
    template: `
        <div class="modal-header">
            <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <p>Budget items for Dec 1 to Dec 31</p>
            <jhi-budget-item></jhi-budget-item>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
        </div>
    `
})
export class BudgetModalContentComponent {
    @Input() name;

    constructor(public activeModal: NgbActiveModal) {}
}

@Component({
    selector: 'jhi-budget-modal-component',
    templateUrl: './budget-modal.component.html'
})
export class BudgetModalComponent {
    constructor(private modalService: NgbModal) {}

    open() {
        const modalRef = this.modalService.open(BudgetModalContentComponent, { size: 'lg', backdrop: true });
        modalRef.componentInstance.name = 'BudgetItems';
    }
}
