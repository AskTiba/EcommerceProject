import { Request, Response } from "express";
import { db } from "../../db/index";
import { productsTable } from "../../db/productsSchema";
import { eq } from "drizzle-orm";

export async function ListProducts(req: Request, res: Response) {
  try {
    const products = await db.select().from(productsTable);
    res.json(products);
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function GetProductById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const [product] = await db
      .select()
      .from(productsTable)
      .where(eq(productsTable.id, Number(id)));
    if (!product) {
      res.status(404).send({ message: "Product not found" });
    } else {
      res.json(product);
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function CreateProduct(req: Request, res: Response) {
  console.log(req.body);
  try {
    const [product] = await db
      .insert(productsTable)
      .values(req.body)
      .returning();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function UpdateProduct(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const updatedFields = req.body;
    const [product] = await db
      .update(productsTable)
      .set(updatedFields)
      .where(eq(productsTable.id, Number(id)))
      .returning();

    if (product) {
      res.json(product);
    } else {
      res.status(404).send({ message: "Product was not found" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function DeleteProduct(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const [deletedProduct] = await db
      .delete(productsTable)
      .where(eq(productsTable.id, Number(id)))
      .returning();
    if (deletedProduct) {
      res.status(204).send();
    } else {
      res.status(404).send({ message: "Product was not found" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
}
