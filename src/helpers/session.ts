"use server";

import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export async function getServerSideSession() {
  return await getServerSession(authOptions);
}
