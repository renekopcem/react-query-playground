import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToyList } from "../components/toyList";
import { useState } from "react";
import { NewToyList } from "../components/newToyList";

const queryClient = new QueryClient();

const Home: NextPage = () => {
  const [newToys, setNewToys] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>React Query Playground</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <QueryClientProvider client={queryClient}>
        <ToyList />

        <p>
          <a
            href="#"
            onClick={() => {
              setNewToys(!newToys);
            }}
          >
            {newToys ? "Less" : "More"} toys
          </a>
        </p>
        {newToys && <NewToyList />}

        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
};

export default Home;
