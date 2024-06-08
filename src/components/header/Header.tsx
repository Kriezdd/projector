import React from 'react';
import Link from "next/link";
import {logoutAction} from "@/data/actions/auth-actions";
import {getUserMeLoader} from "@/data/services/get-user-me-loader";

const Header = async () => {
  const user = await getUserMeLoader();

  return (
    <header className="py-4 sticky top-0 border-b border-custom-white-200 w-full h-16">
      <div className="mx-8 flex justify-between">
        <h1 className="text-2xl"><Link href="/">Проектор</Link></h1>
        {
          !user.ok ?
            <Link href="/signin">
              <button
                className="w-20 h-9 flex items-center justify-center border rounded-sm border-custom-red hover:bg-custom-red transition ease-in-out active:bg-custom-red-700">
                <p>войти</p>
              </button>
            </Link> :
            <form action={logoutAction}>
              <button type="submit" className="w-9 h-9 hover:text-custom-red transition ease-in-out active:text-custom-white-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em" viewBox="0 0 24 24">
                  <path fill="currentColor"
                        d="M4 20V4h8.02v1H5v14h7.02v1zm12.462-4.461l-.702-.72l2.319-2.319H9.192v-1h8.887l-2.32-2.32l.702-.718L20 12z"/>
                </svg>
              </button>
            </form>
        }
      </div>
    </header>
  );
};

export default Header;