import Head from "next/head";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";
// import Image from 'next/image'

const Home = () => {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className="h-screen">
      <Head>
        <title>Messenger Dapp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Welcome to Messenger App</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Home;
