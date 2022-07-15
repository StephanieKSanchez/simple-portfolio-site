import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/footer";
import Header from "../components/header";
import Profile from "../components/profile";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Profile />
      <div>Project 1</div>
      <Footer />
    </div>
  );
};

export default Home;
