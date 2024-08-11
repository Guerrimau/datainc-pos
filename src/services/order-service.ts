import db from "@/db";
import { orderItemUnitEnum, orders, orderItems } from "@/db/schema";
import { userService } from "./user-service";

type NewOrderDB = typeof orders.$inferInsert;
type OrderDB = typeof orders.$inferSelect;
type NewOrderItemDB = typeof orderItems.$inferInsert;
type UnitEnum = (typeof orderItemUnitEnum.enumValues)[number];

interface INewOrder extends NewOrderDB {
  userPhone: number;
  orderItems: {
    productId: number;
    quantity: number;
    unit: UnitEnum;
  }[];
}
type ICreate = (newOrder: INewOrder) => Promise<OrderDB>;

const create: ICreate = async (newOrder) => {
  try {
    if (!newOrder.userPhone) {
      throw new Error("El número de teléfono es requerido");
    }
    const user = await userService.getByPhoneNumber(newOrder.userPhone);

    const orderBody: NewOrderDB = {
      paid: false,
      status: "PENDING",
      delivery_address: user.address,
      delivery_date: newOrder.delivery_date,
      client_id: user.id,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    const [orderResponse] = await db
      .insert(orders)
      .values(orderBody)
      .returning();

    const orderItemsBody = newOrder.orderItems.map((item) => ({
      product_id: item.productId,
      order_id: orderResponse.id,
      unit: item.unit,
    })) as NewOrderItemDB[];

    const orderItemsResponse = await db
      .insert(orderItems)
      .values(orderItemsBody)
      .returning();

    const response = {
      ...orderResponse,
      items: orderItemsResponse,
    };

    return response;
  } catch (error) {
    throw new Error("Error al crear la orden");
  }
};

export const ordersService = {
  create,
};
