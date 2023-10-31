"use server";

import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export async function getServerSideSession() {
//   return await getServerSession(authOptions);
return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVVUlEIjoiYTQ2OTExMDItYjkwMi00NzAyLTk4ZjUtMGI0YzAxOTM2MDQyIiwibG9nZ2VkQXMiOiJVc2VyIiwiaWF0IjoxNjk4Mjk5OTcyfQ.gpPePrVKUejh2jo8RtXMowBgAO4RZVCzh1WaBqpxLHc"
}
