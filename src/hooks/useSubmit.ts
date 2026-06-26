import { useState } from "react";

export function useSubmit() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e?: React.SubmitEvent) {
    e?.preventDefault();
    setSubmitted(true);
  }

  function reset() {
    setSubmitted(false);
  }

  return { submitted, handleSubmit, reset };
}
