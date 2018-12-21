package rocks.zipcode.io.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;

import rocks.zipcode.io.domain.enumeration.TransactionType;

import rocks.zipcode.io.domain.enumeration.Category;

/**
 * A Transaction.
 */
@Entity
@Table(name = "transaction")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Transaction implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @NotNull
    @Column(name = "amount", nullable = false)
    private Long amount;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(name = "transaction_type", nullable = false)
    private TransactionType transactionType;

    @NotNull
    @Column(name = "account_id", nullable = false)
    private String accountId;

    @NotNull
    @Column(name = "date_time", nullable = false)
    private LocalDate dateTime;

    @NotNull
    @Column(name = "description_id", nullable = false)
    private String descriptionID;

    @Column(name = "memo")
    private String memo;

    @Enumerated(EnumType.STRING)
    @Column(name = "category")
    private Category category;

    @ManyToOne
    @JsonIgnoreProperties("transactions")
    private MoneyAccount moneyAccount;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getAmount() {
        return amount;
    }

    public Transaction amount(Long amount) {
        this.amount = amount;
        return this;
    }

    public void setAmount(Long amount) {
        this.amount = amount;
    }

    public TransactionType getTransactionType() {
        return transactionType;
    }

    public Transaction transactionType(TransactionType transactionType) {
        this.transactionType = transactionType;
        return this;
    }

    public void setTransactionType(TransactionType transactionType) {
        this.transactionType = transactionType;
    }

    public String getAccountId() {
        return accountId;
    }

    public Transaction accountId(String accountId) {
        this.accountId = accountId;
        return this;
    }

    public void setAccountId(String accountId) {
        this.accountId = accountId;
    }

    public LocalDate getDateTime() {
        return dateTime;
    }

    public Transaction dateTime(LocalDate dateTime) {
        this.dateTime = dateTime;
        return this;
    }

    public void setDateTime(LocalDate dateTime) {
        this.dateTime = dateTime;
    }

    public String getDescriptionID() {
        return descriptionID;
    }

    public Transaction descriptionID(String descriptionID) {
        this.descriptionID = descriptionID;
        return this;
    }

    public void setDescriptionID(String descriptionID) {
        this.descriptionID = descriptionID;
    }

    public String getMemo() {
        return memo;
    }

    public Transaction memo(String memo) {
        this.memo = memo;
        return this;
    }

    public void setMemo(String memo) {
        this.memo = memo;
    }

    public Category getCategory() {
        return category;
    }

    public Transaction category(Category category) {
        this.category = category;
        return this;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public MoneyAccount getMoneyAccount() {
        return moneyAccount;
    }

    public Transaction moneyAccount(MoneyAccount moneyAccount) {
        this.moneyAccount = moneyAccount;
        return this;
    }

    public void setMoneyAccount(MoneyAccount moneyAccount) {
        this.moneyAccount = moneyAccount;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Transaction transaction = (Transaction) o;
        if (transaction.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), transaction.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Transaction{" +
            "id=" + getId() +
            ", amount=" + getAmount() +
            ", transactionType='" + getTransactionType() + "'" +
            ", accountId='" + getAccountId() + "'" +
            ", dateTime='" + getDateTime() + "'" +
            ", descriptionID='" + getDescriptionID() + "'" +
            ", memo='" + getMemo() + "'" +
            ", category='" + getCategory() + "'" +
            "}";
    }
}
