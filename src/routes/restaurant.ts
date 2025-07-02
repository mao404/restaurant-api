import { Router } from "express";
import multer from "multer";
const upload = multer();
import {
  findAll,
  getById,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
  uploadResLogo,
} from "../controllers/restaurant";

import {
  postRequestValidations,
  postImageRequestValidations,
  putRequestValidations,
  getRequestByIdValidations,
  getAllRequestValidations,
  deleteRequestValidations,
} from "../middlewares/restaurant";

const router = Router();

router.get("/", getAllRequestValidations, findAll);
router.get("/:id(\\d+)/", getRequestByIdValidations, getById);
router.post("/", postRequestValidations, createRestaurant);
router.put("/:id(\\d+)/", putRequestValidations, updateRestaurant);
router.delete("/:id(\\d+)/", deleteRequestValidations, deleteRestaurant);
router.post("/logo", postImageRequestValidations, uploadResLogo);

export default router; 