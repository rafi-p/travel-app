"use server";

import type { ActionResult } from "@/app/dashboard/(auth)/signin/form/actions";
import { userSchema } from "./validation";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import prisma from "../../../../../lib/prisma";

export async function signUpUser(
  prevState: unknown,
  formData: FormData
): Promise<ActionResult> {
  const validate = userSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    passport: formData.get("passport"),
    password: formData.get("password"),
  });

  if (!validate.success) {
    const errorDesc = validate.error.issues.map((issue) => issue.message);

    return {
      errorTitle: "Error Validation",
      errorDesc,
    };
  }

  const hashingPassword = bcrypt.hashSync(validate.data.password, 10);

  await prisma.user.create({
    data: {
      name: validate.data.name,
      email: validate.data.email,
      passport: validate.data.passport,
      password: hashingPassword,
      role: "CUSTOMER",
    },
  });

  return redirect("/sign-in");
}
