type HeadArgs = {
  title: string;
  description: string;
  path: string;
};

/** Per-route head metadata for KEDEM. */
export function pageHead({ title, description, path }: HeadArgs) {
  const full = `${title} | KEDEM 2027`;
  return {
    meta: [
      { title: full },
      { name: "description", content: description },
      { property: "og:title", content: full },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: path },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: full },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: path }],
  };
}
