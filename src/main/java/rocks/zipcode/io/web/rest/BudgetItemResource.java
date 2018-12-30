package rocks.zipcode.io.web.rest;

import com.codahale.metrics.annotation.Timed;
import rocks.zipcode.io.domain.BudgetItem;
import rocks.zipcode.io.repository.BudgetItemRepository;
import rocks.zipcode.io.web.rest.errors.BadRequestAlertException;
import rocks.zipcode.io.web.rest.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing BudgetItem.
 */
@RestController
@RequestMapping("/api")
public class BudgetItemResource {

    private final Logger log = LoggerFactory.getLogger(BudgetItemResource.class);

    private static final String ENTITY_NAME = "budgetItem";

    private final BudgetItemRepository budgetItemRepository;

    public BudgetItemResource(BudgetItemRepository budgetItemRepository) {
        this.budgetItemRepository = budgetItemRepository;
    }

    /**
     * POST  /budget-items : Create a new budgetItem.
     *
     * @param budgetItem the budgetItem to create
     * @return the ResponseEntity with status 201 (Created) and with body the new budgetItem, or with status 400 (Bad Request) if the budgetItem has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/budget-items")
    @Timed
    public ResponseEntity<BudgetItem> createBudgetItem(@Valid @RequestBody BudgetItem budgetItem) throws URISyntaxException {
        log.debug("REST request to save BudgetItem : {}", budgetItem);
        if (budgetItem.getId() != null) {
            throw new BadRequestAlertException("A new budgetItem cannot already have an ID", ENTITY_NAME, "idexists");
        }
        BudgetItem result = budgetItemRepository.save(budgetItem);
        return ResponseEntity.created(new URI("/api/budget-items/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /budget-items : Updates an existing budgetItem.
     *
     * @param budgetItem the budgetItem to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated budgetItem,
     * or with status 400 (Bad Request) if the budgetItem is not valid,
     * or with status 500 (Internal Server Error) if the budgetItem couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/budget-items")
    @Timed
    public ResponseEntity<BudgetItem> updateBudgetItem(@Valid @RequestBody BudgetItem budgetItem) throws URISyntaxException {
        log.debug("REST request to update BudgetItem : {}", budgetItem);
        if (budgetItem.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        BudgetItem result = budgetItemRepository.save(budgetItem);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, budgetItem.getId().toString()))
            .body(result);
    }

    /**
     * GET  /budget-items : get all the budgetItems.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of budgetItems in body
     */
    @GetMapping("/budget-items")
    @Timed
    public List<BudgetItem> getAllBudgetItems() {
        log.debug("REST request to get all BudgetItems");
        return budgetItemRepository.findAll();
    }

    /**
     * GET  /budget-items/:id : get the "id" budgetItem.
     *
     * @param id the id of the budgetItem to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the budgetItem, or with status 404 (Not Found)
     */
    @GetMapping("/budget-items/{id}")
    @Timed
    public ResponseEntity<BudgetItem> getBudgetItem(@PathVariable Long id) {
        log.debug("REST request to get BudgetItem : {}", id);
        Optional<BudgetItem> budgetItem = budgetItemRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(budgetItem);
    }

    /**
     * DELETE  /budget-items/:id : delete the "id" budgetItem.
     *
     * @param id the id of the budgetItem to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/budget-items/{id}")
    @Timed
    public ResponseEntity<Void> deleteBudgetItem(@PathVariable Long id) {
        log.debug("REST request to delete BudgetItem : {}", id);

        budgetItemRepository.deleteById(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }

    /**
     * GET  /budget-items : get all the budgetItems with given budgetId.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of budgetItems in body
     */
    @GetMapping("/budget-items/budget-{budgetId}")
    @Timed
    public List<BudgetItem> getAllBudgetItemsByBudgetId(@PathVariable Long budgetId) {
        log.debug("REST request to get all BudgetItems : budget-{}", budgetId);
        return budgetItemRepository.findAllBudgetItemsByBudgetId(budgetId);
    }

    /**
     * GET  /budget-items : get all the over budget budgetItems.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of budgetItems in body
     */
    @GetMapping("/budget-items/overbudget")
    @Timed
    public List<BudgetItem> getAllOverBudgetBudgetItems() {
        log.debug("REST request to get all over budget BudgetItems");
        return budgetItemRepository.findAllBudgetItemsOverBudget();
    }

    /**
     * GET  /budget-items : get all the under budget budgetItems.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of budgetItems in body
     */
    @GetMapping("/budget-items/underbudget")
    @Timed
    public List<BudgetItem> getAllUnderBudgetBudgetItems() {
        log.debug("REST request to get all under budget BudgetItems");
        return budgetItemRepository.findAllBudgetItemsUnderBudget();
    }
}
