"use client";

import React from 'react';
import {useFormState} from "react-dom";
import {loginUserAction} from "@/data/actions/auth-actions";
import SubmitButton from "@/components/ui/buttons/SubmitButton";
import ZodErrors from "@/components/custom/ZodErrors";
import { StrapiErrors } from "@/components/custom/StrapiErrors";
import Link from "next/link";

const INITIAL_STATE = {
  zodErrors: null,
  strapiErrors: null,
  data: null,
  message: null,
};

const SigninForm = () => {
  const [formState, formAction] = useFormState(loginUserAction, INITIAL_STATE);
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-[480px] h-[280px] bg-custom-white-200 flex justify-between rounded-sm">
        <div className="w-full mx-8 my-5">
          <h1 className="text-3xl mb-3.5">Вход</h1>
          <form
            action={formAction}
            className="w-full flex flex-col gap-1 font-anonymous"
          >
            <input
              id="identifier"
              name="identifier"
              type="text"
              placeholder="Email или логин"
              className="w-full h-[42px] rounded-sm bg-custom-white-200 placeholder-custom-white-700 text-custom-white px-2"
            />
            <ZodErrors error={formState?.zodErrors?.identifier} />
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Пароль"
              className="w-full h-[42px] rounded-sm bg-custom-white-200 placeholder-custom-white-700 text-custom-white px-2"
            />
            <ZodErrors error={formState?.zodErrors?.password} />
            <div className="w-full h-10 mt-5">
              <SubmitButton text={"войти"} loadingText={"загрузка..."}/>
            </div>
            <StrapiErrors error={formState?.strapiErrors} />
          </form>
        </div>
      </div>
      <div className="mt-3.5">
        <p>Нет аккаунта? <Link href="/signup"
                               className="text-custom-white-700 hover:text-custom-white transition ease-in-out underline">Регистрация</Link>
        </p>
      </div>
    </div>
  );
};

export default SigninForm;