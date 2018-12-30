package rocks.zipcode.io.repository;

import rocks.zipcode.io.domain.BudgetItem;

import java.util.List;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the BudgetItem entity.
 */
@SuppressWarnings("unused")
@Repository
public interface BudgetItemRepository extends JpaRepository<BudgetItem, Long> {

    @Query(value = "SELECT * FROM BUDGET_ITEM WHERE BUDGET_ID = ?1", nativeQuery = true)
    List<BudgetItem> findAllBudgetItemsByBudgetId(Long budgetId);

    @Query(value = "SELECT * FROM BUDGET_ITEM WHERE ACTUAL_SPENDING > EXPECTED_SPENDING", nativeQuery = true)
    List<BudgetItem> findAllBudgetItemsOverBudget();

    @Query(value = "SELECT * FROM BUDGET_ITEM WHERE ACTUAL_SPENDING < EXPECTED_SPENDING", nativeQuery = true)
    List<BudgetItem> findAllBudgetItemsUnderBudget();

}
