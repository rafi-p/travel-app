import { Metadata } from "next";
import React, { FC } from "react";
import FormSignIn from "./form";
import { getUser } from "@/lib/auth";
import { redirect } from "next/navigation";

export const metaData: Metadata = {
  title: "Dashboard | Sign In",
};

const SignInPage = async () => {
  const { session, user } = await getUser();

  if (session && user.role === "ADMIN") {
    redirect("/dashboard");
  }

  return <FormSignIn />;
};

export default SignInPage;
