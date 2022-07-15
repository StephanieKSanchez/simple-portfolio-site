import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/footer";
import Header from "../components/header";
import Profile from "../components/profile";
import ProjectPreview from "../components/project-preview";

const Home: NextPage = () => {
  return (
    <div className="text-slate-700">
      <Header />
      <Profile />
      <div>
        <ProjectPreview />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
