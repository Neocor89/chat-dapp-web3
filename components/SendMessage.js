import { useState } from "react";
import { useMoralis } from "react-moralis";

const SendMessage = ({ endofMessagesRef }) => {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    if (!message) return;

    //: Create table in DB for Messages
    const Messages = Moralis.Object.extend("Messages");
    //: Creat instance of Message instance
    const messages = new Messages();

    //: Save information of message instance in DB
    messages
      .save({
        message: message,
        username: user.getUsername(),
        ethAddress: user.get("ethAddress"),
      })
      .then(
        (message) => {
          //: Objet Message info saved successfully
        },
        (error) => {
          //: Message info save failed Error message
          console.log(error.message);
        }
      ); //: User Experience
    endofMessagesRef.current.scrollIntoView({ behavior: "smooth" });

    setMessage("");
  };

  return (
    <form className="flex fixed bottom-10 bg-black opacity-80 px-2 sm:px-6 py-2 sm:py-3 w-11/12 max-w-2xl shadow-xl rounded-full border-4 border-blue-400">
      <input
        className="flex-grow outline-none bg-transparent text-white placeholder-gray-500 pr-2 sm:pr-5 placeholder:text-[0.8rem] placeholder:sm:text-lg"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={`Enter your Message ${user.getUsername()}...`}
      />
      <button
        type="submit"
        onClick={sendMessage}
        className="font-bold text-pink-500 text-[13.333px] sm:text-lg mr-2"
      >
        Send
      </button>
    </form>
  );
};

export default SendMessage;
