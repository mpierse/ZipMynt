import { element, by, ElementFinder } from 'protractor';

export class TransactionComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    deleteButtons = element.all(by.css('jhi-transaction div table .btn-danger'));
    title = element.all(by.css('jhi-transaction div h2#page-heading span')).first();

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

export class TransactionUpdatePage {
    pageTitle = element(by.id('jhi-transaction-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    amountInput = element(by.id('field_amount'));
    transactionTypeSelect = element(by.id('field_transactionType'));
    accountIdInput = element(by.id('field_accountId'));
    dateTimeInput = element(by.id('field_dateTime'));
    descriptionIDInput = element(by.id('field_descriptionID'));
    memoInput = element(by.id('field_memo'));
    categorySelect = element(by.id('field_category'));
    moneyAccountSelect = element(by.id('field_moneyAccount'));

    async getPageTitle() {
        return this.pageTitle.getText();
    }

    async setAmountInput(amount) {
        await this.amountInput.sendKeys(amount);
    }

    async getAmountInput() {
        return this.amountInput.getAttribute('value');
    }

    async setTransactionTypeSelect(transactionType) {
        await this.transactionTypeSelect.sendKeys(transactionType);
    }

    async getTransactionTypeSelect() {
        return this.transactionTypeSelect.element(by.css('option:checked')).getText();
    }

    async transactionTypeSelectLastOption() {
        await this.transactionTypeSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async setAccountIdInput(accountId) {
        await this.accountIdInput.sendKeys(accountId);
    }

    async getAccountIdInput() {
        return this.accountIdInput.getAttribute('value');
    }

    async setDateTimeInput(dateTime) {
        await this.dateTimeInput.sendKeys(dateTime);
    }

    async getDateTimeInput() {
        return this.dateTimeInput.getAttribute('value');
    }

    async setDescriptionIDInput(descriptionID) {
        await this.descriptionIDInput.sendKeys(descriptionID);
    }

    async getDescriptionIDInput() {
        return this.descriptionIDInput.getAttribute('value');
    }

    async setMemoInput(memo) {
        await this.memoInput.sendKeys(memo);
    }

    async getMemoInput() {
        return this.memoInput.getAttribute('value');
    }

    async setCategorySelect(category) {
        await this.categorySelect.sendKeys(category);
    }

    async getCategorySelect() {
        return this.categorySelect.element(by.css('option:checked')).getText();
    }

    async categorySelectLastOption() {
        await this.categorySelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async moneyAccountSelectLastOption() {
        await this.moneyAccountSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async moneyAccountSelectOption(option) {
        await this.moneyAccountSelect.sendKeys(option);
    }

    getMoneyAccountSelect(): ElementFinder {
        return this.moneyAccountSelect;
    }

    async getMoneyAccountSelectedOption() {
        return this.moneyAccountSelect.element(by.css('option:checked')).getText();
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

export class TransactionDeleteDialog {
    private dialogTitle = element(by.id('jhi-delete-transaction-heading'));
    private confirmButton = element(by.id('jhi-confirm-delete-transaction'));

    async getDialogTitle() {
        return this.dialogTitle.getText();
    }

    async clickOnConfirmButton() {
        await this.confirmButton.click();
    }
}
