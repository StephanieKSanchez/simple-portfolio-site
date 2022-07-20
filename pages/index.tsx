import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/footer";
import Header from "../components/header";
import Layout from "../components/layout";
import Profile from "../components/profile";
import ProjectPreview from "../components/project-preview";

const Home: NextPage = () => {
  return (
    <div>
      <Profile />
      <div className="mt-4">
        <ProjectPreview />
      </div>
    </div>
  );
};

export default Home;
