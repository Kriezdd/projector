import React from 'react';
import Image from "next/image";
import {User} from "@/types/types";

interface UserSpoilerProps {
  user: User,
  description: string,
}

const UserSpoiler = ({user, description}: UserSpoilerProps) => {
  // todo: change img to Image from next (not working yet)
  return (
    <div className="flex align-middle gap-2.5">
      <img
        src={user.image.url}
        width={40}
        height={40}
        alt={user.image.alternativeText ?? `${user.username}_img`}
        className="rounded-sm drop-shadow-image"
      />
      <div className="flex flex-col h-10">
        <h6 className="font-prosto text-custom-white">
          {user.name ?? user.username}
        </h6>
        <p className="text-sm text-custom-white-700">
          {description}
        </p>
      </div>

    </div>
  );
};

export default UserSpoiler;