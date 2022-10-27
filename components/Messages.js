import { useRef } from "react";
import { ByMoralis, useMoralisQuery, useMoralis } from "react-moralis";
import Message from "./Message";
import SendMessage from "./SendMessage";

//: Time only show Messages
const MINS_DURATION = 15;

const Messages = () => {
  const { user } = useMoralis();
  const endofMessagesRef = useRef(null);

  //: Realtime Chat Listener
  const { data, loading, error } = useMoralisQuery(
    //: Moralis DB
    "Messages",
    //: Time frame Logic displaying messages
    (query) =>
      query
        .ascending("createdAt")
        .greaterThan(
          "createdAt",
          new Date(Date.now() - 1000 * 60 * MINS_DURATION)
        ),
    [],
    {
      live: true,
    }
  );

  return (
    <div className="pb-56">
      <div className="my-5">
        <ByMoralis
          variant="dark"
          style={{ marginLeft: "auto", marginRight: "auto", width: "180px" }}
        />
      </div>

      <div className="space-y-10 p-4">
        {data.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>

      <div className="flex justify-center">
        <SendMessage endofMessagesRef={endofMessagesRef} />
      </div>

      <div ref={endofMessagesRef} className="text-center text-gray-400 mt-5">
        <p>You're up to date {user.getUsername()}! 🎉</p>
      </div>
    </div>
  );
};

export default Messages;
