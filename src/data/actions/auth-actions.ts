"use server";
import { z } from "zod";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  registerUserService,
  loginUserService,
} from "@/data/services/auth-service";

const config = {
  maxAge: 60 * 60 * 24 * 7, // 1 week
  path: "/",
  domain: process.env.HOST ?? "localhost",
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
};

const schemaRegister = z.object({
  username: z.string().min(3, {
    message: "Логин должен содержать от 3 до 20 символов",
  }).max(20, {
    message: "Логин должен содержать от 3 до 20 символов",
  }),
  email: z.string().email({
    message: "Пожалуйста, введите корректный адрес электронной почты",
  }),
  password: z.string().min(6, {
    message: "Пароль должен содержать от 6 до 100 символов",
  }).max(100, {
    message: "Пароль должен содержать от 6 до 100 символов",
  }),
});

export async function registerUserAction(prevState: any, formData: FormData) {

  const validatedFields = schemaRegister.safeParse({
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      strapiErrors: null,
      message: "Поля не заполнены, ошибка.",
    };
  }

  const responseData = await registerUserService(validatedFields.data);

  if (!responseData) {
    return {
      ...prevState,
      zodErrors: null,
      strapiErrors: null,
      message: "Не удалось зарегестрироваться. Попробуйте снова.",
    };
  }

  if (responseData.error) {
    return {
      ...prevState,
      zodErrors: null,
      strapiErrors: responseData.error,
      message: "Не удалось зарегестрироваться",
    }
  }

  cookies().set("jwt", responseData.jwt, config);
  redirect("/dashboard");
}

const schemaLogin = z.object({
  identifier: z
    .string()
    .min(3, {
      message: "Логин должен содержать от 3 до 20 символов",
    })
    .max(20, {
      message: "Пожалуйста введите верный логин или почту",
    }),
  password: z
    .string()
    .min(6, {
      message: "Пароль должен содержать от 6 до 100 символов",
    })
    .max(100, {
      message: "Пароль должен содержать от 6 до 100 символов",
    }),
});

export async function loginUserAction(prevState: any, formData: FormData) {
  const validatedFields = schemaLogin.safeParse({
    identifier: formData.get("identifier"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      message: "Поля не заполнены, ошибка.",
    };
  }

  const responseData = await loginUserService(validatedFields.data);

  if (!responseData) {
    return {
      ...prevState,
      strapiErrors: responseData.error,
      zodErrors: null,
      message: "Что-то пошло не так. Попробуйте снова.",
    };
  }

  if (responseData.error) {
    return {
      ...prevState,
      strapiErrors: responseData.error,
      zodErrors: null,
      message: "Не удалось войти.",
    };
  }

  cookies().set("jwt", responseData.jwt, config);

  redirect("/dashboard");
}

export async function logoutAction() {
  cookies().set("jwt", "", { ...config, maxAge: 0 });
  redirect("/");
}