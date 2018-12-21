package rocks.zipcode.io.repository;

import rocks.zipcode.io.domain.Budget;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Spring Data  repository for the Budget entity.
 */
@SuppressWarnings("unused")
@Repository
public interface BudgetRepository extends JpaRepository<Budget, Long> {

    @Query("select budget from Budget budget where budget.user.login = ?#{principal.username}")
    List<Budget> findByUserIsCurrentUser();

}
