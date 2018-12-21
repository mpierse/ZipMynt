import { element, by, ElementFinder } from 'protractor';

export class MoneyAccountComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    deleteButtons = element.all(by.css('jhi-money-account div table .btn-danger'));
    title = element.all(by.css('jhi-money-account div h2#page-heading span')).first();

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

export class MoneyAccountUpdatePage {
    pageTitle = element(by.id('jhi-money-account-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    typeSelect = element(by.id('field_type'));
    accountTotalInput = element(by.id('field_accountTotal'));
    userSelect = element(by.id('field_user'));

    async getPageTitle() {
        return this.pageTitle.getText();
    }

    async setTypeSelect(type) {
        await this.typeSelect.sendKeys(type);
    }

    async getTypeSelect() {
        return this.typeSelect.element(by.css('option:checked')).getText();
    }

    async typeSelectLastOption() {
        await this.typeSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async setAccountTotalInput(accountTotal) {
        await this.accountTotalInput.sendKeys(accountTotal);
    }

    async getAccountTotalInput() {
        return this.accountTotalInput.getAttribute('value');
    }

    async userSelectLastOption() {
        await this.userSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async userSelectOption(option) {
        await this.userSelect.sendKeys(option);
    }

    getUserSelect(): ElementFinder {
        return this.userSelect;
    }

    async getUserSelectedOption() {
        return this.userSelect.element(by.css('option:checked')).getText();
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

export class MoneyAccountDeleteDialog {
    private dialogTitle = element(by.id('jhi-delete-moneyAccount-heading'));
    private confirmButton = element(by.id('jhi-confirm-delete-moneyAccount'));

    async getDialogTitle() {
        return this.dialogTitle.getText();
    }

    async clickOnConfirmButton() {
        await this.confirmButton.click();
    }
}
