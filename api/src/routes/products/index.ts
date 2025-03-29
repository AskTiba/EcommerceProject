import { Router } from "express";
import {
  ListProducts,
  GetProductById,
  DeleteProduct,
  UpdateProduct,
  CreateProduct,
} from "./productController";

const router = Router();

router.get("/", ListProducts);

router.post("/", CreateProduct);

router.get("/:id", GetProductById);

router.put("/:id", UpdateProduct);

router.delete("/:id", DeleteProduct);

export default router;
