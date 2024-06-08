"use client";
import React from 'react';
import { useFormState } from 'react-dom';
import { registerUserAction } from "@/data/actions/auth-actions";
import Link from "next/link";
import SubmitButton from "@/components/ui/buttons/SubmitButton";
import ZodErrors from "@/components/custom/ZodErrors";
import { StrapiErrors } from "@/components/custom/StrapiErrors";

const INITIAL_STATE = {
  data: null,
  zodErrors: null,
  message: null
};

const SignupForm = () => {
  const [formState, formAction] = useFormState(registerUserAction, INITIAL_STATE);

  console.log(formState, 'client');

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-[480px] h-fit bg-custom-white-200 flex justify-between rounded-sm">
        <div className="w-full mx-8 my-5">
          <h1 className="text-3xl mb-3.5">Регистрация</h1>
          <form action={formAction}
                className="w-full flex flex-col gap-1 font-anonymous"
          >
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Username (логин)"
              className="w-full h-[42px] rounded-sm bg-custom-white-200 placeholder-custom-white-700 text-custom-white px-2"
            />
            <ZodErrors error={formState?.zodErrors?.username} />
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              className="w-full h-[42px] rounded-sm bg-custom-white-200 placeholder-custom-white-700 text-custom-white px-2"
            />
            <ZodErrors error={formState?.zodErrors?.email} />
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Пароль"
              className="w-full h-[42px] rounded-sm bg-custom-white-200 placeholder-custom-white-700 text-custom-white px-2"
            />
            <ZodErrors error={formState?.zodErrors?.password} />
            <div className="w-full h-10 mt-5">
              <SubmitButton text={"зарегистрироваться"} loadingText={"проверяем..."}/>
            </div>
            <StrapiErrors error={formState?.strapiErrors} />
          </form>
        </div>
      </div>
      <div className="mt-3.5">
        <p>Есть аккаунт? <Link href="/signin"
                               className="text-custom-white-700 hover:text-custom-white transition ease-in-out underline">Вход</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;