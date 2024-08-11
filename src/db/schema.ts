import { relations } from "drizzle-orm";
import {
  boolean,
  date,
  integer,
  pgEnum,
  pgTable,
  serial,
  uniqueIndex,
  varchar,
} from "drizzle-orm/pg-core";

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: varchar("name").notNull(),
  initial_price: integer("initial_price").notNull(),
  quality: integer("quality").notNull(),
  category_id: integer("category_id"),
  image: varchar("image"),
});

export const productsRelations = relations(products, ({ one }) => ({
  category: one(categories, {
    fields: [products.category_id],
    references: [categories.id],
  }),
}));

export const categoryTypeEnum = pgEnum("type", ["FRUIT", "VEGETABLE", "OTHER"]);

export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  type: categoryTypeEnum("type").notNull(),
});

export const orderStatusEnum = pgEnum("status", [
  "PENDING",
  "IN_PROGRESS",
  "DELIVERED",
  "CANCELED",
]);

export const orders = pgTable("orders", {
  id: serial("id").primaryKey(),
  client_id: integer("client_id"),
  delivery_date: date("delivery_date").notNull(),
  delivery_address: varchar("delivery_address").notNull(),
  total_price: integer("total_price").default(0).notNull(),
  status: orderStatusEnum("status").notNull(),
  created_at: varchar("created_at").notNull(),
  updated_at: varchar("updated_at").notNull(),
  paid: boolean("paid").notNull(),
});

export const ordersRelations = relations(orders, ({ many, one }) => ({
  items: many(orderItems),
  client: one(users, {
    fields: [orders.client_id],
    references: [users.id],
  }),
}));

export const orderItemUnitEnum = pgEnum("unit", [
  "PIECE",
  "GR",
  "KG",
  "BAG",
  "BOX",
]);

export const orderItems = pgTable("order_items", {
  id: serial("id").primaryKey(),
  order_id: integer("order_id"),
  product_id: integer("product_id"),
  price: integer("price").notNull().default(0),
  unit: orderItemUnitEnum("unit").notNull(),
});

export const orderItemsRelations = relations(orderItems, ({ one }) => ({
  product: one(products, {
    fields: [orderItems.product_id],
    references: [products.id],
  }),
  order: one(orders, {
    fields: [orderItems.order_id],
    references: [orders.id],
  }),
}));

export const userRoles = pgEnum("role", ["CLIENT", "ADMIN"]);

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name").notNull(),
  address: varchar("address").notNull(),
  email: varchar("email").notNull(),
  phone: varchar("phone").notNull(),
  company_name: varchar("company_name").notNull(),
  role: userRoles("role").notNull(),
});
