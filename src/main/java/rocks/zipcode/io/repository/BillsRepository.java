package rocks.zipcode.io.repository;

import rocks.zipcode.io.domain.Bills;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Spring Data  repository for the Bills entity.
 */
@SuppressWarnings("unused")
@Repository
public interface BillsRepository extends JpaRepository<Bills, Long> {

    @Query("select bills from Bills bills where bills.user.login = ?#{principal.username}")
    List<Bills> findByUserIsCurrentUser();

}
