import db from "@/db";
import { users } from "@/db/schema";

type UserDB = typeof users.$inferSelect;

type IGetByPhoneNumber = (phone: number) => Promise<UserDB>;

const getByPhoneNumber: IGetByPhoneNumber = async (number: number) => {
  try {
    const userResponse = await db.query.users.findFirst({
      where: (table, funcs) => funcs.eq(table.phone, number.toString()),
    });

    if (!userResponse) {
      throw new Error("Usuario no encontrado");
    }

    return userResponse;
  } catch (error) {
    throw new Error("Error al obtener el usuario");
  }
};

export const userService = {
  getByPhoneNumber,
};
