import Image from "next/image";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import About from "../components/About";
import Skills from "../components/Skills";
import Books from "../components/Books";

export default function Home() {
  return (
    <>
      <Head>
        <title>Iago | Cloud Consultant</title>
        <link rel="icon" href="flavicon.ico" />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Books />
    </>
  );
}
