import "../public/assets/styles/globals.scss";
import Navbar from "./components/layout/nav/Navbar";
import { pageInfo } from "./global/pageInfo";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="keywords"
          content="TheSolutioners.ca, TheSolutioners, The Solutioners, the solutioners, The solutioners, solutioners, thesolutioners, thesolutioners.ca"
        />
        <meta name="description" content="TheSolutioners.ca" />
        <meta name="author" content="Danish Fahim" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>TheSolutioners</title>
        {/* < http-equiv="refresh" content="60"/> */}
      </head>
      <body>
        {children}
        <Navbar btnInfo={pageInfo} />
      </body>
    </html>
  );
}
