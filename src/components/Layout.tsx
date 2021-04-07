import Head from "next/head";
import Navigation from "./Navigation";

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <div className="root gradient leading-relaxed tracking-wide flex flex-col">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <nav className="fixed w-full z-10 top-0 bg-white">
        <Navigation/>
      </nav>
      <main className="container mx-auto h-screen pt-20">{children}</main>
    </div>
  );
}
