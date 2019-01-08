package rocks.zipcode.io.repository;

import rocks.zipcode.io.domain.BillItem;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Spring Data  repository for the BillItem entity.
 */
@SuppressWarnings("unused")
@Repository
public interface BillItemRepository extends JpaRepository<BillItem, Long> {
    @Query(value = "SELECT * FROM BILL_ITEM WHERE BILLS_ID = ?1", nativeQuery = true)
    List<BillItem> findAllBillItemsByBillId(Long billId);
    
}
