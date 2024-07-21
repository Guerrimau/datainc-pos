"use server";

import db from "@/db";

export const getProducts = async () => {
  const products = await db.query.products.findMany({
    with: {
      category: {
        columns: {
          type: true,
        },
      },
    },
  });

  return products;
};
