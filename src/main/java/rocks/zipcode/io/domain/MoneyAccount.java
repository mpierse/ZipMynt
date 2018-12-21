package rocks.zipcode.io.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

import rocks.zipcode.io.domain.enumeration.AccountType;

/**
 * A MoneyAccount.
 */
@Entity
@Table(name = "money_account")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class MoneyAccount implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(name = "jhi_type", nullable = false)
    private AccountType type;

    @NotNull
    @Column(name = "account_total", nullable = false)
    private Long accountTotal;

    @OneToMany(mappedBy = "moneyAccount")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Transaction> transactions = new HashSet<>();
    @ManyToOne
    @JsonIgnoreProperties("")
    private User user;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public AccountType getType() {
        return type;
    }

    public MoneyAccount type(AccountType type) {
        this.type = type;
        return this;
    }

    public void setType(AccountType type) {
        this.type = type;
    }

    public Long getAccountTotal() {
        return accountTotal;
    }

    public MoneyAccount accountTotal(Long accountTotal) {
        this.accountTotal = accountTotal;
        return this;
    }

    public void setAccountTotal(Long accountTotal) {
        this.accountTotal = accountTotal;
    }

    public Set<Transaction> getTransactions() {
        return transactions;
    }

    public MoneyAccount transactions(Set<Transaction> transactions) {
        this.transactions = transactions;
        return this;
    }

    public MoneyAccount addTransactions(Transaction transaction) {
        this.transactions.add(transaction);
        transaction.setMoneyAccount(this);
        return this;
    }

    public MoneyAccount removeTransactions(Transaction transaction) {
        this.transactions.remove(transaction);
        transaction.setMoneyAccount(null);
        return this;
    }

    public void setTransactions(Set<Transaction> transactions) {
        this.transactions = transactions;
    }

    public User getUser() {
        return user;
    }

    public MoneyAccount user(User user) {
        this.user = user;
        return this;
    }

    public void setUser(User user) {
        this.user = user;
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
        MoneyAccount moneyAccount = (MoneyAccount) o;
        if (moneyAccount.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), moneyAccount.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "MoneyAccount{" +
            "id=" + getId() +
            ", type='" + getType() + "'" +
            ", accountTotal=" + getAccountTotal() +
            "}";
    }
}
