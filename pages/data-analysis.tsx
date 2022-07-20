import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/footer";
import Header from "../components/header";
import Layout from "../components/layout";
import Link from "next/link";

const DataAnalysis: NextPage = () => {
  return (
    <div>
      <div>Something about my data analysis app here...</div>
      <div className="mt-6">
        <Link href="/">
          <a className="font-bold underline hover:text-indigo-600">Back</a>
        </Link>
      </div>
    </div>
  );
};

export default DataAnalysis;
