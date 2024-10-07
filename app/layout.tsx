import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/nav/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "next-themes";
import type { Metadata } from "./types";
const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Menoko OG | Portfolio",
  description:
    "Portfolio of Lawrence Jefferson, frontend developer located in Washington state.",
  keywords: "Lawrence Jefferson, Menoko OG, frontend developer, portfolio",
  author: "Lawrence Jefferson",
  openGraph: {
    title: "Menoko OG | Portfolio",
    description:
      "Portfolio of Lawrence Jefferson, frontend developer located in Washington state.",
    url: "https://ljefferson-menoko-site.netlify.app/",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} transition-colors duration-100`}>
        <ThemeProvider
          themes={["light", "dark"]}
          defaultTheme="system"
          enableSystem
        >
          <div className="max-w-screen-lg min-h-screen mx-auto flex flex-col justify-center items-center">
            <Navbar />
            <main className="flex-grow w-full flex flex-col justify-center items-center px-4 md:px-8 py-10">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
