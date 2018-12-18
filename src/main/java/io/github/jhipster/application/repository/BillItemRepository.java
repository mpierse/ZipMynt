package io.github.jhipster.application.repository;

import io.github.jhipster.application.domain.BillItem;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the BillItem entity.
 */
@SuppressWarnings("unused")
@Repository
public interface BillItemRepository extends JpaRepository<BillItem, Long> {

}
