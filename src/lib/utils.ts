import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import api from "./axios-config";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function verifyToken(cookieToken: string): Promise<boolean> {
  try {
    const params = cookieToken.split("; "); // Divide la cadena en pares clave-valor
    const token = params
      .find((param) => param.startsWith("access_token="))
      ?.split("=")[1];

    await api.post("/api/auth/verify-token", { token });
    return true;
  } catch (error: any) {
    return false;
  }
}
