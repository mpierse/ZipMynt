package rocks.zipcode.io.repository;

import rocks.zipcode.io.domain.BudgetItem;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the BudgetItem entity.
 */
@SuppressWarnings("unused")
@Repository
public interface BudgetItemRepository extends JpaRepository<BudgetItem, Long> {

}
