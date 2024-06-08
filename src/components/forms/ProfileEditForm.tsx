"use client"
import React from 'react';
import Link from "next/link";
import {useFormState} from "react-dom";
import {updateProfileAction} from "@/data/actions/profile-actions";
import {User} from "@/types/types";
import SubmitButton from "@/components/ui/buttons/SubmitButton";
import {StrapiErrors} from "@/components/custom/StrapiErrors";
import {ProfileImageForm} from "@/components/forms/ProfileImageForm";

const INITIAL_STATE = {
  data: null,
  strapiErrors: null,
  message: null,
};

interface ProfileEditFormProps {
  data: User,
}

const ProfileEditForm = ({data}: ProfileEditFormProps) => {
  const updateUserWithId = updateProfileAction.bind(null, data.id)
  const [formState, formAction] = useFormState(
    updateUserWithId,
    INITIAL_STATE
  );

  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col w-[200px] h-[200px]">
        <ProfileImageForm data={data.image}/>
      </div>
      <form
        action={formAction}
        className="flex flex-col gap-7"
      >
        <div className="flex flex-col gap-5">
          <h4>Основная информация</h4>
          {/*<img*/}
          {/*  src={data.image.url}*/}
          {/*  width={200}*/}
          {/*  height={200}*/}
          {/*  alt={data.image.alternativeText ?? `${data.username}_img`}*/}
          {/*  className="rounded-full drop-shadow-image"*/}
          {/*/>*/}
          <div className="flex flex-col gap-2.5">
            <input type="hidden" name="id" value={data.id}/>
            <input
              type="text"
              name="name"
              placeholder="имя фамилия..."
              defaultValue={data.name ?? ""}
              className="w-96 h-[42px] rounded-sm bg-custom-white-200 placeholder-custom-white-700 text-custom-white px-2"
            />
            <input
              type="text"
              name="specialization"
              placeholder="основная специальность..."
              defaultValue={data.specialization ?? ""}
              className="w-96 h-[42px] rounded-sm bg-custom-white-200 placeholder-custom-white-700 text-custom-white px-2"
            />
          </div>
        </div>
        <div className="flex w-full">
          <div className="flex w-full flex-col gap-8">
            <div className="flex w-full flex-col gap-4">
              <h4>О себе</h4>
              <p>Здесь вы можете рассказать о себе, своих интересах, опыте. Добавьте то, чем считаете важным поделиться
                с
                участниками платформы.</p>
              <textarea
                name="about"
                placeholder="добавьте информацию о себе..."
                defaultValue={data.about ?? ""}
                className="w-full h-[120px] rounded-sm bg-custom-white-200 placeholder-custom-white-700 text-custom-white p-2"
              />
            </div>
          </div>
        </div>
        <div className="flex w-full justify-between">
          <div className="w-72 h-10">
            <SubmitButton text={"сохранить изменения"} loadingText={"сохраняем..."}/>
          </div>
          <Link href="/profile" className="text-custom-red h-10">
            <button
              className="w-full flex items-center justify-center h-full text-md hover:text-custom-red-700 transition ease-in-out active:text-custom-white">
              вернуться без изменений
              <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor"
                      d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"/>
              </svg>
            </button>
          </Link>
        </div>
        <StrapiErrors error={formState?.strapiErrors}/>
      </form>
    </div>
  );
};

export default ProfileEditForm;