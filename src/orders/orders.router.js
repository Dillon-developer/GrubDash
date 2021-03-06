const router = require("express").Router();
const controller = require("./orders.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

// TODO: Implement the /orders routes needed to make the tests pass
// attach the handlers (create, read, update, and list)
router
    .route('/')
    .get(controller.list)
    .post(controller.create)
    .all(methodNotAllowed);

router
    .route('/:orderId')
    .get(controller.read)
    .put(controller.update)
    .post(controller.create)
    .delete(controller.delete)
    .all(methodNotAllowed);

module.exports = router;