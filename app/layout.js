import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog Website",
  description: "Generated by create next app",
  description: "blog, hunting coder by hunting coder"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-full h-full ">{children}</body>
    </html>
  );
}
