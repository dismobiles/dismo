import "@/lib/styles.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en-gb" suppressHydrationWarning>
      <head>
        <meta name="format-detection" content="telephone=no" />
        <meta
          name="copyright"
          content="2024 Distro Mobiles Ltd T/A DISMO. All rights reserved."
        />
      </head>
      {children}
    </html>
  );
}
