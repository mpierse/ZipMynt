package io.github.jhipster.application.repository;

import io.github.jhipster.application.domain.Budget;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Budget entity.
 */
@SuppressWarnings("unused")
@Repository
public interface BudgetRepository extends JpaRepository<Budget, Long> {

}
