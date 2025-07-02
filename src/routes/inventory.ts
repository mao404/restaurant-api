import { Router } from "express";
import {
  findAll,
  getById,
  getByTitle,
  createInventory,
  updateInventory,
  deleteInventory,
} from "../controllers/inventory";

import {
  postRequestValidations,
  putRequestValidations,
  getRequestByIdValidations,
  deleteRequestValidations,
  getAllRequestValidations,
} from "../middlewares/inventory";

const router = Router();

router.get("/", getAllRequestValidations, findAll);
router.get("/:id(\\d+)/", getRequestByIdValidations, getById);
router.post("/", postRequestValidations, createInventory);
router.put("/:id(\\d+)/", putRequestValidations, updateInventory);
router.delete("/:id(\\d+)/", deleteRequestValidations, deleteInventory);

export default router; 