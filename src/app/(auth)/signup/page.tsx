import React from 'react';
import SignupForm from "@/components/forms/SignupForm";

const SignupRoute = () => {
  return (
    <div className="h-[calc(100vh-70px)] flex flex-col items-center justify-center">
      <SignupForm />
    </div>
  );
};

export default SignupRoute;