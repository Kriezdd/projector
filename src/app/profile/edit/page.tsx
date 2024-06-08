import React from 'react';
import ProfileEditForm from "@/components/forms/ProfileEditForm";
import {getUserMeLoader} from "@/data/services/get-user-me-loader";
import {User} from "@/types/types";


const EditProfileRoute = async () => {
  const response = await getUserMeLoader();
  const data: User = response.data;

  return (
    <div className="flex flex-col gap-10 mx-40 my-16">
      <h1 className="text-3xl">Редактирование Профиля</h1>
      <ProfileEditForm data={data}/>
    </div>
  );
};

export default EditProfileRoute;