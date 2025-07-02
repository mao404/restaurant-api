import { Router } from "express";
import {
  findAll,
  findAllDetailed,
  getById,
  getByIdDetailed,
  getByUserId,
  createOrder,
  updateOrder,
  updateOrderDetailed,
  deleteOrder,
} from "../controllers/order";

import {
  postRequestValidations,
  putRequestValidations,
  getRequestByIdValidations,
  deleteRequestValidations,
  getAllRequestValidations,
} from "../middlewares/order";

const router = Router();

router.get("/", getAllRequestValidations, findAll);
router.get("/:id(\\d+)/", getRequestByIdValidations, getById);
router.post("/", postRequestValidations, createOrder);
router.put("/:id(\\d+)/", putRequestValidations, updateOrder);
router.delete("/:id(\\d+)/", deleteRequestValidations, deleteOrder);

export default router; 