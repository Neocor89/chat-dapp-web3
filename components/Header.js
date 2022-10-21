import Image from "next/image";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";
const Header = () => {
  const { user } = useMoralis();

  return (
    <div className="sticky top-0 p-5 z-50 bg-black shadow-sm text-pink-500 border-b-2 border-pink-500">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
        <div className="relative bottom-20 right-14 h-16 w-16 mx-auto hidden lg:inline-grid">
          <Image
            layout="fill"
            objectFit="cover"
            src="https://res.cloudinary.com/dwoifuutn/image/upload/v1666343939/chat-dapp-logo_e9wmil.png"
            className="rounded-full"
          />
        </div>

        <div className="col-span-4 text-left lg:text-center">
          <div className="relative h-24 w-24 md:w-[145px] md:h-[145px] lg:mx-auto mb-3 border-pink-300 border-8 rounded-full">
            <Avatar logoutOnePress />
          </div>

          <h1 className="text-xl md:text-2xl mb-2">
            Welcome to the Metaverse Chat dapp
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold truncate">
            {user.getUsername()}
          </h2>

          <ChangeUsername />
        </div>
      </div>
    </div>
  );
};

export default Header;
