import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { Container } from "@/components/Container";

const products = [
  {
    id: 1,
    name: "From The D 2 The LBC",
    details:
      "Go Behind the scenes with a speceial performance of 'From The D 2 The LBC' With Eminem and Snoop Dogg.",
    href: "#",
    imageSrc:
      "https://m.media-amazon.com/images/I/61dZOH98k7L._UX716_FMwebp_QL85_.jpg",
    imageAlt: "From The D 2 The LBC.",
    price: "$20 MATIC",
  },
  {
    id: 2,
    name: "30 Minute Zoom Call",
    details:
      "30 minute zoom call with Snoop Dogg himself this Tuesday, November 8th from 5:00pm - 5:30pm PST",
    href: "#",
    imageSrc:
      "https://wpcdn.us-east-1.vip.tn-cloud.net/www.channel3000.com/content/uploads/2021/03/cnn-2021-03-01t211508830.jpg",
    imageAlt: "Zoom Call.",
    price: "$500 MATIC",
  },
  {
    id: 3,
    name: "Live Album Listening Party",
    details:
      "Join Snoop Dogg and special guest on a special live stream of B.O.D.R. this Friday, November 11th at 4:00pm PST.",
    href: "#",
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/en/6/64/Snoop_Dogg_-_B.O.D.R..jpeg",
    imageAlt: "Album.",
    price: "$175 MATIC",
  },
];

function Snoop() {
  return (
    <Container>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-xl font-bold text-gray-900">
            This Month's Snoop Dogg Fan Club Experiences
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

export default Snoop;
