import type { Metadata } from "next";
import "../public/assets/styles/globals.scss";
import Navbar from "./components/layout/nav/Navbar";
import { pageInfo } from "./global/pageInfo";

export const metadata: Metadata = {
  title: "TheSolutioners",
  description: "Home Page for TheSolutioners",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        {children}
        <Navbar btnInfo={pageInfo} />
      </body>
    </html>
  );
}
