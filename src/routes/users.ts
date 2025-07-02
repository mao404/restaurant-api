import { Router } from "express";
import {
  findAll,
  getById,
  getByIdNumber,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/users";

import {
  getAllRequestValidations,
  postRequestValidations,
  putRequestValidations,
  getRequestByIdValidations,
  deleteRequestValidations,
} from "../middlewares/users";

const router = Router();

router.get("/", getAllRequestValidations, findAll);
router.get("/:id(\\d+)/", getRequestByIdValidations, getById);
router.post("/", postRequestValidations, createUser);
router.put("/:id(\\d+)/", putRequestValidations, updateUser);
router.delete("/:id(\\d+)/", deleteRequestValidations, deleteUser);

export default router; 