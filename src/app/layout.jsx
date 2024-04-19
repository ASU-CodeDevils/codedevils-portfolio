import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Pranith's Portfolio",
  description: "Portfolio of Pranith",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${urbanist.className} bg-noise text-cocaine-white`}>
        {children}
      </body>
    </html>
  );
}
