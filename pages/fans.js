import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import FanPlaceholder from "@/components/FanPlaceholder";

export default function Fans() {
  return (
    <>
      <Head>
        <title>Fan Clubs</title>
      </Head>

      <div className="max-w-screen-md px-6 pt-24 mx-auto">
        <header className="pb-4 space-y-4 text-center border-b-2">
          <h1 className="text-5xl font-bold">Available NFT Club memberships</h1>
        </header>
        <div className="pt-8">
          <div className="flex justify-center">
            <button>
              <Link href="https://app.unlock-protocol.com/checkout?paywallConfig=%7B%22locks%22%3A%7B%220xa0cce668213314bd4bae295d7ac0b727042cec05%22%3A%7B%22network%22%3A80001%7D%2C%220x0881f37f826468e7379c2b50fafc88c83496c551%22%3A%7B%22network%22%3A80001%2C%22name%22%3A%22Dogghouse+Club%22%2C%22recurringPayments%22%3A%22%22%7D%7D%2C%22pessimistic%22%3Atrue%2C%22title%22%3A%22JUKEBOX%22%2C%22icon%22%3A%22https%3A%2F%2Fnftstorage.link%2Fipfs%2Fbafkreibmz6bbjdyzro44hhczpcc3oqus7gaeazumwymmvegx6qetbtbkdm%22%2C%22redirectUri%22%3A%22https%3A%2F%2Fethsf-project.vercel.app%2Ffans%22%2C%22persistentCheckout%22%3Afalse%2C%22referrer%22%3A%220xcba09419248ED763522b9435342462F984A3944d%22%2C%22messageToSign%22%3A%22%22%2C%22hideSoldOut%22%3Afalse%7D">
                Purchase an NFT Club Membership
              </Link>{" "}
            </button>
          </div>
        </div>
      </div>
      <div>
        <button>
          <Link href="/taylor">Swifties Club</Link>{" "}
        </button>
      </div>
      <div>
        <button>
          <Link href="/snoop">Dogghouse Club</Link>{" "}
        </button>
      </div>
    </>
  );
}
