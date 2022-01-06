import Head from "next/head";
import { HomePage } from "components/templates";

export default function Home() {
  return (
    <>
      <Head>
        <title>My portfolio</title>
        <meta name="Mariana Koudela" content="My portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </>
  );
}
