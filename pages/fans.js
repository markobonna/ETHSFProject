import Head from "next/head";
import Link from "next/link";
import { Container } from "@/components/Container";
import styles from "../styles/Home.module.css";
import FanPlaceholder from "@/components/FanPlaceholder";

const products = [
  {
    id: 1,
    name: "Enter Swifties NFT Club",
    details:
      "Discounted Front Row Tickets to The Eras World Tour and a special meet and greet after the show.",
    href: "/taylor",
    imageSrc:
      "https://nftstorage.link/ipfs/bafkreiaoszjar4pn6zv2xef3isjkqjqaip4hypkibjyunbtdqsldjaulxy",
    imageAlt: "Swifties.",
    price: "$300 MATIC",
  },
  {
    id: 2,
    name: " Enter Dogghouse NFT Club",
    details:
      "Join the waitlis here for a one of a kind NFT of Taylor Swift's Cat, Meredith Grey, as a blinged our kitten",
    href: "/snoop",
    imageSrc:
      "https://nftstorage.link/ipfs/bafkreibd6mihd6raatim24kko4kjfdscongj6kadzcxsrjj3a5px3b4yim",
    imageAlt: "Doggghouse",
    price: "FREE",
  },
  {
    id: 3,
    name: " Create Your Own NFT Club",
    details: "",
    href: "https://app.unlock-protocol.com/locks/create",
    imageSrc:
      "https://cdn.dribbble.com/users/2216228/screenshots/5410873/media/3ceb00953a26c9d010018c6b7bf578f3.png",
    imageAlt: "Create",
    price: "",
  },
];

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
      </div>
      <div className="pt-8">
        <div className="flex justify-center">
          <button className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 py-2 px-8 text-sm font-medium text-gray-900 hover:bg-gray-200">
            <Link href="https://app.unlock-protocol.com/checkout?paywallConfig=%7B%22locks%22%3A%7B%220xa0cce668213314bd4bae295d7ac0b727042cec05%22%3A%7B%22network%22%3A80001%7D%2C%220x0881f37f826468e7379c2b50fafc88c83496c551%22%3A%7B%22network%22%3A80001%2C%22name%22%3A%22Dogghouse+Club%22%2C%22recurringPayments%22%3A%22%22%7D%7D%2C%22pessimistic%22%3Atrue%2C%22title%22%3A%22JUKEBOX%22%2C%22icon%22%3A%22https%3A%2F%2Fnftstorage.link%2Fipfs%2Fbafkreibmz6bbjdyzro44hhczpcc3oqus7gaeazumwymmvegx6qetbtbkdm%22%2C%22redirectUri%22%3A%22https%3A%2F%2Fethsf-project.vercel.app%2Ffans%22%2C%22persistentCheckout%22%3Afalse%2C%22referrer%22%3A%220xcba09419248ED763522b9435342462F984A3944d%22%2C%22messageToSign%22%3A%22%22%2C%22hideSoldOut%22%3Afalse%7D">
              Purchase an NFT Club Membership
            </Link>{" "}
          </button>
        </div>
      </div>

      <Container>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
              {products.map((product) => (
                <div key={product.id}>
                  <div className="relative">
                    <div className="relative h-72 w-full overflow-hidden rounded-lg">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                      <div
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <a
                      href={product.href}
                      className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 py-2 px-8 text-sm font-medium text-gray-900 hover:bg-gray-200"
                    >
                      {product.name}
                      <span className="sr-only">, {product.name}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
