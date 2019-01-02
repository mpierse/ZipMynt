package rocks.zipcode.io.repository;

import rocks.zipcode.io.domain.MoneyAccount;

import java.util.List;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the MoneyAccount entity.
 */
@SuppressWarnings("unused")
@Repository
public interface MoneyAccountRepository extends JpaRepository<MoneyAccount, Long> {

    @Query(value = "SELECT * FROM MONEY_ACCOUNT LEFT JOIN JHI_USER ON JHI_USER.ID = MONEY_ACCOUNT.USER_DETAILS_ID  WHERE JHI_USER.LOGIN = ?#{principal?.username}", nativeQuery = true)
    List<MoneyAccount> findByUserIsCurrentUser();
}
