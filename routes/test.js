const express= require('express');
const router = express.Router();
const testCtrl = require('../controllers/test');

/**
 * @swagger
 * tags:
 *   name: test
 *   description: Test management
 */

/**
 * @swagger
 * /api/test:
 *   get:
 *     summary: Returns hello
 *     tags: [test]
 *     responses:
 *       200:
 *         description: test list
 *         schema:
 *           type: object
 *           properties:
 *            id:
 *              type: integer
 *              description: unique id
 *            testCol1:
 *              type: string
 *              description: test col1
 *            testCol2:
 *              type: string
 *              description: test col2
 *            testCol3:
 *              type: string
 *              description: test col3
 *            updatedAt:
 *              type: string
 *              description: updated at
 *            createdAt:
 *              type: string
 *              description: created at
 */
router.get('/', 
  testCtrl.getHello);

module.exports = router;
