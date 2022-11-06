import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Player } from "@livepeer/react";

const playbackId =
  "bafybeifcpfjtw3zjqf3jylu23pw64h4z6cmvgy5a3dr7y6fo23joezgo3q";

const products = [
  {
    id: 1,
    name: "The Eras World Tour VIP Experience",
    details:
      "Discounted Front Row Tickets to The Eras World Tour and a special meet and greet after the show.",
    href: "#",
    imageSrc: "https://cache.umusic.com/_sites/_halo/zrskt/nwff/tstet.jpg",
    imageAlt: "The Eras World Tour VIP Experience.",
    price: "$300 MATIC",
  },
  {
    id: 2,
    name: "Surprise Cat NFT Drop",
    details:
      "Join the waitlis here for a one of a kind NFT of Taylor Swift's Cat, Meredith Grey, as a blinged our kitten",
    href: "#",
    imageSrc:
      "https://i.pinimg.com/564x/93/fa/4d/93fa4de2025564d5da3ede1bf25ca1b9.jpg",
    imageAlt: "Zoom Call.",
    price: "FREE",
  },
  {
    id: 3,
    name: "Buy THE Fokelore Cardigan",
    details:
      "Buy a limited edition run of the cardigan that Taylor Swift made famous.'If you know, you know'",
    href: "#",
    imageSrc:
      "https://www.insidehook.com/wp-content/uploads/2020/07/Taylor_swift_cardigan_folklore.jpg",
    imageAlt: "Album.",
    price: "$99 MATIC",
  },
  {
    id: 4,
    name: "Video Release Preview with Livepeer",
    details:
      "See Taylor Swifts new video before anyone else and get a chance to win a meet and greet with Taylor Swift.",
    href: "https://livepeercdn.com/recordings/84663db2-ca7b-4832-bcb4-45b5b9136e78/index.m3u8",

    imageSrc:
      "https://upload.wikimedia.org/wikipedia/en/b/b9/Taylor_Swift_-_Anti-Hero.png",
    imageAlt: "Video.",
    price: "FREE",
  },
];

function Taylor() {
  return (
    <Container>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-xl font-bold text-gray-900">
            This Month's Swifties Club Experiences
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
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
                  <div className="relative mt-4">
                    <h3 className="text-sm font-medium text-gray-900">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.details}
                    </p>
                  </div>
                  <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                    />
                    <p className="relative text-lg font-semibold text-white">
                      {product.price}
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href={product.href}
                    className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 py-2 px-8 text-sm font-medium text-gray-900 hover:bg-gray-200"
                  >
                    Redeem<span className="sr-only">, {product.name}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Taylor;
