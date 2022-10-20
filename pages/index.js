import Head from "next/head";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";
import Header from "../components/Header";
// import Image from 'next/image'

const Home = () => {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black to-fuchsia-900 overflow-hidden">
      <Head>
        <title>Messenger Dapp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="maw-w-screen-2xl mx-auto">
        <Header />
        {/* <Messages /> */}
        {/* <Footer /> */}
      </div>

      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Home;
