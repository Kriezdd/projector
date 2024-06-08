"use client";
import React from 'react';
import { useFormStatus } from 'react-dom';
import PendingSpinner from "@/components/ui/PendingSpinner";

type SignButtonProps = {
  text: string;
  loadingText: string;
  loading?: boolean;
};

const SubmitButton = ({text, loadingText, loading}: SignButtonProps) => {
  const status = useFormStatus();
  return (
    <button
      type="submit"
      aria-disabled={status.pending || loading}
      disabled={status.pending || loading}
      className="w-full h-full text-lg border rounded-sm border-custom-red hover:bg-custom-red transition ease-in-out active:bg-custom-red-700"
    >
      {status.pending || loading ? <PendingSpinner loadingText={loadingText}/> : text}
    </button>
  );
};

export default SubmitButton;