import { Request, Response } from "express";

export function ListProducts(req: Request, res: Response) {
  res.send("List  products");
}

export function GetProductById(req: Request, res: Response) {
  res.send("Get product by id");
}

export function CreateProduct(req: Request, res: Response) {
  res.send("Create product");
}

export function UpdateProduct(req: Request, res: Response) {
  res.send("Update product");
}

export function DeleteProduct(req: Request, res: Response) {
  res.send("Delete product");
}
