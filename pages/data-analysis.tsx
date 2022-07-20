import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/footer";
import Header from "../components/header";
import Layout from "../components/layout";

const DataAnalysis: NextPage = () => {
  return (
    <Layout>
      <div className="text-slate-700 flex flex-col gap-6">
        <Header />
        Something about my data analysis app here...
        <Footer />
      </div>
    </Layout>
  );
};

export default DataAnalysis;
