"use server";

import { productService } from "@/services/product-service";

export const getProducts = async () => {
  try {
    // Loading State
    const products = await productService.getAll();
    return products;
  } catch (error) {
    // Display error
    return [];
  }
};
