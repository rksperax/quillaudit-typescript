import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { cn } from "@/lib/utils";
import Providers from "./StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "QuillShield",
  description: "QuillShield code editor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'p-2 py-3 bg-primary')}>
        <Header />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
