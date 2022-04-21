import { useRef, useState, useEffect } from "react";
import Head from "next/head";
import Hero from "../src/Components/Home/Hero";
import ProyectList from "../src/Components/Home/ProyectList";
import Services from "../src/Components/Home/Servi";
import About from "../src/Components/Home/About";
import Blend from "../src/Components/Home/Blend";
import People from "../src/Components/Home/People";
import Layout from "../src/Components/Layout/Layout";

function Home() {
  return (
    <>
      <Layout data-scroll-section>
        <Head>
          <title>404 - Home</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/logo_2 (1).ico" />
        </Head>
        <Hero />
        <ProyectList />
        <Services />
        <About />
        <Blend />
        <People />
      </Layout>
    </>
  );
}

export default Home;
