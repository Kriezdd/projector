import React from 'react';
import SigninForm from "@/components/forms/SigninForm";

const SigninRoute = () => {
  return (
    <div className="h-[calc(100vh-70px)] flex flex-col items-center justify-center">
      <SigninForm />
    </div>
  );
};

export default SigninRoute;