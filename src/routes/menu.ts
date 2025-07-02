import { Router } from "express";
import {
  findAll,
  getById,
  getByTitle,
  createMenu,
  updateMenu,
  deleteMenu,
  uploadMenuImage,
} from "../controllers/menu";

import {
  postRequestValidations,
  putRequestValidations,
  getRequestByIdValidations,
  deleteRequestValidations,
  getAllRequestValidations,
  postImageRequestValidations,
} from "../middlewares/menu";

const router = Router();

router.get("/", getAllRequestValidations, findAll);
router.get("/:id(\\d+)/", getRequestByIdValidations, getById);
router.post("/", postRequestValidations, createMenu);
router.put("/:id(\\d+)/", putRequestValidations, updateMenu);
router.delete("/:id(\\d+)/", deleteRequestValidations, deleteMenu);
router.post("/image", postImageRequestValidations, uploadMenuImage);

export default router; 