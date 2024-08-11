import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export const GET = (request: NextApiRequest) => {
  return NextResponse.json({ message: "Hello, World!" });
};
