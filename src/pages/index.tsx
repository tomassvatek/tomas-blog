import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/header";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  //const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <>
      <div className="bg-sky-400">
        <h1>Who Am I?</h1>
      </div>
    </>
  );
};

export default Home;
