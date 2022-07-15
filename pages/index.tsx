import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/footer";

const Home: NextPage = () => {
  return (
    <div>
      <div>Stephanie Sanchez</div>
      <div>Software Engineer</div>
      <div>Welcome!</div>
      <div>Some Text</div>
      <div>Project 1</div>
      <Footer />
    </div>
  );
};

export default Home;
