import { useMoralis } from "react-moralis";

const ChangeUsername = () => {
  const { setUserData, isUserUpdating, userError, user } = useMoralis();

  const setUsername = () => {
    const username = prompt(
      `Enter your new Username (current: ${user.getUsername()})`
    );
    if (!username) return;

    setUserData({
      username,
    });
  };

  return (
    <div className="text-sm absolute top-5 right-5">
      <button
        disabled={isUserUpdating}
        onClick={setUsername}
        className="hover:text-pink-300/95 text-[12px] sm:text-[100%]"
      >
        Change your UserName
      </button>
    </div>
  );
};

export default ChangeUsername;
