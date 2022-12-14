import Head from "next/head";
import styles from "../styles/Home.module.css";
import ReadDataFromCloudFirestore from "@/components/cloudFirestore/Read";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useRouter } from "next/router";
import ConnectWallet from "@/components/ConnectWallet";
import VideoPlayer from "@/components/VideoPlayer";

export default function Home() {
  const router = useRouter();

  const handleFansRoute = () => {
    return router.push("/fans");
  };

  return (
    <div className={styles.container}>
      <Card>
        <Card.Body>
          <ConnectWallet />
          <Card.Title>Home Page</Card.Title>
          <Card.Text>Music, Videos, Movies, Podcasts etc...</Card.Text>
          <VideoPlayer />
          <hr />
          <ReadDataFromCloudFirestore />
          <hr />
          <Button onClick={() => handleFansRoute()}>
            Your Club Memberships
          </Button>
        </Card.Body>
      </Card>
    </div>
  );

  //  return (
  //   <div className={styles.container}>

  //     <Head>
  //       <title>Create Next App</title>
  //       <link rel="icon" href="/favicon.ico" />
  //     </Head>

  //     <main className={styles.main}>
  //       <h1 className={styles.title}>
  //         Welcome to <a href="https://nextjs.org">Next.js!</a>
  //       </h1>

  //       <p className={styles.description}>
  //         Get started by editing{' '}
  //         <code className={styles.code}>pages/index.js</code>
  //       </p>

  //       <div className={styles.grid}>
  //         <a href="https://nextjs.org/docs" className={styles.card}>
  //           <h3>Documentation &rarr;</h3>
  //           <p>Find in-depth information about Next.js features and API.</p>
  //         </a>

  //         <a href="https://nextjs.org/learn" className={styles.card}>
  //           <h3>Learn &rarr;</h3>
  //           <p>Learn about Next.js in an interactive course with quizzes!</p>
  //         </a>

  //         <a
  //           href="https://github.com/vercel/next.js/tree/master/examples"
  //           className={styles.card}
  //         >
  //           <h3>Examples &rarr;</h3>
  //           <p>Discover and deploy boilerplate example Next.js projects.</p>
  //         </a>

  //         <a
  //           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
  //           className={styles.card}
  //         >
  //           <h3>Deploy &rarr;</h3>
  //           <p>
  //             Instantly deploy your Next.js site to a public URL with Vercel.
  //           </p>
  //         </a>
  //       </div>
  //     </main>

  //     <footer className={styles.footer}>
  //       <a
  //         href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Powered by{' '}
  //         <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
  //       </a>
  //     </footer>
  //   </div>
  // )
}
