export default function manifest() {
  return {
    name: "DISMO: Mobile phone shop",
    short_name: "DISMO",
    description: "DISMO - Saving our planet, one phone at a time",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#3C8766",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "256x256",
        type: "image/x-icon",
      },
      {
        src: "/icon.png",
        sizes: "640x640",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "640x640",
        type: "image/png",
      },
    ],
  };
}
