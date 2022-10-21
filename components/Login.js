import Image from "next/image";
import { useMoralis } from "react-moralis";

const Login = () => {
  const { authenticate } = useMoralis();

  return (
    <div className="bg-black relative">
      <h1>I am a Login Screen</h1>
      <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
        <Image
          src="https://res.cloudinary.com/dwoifuutn/image/upload/v1666286613/bendev-messenger-logo_z4pgnu.png"
          height={170}
          width={140}
          className="object-cover rounded-full"
        />

        <button
          onClick={authenticate}
          className="bg-[#E7915B] rounded-lg p-4 font-bold animate-pulse"
        >
          Login to Metaverse Chat
        </button>
      </div>

      <div className="w-fullscreen h-screen">
        <Image
          src="https://links.papareact.com/55n"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Login;
