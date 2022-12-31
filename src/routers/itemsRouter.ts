import express from "express";
import ItemsController from "../controllers/itemsController";
import multer from "multer"
import { storage } from "../utils/onMulterStorage";
import { ROUTES } from "../config";

const upload = multer({ storage })

const itemsRouter = express.Router();

const { ITEMS } = ROUTES

/**
 * @swagger
 * /api/items:
 *  get:
 *    description: Get all items data
 *    responses:
 *      200:
 *        description: A successful response
 */
itemsRouter.get(`/${ITEMS}`, ItemsController.onGetItems)

/**
 * @swagger
 *  /api/items/{id}:
 *  get:
 *    summary: Find item by id
 *    description: Use to get item by id from query
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: uuid to get item.
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: Item found successfully
 */
itemsRouter.get(`/${ITEMS}/:id`, ItemsController.onGetItemById)

/**
 * @swagger
 *  /api/items:
 *  post:
 *    summary: Create new Item
 *    description: Fill All requiered params to create new Item
 *    parameters:
 *      - in: formData
 *        name: item_name
 *        required: true
 *        type: string
 *        description: Insert Item title.
 *      - in: formData
 *        name: price
 *        required: true
 *        type: string
 *        description: Insert Item price.
 *      - in: formData
 *        name: category
 *        required: true
 *        type: string
 *        description: Insert Item category.
 *      - in: formData
 *        name: rating
 *        required: true
 *        type: string
 *        description: Insert Item rating.
 *      - in: formData
 *        name: item_image
 *        type: file
 *        description: Insert Item Image.
 *      - in: formData
 *        name: item_description
 *        type: string
 *        description: Insert Item item_description.
 *    responses:
 *      201:
 *        description: Item successfully created
 */
itemsRouter.post(`/${ITEMS}`, upload.single('item_image'), ItemsController.onPostItem)

itemsRouter.delete(`/${ITEMS}/all`, ItemsController.onRemoveAllItems)

/**
 * @swagger
 *  /api/items/{id}:
 *  delete:
 *    summary: Remove item by id
 *    description: Use to remove item by id
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: uuid to remove item.
 *        schema:
 *          type: string
 *    responses:
 *      204:
 *        description: A successful response
 */
itemsRouter.delete(`/${ITEMS}/:id`, ItemsController.onRemoveItemById)

export default itemsRouter

// multer docs => https://www.npmjs.com/package/multer