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
    <Layout>
      <div className="text-slate-700 flex flex-col gap-4">
        <Header />
        <Profile />
        <div>
          <ProjectPreview />
        </div>
        <Footer />
      </div>
    </Layout>
  );
};

export default Home;
