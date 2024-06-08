"use client";
import React from "react";
// import { useFormState } from "react-dom";
// import { uploadProfileImageAction } from "@/data/actions/profile-actions";

import SubmitButton from "@/components/ui/buttons/SubmitButton";
import ImagePicker from "@/components/custom/ImagePicker";
import ZodErrors from "@/components/custom/ZodErrors";
import { StrapiErrors } from "@/components/custom/StrapiErrors";
import {UserImage} from "@/types/types";

const initialState = {
  message: null,
  data: null,
  strapiErrors: null,
  zodErrors: null,
};

export function ProfileImageForm({
                                   data,
                                   className,
                                 }: {
  data: Readonly<UserImage>,
  className?: string,
}) {
  // const uploadProfileImageWithIdAction = uploadProfileImageAction.bind(
  //   null,
  //   data?.id
  // );

  // const [formState, formAction] = useFormState(
  //   uploadProfileImageWithIdAction,
  //   initialState
  // );

  return (
    <form className="flex flex-col gap-2">
      <div className="">
        <ImagePicker
          id="image"
          name="image"
          label="Profile Image"
          defaultValue={data?.url || ""}
        />
        {/* <ZodErrors error={formState.zodErrors?.image} />
        <StrapiErrors error={formState.strapiErrors} /> */}
      </div>
      <div className="flex justify-end w-44 h-10">
        <SubmitButton text="обновить фото" loadingText="сохраняем" />
      </div>
    </form>
  );
}