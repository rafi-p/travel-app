import React from "react";
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

export default function SubmitButtonForm() {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} className="w-full">
      Submit
    </Button>
  );
}
