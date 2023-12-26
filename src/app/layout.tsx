import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import { QueryProviders } from "@/lib/queryProviders";

const inter = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Home - Social App",
  description: "Temukan Teman Dan Postingan Menarik Disini",
  icons: {
    icon: "/abt.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <QueryProviders>
        <StoreProvider>
          <body className={inter.className}>{children}</body>
        </StoreProvider>
      </QueryProviders>
    </html>
  );
}
