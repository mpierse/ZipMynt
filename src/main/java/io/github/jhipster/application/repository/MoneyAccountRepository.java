package io.github.jhipster.application.repository;

import io.github.jhipster.application.domain.MoneyAccount;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the MoneyAccount entity.
 */
@SuppressWarnings("unused")
@Repository
public interface MoneyAccountRepository extends JpaRepository<MoneyAccount, Long> {

}
