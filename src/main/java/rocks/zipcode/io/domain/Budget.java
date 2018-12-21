package rocks.zipcode.io.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A Budget.
 */
@Entity
@Table(name = "budget")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Budget implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @NotNull
    @Column(name = "expected_total", nullable = false)
    private Long expectedTotal;

    @NotNull
    @Column(name = "actual_total", nullable = false)
    private Long actualTotal;

    @NotNull
    @Column(name = "start_date", nullable = false)
    private LocalDate startDate;

    @NotNull
    @Column(name = "end_date", nullable = false)
    private LocalDate endDate;

    @OneToMany(mappedBy = "budget")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<BudgetItem> budgetItems = new HashSet<>();
    @ManyToOne
    @JsonIgnoreProperties("")
    private UserDetails userDetails;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getExpectedTotal() {
        return expectedTotal;
    }

    public Budget expectedTotal(Long expectedTotal) {
        this.expectedTotal = expectedTotal;
        return this;
    }

    public void setExpectedTotal(Long expectedTotal) {
        this.expectedTotal = expectedTotal;
    }

    public Long getActualTotal() {
        return actualTotal;
    }

    public Budget actualTotal(Long actualTotal) {
        this.actualTotal = actualTotal;
        return this;
    }

    public void setActualTotal(Long actualTotal) {
        this.actualTotal = actualTotal;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public Budget startDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public Budget endDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    public Set<BudgetItem> getBudgetItems() {
        return budgetItems;
    }

    public Budget budgetItems(Set<BudgetItem> budgetItems) {
        this.budgetItems = budgetItems;
        return this;
    }

    public Budget addBudgetItems(BudgetItem budgetItem) {
        this.budgetItems.add(budgetItem);
        budgetItem.setBudget(this);
        return this;
    }

    public Budget removeBudgetItems(BudgetItem budgetItem) {
        this.budgetItems.remove(budgetItem);
        budgetItem.setBudget(null);
        return this;
    }

    public void setBudgetItems(Set<BudgetItem> budgetItems) {
        this.budgetItems = budgetItems;
    }

    public UserDetails getUserDetails() {
        return userDetails;
    }

    public Budget userDetails(UserDetails userDetails) {
        this.userDetails = userDetails;
        return this;
    }

    public void setUserDetails(UserDetails userDetails) {
        this.userDetails = userDetails;
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
        Budget budget = (Budget) o;
        if (budget.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), budget.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Budget{" +
            "id=" + getId() +
            ", expectedTotal=" + getExpectedTotal() +
            ", actualTotal=" + getActualTotal() +
            ", startDate='" + getStartDate() + "'" +
            ", endDate='" + getEndDate() + "'" +
            "}";
    }
}
