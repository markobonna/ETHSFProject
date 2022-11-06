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
          <div>
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
          </div>
        </header>
        <div className="pt-8">
          <div className="flex justify-center">
            <button>
              <Link href="/api/login">Purchase an NFT Club Membership</Link>{" "}
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
