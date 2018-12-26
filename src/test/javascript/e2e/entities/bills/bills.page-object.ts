import { element, by, ElementFinder } from 'protractor';

export class BillsComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    deleteButtons = element.all(by.css('jhi-bills div table .btn-danger'));
    title = element.all(by.css('jhi-bills div h2#page-heading span')).first();

    async clickOnCreateButton() {
        await this.createButton.click();
    }

    async clickOnLastDeleteButton() {
        await this.deleteButtons.last().click();
    }

    async countDeleteButtons() {
        return this.deleteButtons.count();
    }

    async getTitle() {
        return this.title.getText();
    }
}

export class BillsUpdatePage {
    pageTitle = element(by.id('jhi-bills-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    companyNameInput = element(by.id('field_companyName'));
    paymentTotalInput = element(by.id('field_paymentTotal'));
    userDetailsSelect = element(by.id('field_userDetails'));

    async getPageTitle() {
        return this.pageTitle.getText();
    }

    async setCompanyNameInput(companyName) {
        await this.companyNameInput.sendKeys(companyName);
    }

    async getCompanyNameInput() {
        return this.companyNameInput.getAttribute('value');
    }

    async setPaymentTotalInput(paymentTotal) {
        await this.paymentTotalInput.sendKeys(paymentTotal);
    }

    async getPaymentTotalInput() {
        return this.paymentTotalInput.getAttribute('value');
    }

    async userDetailsSelectLastOption() {
        await this.userDetailsSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async userDetailsSelectOption(option) {
        await this.userDetailsSelect.sendKeys(option);
    }

    getUserDetailsSelect(): ElementFinder {
        return this.userDetailsSelect;
    }

    async getUserDetailsSelectedOption() {
        return this.userDetailsSelect.element(by.css('option:checked')).getText();
    }

    async save() {
        await this.saveButton.click();
    }

    async cancel() {
        await this.cancelButton.click();
    }

    getSaveButton(): ElementFinder {
        return this.saveButton;
    }
}

export class BillsDeleteDialog {
    private dialogTitle = element(by.id('jhi-delete-bills-heading'));
    private confirmButton = element(by.id('jhi-confirm-delete-bills'));

    async getDialogTitle() {
        return this.dialogTitle.getText();
    }

    async clickOnConfirmButton() {
        await this.confirmButton.click();
    }
}
