import Image from "next/image";
import React from "react";
import { useMoralis } from "react-moralis";

const Avatar = ({ username, logoutOnePress }) => {
  const { user, logout } = useMoralis();

  return (
    <Image
      className="rounded-full bg-black cursor-pointer hover:opacity-75"
      src={`https://avatars.dicebear.com/api/micah/${
        username || user.get("username")
      }.svg`}
      onClick={() => logoutOnePress && logout()}
      layout="fill"
    />
  );
};

export default Avatar;
