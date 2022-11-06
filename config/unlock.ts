export const paywallConfig: Record<string, unknown> = {
  locks: {
    "0xa0cce668213314bd4bae295d7ac0b727042cec05": {
      network: 80001,
      name: "Swifties Club",
      recurringPayments: "",
    },

    "0x0881f37f826468e7379c2b50fafc88c83496c551": {
      network: 80001,
      name: "Dogghouse Club",
      recurringPayments: "",
    },
  },
  pessimistic: true,
  title: "JUKEBOX",
  icon: "https://nftstorage.link/ipfs/bafkreibmz6bbjdyzro44hhczpcc3oqus7gaeazumwymmvegx6qetbtbkdm",
  redirectUri: "https://ethsf-project.vercel.app/fans",
  persistentCheckout: false,
  referrer: "0xcba09419248ED763522b9435342462F984A3944d",
  messageToSign: "",
  hideSoldOut: false,
};
