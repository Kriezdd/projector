import React from 'react';

const DefaultAsideContent = () => {
  return (
    <nav>
      <ul className="flex flex-col gap-4 mx-8 text-custom-white-700">
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
              <path stroke-linecap="round" d="M19.5 19.5L21 21"/>
            </g>
          </svg>
          <p className="">Все проекты</p>
        </li>
      </ul>
    </nav>
  );
};

export default DefaultAsideContent;