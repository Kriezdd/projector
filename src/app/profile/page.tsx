import React from 'react';
import {getUserMeLoader} from "@/data/services/get-user-me-loader";
import {User} from "@/types/types";
import Link from "next/link";

const UserPageRoute = async () => {
  const response = await getUserMeLoader();
  const user: User = response.data;

  return (
    <div className="flex flex-col gap-7 mx-56 mt-16">
      <div className="flex gap-7 ">
        <img
          src={user.image.url}
          width={200}
          height={200}
          alt={user.image.alternativeText ?? `${user.username}_img`}
          className="rounded-lg w-[200px] object-cover drop-shadow-image"
        />
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl">{user.name ?? user.username}</h1>
            <Link href="/profile/edit">
              <svg
                className="text-custom-white-700 hover:text-custom-red-700 transition ease-in-out active:text-custom-white"
                xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 1024 1024">
                <path fill="currentColor"
                      d="M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640z"/>
                <path fill="currentColor"
                      d="m469.952 554.24l52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z"/>
              </svg>
            </Link>
          </div>
          <h4 className="font-anonymous">{user.specialization ?? "в поисках себя"}</h4>
        </div>
      </div>
      <div className="flex gap-24">
        <div className="flex flex-col grow gap-8">
          <div className="flex flex-col gap-4">
            <h4>О себе</h4>
            <p>{user.about ?? "тут пока пусто"}</p>
          </div>
        </div>
        <div className="flex flex-col w-60 gap-10">
          <div className="flex flex-col gap-2">
            <h4>Участник проектов</h4>
            <p>проект</p>
          </div>
          <div className="flex flex-col gap-2">
            <h4>Товарищи</h4>
            <p>товарищ</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPageRoute;