import React from 'react';
import Link from "next/link";
import {getUserMeLoader} from "@/data/services/get-user-me-loader";
import UserSpoiler from "@/components/custom/UserSpoiler";

const LoggedAsideContent = async () => {
  const user = await getUserMeLoader();
  const userAvatar = user.data?.image.url;
  console.log(userAvatar);

  return (
    <nav>
      <ul className="flex flex-col gap-4 mx-8 text-custom-white-700">
        <li className="w-fit flex gap-2 items-center">
          <Link href="/profile">
            <UserSpoiler user={user.data} description={"ваш профиль"}/>
          </Link>
        </li>
        <li className="w-fit flex gap-2 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 24 24">
            <path fill="currentColor"
                  d="M6 19h3.692v-5.884h4.616V19H18v-9l-6-4.538L6 10zm-1 1V9.5l7-5.288L19 9.5V20h-5.692v-5.884h-2.616V20zm7-7.77"/>
          </svg>
          <p className="">Главная</p>
        </li>
        <li className="w-fit flex gap-2 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 24 24">
            <g fill="none" stroke="currentColor">
              <path
                d="M19.5 12c0-1.405 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C18.107 8.5 17.404 8.5 16 8.5h-1.843c-.818 0-1.226 0-1.594-.152c-.368-.152-.657-.442-1.235-1.02l-.656-.656c-.578-.578-.868-.868-1.235-1.02C9.069 5.5 8.66 5.5 7.843 5.5H7.5c-1.886 0-2.828 0-3.414.586C3.5 6.672 3.5 7.614 3.5 9.5v5c0 1.886 0 2.828.586 3.414c.586.586 1.528.586 3.414.586H12"/>
              <circle cx="16.5" cy="16.5" r="2.5"/>
              <path d="M19.5 19.5L21 21"/>
            </g>
          </svg>
          <p className="">Все проекты</p>
        </li>
        <li className="w-fit flex gap-2 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 256 256">
            <path fill="currentColor"
                  d="M224 66h-70l-28.27-21.2a14 14 0 0 0-8.4-2.8H72a14 14 0 0 0-14 14v18H40a14 14 0 0 0-14 14v112a14 14 0 0 0 14 14h152.89A13.12 13.12 0 0 0 206 200.89V182h18.89A13.12 13.12 0 0 0 238 168.89V80a14 14 0 0 0-14-14m-30 134.89a1.11 1.11 0 0 1-1.11 1.11H40a2 2 0 0 1-2-2V88a2 2 0 0 1 2-2h45.33a2 2 0 0 1 1.2.4l29.87 22.4a6 6 0 0 0 3.6 1.2h72a2 2 0 0 1 2 2Zm32-32a1.11 1.11 0 0 1-1.11 1.11H206v-58a14 14 0 0 0-14-14h-70L93.73 76.8a14 14 0 0 0-8.4-2.8H70V56a2 2 0 0 1 2-2h45.33a2 2 0 0 1 1.2.4l29.87 22.4A6 6 0 0 0 152 78h72a2 2 0 0 1 2 2Z"/>
          </svg>
          <p className="">Мои проекты</p>
        </li>
      </ul>
    </nav>
  );
};

export default LoggedAsideContent;