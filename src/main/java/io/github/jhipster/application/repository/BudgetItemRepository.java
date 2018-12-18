package io.github.jhipster.application.repository;

import io.github.jhipster.application.domain.BudgetItem;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the BudgetItem entity.
 */
@SuppressWarnings("unused")
@Repository
public interface BudgetItemRepository extends JpaRepository<BudgetItem, Long> {

}
