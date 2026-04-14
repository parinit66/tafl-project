import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "600", "800"],
});

export const metadata = {
  title: "Chomsky Hierarchy Visualization",
  description: "An interactive visualization explaining the Chomsky hierarchy of languages: Regular, Context-Free, Context-Sensitive, and Recursively Enumerable.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        {children}
      </body>
    </html>
  );
}
